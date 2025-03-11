export type quotesType = {
  id: string;
  text: string;
  author: string;
  isFavorite: boolean;
}

export const quotesArray: quotesType[] = [
  {
    id: 'card1',
    text: '«Стремитесь не к успеху, а к ценностям, которые он даёт»',
    author: 'Фёдор Достоевский',
    isFavorite: false,
  },
  {
    id: 'card2',
    text: '«Успех не окончателен, поражение не фатально. Лишь смелость продолжать имеет значение»',
    author: 'Конфуций',
    isFavorite: false,
  },
  {
    id: 'card3',
    text: '«Не так важно то, что вы получите, достигнув своих целей, как то, чем вы станете, сделав это»',
    author: 'Махатма Ганди',
    isFavorite: false,
  },
  {
    id: 'card4',
    text: '«Счастье — это не нечто готовое. Счастье зависит только от ваших действий»',
    author: 'Пауло Коэльо',
    isFavorite: false,
  },
  {
    id: 'card5',
    text: '«В конечном итоге всё будет хорошо. Если пока не хорошо, значит, это ещё не конец»',
    author: 'Джордж Элиот',
    isFavorite: false,
  },
  {
    id: 'card6',
    text: '«Секрет в том, чтобы начать»',
    author: 'Марк Твен',
    isFavorite: false,
  },
  {
    id: 'card7',
    text: '«Чем больше вы делаете, тем больше вы можете»',
    author: 'Далай-лама',
    isFavorite: false,
  }
];