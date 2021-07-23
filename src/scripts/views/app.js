import DrawerInitiator from '../utils/drawer-initiator';
import BackToTop from '../utils/backToTop';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button,
    buttonExit,
    drawer,
    content,
    backButton,
    modalOpen,
    modal,
    modalExit,
  }) {
    this._button = button;
    this._buttonExit = buttonExit;
    this._drawer = drawer;
    this._content = content;
    this._backButton = backButton;
    this._modalOpen = modalOpen;
    this._modal = modal;
    this._modalExit = modalExit;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      buttonExit: this._buttonExit,
      drawer: this._drawer,
      content: this._content,
    });

    BackToTop.init({
      backButton: this._backButton,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
