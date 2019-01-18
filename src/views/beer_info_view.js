const PubSub = require('../helpers/pub_sub.js');


const BeerInfoView = function (container) {
  this.container = container;
  this.beers = null;
}

// BeerInfoView.prototype.bindEvents = function () {
//   PubSub.subscribe()
// };

module.exports = BeerInfoView;
