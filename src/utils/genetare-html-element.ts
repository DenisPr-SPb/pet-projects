interface IElementOptions {
  tag: string;
  classNames: string[];
  text?: string;
  href?: string;
  attributes?: Record<string, string>;
}

export default function createElement (options: IElementOptions) {
  const {tag, text = '', classNames = [], href, attributes = {}} = options;

  const element = document.createElement(tag);
  element.textContent = text;

  if (classNames.length > 0) element.classList.add(...classNames);

  if (href && tag === 'a') element.setAttribute('href', href);

  return element;
};

