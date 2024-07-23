import BaseScene from "./BaseScene";


class IntroScene extends BaseScene {
    d1 = null;
    activacion = false;
    player1 = null;
    player2 = null;

    constructor(config) {
        super('IntroScene', config);
    }


    create() {
        this.cameras.main.setBounds(0, 0, 1366, 768);
        this.cameras.main.flash(1500);
        this.salto = true;
        this.add.image(0, 0, 'TextoIMG1').setOrigin(0);
        this.plat = this.physics.add.group();
        this.plat.create(970, 522, 'block_3')
            .setScale(2.5)
            .setImmovable(true)
            .setOrigin(0, 0)
        this.d1 = this.physics.add.sprite(865, 206, 'f-menu').setOrigin(0);
        this.d1.setAngle(90);
        this.d2 = this.physics.add.sprite(903, 224, 'f-menu').setOrigin(0);
        this.d2.setAngle(270);
        this.d3 = this.physics.add.sprite(827, 432, 'f-menu').setOrigin(0);
        this.d4 = this.physics.add.sprite(853, 617, 'f-menu').setOrigin(0);
        this.player1 = this.physics.add.sprite(980, 205, 'player1').setOrigin(0);
        this.player1.setScale(0.8);
        this.player1.setFlipX(true);
        this.player2 = this.physics.add.sprite(1100, 205, 'player2').setOrigin(0);
        this.player2.setScale(0.8);

        this.player1_1 = this.physics.add.sprite(980, 430, 'player1').setOrigin(0);
        this.player1_1.setScale(0.8);
        this.player1_1.setFlipX(true);
        this.player2_2 = this.physics.add.sprite(1100, 430, 'player2').setOrigin(0);
        this.player2_2.setScale(0.8);
        this.player1_1.body.setGravityY(820);
        this.player2_2.body.setGravityY(820);

        this.anims.create({
            key: 'moveP1',
            frames: this.anims.generateFrameNumbers('player1', { start: 0, end: 15 }),
            frameRate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'moveP2',
            frames: this.anims.generateFrameNumbers('player2', { start: 0, end: 15 }),
            frameRate: 15,
            repeat: -1
        });


        this.anims.create({
            key: 'moveflecha',
            frames: this.anims.generateFrameNumbers('f-menu', { start: 0, end: 2 }),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'Jump1',
            frames: this.anims.generateFrameNumbers('player1_JUMP', { start: 0, end: 3 }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({
            key: 'Jump2',
            frames: this.anims.generateFrameNumbers('player2_JUMP', { start: 0, end: 3 }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({
            key: 'stoP1',
            frames: this.anims.generateFrameNumbers('player1_IDE', { start: 0, end: 15 }),
            frameRate: 16,
            repeat: -1
        });
        this.anims.create({
            key: 'stoP2',
            frames: this.anims.generateFrameNumbers('player2_IDE', { start: 0, end: 15 }),
            frameRate: 16,
            repeat: -1
        });

        this.d1.play('moveflecha', true);
        this.d2.play('moveflecha', true);
        this.d3.play('moveflecha', true);
        this.d4.play('moveflecha', true);
        this.player2.play('moveP2',true);
        this.player1.play('moveP1',true);
       

        this.physics.add.collider(this.player1_1, this.plat, this.alerta, null, this);
        this.physics.add.collider(this.player2_2, this.plat, this.alerta, null, this);

        // this.texto1 = this.add.text(235, 280, content, { fontFamily: 'Comic Sans MS', fontSize: '20px', color: '#151515', wordWrap: { width: 950 } }).setOrigin(0);
        // this.texto1.setShadow(5, 5, '#333333', 4, true, true);

    }

    alerta() {

    }

    update() {
         
        if (this.player1_1.y < 431) {
            this.player1_1.play('Jump1',true);
        } else {
            this.player1_1.play('stoP1',true);
        }
        if (this.player2_2.y < 431) {
            this.player2_2.play('Jump2',true);
        } else {
            this.player2_2.play('stoP2',true);
        }
        this.moveController();
    }

    moveController() {
        const control = this.input.gamepad.getPad(0);
        if (!control) {
            return;
        }
        if (control.buttons[3].pressed) {
            this.scene.stop('IntroScene');
            this.scene.start('Mapa1');
        } else if (control.buttons[1].pressed && this.player1_1.body.onFloor()) {
            this.player1_1.setVelocityY(-400);
        } else if (control.buttons[0].pressed && this.player2_2.body.onFloor()) {
            this.player2_2.setVelocityY(-400);
        } else {
              
        }

    }

}

export default IntroScene;