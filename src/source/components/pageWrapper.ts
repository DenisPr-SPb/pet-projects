import {createHtmlElement} from '../helpers/create-html-element.ts';

export const pageWrapper = () => {
  const page = document.createElement('div');
  page.classList.add('page');

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

  const favoriteContainer = createHtmlElement('div', {
    className: 'favorites-container',
    id: 'favoriteContainer',
  })

  wrapper.append(quotesDiv);
  wrapper.append(generateQuoteBtn);
  wrapper.append(addToFavoriteBtn);
  wrapper.append(favoriteContainer);
  page.append(wrapper);

  return page;
}