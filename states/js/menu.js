var menuState = {
  create: function() {
    var menuBackgroundLabel = game.add.image(0, 0, 'menu');
    var titleLabel = game.add.text(270, 20, 'Cloud Runner', {font: '35px Courier', fill: '#fff'});
    var controlLabel = game.add.text(110, 75, 'Move with the arrow keys.  P to pause the music.', {font: '20px Courier', fill: '#fff'});
    var startLabel = game.add.text(80, 125, 'Help me get back to my space ship!  Press W to begin!', {font: '20px Courier', fill: '#fff'});
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.start, this);
  },
  start: function() {
    game.state.start('play');
  },
};
