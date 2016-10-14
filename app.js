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

new Product('R2D2 Suitcase', 'img/bag.jpg', 0);
new Product('Banana Cutter', 'img/banana.jpg', 0);
new Product('iPad Toilet Paper Assistant', 'img/bathroom.jpg', 0);
new Product('Useless Rainboots', 'img/boots.jpg', 0);
new Product('All-In-One Breakfast Station', 'img/breakfast.jpg', 0);
new Product('Italian Meatgum', 'img/bubblegum.jpg', 0);
new Product('Worlds Most Comfy Chair', 'img/chair.jpg', 0);
new Product('Green Monster', 'img/cthulhu.jpg', 0);
new Product('No Quack Muzzle', 'img/dog-duck.jpg', 0);
new Product('Dragon Dinner', 'img/dragon.jpg', 0);
new Product('Writing Utensils', 'img/pen.jpg', 0);
new Product('Doggie Broom', 'img/pet-sweep.jpg', 0);
new Product('Cut of Pizza', 'img/scissors.jpg', 0);
new Product('Shark Sleeping Bag', 'img/shark.jpg', 0);
new Product('Baby Broom', 'img/sweep.jpg', 0);
new Product('Tauntaun and Baby', 'img/tauntaun.jpg', 0);
new Product('Unicorn Dinner', 'img/unicorn.jpg', 0);
new Product('Lizard USB', 'img/usb.jpg', 0);
new Product('Self-Watering Can', 'img/water-can.jpg', 0);
new Product('Wide Mouth Wine', 'img/wine-glass.jpg', 0);

// Function that iterates over imagePaths to build product objects
// Product.prototype.createNewProduct = function() {
//   //code something
// };

tracker = {
  // There will be several properties that we need to define.
  imageEls: [
    document.getElementById('test'),
    document.getElementById('test2'),
    document.getElementById('test3')
  ],

};

// 'target'.addEventListener('click', 'named function here')
