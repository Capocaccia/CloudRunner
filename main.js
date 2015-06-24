var score = 0;
var scoreText;
var platform;
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/ground.png');
    game.load.image('platform', 'assets/happycloud.png');
    game.load.spritesheet('dude', 'assets/yellow.png', 80, 95);

}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0, 0, 'sky');

  ground = game.add.group();
  ground.enableBody = true;
  var earth = ground.create(0, game.world.height - 25, 'ground');
  earth.scale.setTo(2, 1);
  earth.body.immovable = true;

  platform = game.add.group();
  platform.enableBody = true;
  var plat = platform.create(100, game.world.height -350, 'platform');
  plat.scale.setTo(0.25, 0.25);
  plat.body.setSize(265, 10, 40, 20);
  // sprite.body.setSize(width, height, offsetX, offsetY)
  //need to adjust the body size so player lands "on cloud"
  plat.body.immovable = true;


  player = game.add.sprite(32, game.world.height - 150, 'dude');
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.2;
  player.body.bounce.x = 300;
  player.body.collideWorldBounds = true;
  player.animations.add('left', [0, 1, 2, 0], 10, true);
  player.animations.add('right', [0, 1, 2, 0], 10, true);
  player.body.gravity.y = 1300;

  scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
}

function update() {
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

}
