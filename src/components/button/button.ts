class Button extends HTMLElement {
  static styles = `
    button {
      outline: none;
      border: 1px solid transparent;
      border-radius: 12px;
      padding: 4px 8px;
      
    }
  `;

  constructor() {
    super();

    console.log(this.attributes);

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = document.createElement("style");
    styles.textContent = Button.styles;
    shadowRoot.appendChild(styles);

    const content = document.createElement("button");
    const typography = document.createElement("vivi-typography");
    typography.setAttribute("variant", "button");
    typography.textContent = this.textContent;
    content.appendChild(typography);

    shadowRoot.appendChild(content);
  }
}

customElements.define("vivi-button", Button);
