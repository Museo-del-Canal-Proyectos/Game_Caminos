import BaseScene from "./BaseScene";

class WorldScene1 extends BaseScene {

    constructor(config) {
        super('WorldScene1', config);
        this.tiempoRestante= 120;
        this.monedas = 0;
        this.texto = '';
        this.tiempo = '';
        this.player = null;
        this.flechaState = false;
        this.serpiente1 = null;
        this.serpiente2 = null;
        this.saltar = true;
        this.mosquito = null;
        this.mosquito2 = null;
        this.flecha1 = null;
        this.flecha2 = null;
        this.flecha3 = null;
        this.intervalo=null;
        this.flechaValue = false;
        this.ValidarAnimacion = false;
        this.platw1 = null;
        this.value1 = false;
        this.value2 = true;
        this.Mvalue = false;
        this.M2value = false;
        this.M3value = false;
        this.velocidad = null;
        this.velocidadLateral = 290;
        this.velocidadMX = 30;
        this.velocidadMY = 30;
        this.velocidadFlecha = 250;
        this.bolsa = null;
        this.craneo = null;
        this.diamantes = null;
        this.casco = null;
        this.libro = null;


        this.dataSerpiente1 = {
            cuerpoTrue: true,
            cuerpoFalse: false,
        }
        this.dataSerpiente2 = {
            cuerpoTrue: true,
            cuerpoFalse: false,
        }
        this.dataMosquito = {
            cuerpoTrue: true,
            cuerpoFalse: false,
        }
        this.dataMosquito2 = {
            cuerpoTrue: true,
            cuerpoFalse: false,
        }
        this.dataMosquito3 = {
            cuerpoTrue: true,
            cuerpoFalse: false,
        }
    }

  

    inicialPosition() {
        this.player.setPosition(0.5, 403);
        this.mosquito.setPosition(700, 500);
        this.mosquito2.setPosition(1050, 500);
        this.mosquito3.setPosition(1225, 500);
        this.serpiente1.setPosition(600, 600);
        this.serpiente2.setPosition(450, 600);
        this.flecha1.setPosition(1960, 300);
        this.flecha2.setPosition(2800, 465);
        this.flecha3.setPosition(3600, 600);
    }

    gameOver() {
        this.monedas -= 10;
        this.texto.setText('😶‍🌫️Monedas: ' + this.monedas)

        if (this.monedas === 0) {
            this.inicialPosition();
            this.physics.pause();
            setTimeout(() => {
                this.tiempoRestante=120;
                this.scene.start('MenuScene');
            }, 200);
        }
    }

    create() {
        this.cameras.main.setBounds(0, 0, 1920, 763);
        this.physics.world.setBounds(0, 0, 1920, 763);
        this.add.image(0, 0, 'wordl1').setOrigin(0);
        //iconos y gadget
        this.bolsa = this.add.image(330, 25, 'bolsa').setScrollFactor(0);
        this.craneo = this.add.image(380, 25, 'fin').setScrollFactor(0);
        this.diamantes = this.add.image(430, 25, 'diamantes').setScrollFactor(0);
        this.casco = this.add.image(475, 25, 'casco').setScrollFactor(0);
        this.libro = this.add.image(520, 25, 'libro').setScrollFactor(0);
        this.monedas = 100;
        this.timer();
        this.texto = this.add.text(0.5, 10, '😶‍🌫️Monedas: ' + this.monedas, { fontSize: '36px', fill: "#fff" }).setScrollFactor(0);
        this.tiempo = this.add.text(560, 10, 'Reloj:', { fontSize: '36px', fill: "#fff" }).setScrollFactor(0);
        console.log(this.texto);
        this.createPersonaje();
        this.createSerpiente();
        this.createMosquito();
        this.createFlecha();
        this.createPlaforms();
        this.colision();
 
    }

   

    timer() {

        setInterval(()=>{
            --this.tiempoRestante;
            try {
             this.tiempo.setText(`${this.tiempoRestante}`);
            } catch (error) {
               
            }
        },1000)
    }

    createPersonaje() {
        this.player = this.physics.add.sprite(0.5, 403, ).setOrigin(0);
        this.player.body.setGravityY(500);
        this.player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.player, true);
        //this.player.setBounce(0.2);
    }

    createSerpiente() {
        this.serpiente1 = this.physics.add.sprite(600, 600, 'serpiente').setImmovable(true).setOrigin(0);
        this.serpiente1.setFlipX(this.value1)

        this.serpiente1.setCollideWorldBounds(true);
        this.movimientoS1();

        this.serpiente2 = this.physics.add.sprite(450, 600, 'serpiente2').setImmovable(true).setOrigin(0);
        this.serpiente2.setFlipX(this.value2);

        this.serpiente2.setCollideWorldBounds(true);
        this.movimientoS2();
    }

    createMosquito() {
        this.mosquito = this.physics.add.sprite(700, 500, 'mosquito').setImmovable(true).setOrigin(0);
        this.mosquito.setFlipX(this.mValue);
        this.mosquito.setCollideWorldBounds(true);
        this.movimientoMosquito();

        this.mosquito2 = this.physics.add.sprite(1050, 500, 'mosquito2').setImmovable(true).setOrigin(0);
        this.mosquito2.setFlipX(this.m2Value);
        this.mosquito2.setCollideWorldBounds(true);
        this.movimientoUpMosquito();

        this.mosquito3 = this.physics.add.sprite(1225, 500, 'mosquito3').setOrigin(0);
        this.mosquito3.setFlipX(this.M3value);
        this.mosquito3.setCollideWorldBounds(true);
        this.movimientoMosquitoCircular();
    }

    createFlecha() {
        this.flecha1 = this.physics.add.sprite(1960, 300, 'flecha2').setImmovable(true).setOrigin(0);
        this.flecha1.setScale(0.5);
        this.flecha1.setVisible(this.flechaValue);

        this.flecha2 = this.physics.add.sprite(2800, 465, 'flecha2').setImmovable(true).setOrigin(0);
        this.flecha2.setScale(0.5);
        this.flecha2.setVisible(this.flechaValue);

        this.flecha3 = this.physics.add.sprite(3600, 600, 'flecha3').setImmovable(true).setOrigin(0);
        this.flecha3.setScale(0.5);
        this.flecha3.setVisible(this.flechaValue);
    }
    movimientoMosquitoCircular() {
        this.anims.create({
            key: 'MOSC',
            frames: this.anims.generateFrameNumbers('mosquito', { start: 0, end: 5 }),
            frameRate: 5,
            repeat: -1
        });
        this.mosquito3.play('MOS', true);
    }
    movimientoMosquito() {
        this.anims.create({
            key: 'MOS',
            frames: this.anims.generateFrameNumbers('mosquito', { start: 0, end: 5 }),
            frameRate: 5,
            repeat: -1
        });
        this.mosquito.play('MOS', true);
    }
    movimientoUpMosquito() {
        this.anims.create({
            key: 'MOSUP',
            frames: this.anims.generateFrameNumbers('mosquito', { start: 0, end: 5 }),
            frameRate: 5,
            repeat: -1
        });
        this.mosquito2.play('MOSUP', true);
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
        this.platw1.create(1000, 658, 'block_4')
            .setScale(2)
            .setImmovable(true)
            .setOrigin(0, 0)
        this.platw1.create(1148, 658, 'block_4')
            .setScale(2)
            .setImmovable(true)
            .setOrigin(0, 0)
    }

    colision() {
        this.physics.add.collider(this.player, this.platw1, this.evSalto, null, this);
        this.physics.add.collider(this.player, this.mosquito, this.PlayerMosquito1, null, this);
        this.physics.add.collider(this.player, this.mosquito2, this.PlayerMosquito2, null, this);
        this.physics.add.collider(this.player, this.mosquito3, this.PlayerMosquito3, null, this);
        this.physics.add.collider(this.player, this.serpiente1, this.PlayerSerpiente1, null, this);
        this.physics.add.collider(this.player, this.serpiente2, this.PlayerSerpiente2, null, this);
        this.physics.add.collider(this.player, this.flecha1, this.evFlecha, null, this);
        this.physics.add.collider(this.player, this.flecha2, this.evFlecha2, null, this);
        this.physics.add.collider(this.player, this.flecha3, this.evFlecha3, null, this);
    }

    PlayerMosquito1() {
        this.gameOver();
        this.mosquito.setPosition(700, 500);
        this.mosquito.body.setEnable(this.dataMosquito.cuerpoFalse);
        this.playerParpadeo();
        setTimeout(() => {
            this.mosquito.body.setEnable(this.dataMosquito.cuerpoTrue);
        }, 100)
    }

    PlayerMosquito2() {
        this.gameOver();
        this.mosquito2.setPosition(1050, 500);
        this.mosquito2.body.setEnable(this.dataMosquito2.cuerpoFalse);
        this.playerParpadeo();
        setTimeout(() => {
            this.mosquito2.body.setEnable(this.dataMosquito2.cuerpoTrue);
        }, 100)
    }
    PlayerMosquito3() {
        this.gameOver();
        this.mosquito3.setPosition(1225, 500);
        this.mosquito3.body.setEnable(this.dataMosquito3.cuerpoFalse);
        this.playerParpadeo();
        setTimeout(() => {
            this.mosquito3.body.setEnable(this.dataMosquito3.cuerpoTrue);
        }, 100)
    }

    evFlecha() {

        this.gameOver();
        this.flecha1.setPosition(1960, 300);
        this.flecha1.body.setEnable(false);
        this.playerParpadeo();
        setTimeout(() => {
            this.player.clearTint();
            this.flecha1.body.setEnable(true);
        }, 1100)
    }



    evFlecha2() {

        this.gameOver();
        this.flecha2.setPosition(2800, 300);
        this.flecha2.body.setEnable(false);
        this.playerParpadeo();
        setTimeout(() => {
            this.flecha2.body.setEnable(true);
        }, 1100)
    }

    evFlecha3() {

        this.gameOver();
        this.flecha3.setPosition(3600, 300);
        this.flecha3.body.setEnable(false);
        this.playerParpadeo();
        setTimeout(() => {
            this.flecha3.body.setEnable(true);
        }, 1100)
    }

    AnimacionAtaqueSerpiente() {
        this.anims.create({
            key: 'ataque',
            frames: this.anims.generateFrameNumbers('player1', { start: 12, end: 14 }),
            frameRate: 7,
            repeat: -1
        });
        this.player.play('ataque', true);
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

    PlayerSerpiente1() {
        this.gameOver();
        this.serpiente1.setPosition(600, 600);
        this.serpiente1.body.setEnable(this.dataSerpiente1.cuerpoFalse);
        this.playerParpadeo();
        setTimeout(() => {
            this.serpiente1.body.setEnable(this.dataSerpiente1.cuerpoTrue);
        }, 100)
    }

    PlayerSerpiente2() {
        this.gameOver();
        this.serpiente2.setPosition(450, 600);
        this.serpiente2.body.setEnable(this.dataSerpiente2.cuerpoFalse);
        this.playerParpadeo();
        setTimeout(() => {
            this.serpiente2.body.setEnable(this.dataSerpiente2.cuerpoTrue);
        }, 100)
    }

    evSalto() {
        this.saltar = true;
    }

    movePlayer() {
        this.cursors = this.input.keyboard.createCursorKeys();
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-this.velocidadLateral);
            this.moveLeft();
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(this.velocidadLateral);
            this.moveRight();
        } else if (this.cursors.up.isDown && this.saltar) {
            this.saltar = false;
            this.player.setVelocityY(-385);
        } else {
            this.player.setVelocityX(0);
            this.standBy();
        }

    }

    serpienteSide(x1, y1, value1, value2) {
        const x = Math.trunc(x1);
        const y = Math.trunc(y1);

        if (x < 350) {
            this.value1 = true
            this.serpiente1.setFlipX(this.value1);
        }
        if (x > 1529) {
            this.value1 = false
            this.serpiente1.setFlipX(this.value1);
        }
        if (y > 1529) {
            this.value2 = false
            this.serpiente2.setFlipX(this.value2);
        }
        if (y < 390) {
            this.value2 = true
            this.serpiente2.setFlipX(this.value2);
        }

        switch (value1) {
            case true:
                this.velocidad = 130;
                this.serpiente1.setVelocityX(this.velocidad);
                break;
            case false:
                this.velocidad = 130;
                this.serpiente1.setVelocityX(-this.velocidad);
                break;
        }
        switch (value2) {
            case true:
                this.velocidad = 130;
                this.serpiente2.setVelocityX(this.velocidad);
                break;
            case false:
                this.velocidad = 130;
                this.serpiente2.setVelocityX(-this.velocidad);
                break;
        }
    }

    avanzeMosquito(x, y, valor, val) {
        const data = Math.trunc(x);
        const dataUp = Math.trunc(y);

        switch (data) {
            case 377:
                this.Mvalue = true
                this.mosquito.setFlipX(this.Mvalue);
                break;
            case 890:
                this.Mvalue = false
                this.mosquito.setFlipX(this.Mvalue);
                break;
        }
        switch (valor) {
            case true:
                this.mosquito.setVelocityX(50);
                break;
            case false:
                this.mosquito.setVelocityX(-50);
                break;
        }
        switch (dataUp) {
            case 300:
                this.M2value = true
                this.mosquito2.setFlipX(this.M2value);
                break;
            case 560:
                this.M2value = false
                this.mosquito2.setFlipX(this.M2value);
                break;

        }
        switch (val) {
            case true:
                this.mosquito2.setVelocityY(50);
                break;
            case false:
                this.mosquito2.setVelocityY(-50);
                break;
        }
    }

    mosquito3Circular(x, y, value) {
        const Dx = Math.trunc(x);
        const Dy = Math.trunc(y);

        switch (value) {
            case false:
                this.mosquito3.setVelocityX(-this.velocidadMX);
                this.mosquito3.setVelocityY(-this.velocidadMY);
                break;
            case true:
                this.mosquito3.setVelocityX(this.velocidadMX);
                this.mosquito3.setVelocityY(this.velocidadMY);
                break;
        }
        if (Dx === 1065, Dy === 329) {
            this.M3value = true;
            this.velocidadMY = 0;
            this.mosquito3.setFlipX(this.M3value);
        }
        if (Dx > 1328) {
            this.mosquito3.setFlipX(this.M3value);
            this.velocidadMX = 0;
            this.velocidadMY = 30
        }
        if (Dy === 540) {
            this.M3value = false;
            this.mosquito3.setFlipX(this.M3value);
            this.velocidadMY = 0;
            this.mosquito3.setVelocityY(this.velocidadMY);
            this.velocidadMX = 600;
            this.mosquito3.setVelocityX(-this.velocidadMX);
        }
        if (Dx === 0) {
            setTimeout(() => {
                this.mosquito3.setPosition(1225, 500);
                this.velocidadMX = 100;
                this.velocidadMY = 100;
                this.mosquito3.setVelocityX(-this.velocidadMX);
                this.mosquito3.setVelocityY(-this.velocidadMY);
            }, 100);
        }
    }

    flechaAtaque(x1, x2, x3) {

        this.flechaValue = true;
        this.flecha1.setVisible(this.flechaValue);
        this.flecha1.setVelocityX(-this.velocidadFlecha);


        this.flechaValue = true;
        this.flecha2.setVisible(this.flechaValue);
        this.flecha2.setVelocityX(-this.velocidadFlecha);


        this.flechaValue = true;
        this.flecha3.setVisible(this.flechaValue);
        this.flecha3.setVelocityX(-this.velocidadFlecha);

        if (Math.trunc(x1.x) < -1300) {
            this.flechaValue = false;
            this.flecha1.setVisible(this.flechaValue);
            this.flecha1.setPosition(1960, 300);
        }
        if (Math.trunc(x2.x) < -1600) {
            this.flechaValue = false;
            this.flecha2.setVisible(this.flechaValue);
            this.flecha2.setPosition(2800, 465);
        }
        if (Math.trunc(x3.x) < -1700) {
            this.flechaValue = false;
            this.flecha3.setVisible(this.flechaValue);
            this.flecha3.setPosition(3600, 600);
        }
    }
    /*SET ANIMACIONES PERSONAJE*/

    standBy() {
        if (this.ValidarAnimacion) {
            //this.player.play('ataque', true);
        } else {
            this.anims.create({
                key: 'quieto',
                frames: this.anims.generateFrameNumbers('player1', { frame: 0 }),
                frameRate: 0
            });
            this.player.play('quieto');
        }
    }

    moveRight() {
        if (this.ValidarAnimacion) {
            //this.player.play('ataque', true);
        } else {
            this.anims.create({
                key: 'derecha',
                frames: this.anims.generateFrameNumbers('player1', { start: 3, end: 5 }),
                frameRate: 5,
                repeat: -1
            })
            this.player.play('derecha', true);
        }
    }

    moveLeft() {
        if (this.ValidarAnimacion) {

            // this.player.play('ataque', true);

        } else {
            this.anims.create({
                key: 'izquierda',
                frames: this.anims.generateFrameNumbers('player1', { start: 8, end: 6 }),
                frameRate: 5,
                repeat: -1
            })
            this.player.play('izquierda', true);
        }
    }
    /*---------------------------------------------------------*/

    update() {

        this.movePlayer();
        this.serpienteSide(
            this.serpiente1.x, this.serpiente2.x,
            this.value1, this.value2
        );
        this.avanzeMosquito(
            this.mosquito.x,
            this.mosquito2.y,
            this.Mvalue,
            this.M2value
        );
        this.mosquito3Circular(
            this.mosquito3.x,
            this.mosquito3.y,
            this.M3value,
        );
        this.flechaAtaque(this.flecha1, this.flecha2, this.flecha3);
    }

    playerParpadeo() {
        this.player.setTint(0xff0000);
        this.player.setAlpha(0.5);
        setTimeout(() => {
            this.player.setAlpha(1);
        }, 100)
        setTimeout(() => {
            this.player.setAlpha(0.5);
        }, 300)
        setTimeout(() => {
            this.player.setAlpha(1);
        }, 400)
        setTimeout(() => {
            this.player.setAlpha(0.5);
        }, 500)
        setTimeout(() => {
            this.player.setAlpha(1);
        }, 600)
        setTimeout(() => {
            this.player.setAlpha(0.5);
        }, 700)
        setTimeout(() => {
            this.player.setAlpha(1);
        }, 800)
        setTimeout(() => {
            this.player.setAlpha(0.5);
            this.player.clearTint();
        }, 900)
        setTimeout(() => {
            this.player.setAlpha(1);
        }, 1000)
    }
}
export default WorldScene1