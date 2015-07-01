var menuState = {
  create: function() {
    var menuBackgroundLabel = game.add.image(0, 0, 'menu');
    var titleLabel = game.add.text(300, 20, 'Cloud Runner', {font: '25px Arial', fill: '#fff'});
    var startLabel = game.add.text(85, 100, 'Help me get back to my space ship!  Press W to begin!', {font: '25px Arial', fill: '#fff'});
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.start, this);
  },
  start: function() {
    game.state.start('play');
  },
};
