const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Beers = function () {
  this.beers = [];
}

Beers.prototype.getData = function () {

  // const url = `https://api.punkapi.com/v2/beers`;
  const url = `https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6`;
  const request = new RequestHelper(url);

  const myPromise = request.get();
  myPromise.then((data) => {
    console.log(data);
  //   this.beers = data;
  //   PubSub.publish('Beers:beers-data-ready', this.beers);
})
  // .catch((err) =>{
  //   console.error(err);
  // })
};

module.exports = Beers;
