const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#restaurant-list');
  I.see('There is no favorite restaurant', '.restaurant__not__found');

  I.amOnPage('/');

});

Scenario('liking one restaurant', async ({ I }) => {
  // Like
  I.see('There is no favorite restaurant', '.restaurant__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant a');
  const firstRestaurant = locate('.restaurant a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');

  const likedRestaurantName = await I.grabTextFrom('.restaurant a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  // Unlike

  I.amOnPage('/');

  I.seeElement('.restaurant a');
  I.click(locate('.restaurant a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('#restaurant-list');
  I.see('There is no favorite restaurant', '.restaurant__not__found');
});
