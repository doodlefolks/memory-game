(function() {
  'use strict';

  var hideButtons = function() {
    var buttons = document.getElementsByClassName('game-select');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.display = 'none';
    }
  }
  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var pickImgSet = function(gridSize) {
    var availableImages = imageNames;
    var selectedImages = [];
    var pick;

    for (var i = 0; i < gridSize * gridSize / 2; i++) {
      selectedImages.push(availableImages.splice(getRandomInt(0, availableImages.length - 1), 1));
    }
    debugger;
    console.log(availableImages);
    console.log(selectedImages);
    return selectedImages;
  }

  var imageNames = ['pig.jpeg', 'mt_rainier.jpg', 'tree.jpg', 'orange.jpg', 'apple.jpg', 'bear.jpg', 'cat.jpeg', 'fish.JPG', 'bowling_ball.jpg', 'pineapple.jpg', 'waldo.jpg', 'rat.jpg', 'scooby.jpg', 'boat.jpg', 'dog.jpg', 'beer.jpg', 'arch.jpg', 'space_needle.jpg'];
  var fourByFour = document.getElementById('four-by-four');
  var sixBySix = document.getElementById('six-by-six');
  var eightByEight = document.getElementById('eight-by-eight');

  fourByFour.addEventListener('click', function() {
    var row, gameTile, tileImage;
    var selectedImages = pickImgSet(4);
    var main = document.getElementsByTagName('main')[0];

    main.style.flexDirection = 'column';
    hideButtons();
    for (var i = 0; i < 4; i++) {
      row = document.createElement('div');
      row.className = 'row';
      for (var j = 0; j < 4; j++) {
        gameTile = document.createElement('div');
        gameTile.className = 'game-tile';
        tileImage = document.createElement('img');
        tileImage.src = 'images/' + selectedImages[j];
        gameTile.appendChild(tileImage);
        row.appendChild(gameTile);
      }
      main.appendChild(row);
    }
  });
})();
