import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section id="restaurants" class="restaurants">
            <div class="container">
                <h2>
                    Favorite Restaurant
                </h2>
                <p>
                    Here’s a list of our restaurant patners
                </p>
        
                <ul id="restaurant-list">
                </ul>
            </div>
        </section>`;
  },

  async afterRender() {
    const catalogue = await FavoriteRestaurantIdb.getAllRestaurant();
    const catalogueContainer = document.getElementById('restaurant-list');
    if (catalogue.length <= 0) {
      catalogueContainer.innerHTML = `
        <li class="restaurant__not__found" tabindex="0">
            <h2>There is no favorite restaurant</h2>
        </li>
      `;
    }
    catalogue.forEach((restaurant) => {
      catalogueContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
