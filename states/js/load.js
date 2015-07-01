var loadState = {
  preload: function() {
    var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#fff'});

    game.load.image('sky', 'assets/gameBackground.jpg');
    game.load.image('ufo', 'assets/ufo.png')
    game.load.image('ground', 'assets/ground.png');
    game.load.image('platform', 'assets/happycloudbig.png');
    game.load.image('win', 'assets/wdud2.png');
    game.load.image('menu', 'assets/menuscreen.png')
    game.load.audio('jump', ['assets/jump.wav']);
    game.load.audio('music', ['assets/music.wav']);
    game.load.spritesheet('dude', 'assets/yellow.png', 79, 95);
  },
  create: function() {
    game.state.start('menu');
  }
};
