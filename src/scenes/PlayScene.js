import BaseScene from "./BaseScene";


class PlayScene extends BaseScene {

    constructor(config) {
        super('PlayScene', config);
        this.bloque_1 = null;
        this.player1 = null;
        this.estadoSaltoPlayer1 = false;
        this.velocidadPlayer1 = 250;
        this.saltoPlayer1 = 583;
    }

    //Creacion de elementos 
    create() {
        this.cameras.main.setBounds(0, 0, 4095, 768);
        this.physics.world.setBounds(0, 0, 4095, 768);

        this.add.image(0, 0, 'mundo1').setOrigin(0);
        this.createPlayer1();
        this.plataforma();
        this.createColisiones();

    }

    //creando personaje Jugable
    createPlayer1() {
        this.player1 = this.physics.add.sprite(35, 500, 'player1').setOrigin(0);
        this.player1.setCollideWorldBounds(true);
        this.player1.body.setGravityY(820);
        this.cameras.main.startFollow(this.player1, true);
    }

    moveLeft() {
        this.anims.create({
            key: 'izquierda',
            frames: this.anims.generateFrameNumbers('player1', { start: 8, end: 6 }),
            frameRate: 10,
            repeat: -1
        })
        this.player1.play('izquierda', true);
    }

    moveRight() {
        this.anims.create({
            key: 'derecha',
            frames: this.anims.generateFrameNumbers('player1', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        })
        this.player1.play('derecha', true);
    }

    standBy() {
        this.anims.create({
            key: 'quieto',
            frames: this.anims.generateFrameNumbers('player1', { frame: 0 }),
            frameRate: 0
        });
        this.player1.play('quieto');
    }

    createColisiones() {
        this.physics.add.collider(this.player1, this.bloque_1, this.evSalto, null, this);
    }

    evSalto() {
        this.estadoSaltoPlayer1 = true;
    }


    plataforma() {
        this.bloque_1 = this.physics.add.group();
        this.bloque_1.create(483, 705, 'block_4')
            .setScale(2.5)
            .setImmovable(true);

        this.bloque_1.create(1065, 705, 'block_4')
            .setScale(2.5)
            .setImmovable(true);

        this.bloque_1.create(2030, 705, 'block_4')
            .setScale(2.5)
            .setImmovable(true);

        this.bloque_1.create(2500, 705, 'block_4')
            .setScale(2.5)
            .setImmovable(true);

        this.bloque_1.create(2030, 705, 'block_4')
            .setScale(2.5)
            .setImmovable(true);

        this.bloque_1.create(3390, 705, 'block_4')
            .setScale(2.5)
            .setImmovable(true);

        this.bloque_1.create(3615, 705, 'block_4')
            .setScale(2.5)
            .setImmovable(true);

        this.bloque_1.create(3305, 653, 'block_3')//estructra final
            .setScale(1.5)
            .setImmovable(true);
        this.bloque_1.create(3352, 653, 'block_3')//estructura final
            .setScale(1.5)
            .setImmovable(true);

        this.bloque_1.create(2360, 653, 'block_3')//estructura penultima
            .setScale(1.5, 2.8)
            .setImmovable(true);
        this.bloque_1.create(2407, 653, 'block_3')//estructura penultima
            .setScale(1.5, 2.8)
            .setImmovable(true);

        this.bloque_1.create(2694, 358, 'block_4')//()estructura aerea tronco
            .setScale(0.58,0)
            .setImmovable(true);

        this.bloque_1.create(1367, 645, 'block_3')//estructura antepenultima
            .setScale(3.96, 2)
            .setImmovable(true);

    }


    update() {
        this.movePlayer();
    }

    movePlayer() {
        this.cursors = this.input.keyboard.createCursorKeys();
        if (this.cursors.left.isDown) {
            this.player1.setVelocityX(-this.velocidadPlayer1);
            this.moveLeft();
        } else if (this.cursors.right.isDown) {
            this.player1.setVelocityX(this.velocidadPlayer1);
            this.moveRight();
        } else if (this.cursors.up.isDown && this.estadoSaltoPlayer1) {
            this.estadoSaltoPlayer1 = false;
            this.player1.setVelocityY(-this.saltoPlayer1);
        } else {
            this.player1.setVelocityX(0);
            this.standBy();
        }
    }








}


export default PlayScene;