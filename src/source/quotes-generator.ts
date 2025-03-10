import {quotesArray} from './quotes.ts';

document.addEventListener('DOMContentLoaded', () => {
  const quotesDiv = document.querySelector('#quote');
  const generateBtn = document.querySelector('#quoteGenerateBtn');
  const addToFavoriteBtn = document.querySelector('#favoriteBtn');
  const favoriteContainer = document.querySelector('#favoriteContainer');

  let currentQuoteIndex;

  function generateRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotesArray.length);
    while (currentQuoteIndex === randomIndex) {
      randomIndex = Math.floor(Math.random() * quotesArray.length);
    }

    currentQuoteIndex = randomIndex;
    const {quote, author, isFavorite} = quotesArray[randomIndex];
    addToFavoriteBtn.textContent = isFavorite ? 'Remove' : 'Favorite';
    quotesDiv.innerHTML = `<p>${quote}</p> <p>${author}</p>`;
  }

  function favoriteCard(quote, author, idCard) {
    const card = document.createElement('div');
    card.classList.add('favorite-card');
    card.innerHTML = `
      <p id=${idCard}>${quote}</p>
      <p>${author}</p>
    `;

    favoriteContainer.append(card);
  }

  function toggleToFavorite(index: number) {
    quotesArray[index].isFavorite = !quotesArray[index].isFavorite;
    const {quote, author, id, isFavorite} = quotesArray[index];
    addToFavoriteBtn.textContent = isFavorite ? 'Remove' : 'Favorite';

    if (isFavorite) {
      favoriteCard(quote, author, id);
    } else {
      const favoriteCard = document.querySelector(`#${id}`);
      favoriteCard.parentElement.remove();
    }
  }

  generateBtn?.addEventListener('click', () => generateRandomQuote());

  addToFavoriteBtn?.addEventListener('click', () => toggleToFavorite(currentQuoteIndex));
});