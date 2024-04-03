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
        this.textoMonedas = null;
        this.textoGameOver = null;
        this.textoTiempo = null;
        this.monedas = 100;
        this.tiempo = 45;
        this.valorIntervalo = 1000;
        this.arregloTiempo = ['🕧', '🕐', '🕜', '🕑', '🕛']
        this.estadoFlecha = true;
        this.estadoSaltoPlayer1 = false;
        this.velocidadPlayer1 = 250;
        this.saltoPlayer1 = 583;
        this.velocidadFlecha = 395; //550
    }
    //Creacion de elementos 
    create() {
        this.cameras.main.setBounds(0, 0, 4095, 768);
        this.physics.world.setBounds(0, 0, 4095, 768);
        this.mundo=this.add.image(0, 0, 'mundo1').setAlpha(5).setOrigin(0);
        this.textoGameOver = this.add.text(470, 350, '', { fontSize: '64px', fontFamily: 'Comic Sans MS', backgroundColor: '#000', fill: "#fff" }).setScrollFactor(0);
        this.textoMonedas = this.add.text(1, 20, '🪙' + this.monedas, { fontSize: '38px', fontFamily: 'Comic Sans MS', fill: "#000" }).setScrollFactor(0);
        this.textoTiempo = this.add.text(120, 20, '🕛' + this.tiempo, { fontSize: '38px', fontFamily: 'Comic Sans MS', fill: "#000" }).setScrollFactor(0);
        this.createPlayer1();
        this.plataforma();
        this.enemigoFlecha();
        this.enemigoBala();
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
    enemigoBala() {
        this.bala1 = this.physics.add.sprite(5000, 575, 'bala1').setImmovable(true).setOrigin(0);
        this.movimientoBala();
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
            if(this.monedas === 0){
                this.textoTiempo.setText(this.arregloTiempo[0] +0);
            }else{
                if(this.tiempo <= 0){
                    this.textoTiempo.setText(this.arregloTiempo[0] +0);
                    this.textoGameOver.setText("⏱️ Time's up! ");
                    this.physics.pause();
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                    clearInterval(tiempo);
                }else if(this.tiempo===30){
                    this.mundo.setTint(0xfad6a5);
                }else if(this.tiempo===15){
                    this.mundo.setTint(0x2d3451);
                }
                else{
                    this.textoTiempo.setText(this.arregloTiempo[Math.trunc(temporizador)] + this.tiempo);
                }
            }
        }, this.valorIntervalo);
    }

    update() {
        this.movePlayer();
        this.flechaAtaque(this.flecha1, this.flecha2, this.flecha3);
        this.balaAtaque(this.bala1);
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