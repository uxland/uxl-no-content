import { html, LitElement, property, customElement, query, css, unsafeCSS } from "lit-element";
import { template } from "./template";
import * as styles from "./styles.scss";

@customElement("uxl-no-content")
export class UxlNoContent extends LitElement {
  render() {
    return html`
      ${template(this)}
    `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
