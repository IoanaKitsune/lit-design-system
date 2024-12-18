import {css, html, LitElement, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { designTokens } from '../design-system/design-tokens';


@customElement('lit-button')
export class Button extends LitElement {
    @property({type: String})
    color = 'red';
    @property({type: String})
    label = 'Press me';

    constructor() {
        super()
        console.log(designTokens.colors.primary)
    }

    static styles = css`
    button {
      background-color: ${unsafeCSS(designTokens.colors.primary.value)};
      color: ${unsafeCSS(designTokens.colors.text.value)};
      padding: ${unsafeCSS(designTokens.spacing.medium.value)};
      font-size: ${unsafeCSS(designTokens.typography.fontSize.medium.value)};
      font-weight: ${unsafeCSS(designTokens.typography.fontWeight.regular.value)};
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: ${unsafeCSS(designTokens.colors.secondary.value)};
    }
  `;


    render() {
        return html`
            <button>
                ${this.label}
            </button>
        `;
    }

}