 const BeerView = function (container, beer) {
  this.beersContainer = container;
  this.beer = beer;
}

BeerView.prototype.render = function () {

  const beersContainer = document.createElement('h3');
  beersContainer.textContent = this.beer.name;
  this.beersContainer.appendChild(beersContainer);

  };



module.exports = BeerView;
