var winState = {
  create: function() {
    var winLabel = game.add.image(0, 0, 'win');
    var startLabel = game.add.text(10, 10, 'Press W to restart!', {font: '25px Courier', fill: '#000'});
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.restart, this);
  },
  restart: function() {
    game.state.start('menu');
  },
};
