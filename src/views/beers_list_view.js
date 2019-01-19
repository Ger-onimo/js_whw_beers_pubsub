const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('./beer_view.js');


const BeersListView = function (container) {
  this.container = container;
  // this.beers = null;
}

BeersListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-data-ready', (event) => {
    this.beers = event.detail;
    console.log(event);
    this.renderBeerView(this.beers);
  });
};

BeersListView.prototype.renderBeerView = function (beers) {
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

  // BeersListView.prototype.render = function() {
  // this.container.innerHTML = '';
  // this.beers.forEach((beer) => {
  //   const beerView = new BeerView(this.container, beer);
  //   beerView.renderBeerView();
  // });


module.exports = BeersListView;
