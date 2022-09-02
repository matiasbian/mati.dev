import 'phaser';

export default class Main extends Phaser.Scene {
    preload() {
        this.load.image('map', 'assets/timeline.png');
        this.load.image('ship', 'assets/fmship.png');
    }

    create() {
        var xOffset = 1200;
        this.cameras.main.setBounds(0, 0, xOffset, 100, true);

        this.add.image(0, 0, 'map').setOrigin(0).setScrollFactor(1).setScale(0.2, 0.22);
        this.physics.world.setBounds(0, 0, xOffset, 240, true, true, true, true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.ship = this.physics.add.image(50, 120, 'ship').setCollideWorldBounds(true);

        // ship = this.add.image(400.5, 301.3, 'ship');

        this.cameras.main.startFollow(this.ship, true, 0.09, 0.09);
        // this.cameras.main.roundPixels = true;

        this.cameras.main.setZoom(4);
    }

    updateDirect() {
        if (this.cursors.left.isDown) {
            this.ship.setAngle(-90);
            this.ship.x -= 2.5;
        }
        else if (this.cursors.right.isDown) {
            this.ship.setAngle(90);
            this.ship.x += 2.5;
        }

        if (this.cursors.up.isDown) {
            this.ship.setAngle(0);
            this.ship.y -= 2.5;
        }
        else if (this.cursors.down.isDown) {
            this.ship.setAngle(-180);
            this.ship.y += 2.5;
        }
    }

    update() {
        this.ship.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.ship.setAngle(-90).setVelocityX(-200);
        }
        else if (this.cursors.right.isDown) {
            this.ship.setAngle(90).setVelocityX(200);
        }

        if (this.cursors.up.isDown) {
            this.ship.setAngle(0).setVelocityY(-200);
        }
        else if (this.cursors.down.isDown) {
            this.ship.setAngle(-180).setVelocityY(200);
        }
    }
}