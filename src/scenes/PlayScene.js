import BaseScene from "./BaseScene";


class PlayScene extends BaseScene {
    constructor(config) {
        super('PlayScene', config);
        this.bloque_1 = null;
        this.player1 = null;
        this.flecha1 = null;
        this.flecha2 = null;
        this.flecha3 = null;
        this.bala1 = null;
        this.serpiente1 = null;
        this.serpiente2 = null;
        this.textoMonedas = null;
        this.textoGameOver = null;
        this.textoTiempo = null;
        this.mosquito = null;
        this.mosquito2 = null;
        this.monedas = 100;
        this.tiempo = 45;
        this.valorIntervalo = 1000;
        this.arregloTiempo = ['🕧', '🕐', '🕜', '🕑', '🕛']
        this.estadoFlecha = true;
        this.Mvalue = false;
        this.M2value = false;
        this.stadoSerpiente1 = false;
        this.stadoSerpiente2 = true;
        this.estadoSaltoPlayer1 = false;
        this.velocidadPlayer1 = 250;
        this.saltoPlayer1 = 583;
        this.velocidadFlecha = 395; //550
    }
    //Creacion de elementos 
    create() {
        this.cameras.main.setBounds(0, 0, 4095, 768);
        this.physics.world.setBounds(0, 0, 4095, 768);
        this.mundo = this.add.image(0, 0, 'mundo1').setAlpha(5).setOrigin(0);
        this.textoGameOver = this.add.text(470, 350, '', { fontSize: '64px', fontFamily: 'Comic Sans MS', backgroundColor: '#000', fill: "#fff" }).setScrollFactor(0);
        this.textoMonedas = this.add.text(1, 20, '🪙' + this.monedas, { fontSize: '38px', fontFamily: 'Comic Sans MS', fill: "#000" }).setScrollFactor(0);
        this.textoTiempo = this.add.text(120, 20, '🕛' + this.tiempo, { fontSize: '38px', fontFamily: 'Comic Sans MS', fill: "#000" }).setScrollFactor(0);
        this.createPlayer1();
        this.plataforma();
        this.enemigoFlecha();
        this.enemigoBala();
        this.enemigoSerpiente();
        this.enemigoMosquito();
        this.createColisiones();
        this.tiemporizador();
    }
    //creando personaje Jugable
    createPlayer1() {
        this.player1 = this.physics.add.sprite(35, 500, 'player1')
            .setOrigin(0);
        this.player1.setCollideWorldBounds(true);
        this.player1.body.setGravityY(820);
        this.cameras.main.startFollow(this.player1, true);
    }
    //Daño Jugador Player1
    damagePlayer1() {
        this.player1.setTint(0xff0000);
        this.player1.setAlpha(0.5);
        setTimeout(() => {
            this.player1.setAlpha(1);
        }, 100)
        setTimeout(() => {
            this.player1.setAlpha(0.5);
        }, 300)
        setTimeout(() => {
            this.player1.setAlpha(1);
        }, 400)
        setTimeout(() => {
            this.player1.setAlpha(0.5);
        }, 500)
        setTimeout(() => {
            this.player1.setAlpha(1);
        }, 600)
        setTimeout(() => {
            this.player1.setAlpha(0.5);
        }, 700)
        setTimeout(() => {
            this.player1.setAlpha(1);
        }, 800)
        setTimeout(() => {
            this.player1.setAlpha(0.5);
            this.player1.clearTint();
        }, 900)
        setTimeout(() => {
            this.player1.setAlpha(1);
            this.player1.clearTint();
        }, 1000)
    }
    //creacion enemigo Bala
    enemigoMosquito() {

        this.mosquito = this.physics.add.sprite(2842, 580, 'mosquito').setImmovable(true).setOrigin(0);
        this.mosquito.setFlipX(this.mValue);
        this.mosquito.setCollideWorldBounds(true);
        this.movimientoMosquito();

        this.mosquito2 = this.physics.add.sprite(3630, 400, 'mosquito2').setImmovable(true).setOrigin(0);
        this.mosquito2.setFlipX(this.m2Value);
        this.mosquito2.setCollideWorldBounds(true);
        this.movimientoUpMosquito();

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

    movimientoMosquito() {
        this.anims.create({
            key: 'MOS',
            frames: this.anims.generateFrameNumbers('mosquito', { start: 0, end: 5 }),
            frameRate: 5,
            repeat: -1
        });
        this.mosquito.play('MOS', true);
    }


    enemigoBala() {
        this.bala1 = this.physics.add.sprite(5000, 575, 'bala1').setImmovable(true).setOrigin(0);
        this.movimientoBala();
    }
    //enemigo Serpiente
    enemigoSerpiente() {
        this.serpiente1 = this.physics.add.sprite(520, 630, 'serpiente').setImmovable(true).setOrigin(0);
        this.serpiente1.setFlipX(this.stadoSerpiente1)
        this.serpiente1.setCollideWorldBounds(true);
        this.movimientoS1();

        this.serpiente2 = this.physics.add.sprite(2100, 630, 'serpiente2').setImmovable(true).setOrigin(0);
        this.serpiente2.setFlipX(this.stadoSerpiente2);
        this.serpiente2.setCollideWorldBounds(true);
        this.movimientoS2();
    }
    //movimiento serpiente
    movimientoS1() {
        this.anims.create({
            key: 'mover',
            frames: this.anims.generateFrameNumbers('serpiente', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
        this.serpiente1.play('mover', true);
    }
    movimientoS2() {
        this.anims.create({
            key: 'mover1',
            frames: this.anims.generateFrameNumbers('serpiente2', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
        this.serpiente2.play('mover1', true);
    }


    //creacion de enemigoFlecha
    enemigoFlecha() {

        this.flecha1 = this.physics.add.sprite(4100, 660, 'flecha1').setImmovable(true).setOrigin(0);
        this.flecha1.setScale(0.5);
        this.flecha1.setVisible(this.estadoFlecha);

        this.flecha2 = this.physics.add.sprite(4500, 550, 'flecha2').setImmovable(true).setOrigin(0);
        this.flecha2.setScale(0.5);
        this.flecha2.setVisible(this.estadoFlecha);

        this.flecha3 = this.physics.add.sprite(5300, 400, 'flecha3').setImmovable(true).setOrigin(0);
        this.flecha3.setScale(0.5);
        this.flecha3.setVisible(this.estadoFlecha);

    }
    //movimiento enemigo ataque flecha
    flechaAtaque(x1, x2, x3) {
        this.flecha1.setVelocityX(-this.velocidadFlecha);
        if (Math.trunc(x1.x) < -1000) {
            this.flecha1.setPosition(4100, 660);
        }

        this.flecha2.setVelocityX(-this.velocidadFlecha);
        if (Math.trunc(x2.x) < -1100) {
            this.flecha2.setPosition(4500, 550);
        }

        this.flecha3.setVelocityX(-this.velocidadFlecha);
        if (Math.trunc(x3.x) < -1300) {
            this.flecha3.setPosition(5300, 400);
        }
    }

    /*eventos serpiente*/
    evSerp() {
        this.perdidaMonedas();
        this.serpiente1.body.setEnable(false);
        this.serpiente1.setPosition(1040, 630);
        //this.player1.setPosition(this.player1.x + 6, this.player1.y);
        this.damagePlayer1();
        this.serpiente1.body.setEnable(true);
    }

    evSerp2() {
        this.perdidaMonedas();
        this.serpiente2.body.setEnable(false);
        this.serpiente2.setPosition(1900, 630);
        //this.player1.setPosition(this.player1.x , this.player1.y);
        this.damagePlayer1();
        this.serpiente2.body.setEnable(true);
    }
    /*final evento Serpiente*/
 
    /*EventoMosquito*/
    
    evMosq(){
        this.perdidaMonedas();
        this.mosquito.body.setEnable(false);
        this.mosquito.setPosition(2842, 580);
        //this.player1.setPosition(this.player1.x , this.player1.y);
        this.damagePlayer1();
        this.mosquito.body.setEnable(true);
    }
    evMosq2(){
        this.perdidaMonedas();
        this.mosquito2.body.setEnable(false);
        this.mosquito2.setPosition(3630, 400);
        //this.player1.setPosition(this.player1.x , this.player1.y);
        this.damagePlayer1();
        this.mosquito2.body.setEnable(true);
    }
    /*Final Evento Mosquito*/
    balaAtaque(x1) {
        this.bala1.setVelocityX(-this.velocidadFlecha);
        if (Math.trunc(x1.x) < -1000) {
            this.bala1.setPosition(5000, 575);
        }
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

    movimientoBala() {
        this.anims.create({
            key: 'avanceBala1',
            frames: this.anims.generateFrameNumbers('bala1', { start: 2, end: 0 }),
            frameRate: 2,
            repeat: -1
        })
        this.bala1.play('avanceBala1');
    }

    standBy() {
        this.anims.create({
            key: 'quieto',
            frames: this.anims.generateFrameNumbers('player1', { frame: 0 }),
            frameRate: 0
        });
        this.player1.play('quieto');
    }
    //colisiones
    createColisiones() {
        this.physics.add.collider(this.player1, this.bloque_1, this.evSalto, null, this);
        this.physics.add.collider(this.player1, this.flecha1, this.evFlecha1, null, this);
        this.physics.add.collider(this.player1, this.flecha2, this.evFlecha2, null, this);
        this.physics.add.collider(this.player1, this.flecha3, this.evFlecha3, null, this);
        this.physics.add.collider(this.player1, this.serpiente1, this.evSerp, null, this);
        this.physics.add.collider(this.player1, this.serpiente2, this.evSerp2, null, this);
        this.physics.add.collider(this.player1, this.mosquito, this.evMosq, null, this);
        this.physics.add.collider(this.player1, this.mosquito2, this.evMosq2, null, this);
    }
    //evento salto
    evSalto() {
        this.estadoSaltoPlayer1 = true;
    }

    /*comienzo eventos flecha*/
    evFlecha1() {
        this.perdidaMonedas();
        this.flecha1.body.setEnable(false);
        this.flecha1.setPosition(4100, 660);
        this.player1.setPosition(this.player1.x + 6, this.player1.y);
        this.damagePlayer1();
        this.flecha1.body.setEnable(true);
    }
    evFlecha2() {
        this.perdidaMonedas();
        this.flecha2.body.setEnable(false);
        this.flecha2.setPosition(4500, 550);
        this.player1.setPosition(this.player1.x + 6, this.player1.y);
        this.damagePlayer1();
        this.flecha2.body.setEnable(true);
    }
    evFlecha3() {
        this.perdidaMonedas();
        this.flecha3.body.setEnable(false);
        this.flecha3.setPosition(5300, 400);
        this.player1.setPosition(this.player1.x + 6, this.player1.y);
        this.damagePlayer1();
        this.flecha3.body.setEnable(true);
    }
    /*final eventos flecha*/


    //plataformas
    plataforma() {
        this.bloque_1 = this.physics.add.group();//defino grupo

        this.bloque_1.create(430, 655, 'block_3')//estructura comienzo
            .setScale(1.9, 1.6)
            .setImmovable(true);

        this.bloque_1.create(1367, 645, 'block_3')//estructura antepenultima
            .setScale(3.96, 2)
            .setImmovable(true);

        this.bloque_1.create(2694, 358, 'block_4')//()estructura aerea tronco
            .setScale(0.58, 0)
            .setImmovable(true);

        this.bloque_1.create(2360, 653, 'block_3')//estructura penultima
            .setScale(1.5, 2.8)
            .setImmovable(true);
        this.bloque_1.create(2407, 653, 'block_3')//estructura penultima
            .setScale(1.5, 2.8)
            .setImmovable(true);
        this.bloque_1.create(3305, 653, 'block_3')//estructra final
            .setScale(1.5)
            .setImmovable(true);
        this.bloque_1.create(3352, 653, 'block_3')//estructura final
            .setScale(1.5)
            .setImmovable(true);

        /*Comienzo de plataforma del suelo*/
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
        /*Final de plataforma del suelo*/
    }
    //Resta de monedas por contacto enemigo
    perdidaMonedas() {
        this.monedas -= 10;
        this.textoMonedas.setText('🪙' + this.monedas);
        if (this.monedas === 0) {
            this.textoGameOver.setText('☠️ Game Over');
            this.physics.pause();
            setTimeout(() => {
                window.location.reload();
            }, 4000);
        }
    }

    tiemporizador() {
        const tiempo = setInterval(() => {
            const temporizador = Math.random() * 5;
            --this.tiempo;
            if (this.monedas === 0) {
                this.textoTiempo.setText(this.arregloTiempo[0] + 0);
            } else {
                if (this.tiempo <= 0) {
                    this.textoTiempo.setText(this.arregloTiempo[0] + 0);
                    this.textoGameOver.setText("⏱️ Time's up! ");
                    this.physics.pause();
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                    clearInterval(tiempo);
                } else if (this.tiempo === 30) {
                    this.mundo.setTint(0xfad6a5);
                } else if (this.tiempo === 15) {
                    this.mundo.setTint(0x2d3451);
                }
                else {
                    this.textoTiempo.setText(this.arregloTiempo[Math.trunc(temporizador)] + this.tiempo);
                }
            }
        }, this.valorIntervalo);
    }
    //ataque Serpiente
    serpienteSide(x1, value1, x2, value2) {
        const x = Math.trunc(x1.x);
        const y = Math.trunc(x2.x);

        if (x < 510) {
            this.stadoSerpiente1 = true
            this.serpiente1.setFlipX(this.stadoSerpiente1);
        }
        if (x > 1050) {
            this.stadoSerpiente1 = false
            this.serpiente1.setFlipX(this.stadoSerpiente1);
        }

        if (y < 1535) {
            this.stadoSerpiente2 = true
            this.serpiente2.setFlipX(this.stadoSerpiente2);
        }
        if (y > 2135) {
            this.stadoSerpiente2 = false
            this.serpiente2.setFlipX(this.stadoSerpiente2);
        }

        switch (value1) {
            case true:
                this.velocidad = 80;
                this.serpiente1.setVelocityX(this.velocidad);
                break;
            case false:
                this.velocidad = 80;
                this.serpiente1.setVelocityX(-this.velocidad);
                break;
        }

        switch (value2) {
            case true:
                this.velocidad = 80;
                this.serpiente2.setVelocityX(this.velocidad);
                break;
            case false:
                this.velocidad = 80;
                this.serpiente2.setVelocityX(-this.velocidad);
                break;
        }
    }

    ataquemosquito(x, valor, y, val) {
        const data = Math.trunc(x.x);
        const dataUp = Math.trunc(y.y);

        if (data < 2670) {
            this.Mvalue = true
            this.mosquito.setFlipX(this.Mvalue);
        }
        if (data > 3100) {
            this.Mvalue = false
            this.mosquito.setFlipX(this.Mvalue);
        }
        switch (valor) {
            case true:
                this.mosquito.setVelocityX(70);
                break;
            case false:
                this.mosquito.setVelocityX(-70);
                break;
        }

        if (dataUp > 630) {
            this.M2value = true
            this.mosquito2.setFlipX(this.M2value);
        }
        if (dataUp < 300) {
            this.M2value = false
            this.mosquito2.setFlipX(this.M2value);
        }

        switch (val) {
            case true:
                this.mosquito2.setVelocityY(-70);
                break;
            case false:
                this.mosquito2.setVelocityY(70);
                break;
        }
    }

    update() {

        //this.movePlayer();
        this.moveController();
        this.flechaAtaque(this.flecha1, this.flecha2, this.flecha3);
        this.balaAtaque(this.bala1);
        this.serpienteSide(this.serpiente1, this.stadoSerpiente1, this.serpiente2, this.stadoSerpiente2);
        this.ataquemosquito(this.mosquito, this.Mvalue, this.mosquito2, this.M2value);

    }

    movePlayer() {
        this.cursors = this.input.keyboard.createCursorKeys();
        if (this.cursors.left.isDown) {
            this.moveLeft();
            this.player1.setVelocityX(-this.velocidadPlayer1);
        } else if (this.cursors.right.isDown) {
            this.moveRight();
            this.player1.setVelocityX(this.velocidadPlayer1);
        } else if (this.cursors.up.isDown && this.estadoSaltoPlayer1) {
            this.estadoSaltoPlayer1 = false;
            this.player1.setVelocityY(-this.saltoPlayer1);
        } else {
            this.player1.setVelocityX(0);
            this.standBy();
        }
    }

    moveController() {
        const control = this.input.gamepad.getPad(0);
        if (!control) {
            return;
        }
        if(this.estadoSaltoPlayer1 && control.buttons[0].pressed ){
            this.player1.setVelocityY(-this.saltoPlayer1);
            this.estadoSaltoPlayer1 = false;
        }
        if (control.axes.length) {
            const axisH = control.axes[0].getValue();

            if (axisH === -1) {
                this.player1.setVelocityX(-this.velocidadPlayer1);
                this.moveLeft();
            } else if (axisH === 1) {
                this.player1.setVelocityX(this.velocidadPlayer1);
                this.moveRight();
            } else {
                this.player1.setVelocityX(0);
                this.standBy();
            }

        }
    }
}
export default PlayScene;