export default class BaseComponent {
  element: HTMLElement;
  constructor(tag: string, className: string | string[], text?: string, id?: string) {
    this.element = document.createElement(tag);

    if (className.length) {
      if (Array.isArray(className)) {
        this.element.classList.add(...className);
      } else if (className) {
        this.element.classList.add(className);
      }
    }

    if (id) {
      this.element.id = id;
    }

    if (text) {
      this.element.textContent = text;
    }
  }

  render(parent: HTMLElement) {
    parent.appendChild(this.element);
  }
}