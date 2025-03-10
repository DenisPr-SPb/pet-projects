import {quotesArray} from './quotes.ts';
import {favoriteCard, hideFavoriteCard} from './utils/favorites.ts';

document.addEventListener('DOMContentLoaded', () => {
  const quotesDiv = document.querySelector('#quote');
  const generateBtn = document.querySelector('#quoteGenerateBtn');
  const addToFavoriteBtn = document.querySelector('#favoriteBtn');
  const favoriteContainer = document.querySelector('#favoriteContainer');

  let currentQuoteIndex;

  function generateRandomQuote(): void {
    let randomIndex = Math.floor(Math.random() * quotesArray.length);
    while (currentQuoteIndex === randomIndex) {
      randomIndex = Math.floor(Math.random() * quotesArray.length);
    }

    currentQuoteIndex = randomIndex;
    const {quote, author, isFavorite} = quotesArray[randomIndex];
    addToFavoriteBtn.textContent = isFavorite ? 'Remove' : 'Favorite';
    quotesDiv.innerHTML = `<p>${quote}</p> <p>${author}</p>`;
  }

  function toggleToFavorite(index: number): void {
    quotesArray[index].isFavorite = !quotesArray[index].isFavorite;
    const {quote, author, id, isFavorite} = quotesArray[index];
    addToFavoriteBtn.textContent = isFavorite ? 'Remove' : 'Favorite';

    if (isFavorite) {
      favoriteCard(favoriteContainer, quote, author, id);
    } else {
      hideFavoriteCard(id);
    }
  }

  generateBtn?.addEventListener('click', () => generateRandomQuote());

  addToFavoriteBtn?.addEventListener('click', () => toggleToFavorite(currentQuoteIndex));
});