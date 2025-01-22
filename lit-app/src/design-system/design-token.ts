import {CSSResult, unsafeCSS} from "lit";

export interface PropertyTarget {
    setProperty(varName: string, value: string): void;
}

export class StyleElementPropertyTarget implements PropertyTarget {
    private styleElement: HTMLStyleElement;
    private rootRule: CSSStyleRule | null = null;

    constructor(element?: HTMLStyleElement) {
        this.styleElement = element || this.createStyleElement();
        this.initializeRootRule();
    }

    private createStyleElement(): HTMLStyleElement {
        const style = document.createElement('style');
        document.head.appendChild(style);
        return style;
    }

    private initializeRootRule(): void {
        const sheet = this.styleElement.sheet!;
        const index = sheet.insertRule(':root {}', sheet.cssRules.length);
        this.rootRule = sheet.cssRules[index] as CSSStyleRule;
    }

    public setProperty(varName: string, value: string): void {
        if (!this.rootRule) {
            this.initializeRootRule();
        }
        this.rootRule!.style.setProperty(varName, value);
    }
}

export class DesignToken {
    private static readonly _targets: PropertyTarget[] = [];
    private static readonly _tokens: Record<string, DesignToken> = {};

    private readonly _varName: string;
    private _value?: string;
    private readonly _propertyName: string;

    public constructor(
        private readonly _name: string,
        private readonly _defaultValue: string,
        mapPrefix?: string,
    ) {
        this._propertyName = DesignToken.sanitizeName(_name);
        this._varName =
            '--' +
            (mapPrefix
                ? DesignToken.sanitizeName(mapPrefix + '-' + _name)
                : this._propertyName);
        const existing = DesignToken._tokens[this._varName];
        if (existing)
            throw new Error(
                `Design token name collision between "${existing._name}" and "${_name}"`,
            );
        DesignToken._tokens[this._varName] = this;
        this._value = _defaultValue;
    }

    public get value(): CSSResult {
        return unsafeCSS(this._value!);
    }

    public setValue(value: string): void {
        this._value = value;
        for (const target of DesignToken._targets) {
            DesignToken.setToken(this, target);
        }
    }

    public static registerTarget(target: PropertyTarget): void {
        for (const token in DesignToken._tokens) {
            DesignToken.setToken(DesignToken._tokens[token], target);
        }
        DesignToken._targets.push(target);
    }

    private static setToken(token: DesignToken, target: PropertyTarget): void {
        target.setProperty(token._varName, token._value ?? token._defaultValue);
    }

    private static sanitizeName(name: string): string {
        return name
            .replace(/\s/g, '')
            .replace(/[^a-zA-Z0-9-]/g, '-')
            .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
            .replace(/--+/g, '-')
            .toLowerCase();
    }
}