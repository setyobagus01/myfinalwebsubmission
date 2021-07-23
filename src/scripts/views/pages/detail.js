import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

import MenuModalInitiator from '../../utils/menu-modal-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import {
  createRestaurantDetailTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <div id="restaurant">

            </div>
            <div id="restaurant-modal" class="modal">
                
            </div>

            <div id="likeButtonContainer"></div>
            
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const button = document.getElementById('modal-cta');
    const restaurantContainer = document.getElementById('restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    MenuModalInitiator.init({
      modalOpen: document.getElementById('modal-cta'),
      modal: document.getElementById('restaurant-modal'),
      restaurant,
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        city: restaurant.restaurant.city,
        address: restaurant.restaurant.address,
        pictureId: restaurant.restaurant.pictureId,
        categories: restaurant.restaurant.categories,
        menus: restaurant.restaurant.menus,
        rating: restaurant.restaurant.rating,
        customerReviews: restaurant.restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
