// my new code following munros example
const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('./beer_view.js');

const BeersListView = function (container) {
  this.container = container;
};

BeersListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-data-ready', (event) => {
    this.clearList();
    this.renderBeerViews(event.detail);
  });
};

// - the different bit for select view version
BeersListView.prototype.clearList = function () {
  this.container.innerHTML = '';
 };
 //////////////////////////////////////////

BeersListView.prototype.renderBeerViews = function (beers) {
// debugger
  beers.forEach((beer) => {
    const beerItem = this.createBeerListItem(beer);
    this.container.appendChild(beerItem);
  });
};

BeersListView.prototype.createBeerListItem = function (beer) {
  const beerView = new BeerView();
  const beerDetail = beerView.createBeerDetail(beer);
  return beerDetail;

};

module.exports = BeersListView;
