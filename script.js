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
        var tempIndex = getRandomInt(0, gameTileImages.length - 1);
        gameTile = document.createElement('div');
        gameTile.className = 'game-tile game-tile-hidden';
        gameTile.addEventListener('click', clickTile);

        tileImage = document.createElement('img');
        tileImage.src = 'images/' + gameTileImages[tempIndex];
        tileImage.className = 'game-tile-image'

        gameTileImages.splice(tempIndex, 1);
        gameTile.appendChild(tileImage);
        row.appendChild(gameTile);
      }
      main.appendChild(row);
    }
  };
  var clickTile = function() {
    var clickedImg = this.getElementsByTagName('img')[0];
    clickedImg.style.display = 'inline-block';
    if (prevTileClicked) {
      if (clickedImg !== prevClickedTileImg && clickedImg.src === prevClickedTileImg.src) {
        alert('match');
        this.className = 'game-tile game-tile-shown';
        this.removeEventListener('click', clickTile);
        prevClickedTileImg.parentNode.className = 'game-tile game-tile-shown';
        prevClickedTileImg.parentNode.removeEventListener('click', clickTile);
      } else {
        imgPointerForDelay = prevClickedTileImg;
        window.setTimeout(function() {
          clickedImg.style.display = 'none';
          imgPointerForDelay.style.display = 'none';
        }, 500);
      }
      prevClickedTileImg = null;
      prevTileClicked = false;
    } else {
      prevClickedTileImg = clickedImg;
      prevTileClicked = true;
    }
  };

  var imageNames = ['pig.jpeg', 'mt_rainier.jpg', 'tree.jpg', 'orange.jpg', 'apple.jpg', 'bear.jpg', 'cat.jpeg', 'fish.JPG', 'bowling_ball.jpg', 'pineapple.jpg', 'waldo.jpg', 'rat.jpg', 'scooby.jpg', 'boat.jpg', 'dog.jpg', 'beer.jpg', 'arch.jpg', 'space_needle.jpg'];
  var fourByFour = document.getElementById('four-by-four');
  var sixBySix = document.getElementById('six-by-six');
  var eightByEight = document.getElementById('eight-by-eight');
  var prevTileClicked = false;
  var prevClickedTileImg, imgPointerForDelay;

  fourByFour.addEventListener('click', function() {
    var gameTiles;

    hideButtons();
    setupImages(4);
  });
  sixBySix.addEventListener('click', function() {
    hideButtons();
    setupImages(6);
  });
})();
