var loadState = {
  preload: function() {
    var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#fff'});

    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/ground.png');
    game.load.image('platform', 'assets/happycloud.png');
    game.load.image('win', 'assets/wdud.png');
    game.load.spritesheet('dude', 'assets/yellow.png', 80, 95);
  },
  create: function() {
    game.state.start('menu');
  }
};
