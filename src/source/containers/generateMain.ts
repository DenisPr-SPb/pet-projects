import {createHtmlElement} from '../helpers/create-html-element.ts';

export const generateMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');

  const page = createHtmlElement('div', {
    className: 'page',
  });

  const wrapper = createHtmlElement('div', {
    className: ['page__wrapper', 'wrapper'],
  });

  const quotesDiv = createHtmlElement('div', {
    className: 'quotes',
    text: 'Click button for new quote',
    id: 'quote',
  });

  const button = createHtmlElement('button', {
    className: 'button',
    text: 'Generate new quote',
    id: 'button',
  })

  wrapper.append(quotesDiv);
  wrapper.append(button);
  page.append(wrapper);
  main.append(page);

  return main;
};