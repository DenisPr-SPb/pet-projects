import GenerateHeader from './GenerateHeader.ts';
import GenerateMain from './GenerateMain.ts';
import GenerateFooter from './GenerateFooter.ts';

export default class App {
  private header: GenerateHeader;
  private main: GenerateMain;
  private footer: GenerateFooter;

  constructor() {
    this.header = new GenerateHeader();
    this.main = new GenerateMain();
    this.footer = new GenerateFooter();
  }

  init() {
    const body = document.querySelector('body');

    if (body) {
      this.header.render(body);
      this.main.render(body);
      this.footer.render(body);
    }
  }
}