import {css, html, LitElement, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('lit-button')
export class Button extends LitElement {
    @property({type: String})
    color = 'red';
    @property({type: String})
    label = 'Press me';

    constructor() {
        super()
    }

    static styles = css`
    button {
      background-color: var(--success);
      color: var(--primary);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: var(--warning);
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