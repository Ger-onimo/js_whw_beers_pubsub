const BeerView = function () {

};

  BeerView.prototype.createBeerDetail = function (beer) {
// sits inside/under the html beer-list ul

    const beerDetail = document.createElement('section');
    beerDetail.classList.add('beer-detail');

// sits inside/under the html beer-detail section
    const image = document.createElement('img');
      image.src = beer.image_url
      image.height = 100;
      beerDetail.appendChild(image);

    const name = document.createElement('h3');
      name.textContent = `${beer.name.toUpperCase()} (abv: ${beer.abv}%)`;
      beerDetail.appendChild(name);

    const tagline = document.createElement('h5');
      tagline.textContent = `${beer.tagline}`;
      beerDetail.appendChild(tagline);


// sits inside/under name as an unordered list
    const detailItem = document.createElement('ul');

      const descriptionTitle = this.createTextDetail('Description:');
      detailItem.appendChild(descriptionTitle);

      const description = this.createDetailItem(beer.description);
      detailItem.appendChild(description);

      const foodPairingTitle = this.createTextDetail('Good with:');
      detailItem.appendChild(foodPairingTitle);

      const foodPairing = this.createFoodDetailItem(beer.food_pairing.join(' - '));
      console.log(foodPairing);
      detailItem.appendChild(foodPairing);

      // // TODO - try listing food pairings
      // const foodDetail = document.createElement('ul');
      // const foodPairing = this.createFoodDetailItem(beer.food_pairing);
      //   beer.food_pairing.forEach((pairing) => {
      //       foodItem = [];
      //       console.log(foodPairing);
      //       foodItem.pop(pairing);
      //       return foodItem;
      //   })
      //   detailItem.appendChild(foodPairing);
      //   // foodPairing.appendChild(foodDetail);

  beerDetail.appendChild(detailItem);
  return beerDetail;
};


  BeerView.prototype.createDetailItem = function (property) {
    const element = document.createElement('p');
    element.textContent = `${property}`;
    return element;
};

  BeerView.prototype.createTextDetail = function (label) {
    const element = document.createElement('h4');
    element.textContent = `${label}`;
    return element
};
  //
  BeerView.prototype.createFoodDetailItem = function (food) {
    const element = document.createElement('p');
    element.textContent = `${food.toLowerCase()}`;
    return element
  };

module.exports = BeerView;
