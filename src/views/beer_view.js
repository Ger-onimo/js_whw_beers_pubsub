const BeerView = function() {

};

//  const BeerView = function (container, beer) {
//   this.beersContainer = container;
//   this.beer = beer;
// }

BeerView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

// BeerView.prototype.render = function () {
//
//   const beersContainer = document.createElement('p');
//   beersContainer.textContent = this.beer.name;
//   this.beersContainer.appendChild(beersContainer);

  };

BeerView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

module.exports = BeerView;
