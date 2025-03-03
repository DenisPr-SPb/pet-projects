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

  const generateQuoteBtn = createHtmlElement('button', {
    className: 'button',
    text: 'Generate new quote',
    id: 'quoteGenerateBtn',
  });

  const addToFavoriteBtn = createHtmlElement('button', {
    className: ['button', 'add-to-favorite'],
    text: 'Favorite',
    id: 'favoriteBtn',
  });

  wrapper.append(quotesDiv);
  wrapper.append(generateQuoteBtn);
  wrapper.append(addToFavoriteBtn);
  page.append(wrapper);
  main.append(page);

  return main;
};