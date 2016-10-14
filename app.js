// 1. Event Listener for images
// 2. Constructor for image/product objects
  // a. path to image file
  // b. image name
  // c. vote property
// 3. Tracker object
  // 2. Counter to track clicks
  // 3. Randomizer
  // 5. Rendered list showing vote and click totals
  // 6. Button to show up after 15 clicks
  // 7. Reset button
  // 8. Error handling for event click (Optional... be nice.)
'use strict';

var allProducts = [];

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
  'img/usb.jpg',
  'img/water-can.jpg',
  'img/wine-glass.jpg'
];

function Product(name, imgPath, votes) {
  this.name = name;
  this.imgPath = imgPath;
  this.votes = votes;
  allProducts.push(this);
}

// Function that iterates over imagePaths to build product objects

tracker = {
  // There will be several properties that we need to define.
  imageEls: [
    document.getElementById('test'),
    document.getElementById('test2'),
    document.getElementById('test3')
  ],

};

// 'target'.addEventListener('click', 'named function here')
