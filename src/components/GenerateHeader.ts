import BaseComponent from './BaseComponent.ts';

export default class GenerateHeader extends BaseComponent {
  constructor() {
    super('header', 'header');
    const title = new BaseComponent('h1', ['header__title', 'title'], 'New Header title!');
    title.render(this.element);
  }
};