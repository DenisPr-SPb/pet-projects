import {quotesArray, quotesType} from './quotes.ts';
import {hideFavoriteCard, showFavoriteCard} from './utils/favorites.ts';
import {generateRandomInt, hideFavoriteBtn, showFavoriteBtn, showQuote} from './utils/utils.ts';

document.addEventListener('DOMContentLoaded', () => {
  const quotesDiv = document.querySelector('#quote');
  const generateBtnHandler = document.querySelector('#quoteGenerateBtn');
  const addToFavoriteBtn = document.querySelector('#favoriteBtn') as HTMLButtonElement;
  const favoriteContainer = document.querySelector('#favoriteContainer');

  let currentQuoteIndex;
  hideFavoriteBtn(addToFavoriteBtn);

  function chooseRandomQuote(): quotesType {
    let randomIndex;
    do {
      randomIndex = generateRandomInt(quotesArray.length);
    } while (randomIndex === currentQuoteIndex);
    currentQuoteIndex = randomIndex;

    return quotesArray[randomIndex];
  }

  function generateAndDisplayQuote() {
    const quote = chooseRandomQuote();

    if (quote) {
      const {text, author, isFavorite} = quote;
      showFavoriteBtn(isFavorite, addToFavoriteBtn);
      showQuote(text, author, quotesDiv);
    }
  }

  function toggleToFavorite(index: number): void {
    quotesArray[index].isFavorite = !quotesArray[index].isFavorite;
    const {text, author, id, isFavorite} = quotesArray[index];

    showFavoriteBtn(isFavorite, addToFavoriteBtn);

    if (isFavorite) {
      showFavoriteCard(favoriteContainer, text, author, id);
    } else {
      hideFavoriteCard(id);
    }
  }

  if (generateBtnHandler && addToFavoriteBtn) {
    generateBtnHandler.addEventListener('click', () => generateAndDisplayQuote());
    addToFavoriteBtn.addEventListener('click', () => toggleToFavorite(currentQuoteIndex));
  }
});