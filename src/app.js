const Beers = require('./models/beers.js');
const SelectView = require('./views/select_view.js');
const BeersListView = require('./views/beers_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

// added for selectView
  const selectElement = document.querySelector('select#abv-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector('#beer-list');
  const beersListView = new BeersListView(listContainer);
  beersListView.bindEvents();

  const beers = new Beers();
  beers.bindEvents(); //added - need for selection when added.
  beers.getData();
});
