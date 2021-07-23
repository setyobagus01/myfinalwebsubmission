import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
       <li class="restaurant" tabindex="0">
            <h2><a href="${`#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h2>
            <div class="restaurant-detail">
                <span>${restaurant.city}</span>
                <span>Rating: ${restaurant.rating}</span>
            </div>
            <p>${restaurant.description.substr(0, 50)}</p>
            <img class="lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name} Picture">
        </li>`;

const createRestaurantDetailTemplate = ({ restaurant }) => `

  <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${
  restaurant.name
} Image">
  <div class="container">
  <button id="modal-cta">
                <img src="./icons/restaurant-menu.svg" alt="Modal Icon">
              </button>
    <h1>${restaurant.name}</h1>
    <span class="address">${restaurant.address}, ${restaurant.city}</span>
    <div class="rating">
      <img src="./icons/star.svg" alt="Rating Icon">
      <span>${restaurant.rating}</span>
    </div>
    <span class="title">About Restaurant</span>
    <p class="description">${restaurant.description.substr(0, 300)}</p>
    <div class="categories">
      <span class="title">Categories</span>
      <ul>
        ${restaurant.categories
    .map((category) => `<li>${category.name}</li>`)
    .join('')}
    </div>
    <div class="reviews">
        <span class="title">Reviews</span>
          <ul>

          ${restaurant.customerReviews
    .map(
      (customer) => `<li>
              <img src="./icons/empty-img.svg" alt="${customer.name} Image Profile">
              <div class="detail-customer">
                <span>${customer.name}</span>
                <span class="date">Added on ${customer.date}</span>
                <p>${customer.review}</p>
              </div>
            </li>`,
    )
    .join('')}
            
          </ul>
    </div>


`;

const createMenuModalTemplate = ({ restaurant }) => `

      <div class="modal-content">
        <button tabindex="0" id="modal-exit">
          <img src="./icons/menu_exit.svg" alt="Modal Icon">
        </button>
        
        <h2>Menu</h2>
        <span class="title">Makanan</span>
        <ul>
          ${restaurant.menus.foods
    .map(
      (food) => `<li>
              ${food.name}
            </li>`,
    )
    .join('')}
        </ul>

        <span class="title">Minuman</span>
        <ul>
          ${restaurant.menus.drinks
    .map(
      (food) => `<li>
              ${food.name}
            </li>`,
    )
    .join('')}
        </ul>
      </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createMenuModalTemplate,
};
