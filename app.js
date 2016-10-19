'use strict';

var allProducts = [];

var clicks = document.getElementById('img container');

var results = document.getElementById('edit');

var refresh = document.getElementById('refreshPage');

var clickTotal = [];

var chartLabels = []; // to push product names to create chart

var chartVotes = []; // to push votes to create chart

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
  this.displayed = 0; //need to incorporate this into results list
  allProducts.push(this);
};

function createNewProduct() {
  for (var i = 0; i < imgPath.length; i++){
    new Product(imgName[i], imgPath[i]);
  }
};
createNewProduct();

function randomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderImg() {
  var index1 = randomIndex();
  var index2 = randomIndex();
  var index3 = randomIndex();

  while (index2 === index1) {
    index2 = randomIndex();
  }

  while (index3 === index2 || index3 === index1) {
    index3 = randomIndex();
  }

  var leftImg = document.getElementById('left');
  leftImg.src = allProducts[index1].imgPath;
  leftImg.alt = allProducts[index1].imgName;

  var middleImg = document.getElementById('middle');
  middleImg.src = allProducts[index2].imgPath;
  middleImg.alt = allProducts[index2].imgName;

  var rightImg = document.getElementById('right');
  rightImg.src = allProducts[index3].imgPath;
  rightImg.alt = allProducts[index3].imgName;
}

renderImg();

function handleImgClick(event) {
  var imgId = event.target.id;
  var imgAlt = event.target.alt;

  if (imgId === 'img container') {
    alert('Please click on an image to vote!');
  } else if (clickTotal < 15) {
    for (var i = 0; i < allProducts.length; i++) {
      if(imgAlt === allProducts[i].imgName) {
        allProducts[i].votes += 1;
        clickTotal++;
      }
      if (clickTotal === 15) {
        document.getElementById('edit');
        edit.style.visibility = 'visible';
      } else {
        document.getElementById('edit');
        edit.style.visibility = 'hidden';
        renderImg();
      }
    }
  }
}


// update the name & vote data
function updateChart() {
  for (var i = 0; i < allProducts.length; i++) {
    chartLabels.push(allProducts[i].imgName);
    chartVotes.push(allProducts[i].votes);
  }
}

// make the Chart
function makeChart() {
  updateChart();
  var ctx = document.getElementById('myChart');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [{
        label: 'BusMall Product Totals',
        fillColor: '#382765',
        data: chartVotes,
        backgroundColor: [
          '#D8BFD8',
          '#40E0D0',
          '#66CDAA',
          '#90EE90',
          '#F08080',
          '#DC143C',
          '#D8BFD8',
          '#40E0D0',
          '#66CDAA',
          '#90EE90',
          '#F08080',
          '#DC143C',
          '#D8BFD8',
          '#40E0D0',
          '#66CDAA',
          '#90EE90',
          '#F08080',
          '#DC143C',
          '#D8BFD8',
          '#40E0D0'
        ],
        borderColor: [
          '#D8BFD8',
          '#40E0D0',
          '#66CDAA',
          '#90EE90',
          '#F08080',
          '#DC143C',
          '#D8BFD8',
          '#40E0D0',
          '#66CDAA',
          '#90EE90',
          '#F08080',
          '#DC143C',
          '#D8BFD8',
          '#40E0D0',
          '#66CDAA',
          '#90EE90',
          '#F08080',
          '#DC143C',
          '#D8BFD8',
          '#40E0D0'
        ],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
      }
    }
  });
  // create refresh button
  var refresh = document.createElement('button');
  refresh.setAttribute('id', 'refreshPage');
  refresh.textContent = 'Refresh Page';
  document.getElementById('buttons').appendChild(refresh);
  refresh.addEventListener('click', refreshPage);
}

function refreshPage() {
  window.location.reload();
}

clicks.addEventListener('click', handleImgClick);
results.addEventListener('click', makeChart);
refresh.addEventListener('click', refreshPage);
