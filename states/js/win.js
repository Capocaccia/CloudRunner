var winState = {
  create: function() {
    winSound = game.add.audio('winSound')
    winSound.play();
    var winLabel = game.add.image(0, 0, 'win');
    var startLabel = game.add.text(10, 10, 'Press ⬇ to restart!', {font: '25px Courier', fill: '#000'});
    var down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    down.onDown.addOnce(this.restart, this);
  },
  restart: function() {
    game.state.start('menu');
  },
};
