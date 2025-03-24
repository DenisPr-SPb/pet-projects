import {quotesType} from '../quotes.ts';

export function generateRandomInt(maxInt: number): number {
  return Math.floor(Math.random() * maxInt);
}

export function showQuote(text: string, author: string, container: Element | null): void {
  if (container instanceof HTMLElement) {
    container.innerHTML = `<p>${text}</p><p>${author}</p>`;
  }
}

export function hideFavoriteBtn(btn: Element | null): void {
  if (btn instanceof HTMLElement) {
    btn.style.display = 'none';
  }
}

export function showFavoriteBtn(isFavorite: boolean, btn: Element | null): void {
  if (!(btn instanceof HTMLElement)) return;

  if (btn.style.display === 'none') btn.style.display = 'inline-block';
  btn.textContent = isFavorite ? 'Remove' : 'Favorite';
}

export function findQuoteById(id: string, quotes: quotesType[]) {
  return quotes.find((quote) => quote.id === id);
}