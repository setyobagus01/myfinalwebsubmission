// const backButton = document.getElementById('back-cta');

const BackToTop = {
  init({ backButton }) {
    backButton.addEventListener('click', (event) => {
      this._backToTop(event);
    });
    this._windowOnScroll(backButton);
  },

  _windowOnScroll(backButton) {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 20
            || document.documentElement.scrollTop > 20
      ) {
        backButton.style.display = 'block';
      } else {
        backButton.style.display = 'none';
      }
    };
  },

  _backToTop(event) {
    event.stopPropagation();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
};

export default BackToTop;
