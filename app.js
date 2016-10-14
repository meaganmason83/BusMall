'use strict';

var allProducts = [];

var randomProducts = [];

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

// function createRandomProduct() {
//   return Math.floor(Math.random() * 20) + 0;
//
// }
// createRandomProduct();

function renderLeftImg() {
  var number = Math.floor(Math.random() * allProducts.length);
  var leftImg = document.getElementById('left');
  leftImg.src = allProducts[number].imgPath;
}
function renderMiddleImg() {
  var number = Math.floor(Math.random() * allProducts.length);
  var rightImg = document.getElementById('right');
  rightImg.src = allProducts[number].imgPath;
}

function renderRightImg() {
  var number = Math.floor(Math.random() * allProducts.length);
  var middleImg = document.getElementById('middle');
  middleImg.src = allProducts[number].imgPath;
}

renderLeftImg();
renderMiddleImg();
renderRightImg();

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
