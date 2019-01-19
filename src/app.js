const BeersListView = require('./views/beers_list_view.js')
const Beers = require('./models/beers.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const beerslistContainer = document.querySelector('#beers');
  const beersListView = new BeersListView(beerslistContainer);
  beersListView.bindEvents();

  const beers = new Beers();
  beers.getData();

});
