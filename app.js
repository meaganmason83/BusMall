'use strict';

var ctx = document.getElementById('myChart');
var clicks = document.getElementById('img container');
var results = document.getElementById('edit');

function Product(imgName, imgPath, votes) {
  this.imgName = imgName;
  this.imgPath = imgPath;
  this.votes = votes || 0;
  tracker.allProducts.push(this);
}

var tracker = {

  allProducts: [],
  refresh: document.getElementById('refreshPage'),
  clickTotal: [],
  chartLabels: [],
  chartVotes: [],
  imgName: [
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
  ],
  imgPath: [
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
  ],

  createNewProduct: function() {
    for (var i = 0; i < tracker.imgPath.length; i++){
      new Product(tracker.imgName[i], tracker.imgPath[i]);
    }
  },

  randomIndex: function() {
    return Math.floor(Math.random() * tracker.allProducts.length);
  },

  renderImg: function() {
    var index1 = tracker.randomIndex();
    var index2 = tracker.randomIndex();
    var index3 = tracker.randomIndex();

    while (index2 === index1) {
      index2 = tracker.randomIndex();
    }

    while (index3 === index2 || index3 === index1) {
      index3 = tracker.randomIndex();
    }

    var leftImg = document.getElementById('left');
    leftImg.src = tracker.allProducts[index1].imgPath;
    leftImg.alt = tracker.allProducts[index1].imgName;

    var middleImg = document.getElementById('middle');
    middleImg.src = tracker.allProducts[index2].imgPath;
    middleImg.alt = tracker.allProducts[index2].imgName;

    var rightImg = document.getElementById('right');
    rightImg.src = tracker.allProducts[index3].imgPath;
    rightImg.alt = tracker.allProducts[index3].imgName;
  },

  checkLocalStorage: function() {
    if (localStorage.allProducts) {
      var products = JSON.parse(localStorage.getItem('allProducts'));
      for (var pro of products) {
        new Product(pro.imgName, pro.imgPath, pro.votes);
      }
      tracker.renderImg();
    } else {
      tracker.createNewProduct();
      tracker.renderImg();
    }
  },

  updateChart: function() {
    for (var i = 0; i < tracker.allProducts.length; i++) {
      tracker.chartLabels.push(tracker.allProducts[i].imgName);
      tracker.chartVotes.push(tracker.allProducts[i].votes);
    }
  },

  makeChart: function() {
    tracker.updateChart();

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: tracker.chartLabels,
        datasets: [{
          label: 'Vote Totals',
          fillColor: '#382765',
          data: tracker.chartVotes,
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
          xAxes: [{
            ticks: {
              fontSize: 8
            }
          }]
        }
      }
    });

    var refresh = document.createElement('button');
    refresh.setAttribute('id', 'refreshPage');
    refresh.textContent = 'Refresh Page';
    document.getElementById('buttons').appendChild(refresh);
    refresh.addEventListener('click', tracker.refreshPage);
  },

  refreshPage: function() {
    window.location.reload();
  },

  handleImgClick: function(event) {
    var imgId = event.target.id;
    var imgAlt = event.target.alt;

    if (imgId === 'img container') {
      alert('Please click on an image to vote!');
    } else if (tracker.clickTotal < 15) {
      for (var i = 0; i < tracker.allProducts.length; i++) {
        if(imgAlt === tracker.allProducts[i].imgName) {
          tracker.allProducts[i].votes += 1;
          tracker.clickTotal++;
        }
        if (tracker.clickTotal === 15) {
          document.getElementById('edit');
          edit.style.visibility = 'visible';
        } else {
          document.getElementById('edit');
          edit.style.visibility = 'hidden';
          tracker.renderImg();
          localStorage.setItem('allProducts', JSON.stringify(tracker.allProducts));
        }
      }
    }
  }
};

tracker.checkLocalStorage();
clicks.addEventListener('click', tracker.handleImgClick);
results.addEventListener('click', tracker.makeChart);
