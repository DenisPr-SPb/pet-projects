import {quotesArray} from './quotes.ts';

document.addEventListener('DOMContentLoaded', () => {
  const quotesDiv = document.querySelector('#quote');
  const generateBtn = document.querySelector('#quoteGenerateBtn');
  const addToFavoriteBtn = document.querySelector('#favoriteBtn');

  let currentQuoteIndex;

  const generateRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotesArray.length);

    while (currentQuoteIndex === randomIndex) {
      randomIndex = Math.floor(Math.random() * quotesArray.length);
    }

    currentQuoteIndex = randomIndex;
    const { quote, author } = quotesArray[randomIndex];
    quotesDiv.innerHTML = `<p>${quote}</p> <p>${author}</p>`;
  };

  const toggleToFavorite = (index: number) => {
    quotesArray[index].isFavorite = !quotesArray[index].isFavorite;
    console.log(quotesArray[index]);
    if (quotesArray[index].isFavorite) {
      addToFavoriteBtn.innerHTML = 'Remove';
    } else {
      addToFavoriteBtn.innerHTML = 'Favorite';
    }

  }

  generateBtn?.addEventListener('click', () => generateRandomQuote());

  addToFavoriteBtn?.addEventListener('click', () => toggleToFavorite(currentQuoteIndex));
})