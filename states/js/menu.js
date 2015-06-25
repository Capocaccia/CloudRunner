var menuState = {
  create: function() {
    var nameLabel = game.add.text(80, 80, 'Cloud Runner', {font: '50px Arial', fill: '#fff'});
    var startLabel = game.add.text(80, game.world.height-80, 'Help me get back to outer space!  Press W to begin!', {font: '25px Arial', fill: '#fff'})
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.start, this);
  },
  start: function() {
    game.state.start('play');
  },
};
