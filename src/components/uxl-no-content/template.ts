import { html } from "lit-element/lit-element";
import { UxlNoContent } from "./uxl-no-content";
import { iconTemplate } from "../../utilities/icons";

export const template = (props: UxlNoContent) => html`
  ${iconTemplate()}
  <div class="icon" part="icon__container">
    <slot name="icon" part="icon__slot" class="icon__slot">
      <iron-icon icon="uxl-no-content:information"></iron-icon>
    </slot>
  </div>
  <div class="message" part="message__container">
    <slot name="message" part="message__slot" class="message__slot">
      No se ha podido mostrar la información. Por favor inténtalo de nuevo más tarde
    </slot>
  </div>
`;
