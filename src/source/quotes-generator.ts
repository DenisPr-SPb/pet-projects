const quotesArray: ({ quote: string; author: string })[] = [
  {
    quote: '«Стремитесь не к успеху, а к ценностям, которые он даёт»',
    author: 'Фёдор Достоевский'
  },
  {
    quote: '«Успех не окончателен, поражение не фатально. Лишь смелость продолжать имеет значение»',
    author: 'Конфуций',
  },
  {
    quote: '«Не так важно то, что вы получите, достигнув своих целей, как то, чем вы станете, сделав это»',
    author: 'Махатма Ганди',
  },
  {
    quote: '«Счастье — это не нечто готовое. Счастье зависит только от ваших действий»',
    author: 'Пауло Коэльо',
  },
  {
    quote: '«В конечном итоге всё будет хорошо. Если пока не хорошо, значит, это ещё не конец»',
    author: 'Джордж Элиот',
  },
  {
    quote: '«Секрет в том, чтобы начать»',
    author: 'Марк Твен',
  },
  {
    quote: '«Чем больше вы делаете, тем больше вы можете»',
    author: 'Далай-лама',
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const quotesDiv = document.querySelector('#quote');
  const generateBtn = document.querySelector('#button');

  console.log({quotesDiv, generateBtn});

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);

    const { quote, author } = quotesArray[randomIndex];
    quotesDiv.innerHTML = `<p>${quote}</p> <p>${author}</p>`;
  };

  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      console.log(quotesDiv);
      generateRandomQuote();
    });
  }
})