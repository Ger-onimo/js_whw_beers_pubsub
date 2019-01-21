const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Beers = function () {
  this.beersData = [];
  this.abvs = []; //added Sat for selectView.
}

// added for SelectView
Beers.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const abvIndex = event.detail;
    // console.log(event.detail);
    this.publishBeersByAbv(abvIndex);
  })
};

Beers.prototype.getData = function () {
  const request = new RequestHelper('https://api.punkapi.com/v2/beers');
  request.get().then((data) => {
    console.log(data);
    this.beersData = data;
    PubSub.publish('Beers:beers-data-ready', this.beersData);
    this.publishAbv(data);
});
  // .catch((err) =>{
  //   console.error(err);
  // })
};


// select view

Beers.prototype.publishAbv = function (data) {
  this.beersData = data;
  this.abvs = this.uniqueAbvList();
  PubSub.publish('Beers:beers-data-ready', this.abvs);

};

Beers.prototype.abvList = function () {
  const fullList = this.beersData.map(beer => beer.abv);
  return fullList;
}

Beers.prototype.uniqueAbvList = function () {
  return this.abvList().filter((beer, index, array) => {
    return array.indexOf(beer) === index;
  });
};

Beers.prototype.beersByAbv = function (abvIndex) {
  const selectedAbv = this.abvs[abvIndex];
  return this.beersData.filter((beer) => {
    return beer.abv === selectedAbv;
  });
};

Beers.prototype.publishBeersByAbv = function (abvIndex) {
  const foundBeers = this.beersByAbv(abvIndex);
  PubSub.publish('Beers:beers-data-ready', foundBeers);
};


module.exports = Beers;
