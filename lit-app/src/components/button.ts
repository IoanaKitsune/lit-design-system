import {css, html, LitElement, unsafeCSS} from 'lit';
import {property} from 'lit/decorators.js';
import {designTokens} from "../design-system/design-tokens.ts";

export class Button extends LitElement {
    @property({type: String})
    color = 'red';
    @property({type: String})
    label = 'Press me';


    constructor() {
        super();
    }

      static get styles() {
        return css`
          .button {
            background-color: ${unsafeCSS(designTokens.colors.success[50].value)};
            color: ${unsafeCSS(designTokens.colors.primary[100].value)};
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .button:hover {
            background-color: ${unsafeCSS(designTokens.colors.warning[50].value)};
          }
    `;
      }

    protected render() {
        return html`
            <button class='button'>
                ${this.label}
            </button>
        `;
    }

}