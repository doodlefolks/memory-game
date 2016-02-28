(function() {
  var hideButtons = function() {
    var buttons = document.getElementsByClassName('game-select');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.display = 'none';
    }
  }

  var fourByFour = document.getElementById('four-by-four');
  var sixBySix = document.getElementById('six-by-six');
  var eightByEight = document.getElementById('eight-by-eight');

  fourByFour.addEventListener('click', function() {
    var row, gameTile, imageNames, tileImage;
    var main = document.getElementsByTagName('main')[0];

    debugger;
    console.log(main);
    main.style.flexDirection = 'column';
    hideButtons();
    imageNames = ['pig.jpeg', 'mt_rainier.jpg', 'tree.jpg', 'orange.jpg'];
    for (var i = 0; i < 4; i++) {
      row = document.createElement('div');
      row.className = 'row';
      for (var j = 0; j < 4; j++) {
        gameTile = document.createElement('div');
        gameTile.className = 'game-tile';
        tileImage = document.createElement('img');
        tileImage.src = 'images/' + imageNames[j];
        gameTile.appendChild(tileImage);
        row.appendChild(gameTile);
      }
      main.appendChild(row);
    }
  });
})();
