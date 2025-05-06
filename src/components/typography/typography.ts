import { TypographyVariants } from "./typography.types";

class Typography extends HTMLElement {
  static styles = `
    &[variant=button] {
        color: red;
    }

    span{
        background-color: yellow;
        outline: none;
        border: 1px solid transparent;
        border-radius: 12px;
        padding: 4px 8px;
        
      }
    `;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = document.createElement("style");
    styles.textContent = Typography.styles;
    shadowRoot.appendChild(styles);

    const content = document.createElement(this.getVariant());
    content.appendChild(document.createElement("slot"));

    shadowRoot.appendChild(content);
  }

  getVariant() {
    const variant: TypographyVariants =
      (this.getAttribute("variant") as TypographyVariants) || "body";

    switch (variant) {
      case "body":
        return "span";
      case "button":
        return "span";
      default:
        return variant;
    }
  }
}

customElements.define("vivi-typography", Typography);
