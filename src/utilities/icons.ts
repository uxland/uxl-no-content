import "@polymer/iron-icons/iron-icons";
import { html, TemplateResult } from "lit-html";

const icons = () => html`
  <iron-iconset-svg name="uxl-no-content" size="24">
    <svg>
      <defs>
        <g id="information">
          <path
            d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm1 11v-4a1 1 0 0 0-1-1h-2v2h1v3H9v2h6v-2zm-1-8.25A1.25 1.25 0 1 0 13.25 8 1.25 1.25 0 0 0 12 6.75z"
          />
        </g>
      </defs>
    </svg>
  </iron-iconset-svg>
`;

export const iconTemplate: () => TemplateResult = icons;
