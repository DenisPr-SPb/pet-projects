import BaseComponent from './BaseComponent.ts';
import quotes from '../data/quotes.ts';

type ElementConfig = {
  tag: string;
  className: string | string[];
  text?: string;
  id?: string;
  children?: ElementConfig[];
};

export default class GenerateMain extends BaseComponent {
  private quoteText: HTMLElement;
  private quoteAuthor: HTMLElement;
  private btnNewQuote: HTMLElement;
  private btnAddToFavorites: HTMLElement;
  private lastQuoteIndex: number | null = null;

  constructor() {
    super('main', 'main');
    this.init();
    this.quoteText = this.element.querySelector('#quoteText') as HTMLElement;
    this.quoteAuthor = this.element.querySelector('#quoteAuthor') as HTMLElement;
    this.btnNewQuote = this.element.querySelector('#btnNewQuote') as HTMLElement;
    this.btnAddToFavorites = this.element.querySelector('#btnAddToFavorites') as HTMLElement;

    this.btnNewQuote.addEventListener('click', () => this.showRandomQuote());
    this.btnAddToFavorites.addEventListener('click', () => console.log('favorites'));
  }

  private createElementWithChildren(tag: string, className: string | string[], text: string = '', id: string = '', children: ElementConfig[] = []) {
    return {tag, className, text, id, children};
  }

  private init() {
    const contentContainer = this.createElementWithChildren('div', ['content__container', 'container'], '', 'content', [
      this.createElementWithChildren('div', ['quotes__wrapper', 'wrapper'], '', '', [
        this.createElementWithChildren('div', ['quote__text'], 'quote__text', 'quoteText'),
        this.createElementWithChildren('div', ['quote__author'], 'quote__author', 'quoteAuthor')
      ]),
      this.createElementWithChildren('div', ['buttons__wrapper', 'wrapper'], '', '', [
        this.createElementWithChildren('button', ['button'], 'Generate new quote', 'btnNewQuote'),
        this.createElementWithChildren('button', ['button'], 'Add to favorites', 'btnAddToFavorites')
      ]),
      this.createElementWithChildren('div', ['favorites__wrapper', 'wrapper'])
    ]);

    this.addElement(contentContainer);
  }

  private showRandomQuote() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === this.lastQuoteIndex && quotes.length > 1);

    this.lastQuoteIndex = randomIndex;
    const randomQuote = quotes[randomIndex];

    this.quoteText.textContent = randomQuote.text;
    this.quoteAuthor.textContent = `— ${randomQuote.author}`;
  }

  addElement(config: ElementConfig): BaseComponent {
    const {tag, className, text, id, children} = config;
    const newElement = new BaseComponent(tag, className, text, id);

    if (children && children.length > 0) {
      children.forEach(childConfig => {
        this.addElement(childConfig).render(newElement.element);
      });
    }

    newElement.render(this.element);
    return newElement;
  }
}