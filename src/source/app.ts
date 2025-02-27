import {generateHeader} from './containers/generateHeader.ts';
import {generateMain} from './containers/generateMain.ts';
import {generateFooter} from './containers/generateFooter.ts';

const app = () => {
  const body = document.querySelector('body');

  const generateHTML = () => {
    const header = generateHeader();
    const main = generateMain();
    const footer = generateFooter();

    body.append(header);
    body.append(main);
    body.append(footer);
  };

  generateHTML();
};

export default app;