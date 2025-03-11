import {pageWrapper} from '../components/pageWrapper.ts';

export const generateMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');

  const page = pageWrapper();

  main.append(page);

  return main;
};