const Beers = require('./models/beers.js');
const BeersListView = require('./views/beers_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const listContainer = document.querySelector('#beer-list');
  const beersListView = new BeersListView(listContainer);
  beersListView.bindEvents();

  const beers = new Beers();
  // beers.bindEvents(); added - need for selection when added.
  beers.getData();
});
