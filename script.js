(function() {
  'use strict';

  var hideButtons = function() {
    var buttons = document.getElementsByClassName('game-select');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.display = 'none';
    }
  };
  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var pickImgSet = function(gridSize) {
    var availableImages = imageNames;
    var selectedImages = [];
    var pick;

    for (var i = 0; i < gridSize * gridSize / 2; i++) {
      selectedImages.push(availableImages.splice(getRandomInt(0, availableImages.length - 1), 1)[0]);
    }
    return selectedImages;
  };
  var setupImages = function(gridSize) {
    var selectedImages = pickImgSet(gridSize);
    var main = document.getElementsByTagName('main')[0];
    var row, gameTile, tileImage;
    var gameTileImages = [];

    main.style.flexDirection = 'column';
    for (var i = 0; i < selectedImages.length; i++) {
      gameTileImages.push(selectedImages[i]);
      gameTileImages.push(selectedImages[i]);
    }
    for (var i = 0; i < gridSize; i++) {
      row = document.createElement('div');
      row.className = 'row';
      for (var j = 0; j < gridSize; j++) {
        gameTile = document.createElement('div');
        gameTile.className = 'game-tile';
        tileImage = document.createElement('img');
        var tempIndex = getRandomInt(0, gameTileImages.length - 1);
        tileImage.src = 'images/' + gameTileImages[tempIndex];
        gameTileImages.splice(tempIndex, 1);
        gameTile.appendChild(tileImage);
        row.appendChild(gameTile);
      }
      main.appendChild(row);
    }
  };

  var imageNames = ['pig.jpeg', 'mt_rainier.jpg', 'tree.jpg', 'orange.jpg', 'apple.jpg', 'bear.jpg', 'cat.jpeg', 'fish.JPG', 'bowling_ball.jpg', 'pineapple.jpg', 'waldo.jpg', 'rat.jpg', 'scooby.jpg', 'boat.jpg', 'dog.jpg', 'beer.jpg', 'arch.jpg', 'space_needle.jpg'];
  var fourByFour = document.getElementById('four-by-four');
  var sixBySix = document.getElementById('six-by-six');
  var eightByEight = document.getElementById('eight-by-eight');

  fourByFour.addEventListener('click', function() {
    hideButtons();
    setupImages(4);
  });
  sixBySix.addEventListener('click', function() {
    hideButtons();
    setupImages(6);
  });
})();
