// MY end code from Friday Code
//////////////////////////////////////////////
const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('./beer_view.js');


const BeersListView = function (container) {
  this.container = container;
  this.beers = null;
}

BeersListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-data-ready', (event) => {
    this.beers = event.detail;
    console.log(event);
    this.render();
  });
}

  BeersListView.prototype.render = function() {
  this.container.innerHTML = '';
  this.beers.forEach((beer) => {
    const beerView = new BeerView(this.container, beer);
    beerView.render();
  });
};

module.exports = BeersListView;
