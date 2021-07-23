import RestaurantCatalogue from '../views/pages/restaurant-catalogue';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': RestaurantCatalogue, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
