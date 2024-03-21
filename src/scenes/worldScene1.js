import BaseScene from "./BaseScene";


class WorldScene1 extends BaseScene {

    constructor(config) {

        super('WorldScene1', config);
        this.serpiente1 = null;
        this.serpiente2 = null;
        this.platw1 = null;
        this.value1 = false;
        this.value2 = true;

    }


    create() {

        this.add.image(0, 0, 'wordl1').setOrigin(0);
        this.createSerpiente();
        this.createSerpienteD();
        this.createPlaforms();
        this.colision();

    }


    createSerpiente() {

        this.serpiente1 = this.physics.add.sprite(1200, 250, 'serpiente').setOrigin(0);
        this.serpiente1.setFlipX(this.value1)
        this.serpiente1.body.setGravityY(300);
        this.serpiente1.setCollideWorldBounds(true);
        this.movimientoS1();


    }

    createSerpienteD() {

        this.serpiente2 = this.physics.add.sprite(0, 250, 'serpiente2').setOrigin(0);
        this.serpiente2.setFlipX(this.value2);
        this.serpiente2.body.setGravityY(300);
        this.serpiente2.setCollideWorldBounds(true);
        this.movimientoS2();

    }



    createPlaforms() {

        this.platw1 = this.physics.add.group();

        this.platw1.create(1, 472, 'block_2')
            .setScale(1.5)
            .setImmovable(true)
            .setOrigin(0, 0)

        this.platw1.create(110, 472, 'block_2')
            .setScale(1.5)
            .setImmovable(true)
            .setOrigin(0, 0)

        this.platw1.create(206, 472, 'block_2')
            .setScale(1.5)
            .setImmovable(true)
            .setOrigin(0, 0)

        this.platw1.create(315, 658, 'block_4')
            .setScale(2)
            .setImmovable(true)
            .setOrigin(0, 0)

        this.platw1.create(594, 658, 'block_4')
            .setScale(2)
            .setImmovable(true)
            .setOrigin(0, 0)
    }




    colision() {

        //this.physics.add.collider(this.bird, this.pipes, this.gameOver, null, this);
        console.log(this.serpiente2, this.platw1);

        this.physics.add.collider(this.serpiente1, this.platw1, this.ev1, null, this);
        this.physics.add.collider(this.serpiente2, this.platw1, this.ev1, null, this);
        // this.physics.add.collider(this.serpiente1, this.serpiente2, this.ev1, null, this);

    }

    movimientoS1() {

        this.anims.create({
            key: 'mover',
            frames: this.anims.generateFrameNumbers('serpiente', { start: 0, end: 2 }),
            frameRate: 3,
            repeat: -1
        });

        this.serpiente1.play('mover', true);

    }

    movimientoS2() {

        this.anims.create({
            key: 'mover1',
            frames: this.anims.generateFrameNumbers('serpiente2', { start: 0, end: 2 }),
            frameRate: 3,
            repeat: -1
        });

        this.serpiente2.play('mover1', true);

    }

    ev1() {

    }



    serpienteSide(x, y, value1, value2) {
        switch (x) {
            case 317:
                this.value1 = true
                this.serpiente1.setFlipX(this.value1);
                break;

            case 1223:
                this.value1 = false
                this.serpiente1.setFlipX(this.value1);
                break;
        }

        switch (y) {
            case 1223:
                this.value2 = false
                this.serpiente2.setFlipX(this.value2);
                break;
            case 317:
                this.value2 = true
                this.serpiente2.setFlipX(this.value2);
                break;
        }

        switch (value1) {

            case true:
                this.serpiente1.setVelocityX(30);
                break;
            case false:
                this.serpiente1.setVelocityX(-30);
                break;

        }

        switch (value2) {

            case true:
                this.serpiente2.setVelocityX(30);
                break;
            case false:
                this.serpiente2.setVelocityX(-30);
                break;

        }

    }

    update() {
        this.serpienteSide(
            this.serpiente1.x, this.serpiente2.x,
            this.value1, this.value2
        );
    }




}

export default WorldScene1