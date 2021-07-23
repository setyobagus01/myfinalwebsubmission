import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.getElementById('mobile-cta'),
  buttonExit: document.getElementById('mobile-exit'),
  drawer: document.querySelector('nav'),
  content: document.getElementById('main'),
  backButton: document.getElementById('back-cta'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
