import {quotesArray, quotesType} from '../quotes.ts';
import {hideFavoriteCard, showFavoriteCard} from './favorites.ts';
import {findQuoteById, generateRandomInt, hideFavoriteBtn, showFavoriteBtn, showQuote} from './utils.ts';
import {getItemLocalStorage, setItemLocalStorage} from './localStorage.ts';

document.addEventListener('DOMContentLoaded', () => {
  const quotesDiv = document.querySelector('#quote');
  const generateBtnHandler = document.querySelector('#quoteGenerateBtn');
  const addToFavoriteBtn = document.querySelector('#favoriteBtn') as HTMLButtonElement;
  const favoriteContainer = document.querySelector('#favoriteContainer');
  hideFavoriteBtn(addToFavoriteBtn);

  let currentQuoteIndex;
  let currentQuote = null;
  const favoriteQuotes = [];

  function init() {
    const initialQuote = getItemLocalStorage('currentQuote');
    if (initialQuote) {
      const {text, author, id, isFavorite} = initialQuote;
      const quote = findQuoteById(id, quotesArray)
      console.log(quote)
      showFavoriteBtn(isFavorite, addToFavoriteBtn);
      showQuote(text, author, quotesDiv);
      if (quote) {
        quote.isFavorite = isFavorite;
        currentQuote = quote;
      }
    }
  }

  window.addEventListener('load', init);

  function chooseRandomQuote(): quotesType {
    let randomIndex;
    do {
      randomIndex = generateRandomInt(quotesArray.length);
    } while (randomIndex === currentQuoteIndex);

    currentQuoteIndex = randomIndex;
    currentQuote = quotesArray[randomIndex];

    setItemLocalStorage('currentQuote', currentQuote);

    return currentQuote;
  }

  function generateAndDisplayQuote() {
    const quote = chooseRandomQuote();

    if (quote) {
      const {text, author, isFavorite} = quote;
      showFavoriteBtn(isFavorite, addToFavoriteBtn);
      showQuote(text, author, quotesDiv);
    }
  }

  function toggleToFavorite(quote: quotesType): void {
    quote.isFavorite = !quote.isFavorite;
    const {text, author, id, isFavorite} = quote;

    showFavoriteBtn(isFavorite, addToFavoriteBtn);
    setItemLocalStorage('currentQuote', quote);

    if (isFavorite) {
      showFavoriteCard(favoriteContainer, text, author, id);
      favoriteQuotes.push({...quote});
      setItemLocalStorage('favoriteQuotes', favoriteQuotes);
    } else {
      hideFavoriteCard(id);
      const index = favoriteQuotes.findIndex((favQuote) => favQuote.id === id);
      if (index === -1) {
        favoriteQuotes.splice(index, 1);
        setItemLocalStorage('favoriteQuotes', favoriteQuotes);
      }
    }
  }

  if (generateBtnHandler && addToFavoriteBtn) {
    generateBtnHandler.addEventListener('click', () => generateAndDisplayQuote());
    addToFavoriteBtn.addEventListener('click', () => toggleToFavorite(currentQuote));
  }
});