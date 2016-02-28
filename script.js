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
    hideButtons();
    var gameTile = document.createElement('div');

  });
})();
