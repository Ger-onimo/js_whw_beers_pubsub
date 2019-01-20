const Beers = require('./models/beers.js');
const BeersListView = require('./views/beers_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const beerlistContainer = document.querySelector('#beer-list');
  const beerListView = new BeersListView(beerlistContainer);
  beerListView.bindEvents();

  const beers = new Beers();
  // beers.bindEvents(); added - need for selecttion when added.
  beers.getData();
});
