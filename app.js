'use strict';

var allProducts = [];

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
  'img/sweep.jpg',
  'img/tauntaun.jpg',
  'img/unicorn.jpg',
  'img/usb.gif',
  'img/water-can.jpg',
  'img/wine-glass.jpg'
];

var Product = function(imgName, imgPath) {
  this.name = imgName;
  this.imgPath = imgPath;
  this.votes = 0;
  allProducts.push(this);
};

function createNewProduct() {
  for (var i = 0; i < imgPath.length; i++){
    new Product(imgName[i], imgPath[i]);
  }
};
createNewProduct();

// Function that iterates over imagePaths to build product objects
// Product.prototype.createNewProduct = function() {
//   //code something
// };

function renderImage() {
  var leftImg = document.getElementById('left');
  leftImg.src = allProducts.imgPath;
}

renderImage();

// tracker = {
//   // There will be several properties that we need to define.
//   imageEls: [
//     document.getElementById('test'),
//     document.getElementById('test2'),
//     document.getElementById('test3')
//   ],
//
// };

// 'target'.addEventListener('click', 'named function here')
