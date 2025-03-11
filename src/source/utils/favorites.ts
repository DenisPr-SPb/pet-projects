export function showFavoriteCard(
  container: Element | null,
  quote: string,
  author: string,
  idCard: string
): void {
  const card = document.createElement('div');
  card.classList.add('favorite-card');
  card.innerHTML = `
      <p id=${idCard}>${quote}</p>
      <p>${author}</p>
    `;

  container?.append(card);
}

export function hideFavoriteCard(id: string): void {
  const favoriteCard = document.querySelector(`#${id}`);

  if (favoriteCard.parentElement) {
    favoriteCard.parentElement.remove();
  }
}