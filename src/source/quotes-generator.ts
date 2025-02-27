const quotesArray: string[] = [
  '«Стремитесь не к успеху, а к ценностям, которые он даёт» (Фёдор Достоевский).',
  '«Успех не окончателен, поражение не фатально. Лишь смелость продолжать имеет значение» (Конфуций).',
  '«Не так важно то, что вы получите, достигнув своих целей, как то, чем вы станете, сделав это» (Махатма Ганди).',
  '«Счастье — это не нечто готовое. Счастье зависит только от ваших действий» (Пауло Коэльо).',
  '«В конечном итоге всё будет хорошо. Если пока не хорошо, значит, это ещё не конец» (Джордж Элиот).',
  '«Секрет в том, чтобы начать» (Марк Твен).',
  '«Чем больше вы делаете, тем больше вы можете» (Далай-лама).',
];

document.addEventListener('DOMContentLoaded', () => {
  const quotesDiv = document.querySelector('#quote');
  const generateBtn = document.querySelector('#button');

  console.log({quotesDiv, generateBtn});

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    quotesDiv.textContent = quotesArray[randomIndex];
  };

  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      console.log(quotesDiv);
      generateRandomQuote();
    });
  }
})