'use strict';

var allProducts = [];

var clicks = document.getElementById('img container');
clicks.addEventListener('click', handleImgClick);

var clickTotal = [];

var imgName = [
  'R2D2 Suitcase',
  'Banana Cutter',
  'iPad Toilet Paper Assistant',
  'Useless Rainboots',
  'All-In-One Breakfast Station',
  'Italian Meatgum',
  'Worlds Most Comfy Chair',
  'Green Monster',
  'No Quack Muzzle',
  'Dragon Dinner',
  'Writing Utensils',
  'Doggie Broom',
  'Cut of Pizza',
  'Shark Sleeping Bag',
  'Baby Broom',
  'Tauntaun and Baby',
  'Unicorn Dinner',
  'Lizard USB',
  'Self-Watering Can',
  'Wide Mouth Wine'
];

var imgPath = [
  'img/bag.jpg',
  'img/banana.jpg',
  'img/bathroom.jpg',
  'img/boots.jpg',
  'img/breakfast.jpg',
  'img/bubblegum.jpg',
  'img/chair.jpg',
  'img/cthulhu.jpg',
  'img/dog-duck.jpg',
  'img/dragon.jpg',
  'img/pen.jpg',
  'img/pet-sweep.jpg',
  'img/scissors.jpg',
  'img/shark.jpg',
  'img/sweep.png',
  'img/tauntaun.jpg',
  'img/unicorn.jpg',
  'img/usb.gif',
  'img/water-can.jpg',
  'img/wine-glass.jpg'
];

var Product = function(imgName, imgPath) {
  this.imgName = imgName;
  this.imgPath = imgPath;
  this.votes = 0;
  this.displayed = 0;
  allProducts.push(this);
};

function createNewProduct() {
  for (var i = 0; i < imgPath.length; i++){
    new Product(imgName[i], imgPath[i]);
  }
};
createNewProduct();

function renderImg() {
  var noDupeArray = [];
  var pic1 = Math.floor(Math.random() * allProducts.length);
  var leftImg = document.getElementById('left');
  leftImg.src = allProducts[pic1].imgPath;
  leftImg.alt = allProducts[pic1].imgName;

  var pic2 = Math.floor(Math.random() * allProducts.length);
  var middleImg = document.getElementById('middle');
  middleImg.src = allProducts[pic2].imgPath;
  middleImg.alt = allProducts[pic2].imgName;

  var pic3 = Math.floor(Math.random() * allProducts.length);
  var rightImg = document.getElementById('right');
  rightImg.src = allProducts[pic3].imgPath;
  rightImg.alt = allProducts[pic3].imgName;

  var picLeft = Math.floor(Math.random() * allProducts.length);
  while (picLeft === noDupeArray[0, 1, 2]) {
    picLeft = Math.floor(Math.random() * allProducts.length);
  }
  leftImg.src = allProducts[picLeft].imgPath;

  var picMiddle = Math.floor(Math.random() * allProducts.length);
  while (picMiddle === noDupeArray[0, 1, 2] || picMiddle === picLeft) {
    picMiddle = Math.floor(Math.random() * allProducts.length);
  }
  middleImg.src = allProducts[picMiddle].imgPath;

  var picRight = Math.floor(Math.random() * allProducts.length);
  while (picRight === noDupeArray[0, 1, 2] || picRight === picMiddle || picRight === picLeft) {
    picRight = Math.floor(Math.random() * allProducts.length);
  }
  rightImg.src = allProducts[picRight].imgPath;

  noDupeArray.push(picLeft);
  noDupeArray.push(picMiddle);
  noDupeArray.push(picRight);
}

renderImg();

function handleImgClick(event) {
  event.preventDefault;
  var imgClick = event.target.id;
  var imgAlt = event.target.alt;
  if (imgClick === 'img container') {
    alert('Please click on an image to vote!');
  } else if (imgClick && clickTotal < 15) {
    for (var i = 0; 0 < allProducts.length; i++) {
      if(imgAlt === allProducts[i].imgName) {
        allProducts[i].votes += 1;
        clickTotal++;
        renderImg();
      }
      if (clickTotal === 15) {
        document.getElementById('edit');
        edit.style.visibility = 'visible';
      } else {
        document.getElementById('edit');
        edit.style.visibility = 'hidden';
      }
    }
  }
}

function resultsRender(){
  var ulEl = document.createElement('ul');
  ulEl.setAttribute('id', 'list');
  document.getElementById('productList').appendChild(ulEl);

  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.setAttribute('class', 'products');
    liEl.textContent = 'You voted for ' + allProducts[i].imgName + ' a total of ' + allProducts[i].votes + ' times.';
    ulEl.appendChild(liEl);
  }
}
