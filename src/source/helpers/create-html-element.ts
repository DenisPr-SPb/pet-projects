import {CreateElementOptions} from './create-html-element.props.ts';

export const createHtmlElement = (
  tagName: keyof HTMLElementTagNameMap,
  options: CreateElementOptions
): HTMLElement => {
  const {
    className = null,
    text = null,
    id = null,
    attributes = {},
  } = options;

  const htmlElement = document.createElement(tagName);

  if (className) {
    if (typeof className === 'string') {
      htmlElement.classList.add(className);
    } else if (Array.isArray(className)) {
      className.forEach(el => htmlElement.classList.add(el));
    }
  }

  if (text) {
    htmlElement.textContent = text;
  }

  if (id) {
    htmlElement.id = id;
  }

  Object.entries(attributes).forEach(([key, value]) => {
    console.log('Attributes in createHtmlElement', {key}, {value});
  });

  return htmlElement as HTMLElement;
};