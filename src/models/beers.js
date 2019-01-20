const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Beers = function () {
  this.beersData = [];
  this.abv = []; //added Sat for selectView.
}

Beers.prototype.getData = function () {
  const request = new RequestHelper('https://api.punkapi.com/v2/beers');
  request.get().then((data) => {
    console.log(data);
    this.beersData = data;
    PubSub.publish('Beers:beers-data-ready', this.beersData);
})
  .catch((err) =>{
    console.error(err);
  })
};

module.exports = Beers;
