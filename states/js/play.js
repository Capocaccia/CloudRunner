var playState = {

  create: function () {

      //setting world dimensions, adding physics engine, added background 'sky'
    game.world.setBounds(0, 0, 800, 3500);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');

      //sounds
    jumpSound = game.add.audio('jump');
    music = game.add.audio('music');
    music.loop = true;
    music.play(); //uncomment to initiate music

      //created a group for my ground object
    ground = game.add.group();
    ground.enableBody = true;
    earth = ground.create(0, game.world.height - 25, 'ground');
    earth.scale.setTo(2, 1);
    earth.body.immovable = true;

      //part of my platform contructor function
    platforms = this.add.physicsGroup();

    var x = 0;
    var y = 64;

      //creates i<X platforms, gives them random direction and speed
    for (var i = 0; i < 17; i++)
      {
          //this allows me to add a second type of platform in V2.0
        var type = i % 2 === 1 ? 'platform' : 'platform';
        var platform = platforms.create(x, y, type);
        platform.scale.setTo(0.25, 0.25);
        platform.body.immovable = true;
        platform.body.setSize(300, 10, 40, 20);

        //  Set a random platform speed between 100 & 150
        platform.body.velocity.x = this.rnd.between(100, 150);

        //  Inverse it?
        if (Math.random() > 0.5)
        {
            platform.body.velocity.x *= -1;
        }

        x += 200;

        if (x >= 600)
        {
            x = 0;
        }

         y += 200;
      }


      //UFO is added and given physics so it can have a body and player can collide
    ufo = game.add.sprite(175, game.world.height - 3600, 'ufo') //value for where to place UFO: G.W.H - 3600
    game.physics.arcade.enable(ufo);
    ufo.body.setSize(75, 200, 180, 0);
    ufo.body.immovable = true;
    // ufo.body.velocity.x = 125;
    // sprite.body.setSize(width, height, offsetX, offsetY)


      //added the player sprite.  Gave him properties and animations
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    game.physics.arcade.enable(player);
    player.body.setSize(65, 85, 0, 8);
    player.body.bounce.y = 0.1;
    player.body.bounce.x = 300;
    player.animations.add('left', [0, 1, 2, 0], 10, true);
    player.animations.add('right', [0, 1, 2, 0], 10, true);
    player.body.gravity.y = 1300;
    player.body.collideWorldBounds = true;
    player.scale.setTo(0.75, 0.75);


      //set the camera to follow the player object
    game.camera.follow(player);
  },

  wrapPlatform: function (platform) {

            if (platform.body.velocity.x < 0 && platform.x <= -160)
            {
                platform.x = 640;
            }
            else if (platform.body.velocity.x > 0 && platform.x >= 640)
            {
                platform.x = -160;
            }
        },

  update: function() {


      //allows the player to pause music by pressing P.  Should have added this way earlier.
    mute = game.input.keyboard.addKey(Phaser.Keyboard.P);
    if(mute.isDown && music.isPlaying === true){
        music.pause();
    } else if(mute.isDown && music.isPlaying !== true){
        music.resume();
    }

      //tells the physics engine what objects should collide with what other object
    game.physics.arcade.collide(player, ground);
    game.physics.arcade.collide(player, platforms);

    platforms.forEach(this.wrapPlatform, this);
    cursors = game.input.keyboard.createCursorKeys();
    player.body.velocity.x = 0;

      if (cursors.left.isDown)
      {
          //  Move to the left
          player.body.velocity.x = -265;

          player.animations.play('left');
      }
      else if (cursors.right.isDown)
      {
          //  Move to the right
          player.body.velocity.x = 265;

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
          player.body.velocity.y = -805;
          jumpSound.play();
      }
        //checks for overlap between the player and ufo.  If overlap === true then win function is called.
      game.physics.arcade.overlap(player, ufo, this.win, null, this);
  },

    //this entire function is used to debug certain items and is not needed for gameplay
  render: function () {
      // game.debug.body(player);
      // game.debug.body(ufo);
      // game.debug.body(platform);
      // game.debug.cameraInfo(game.camera, 32, 32);
      // game.debug.spriteCoords(player, 32, 500);
      // game.debug.soundInfo(jumpSound, 20, 32);
  },

    //stops music when when function is called and starts the win state when overlap is detected
  win: function (){
      music.stop();
      game.state.start('win');
  }
}
