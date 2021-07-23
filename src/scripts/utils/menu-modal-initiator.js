import { createMenuModalTemplate } from '../views/templates/template-creator';

const MenuModalInitiator = {
  init({
    modalOpen, modal, restaurant,
  }) {
    this._modalOpen = modalOpen;
    console.log(modal);
    this._modal = modal;
    this._restaurant = restaurant;

    this._renderModal();
  },

  _renderModal() {
    this._modal.innerHTML = createMenuModalTemplate(this._restaurant);

    this._modalOpen.addEventListener('click', (event) => {
      this._modal.style.display = 'block';
    });

    const modalExit = document.getElementById('modal-exit');
    modalExit.addEventListener('click', () => {
      this._modal.style.display = 'none';
    });
  },
};

export default MenuModalInitiator;
