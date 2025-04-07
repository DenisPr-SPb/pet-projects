import './style.css'
import App from './components/App.ts';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();

  const quoteTextContainer = document.querySelector('#quoteText');
  const quoteAuthorContainer = document.querySelector('#quoteAuthor');


})