import {createHtmlElement} from '../helpers/create-html-element.ts';

export const generateFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const wrapper = createHtmlElement('div', {
    className: ['footer__wrapper', 'wrapper']
  });

  footer.append(wrapper);

  return footer;
};