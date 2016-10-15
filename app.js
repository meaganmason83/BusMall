'use strict';

var allProducts = [];

var clicks = document.getElementById('img container');
clicks.addEventListener('click', handleImgClick);

var clickTotal = []; //add a function

var shuffleNumbers = [];

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

function renderLeftImg() {
  for (var i = 0; i < 3; i++) {
    var number = Math.floor(Math.random() * allProducts.length);
    var leftImg = document.getElementById('left');
    leftImg.src = allProducts[number].imgPath;
    leftImg.alt = allProducts[number].imgName;
  }
}

function renderMiddleImg() {
  for (var i = 0; i < 3; i++) {
    var number = Math.floor(Math.random() * allProducts.length);
    var middleImg = document.getElementById('middle');
    middleImg.src = allProducts[number].imgPath;
    middleImg.alt = allProducts[number].imgName;
  }
}

function renderRightImg() {
  for (var i = 0; i < 3; i++) {
    var number = Math.floor(Math.random() * allProducts.length);
    var rightImg = document.getElementById('right');
    rightImg.src = allProducts[number].imgPath;
    rightImg.alt = allProducts[number].imgName;
  }
  // while(shuffleNumbers.indexOf(shufflenumer) > -1) {
  //   var shufflenumer = Math.floor(Math.random() * max);
  // }
  // shuffleNumbers.push(number);
}

function allImages() {
  renderLeftImg();
  renderMiddleImg();
  renderRightImg();
}

allImages();

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
        allImages();
      }
    }
  } //else if render table method
}
// tracker = {
//   // There will be several properties that we need to define.
//   imageEls: [
//     document.getElementById('test'),
//     document.getElementById('test2'),
//     document.getElementById('test3')
//   ],
//
// };
