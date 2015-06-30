var winState = {
  create: function() {
    var winLabel = game.add.text(80, 80, 'You Won!', {font: '50px Arial', fill: '#fff'});
    var startLabel = game.add.text(80, game.world.height-10, 'Press W to restart!', {font: '25px Arial', fill: '#fff'});
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.restart, this);
  },
  restart: function() {
    game.state.start('menu');
  },
};
