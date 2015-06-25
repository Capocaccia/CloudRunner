var playState = {
create: function () {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0, 0, 'sky');

  ground = game.add.group();
  ground.enableBody = true;
  earth = ground.create(0, game.world.height - 25, 'ground');
  earth.scale.setTo(2, 1);
  earth.body.immovable = true;

  platform = game.add.group();
  platform.enableBody = true;
  plat = platform.create(100, game.world.height -350, 'platform');
  plat.scale.setTo(0.25, 0.25);
  plat.body.setSize(265, 10, 40, 20);
  platform.setAll('body.velocity.x', this.rnd.between(100, 150));
  // sprite.body.setSize(width, height, offsetX, offsetY)
  // need to fine tune "body" boxes
  plat.body.immovable = true;


  player = game.add.sprite(32, game.world.height - 150, 'dude');
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.2;
  player.body.bounce.x = 300;
  player.animations.add('left', [0, 1, 2, 0], 10, true);
  player.animations.add('right', [0, 1, 2, 0], 10, true);
  player.body.gravity.y = 1300;
  player.body.collideWorldBounds = true;
  scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

},

update: function() {
  game.physics.arcade.collide(player, ground);
  game.physics.arcade.collide(player, platform);
  cursors = game.input.keyboard.createCursorKeys();
  player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 0;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown) //&& player.body.touching.down
    {
        player.body.velocity.y = -650;
    }
    game.world.wrap(plat.body, plat.width / 1, false);
},

  win: function (){
    game.state.start('win');
  }
}
