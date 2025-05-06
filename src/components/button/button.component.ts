import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("vivi-button")
export class ViviButton extends LitElement {
  @property({ type: String })
  label?: string;

  render() {
    return html` <button>${this.label}</button> `;
  }

  static styles = css`
    button {
      border: 1px solid transparent;
      padding: 4px 8px;
      border-radius: 12px;
    }
  `;
}
