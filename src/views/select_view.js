const PubSub = require('../helpers/pub_sub');


const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-data-ready', (event) => {
    this.populateSelect(event.detail);
  });

this.selectElement.addEventListener('change', (event) => {
  const selectedIndex = event.target.value;
  PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populateSelect = function (abvs) {
  abvs.forEach((abv, index) => {
    // console.log(abv);
    const option = this.createAbvOption(abv, index);
    this.selectElement.appendChild(option);
  });
};

SelectView.prototype.createAbvOption = function (abv, index) {
  const option = document.createElement('option');
  option.textContent = abv;
  option.value = index;
  return option;
};

module.exports = SelectView;
