import {createHtmlElement} from '../helpers/create-html-element.ts';

export const generateHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const wrapper = createHtmlElement('div', {
      className: ['header__wrapper', 'wrapper'],
  });

  const title = createHtmlElement('h1', {
      className: 'header__title',
      text: 'Quotes generator'
  });

  const subtitle = createHtmlElement('p', {
    className: 'header__subtitle',
    text: 'Quotes generator...'
  });

  wrapper.append(title);
  wrapper.append(subtitle);
  header.append(wrapper);

  return header;
};