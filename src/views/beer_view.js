const BeerView = function () {

};

  BeerView.prototype.createBeerDetail = function (beer) {
    const beerDetail = document.createElement('div');
    beerDetail.classList.add('beer-detail');

  const name = document.createElement('h3');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  const detailItem = document.createElement('ul');
    const description = this.createDetailItem('Description', beer.description);
    detailItem.appendChild(description);

  beerDetail.appendChild(detailItem);
  return beerDetail;
};

  BeerView.prototype.createDetailItem = function (label, property) {
    const element = document.createElement('li');
    element.textContent = `${label}: ${property}`;
    return element;
};

module.exports = BeerView;

// My working end code from Friday
////////////////////////////////////////////////////
//  const BeerView = function (container, beer) {
//   this.beersContainer = container;
//   this.beer = beer;
// }
//
// BeerView.prototype.render = function () {
//
//   const beersContainer = document.createElement('h3');
//   beersContainer.textContent = this.beer.name;
//   this.beersContainer.appendChild(beersContainer);
//
//   };
//


module.exports = BeerView;
