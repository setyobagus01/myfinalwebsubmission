import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantCatalogue = {
  async render() {
    return `
                <section class="hero">
            <div class="container">
                <div class="left-col">
                    <h1>
                        Restaurant For Peasant
                    </h1>
                    <p>
                        Elit duis velit pariatur proident consequat. Magna aute ea in enim ad sunt laboris do consequat officia
                        reprehenderit
                        sit sint. Minim reprehenderit veniam nulla et incididunt.
                    </p>
        
                    <div class="hero-cta">
                        <a href="#restaurants">Our Restaurant</a>
                    </div>
                </div>
                <img class="hero-img lazyload" data-src="./images/heros/hero-image_4.jpg" alt="Restaurant Main Picture">
            </div>
        </section>
        
        <section class="services">
            <div class="container">
                <ul>
                    <li>
                        <h2>Chef</h2>
                        <p>We provide the best chef in the universe</p>
                        <picture>
                            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.jpg">
                            <img class="lazyload" data-src="./images/heros/hero-image_1-large.jpg" alt="Restaurant Chef">
                        </picture>
                    </li>
                    <li>
                        <h2>Food</h2>
                        <p>We provide the best foodin the universe</p>
                        <picture>
                            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
                            <img class="lazyload" data-src="./images/heros/hero-image_2-large.jpg" alt="Restaurant Food">
                        </picture>
                    </li>
                </ul>
        
            </div>
        </section>
        
        <section id="restaurants" class="restaurants">
            <div class="container">
                <h2>
                    Restaurant List
                </h2>
                <p>
                    Here’s a list of our restaurant patners
                </p>
        
                <ul id="restaurant-list">
                </ul>
            </div>
        </section>
        
        `;
  },

  async afterRender() {
    const catalogue = await RestaurantSource.restaurantList();
    const catalogueContainer = document.getElementById('restaurant-list');
    catalogue.forEach((restaurant) => {
      catalogueContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantCatalogue;
