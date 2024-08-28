import BaseScene from "./BaseScene";
import DataPlataformaW2 from "../scenes/plataforma_w2/plataforma_w2";
import DataBloquePlataformaW2 from "../scenes/plataforma_w2/plataformaBW2";
import DataVacioW21 from "../scenes/plataforma_w2/plataformaVacioW2_1";
import DataVacioW22 from "../scenes/plataforma_w2/plataformaVacioW2_2"
import DataVacioW23 from "../scenes/plataforma_w2/plataformaVacioW2_3";
import AnimacionPlayer1 from "../scenes/Jugadores/player";
import AnimacionPlayer2 from "../scenes/Jugadores/player2";
const Serpiente = require("../scenes/enemigosFuncionW2/Serpiente");
const mosquito = require("../scenes/enemigosFuncionW2/mosquito");
const Balas = require("../scenes/enemigosFuncionW2/balas");
class Plano2 extends BaseScene {
    intervaloTIEMPO = null;
    tiempo = 45;
    textoTiempo = "0:00";
    valorIntervalo = 1000;
    estadoSuelo;
    estadoSueloP2;
    storagePlayer;
    velocidadX = 300;
    velocidadY = 280;
    velocidadBalas = 325;
    isMultiPLayer;
    Jugador2;
    plataformaW2;
    infoObjeto = true;
    monedasW2;
    animacionStop = 'stop';
    animacionMove = 'move';
    animacionJump = 'jump';
    animacionStopP2 = 'stop2';
    animacionMoveP2 = 'move2';
    animacionJumpP2 = 'jump2';
    textoObjetos = null;
    textoMonedas = null;
    gate = null;
    volteoP2 = true;
    volteoP1 = true;
    BloquePW2;
    bloqueVacioW2_1;
    bloqueVacioW2_2;
    bloqueVacioW2_3;
    velocidadSerpiente = 80;
    Serpiente1;
    Serpiente2;
    Serpiente3;
    Mosquito;
    Mosquito2;
    Mosquito3;
    Mosquito4;
    balas;
    textoObjetos = null;
    objeto = 0;
    flechas;
    objeto1;
    objeto2;
    objeto3;
    objeto4;
    objeto5;
    velocidadMosquito = 230;
    OutMonedas;
    OutTime;
    OutComplete;
    btnReload = false;
    btnContinue = false;

    constructor(config) {
        super('Plano2', config);
    }

    /*Comienzo Creacion PLayer2*/
    createPlayer2() {
        //validamos si es multiplayer
        let r = JSON.parse(sessionStorage.getItem('multiplayer'));
        this.isMultiPLayer = r;
        //this.isMultiPLayer = true;
        if (this.isMultiPLayer) {
            this.Jugador2 = this.physics.add.sprite(102, 322, 'player2')
                .setOrigin(0);
            this.Jugador2.setCollideWorldBounds(true);
            this.Jugador2.body.setGravityY(820);
            this.Jugador2.body.setSize(50, 120);
            AnimacionPlayer2(this.anims);
            this.physics.add.collider(this.Jugador2, this.plataformaW2, this.alert2, null, this);
            this.physics.add.collider(this.Jugador2, this.sphereW2_1, this.alertCirculo2, null, this);
            this.physics.add.collider(this.Jugador2, this.sphereW2_2, this.alertCirculo2, null, this);
            this.physics.add.collider(this.Jugador2, this.sphereW2_3, this.alertCirculo2, null, this);
            this.physics.add.collider(this.Jugador2, this.sphereW2_4, this.alertCirculo2, null, this);
            this.physics.add.collider(this.Jugador2, this.sphereW2_5, this.alertCirculo2, null, this);
            this.physics.add.collider(this.Jugador2, this.sphereW2_6, this.alertCirculo2, null, this);
            this.physics.add.collider(this.Jugador2, this.sphereW2_7, this.alertCirculo2, null, this);
            this.physics.add.collider(this.Jugador2, this.sphereW2_8, this.alertCirculo2, null, this);
            this.physics.add.collider(this.Jugador2, this.sphereW2_9, this.alertCirculo2, null, this);
            this.physics.add.collider(this.Jugador2, this.BloquePW2, this.bspecial2, null, this);
            this.physics.add.collider(this.Jugador2, this.bloqueVacioW2_1, this.vaciow2_1_2, null, this);
            this.physics.add.collider(this.Jugador2, this.bloqueVacioW2_2, this.vaciow2_2_2, null, this);
            this.physics.add.collider(this.Jugador2, this.bloqueVacioW2_3, this.vaciow2_3_2, null, this);
            this.physics.add.overlap(this.Jugador2, this.balas, this.hitBala2, null, this);
            this.physics.add.overlap(this.Jugador2, this.flechas, this.hitFlecha2, null, this);
            this.physics.add.collider(this.Jugador2, this.Mosquito, this.mosquito1Colisionp2, null, this);
            this.physics.add.collider(this.Jugador2, this.Mosquito2, this.mosquito2Colisionp2, null, this);
            this.physics.add.collider(this.Jugador2, this.Mosquito3, this.mosquito3Colisionp2, null, this);
            this.physics.add.collider(this.Jugador2, this.Mosquito4, this.mosquito4Colisionp2, null, this);
            this.physics.add.collider(this.Jugador2, this.Serpiente1, this.serpiente1Colisionp2, null, this);
            this.physics.add.collider(this.Jugador2, this.Serpiente2, this.serpiente2Colisionp2, null, this);
            this.physics.add.collider(this.Jugador2, this.objeto1, this.ColisionObj1, null, this);
            this.physics.add.collider(this.Jugador2, this.objeto2, this.ColisionObj2, null, this);
            this.physics.add.collider(this.Jugador2, this.objeto3, this.ColisionObj3, null, this);
            this.physics.add.collider(this.Jugador2, this.objeto4, this.ColisionObj4, null, this);
            this.physics.add.collider(this.Jugador2, this.objeto5, this.ColisionObj5, null, this);
            this.physics.add.collider(this.Jugador2, this.gate, this.vacio, null, this);
        } else {
            console.log("Jugador 2 no conectado en mundo 2")
        }
    }
    vacio() {

    }
    /*Fin Creacion Player 2*/
    createPlayer1() {
        //cuando son dos seteo en storage jugador 1 en seleccion  
        //33
        // console.log(this.storagePlayer);
        this.storagePlayer = sessionStorage.getItem('selectPLayer');
        this.player1 = this.physics.add.sprite(33, 326, this.storagePlayer).setOrigin(0);
        this.player1.setCollideWorldBounds(true);
        this.player1.body.setGravityY(820);
        this.player1.body.setSize(50, 120);

        AnimacionPlayer1(this.anims, this.storagePlayer);
        console.log(this.player1);
        this.cameras.main.startFollow(this.player1, true);
    }

    circuloW2_part1() {
        this.sphereW2_1 = this.add.graphics();
        this.sphereW2_1.fillCircle(100, -300, 100);
        this.physics.world.enable(this.sphereW2_1);
        this.sphereW2_1.body.setCircle(50, 0, -400);
        this.sphereW2_1.body.setCollideWorldBounds(true);
        this.sphereW2_1.body.setImmovable(true);
        this.sphereW2_1.setPosition(1530, 970);
        //circulo 2
        this.sphereW2_2 = this.add.graphics();
        this.sphereW2_2.fillCircle(100, -300, 100);
        this.physics.world.enable(this.sphereW2_2);
        this.sphereW2_2.body.setCircle(50, 0, -400);
        this.sphereW2_2.body.setCollideWorldBounds(true);
        this.sphereW2_2.body.setImmovable(true);
        this.sphereW2_2.setPosition(1570, 940);
        //circulo 3
        this.sphereW2_3 = this.add.graphics();
        this.sphereW2_3.fillCircle(100, -300, 100);
        this.physics.world.enable(this.sphereW2_3);
        this.sphereW2_3.body.setCircle(50, 0, -400);
        this.sphereW2_3.body.setCollideWorldBounds(true);
        this.sphereW2_3.body.setImmovable(true);
        this.sphereW2_3.setPosition(1610, 900);
        //circulo 4
        this.sphereW2_4 = this.add.graphics();
        this.sphereW2_4.fillCircle(100, -300, 100);
        this.physics.world.enable(this.sphereW2_4);
        this.sphereW2_4.body.setCircle(70, 0, -400);
        this.sphereW2_4.body.setCollideWorldBounds(true);
        this.sphereW2_4.body.setImmovable(true);
        this.sphereW2_4.setPosition(1645, 845);
        //circulo 5
        this.sphereW2_5 = this.add.graphics();
        this.sphereW2_5.fillCircle(100, -300, 100);
        this.physics.world.enable(this.sphereW2_5);
        this.sphereW2_5.body.setCircle(110, 0, -400);
        this.sphereW2_5.body.setCollideWorldBounds(true);
        this.sphereW2_5.body.setImmovable(true);
        this.sphereW2_5.setPosition(2123, 762);
        //circuo 6
        this.sphereW2_6 = this.add.graphics();
        this.sphereW2_6.fillCircle(100, -300, 100);
        this.physics.world.enable(this.sphereW2_6);
        this.sphereW2_6.body.setCircle(110, 0, -400);
        this.sphereW2_6.body.setCollideWorldBounds(true);
        this.sphereW2_6.body.setImmovable(true);
        this.sphereW2_6.setPosition(2175, 762);
        //circulo 7
        this.sphereW2_7 = this.add.graphics();
        this.sphereW2_7.fillCircle(100, -300, 100);
        this.physics.world.enable(this.sphereW2_7);
        this.sphereW2_7.body.setCircle(150, 0, -400);
        this.sphereW2_7.body.setCollideWorldBounds(true);
        this.sphereW2_7.body.setImmovable(true);
        this.sphereW2_7.setPosition(3530, 840);
        //circulo 8
        this.sphereW2_8 = this.add.graphics();
        this.sphereW2_8.fillCircle(100, -300, 100);
        this.physics.world.enable(this.sphereW2_8);
        this.sphereW2_8.body.setCircle(110, 0, -400);
        this.sphereW2_8.body.setCollideWorldBounds(true);
        this.sphereW2_8.body.setImmovable(true);
        this.sphereW2_8.setPosition(3450, 970);
        //circulo 9
        this.sphereW2_9 = this.add.graphics();
        this.sphereW2_9.fillCircle(100, -300, 100);
        this.physics.world.enable(this.sphereW2_9);
        this.sphereW2_9.body.setCircle(70, 0, -400);
        this.sphereW2_9.body.setCollideWorldBounds(true);
        this.sphereW2_9.body.setImmovable(true);
        this.sphereW2_9.setPosition(3395, 1030);
    }

    createDiamantes() {
        this.objeto1 = this.physics.add.image(970, 345, 'cruz').setScale(0.9);
        this.objeto2 = this.physics.add.image(3230, 410, 'cruz').setScale(0.9);
        this.objeto3 = this.physics.add.image(3000, 515, 'cruz').setScale(0.9);
        this.objeto4 = this.physics.add.image(2700, 600, 'cruz').setScale(0.9);
        this.objeto5 = this.physics.add.image(1500, 596, 'cruz').setScale(0.9);
        console.log(this.objeto5);
    }

    gateMundo2() {
        this.gate = this.physics.add.staticGroup();
        this.gate.create(3975, 300, 'block_2').setScale(0, 4).refreshBody();
    }

    create() {
        this.monedasW2 = sessionStorage.getItem('PuntajeActual');
        this.music2 = this.sound.add('w2');
        this.music2.play();
        this.camara = this.cameras.main.setBounds(0, 0, 4095, 768);
        this.camara.flash(2000);

        this.objeto_i = this.physics.add.image(200, 157, 'block_3').setScale(0.2).setOrigin(0);
        this.linea = this.physics.add.image(110, 170, 'block_3').setImmovable(true).setScale(5, 0).setOrigin(0);
        this.objeto_i.body.setGravityY(500);
        this.physics.add.collider(this.objeto_i, this.linea, null, null, this);

        this.physics.world.setBounds(0, 0, 4095, 768);
        this.mundo = this.add.image(0, 0, 'Plano2').setOrigin(0);
        this.add.image(250, 30, 'estado').setScale(1).setScrollFactor(0);
        this.add.image(341, 27, 'cruz-estado').setScale(1).setScrollFactor(0);
        this.plataformaW2 = this.physics.add.staticGroup();
        this.BloquePW2 = this.physics.add.staticGroup();
        this.bloqueVacioW2_1 = this.physics.add.staticGroup();
        this.bloqueVacioW2_2 = this.physics.add.staticGroup();
        this.bloqueVacioW2_3 = this.physics.add.staticGroup();
        this.gateMundo2();
        this.Serpiente1 = this.physics.add.sprite(800, 375, 'serpiente').setImmovable(true).setOrigin(0);
        this.Serpiente2 = this.physics.add.sprite(2004, 375, 'serpiente').setImmovable(true).setOrigin(0);
        Serpiente.createSerpiente(this.Serpiente1, this.velocidadSerpiente);
        Serpiente.createSerpiente2(this.Serpiente2, this.velocidadSerpiente);
        Serpiente.Animacion(this.Serpiente1, this.anims);
        Serpiente.Animacion(this.Serpiente2, this.anims);
        this.Mosquito = this.physics.add.sprite(1200, 240, 'mosquito').setImmovable(true).setOrigin(0);
        this.Mosquito2 = this.physics.add.sprite(1470, 240, 'mosquito').setImmovable(true).setOrigin(0);
        this.Mosquito3 = this.physics.add.sprite(2780, 240, 'mosquito').setImmovable(true).setOrigin(0);
        this.Mosquito4 = this.physics.add.sprite(3020, 510, 'mosquito').setImmovable(true).setOrigin(0);
        mosquito.createMosquito4(this.Mosquito4, this.velocidadMosquito);
        mosquito.createMosquito3(this.Mosquito3, this.velocidadMosquito);
        mosquito.createMosquito2(this.Mosquito2, this.velocidadMosquito);
        mosquito.createMosquito(this.Mosquito, this.velocidadMosquito);
        mosquito.Animacion(this.Mosquito, this.anims);
        mosquito.Animacion(this.Mosquito2, this.anims);
        mosquito.Animacion(this.Mosquito3, this.anims);
        mosquito.Animacion(this.Mosquito4, this.anims);
        this.balas = this.physics.add.group({
            key: 'bala1',
            frame: [0, 1, 2],
            setXY:
            {
                x: 4500,
                y: 100,
                stepX: 500,
                stepY: 150,
            },
            setScale: { x: 0.7, y: 0.7 },
            velocityX: -this.velocidadBalas,
        });
        this.flechas = this.physics.add.group({
            key: 'flecha1',
            frame: [0, 1, 2],
            setXY:
            {
                x: 8000,
                y: 100,
                stepX: 500,
                stepY: 150,
            },
            setScale: { x: 0.5, y: 0.5 },
            velocityX: -this.velocidadBalas,
        });
        DataPlataformaW2(this.plataformaW2);
        DataBloquePlataformaW2(this.BloquePW2);
        DataVacioW21(this.bloqueVacioW2_1);
        DataVacioW22(this.bloqueVacioW2_2);
        DataVacioW23(this.bloqueVacioW2_3);
        this.createPlayer1();
        this.circuloW2_part1();
        this.textoTiempo = this.add.text(65, 15, `0:${this.tiempo}`, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.textoMonedas = this.add.text(230, 15, 'x' + this.monedasW2, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.textoObjetos = this.add.text(373, 15, 'x' + this.objeto, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.temporizador();
        this.createDiamantes();
        this.physics.add.collider(this.player1, this.plataformaW2, this.alert, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_1, this.alertCirculo, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_2, this.alertCirculo, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_3, this.alertCirculo, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_4, this.alertCirculo, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_5, this.alertCirculo, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_6, this.alertCirculo, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_7, this.alertCirculo, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_8, this.alertCirculo, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_9, this.alertCirculo, null, this);
        this.physics.add.collider(this.player1, this.BloquePW2, this.bspecial, null, this);
        this.physics.add.collider(this.player1, this.bloqueVacioW2_1, this.vaciow2_1, null, this);
        this.physics.add.collider(this.player1, this.bloqueVacioW2_2, this.vaciow2_2, null, this);
        this.physics.add.collider(this.player1, this.bloqueVacioW2_3, this.vaciow2_3, null, this);
        this.physics.add.overlap(this.player1, this.balas, this.hitBala, null, this);
        this.physics.add.overlap(this.player1, this.flechas, this.hitFlecha, null, this);
        this.physics.add.collider(this.player1, this.Mosquito, this.mosquito1Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Mosquito2, this.mosquito2Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Mosquito3, this.mosquito3Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Mosquito4, this.mosquito4Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Serpiente1, this.serpiente1Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Serpiente2, this.serpiente2Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.objeto1, this.ColisionObj1, null, this);
        this.physics.add.collider(this.player1, this.objeto2, this.ColisionObj2, null, this);
        this.physics.add.collider(this.player1, this.objeto3, this.ColisionObj3, null, this);
        this.physics.add.collider(this.player1, this.objeto4, this.ColisionObj4, null, this);
        this.physics.add.collider(this.player1, this.objeto5, this.ColisionObj5, null, this);
        this.physics.add.collider(this.player1, this.gate, this.mundo2, null, this);
        this.createPlayer2();
        this.OutMonedas = this.physics.add.image(0, 0, 'GameOverPlayer').setOrigin(0).setScrollFactor(0);
        this.OutMonedas.setVisible(false);//sin monedas
        this.OutTime = this.physics.add.image(0, 0, 'GameOverTiempo').setOrigin(0).setScrollFactor(0);
        this.OutTime.setVisible(false);//sin tiempo
        this.OutComplete = this.physics.add.image(0, 0, 'GameComplete').setOrigin(0).setScrollFactor(0);
        this.OutComplete.setVisible(false);
        this.flechaOp = this.physics.add.sprite(616.5, 523, 'f-menu').setOrigin(0).setScrollFactor(0);//cragamos el sprite a animar previamente definido con sus caracteristicas en preload.js

        //creamos la animacion
        this.anims.create({
            key: 'moveflecha',
            frames: this.anims.generateFrameNumbers('f-menu', { start: 0, end: 2 }),
            frameRate: 4,
            repeat: -1
        });
        //iniciamos la animacion
        this.flechaOp.play('moveflecha', true);
        this.flechaOp.setVisible(false);
    }

    mundo2() {
        clearInterval(this.intervaloTIEMPO);
        this.music2.stop();
        this.velocidadX = 0;
        this.velocidadY = 0;
        this.volteoP1 = false;
        this.animacionStop = 'celebrate';
        this.animacionMove = 'celebrate';
        this.animacionJump = 'celebrate';
        this.animacionMoveP2 = 'celebrateP2';
        this.animacionJumpP2 = 'celebrateP2';
        this.animacionStopP2 = 'celebrateP2';
        this.player1.setPosition(3910, 320);

        if (this.isMultiPLayer) {
            this.volteoP2 = false;
            this.Jugador2.setPosition(3820, 320);
        }
        this.physics.pause();
        sessionStorage.setItem('PuntajeActual', this.monedasW2);
        sessionStorage.setItem('CruzObj2', this.objeto);
        setTimeout(() => {
            this.OutComplete.setVisible(true);
            this.flechaOp.setVisible(true);
            this.btnContinue = true;
        }, 2500)
    }

    gameOver() {
        /*resta monedas*/
        this.monedasW2 -= 10;
        if (this.monedasW2 <= 0) {
            console.log(this.monedasW2);
            this.tiempo = '00';
            this.OutMonedas.setVisible(true);
            this.flechaOp.setVisible(true);
            this.physics.pause();
            this.player1.body.setEnable(false);
            this.player1.setVisible(false);
            this.btnReload = true;
            if (this.isMultiPLayer) {
                this.Jugador2.setEnable(false);
                this.Jugador2.setVisible(false);
            }
        }
        this.monedasW2 < 0 ? this.textoMonedas.setText(`x0`) : this.textoMonedas.setText(`x${this.monedasW2}`);
        /*Fin Resta Monedas*/
    }
    temporizador() {
        this.intervaloTIEMPO = setInterval(() => {
            --this.tiempo;
            if (this.tiempo === 30) {
                this.mundo.setTint(0xfad6a5);
            } else if (this.tiempo === 15) {
                this.mundo.setTint(0x2d3451);
            } else if (this.tiempo === 0) {
                this.btnReload = true;
                this.physics.pause();
                this.OutTime.setVisible(true);
                this.flechaOp.setVisible(true);
                this.player1.body.setEnable(false);
                this.player1.setVisible(false);
                if (this.isMultiPLayer) {
                    this.physics.pause();
                    this.Jugador2.body.setEnable(false);
                    this.Jugador2.setVisible(false);
                }
                console.log("Se Acabo el tiempo y se muere");
            } else {
                if (this.tiempo < 0) {
                    this.tiempo = '00';
                }
                if (this.tiempo < 10 && this.tiempo > 0) {
                    this.tiempo = '0' + this.tiempo;
                }
                try {
                    this.textoTiempo.setText(`0:${this.tiempo}`);
                } catch (error) {
                    console.log(error);
                }
            }

        }, this.valorIntervalo);
    }
    /*Player1*/
    alert() {
        //suelo 1
        const posiciony = Math.trunc(this.player1.y);
        switch (posiciony) {
            case 245:
                this.estadoSuelo = true;
                break;
            case 322:
                this.estadoSuelo = true;
                break;
            case 495:
                this.estadoSuelo = true;
                break;
            case 328:
                this.estadoSuelo = true;
                break;
            case 497:
                this.estadoSuelo = true;
                break;
            case 498:
                this.estadoSuelo = true;
                break;
            case 416:
                this.estadoSuelo = true;
                break;
            case 574:
                this.estadoSuelo = true;
                break;
            case 317:
                this.estadoSuelo = true;
                break;
            case 323:
                this.estadoSuelo = true;
                break;
            default:
                this.estadoSuelo = false;

        }
    }
    alertCirculo() {
        this.estadoSuelo = true;
    }
    alertCirculo2() {
        this.estadoSueloP2 = true;
    }


    vaciow2_1() {
        this.damagePlayer1();
        this.player1.setPosition(435, 310);
    }

    vaciow2_2() {
        this.damagePlayer1();
        this.player1.setPosition(1144, 310);
    }

    vaciow2_3() {
        this.damagePlayer1();
        this.player1.setPosition(2412, 310);
    }

    bspecial() {

    }
    /*Fin Player 1*/
    /*Inicio Player 2*/
    alert2() {
        //suelo 2
        const posiciony = Math.trunc(this.Jugador2.y);

        switch (posiciony) {
            case 245:
                this.estadoSueloP2 = true;
                break;
            case 322:
                this.estadoSueloP2 = true;
                break;
            case 495:
                this.estadoSueloP2 = true;
                break;
            case 328:
                this.estadoSueloP2 = true;
                break;
            case 497:
                this.estadoSueloP2 = true;
                break;
            case 498:
                this.estadoSueloP2 = true;
                break;
            case 416:
                this.estadoSueloP2 = true;
                break;
            case 574:
                this.estadoSueloP2 = true;
                break;
            case 317:
                this.estadoSueloP2 = true;
                break;
            case 323:
                this.estadoSueloP2 = true;
                break;

            default:
                this.estadoSueloP2 = false;

        }
    }

    vaciow2_1_2() {
        this.damagePlayer2();
        this.Jugador2.setPosition(435, 310);
    }

    vaciow2_2_2() {
        this.damagePlayer2();
        this.Jugador2.setPosition(1144, 310);
    }

    vaciow2_3_2() {
        this.damagePlayer2();
        this.Jugador2.setPosition(2412, 310);
    }

    bspecial2() {

    }
    /*fin player 2*/
    //enemigos
    mosquito1Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        mosquito.EstadoMosquitos(this.Mosquito, 1200, 240);
    }
    mosquito1Colisionp2() {
        this.gameOver();
        this.damagePlayer2();
        mosquito.EstadoMosquitos(this.Mosquito, 1200, 240);
    }
    mosquito1Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        mosquito.EstadoMosquitos(this.Mosquito, 1200, 240);
    }
    mosquito2Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        mosquito.EstadoMosquitos(this.Mosquito2, 1470, 240);
    }
    mosquito2Colisionp2() {
        this.gameOver();
        this.damagePlayer2();
        mosquito.EstadoMosquitos(this.Mosquito2, 1470, 240);
    }
    mosquito3Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        mosquito.EstadoMosquitos(this.Mosquito3, 2780, 240);
    }
    mosquito3Colisionp2() {
        this.gameOver();
        this.damagePlayer2();
        mosquito.EstadoMosquitos(this.Mosquito3, 2780, 240);
    }
    mosquito4Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        mosquito.EstadoMosquitos(this.Mosquito4, 3020, 510);
    }
    mosquito4Colisionp2() {
        this.gameOver();
        this.damagePlayer2();
        mosquito.EstadoMosquitos(this.Mosquito4, 3020, 510);
    }
    serpiente1Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        Serpiente.EstadoSerpiente(this.Serpiente1, 800, 375);
    }
    serpiente1Colisionp2() {
        this.gameOver();
        this.damagePlayer2();
        Serpiente.EstadoSerpiente(this.Serpiente1, 800, 375);
    }
    serpiente2Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        Serpiente.EstadoSerpiente(this.Serpiente2, 2004, 375);
    }
    serpiente2Colisionp2() {
        this.gameOver();
        this.damagePlayer2();
        Serpiente.EstadoSerpiente(this.Serpiente2, 2004, 375);
    }
    //fin enemigos
    update() {
        //this.teclado();
        mosquito.Move4(this.Mosquito4, this.velocidadMosquito);
        mosquito.Move3(this.Mosquito3, this.velocidadMosquito);
        mosquito.Move2(this.Mosquito2, this.velocidadMosquito);
        mosquito.Move(this.Mosquito, this.velocidadMosquito);
        Serpiente.Move(this.Serpiente1, this.velocidadSerpiente);
        Serpiente.Move2(this.Serpiente2, this.velocidadSerpiente);
        this.moveController2(this.estadoSueloP2);
        this.moveController(this.estadoSuelo);
    }

    hitBala(player, bala) {
        this.gameOver();
        this.damagePlayer1();
        bala.disableBody(true, true);
    }

    hitBala2(player, bala) {
        this.gameOver();
        this.damagePlayer2();
        bala.disableBody(true, true);
    }

    hitFlecha(player, flecha) {
        this.gameOver();
        this.damagePlayer1();
        flecha.disableBody(true, true);
    }

    hitFlecha2(player, flecha) {
        this.gameOver();
        this.damagePlayer2();
        flecha.disableBody(true, true);
    }

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

    damagePlayer2() {
        this.Jugador2.setTint(0xff0000);
        this.Jugador2.setAlpha(0.5);
        setTimeout(() => {
            this.Jugador2.setAlpha(1);
        }, 100)
        setTimeout(() => {
            this.Jugador2.setAlpha(0.5);
        }, 300)
        setTimeout(() => {
            this.Jugador2.setAlpha(1);
        }, 400)
        setTimeout(() => {
            this.Jugador2.setAlpha(0.5);
        }, 500)
        setTimeout(() => {
            this.Jugador2.setAlpha(1);
        }, 600)
        setTimeout(() => {
            this.Jugador2.setAlpha(0.5);
        }, 700)
        setTimeout(() => {
            this.Jugador2.setAlpha(1);
        }, 800)
        setTimeout(() => {
            this.Jugador2.setAlpha(0.5);
            this.Jugador2.clearTint();
        }, 900)
        setTimeout(() => {
            this.Jugador2.setAlpha(1);
            this.Jugador2.clearTint();
        }, 1000)
    }
    //Activador de Objeto
    ObjetoMessage() {
        if (this.infoObjeto) {
            Swal.fire({
                position: "center",
                customClass: "manoDeDios",
                background: 'url(./assets/pieza-cruz.png) no-repeat center center',
                imageWidth: 50,
                imageHeight: 50,
                showConfirmButton: false,
            });
            this.physics.pause();
            clearInterval(this.intervaloTIEMPO);//
        } else {
            // console.log("test no Funciona ya se activo")
        }
    }

    //contador de objetos 
    countObjetos() {
        this.objeto++;
        this.textoObjetos.setText(`x${this.objeto}`);
    }

    //colision Objetos Suma
    ColisionObj1() {
        this.objeto1.disableBody(true, true);
        this.countObjetos();
        this.ObjetoMessage();
        this.infoObjeto = false;
    }
    //OBJ2
    ColisionObj2() {
        this.objeto2.disableBody(true, true);
        this.countObjetos();
        this.ObjetoMessage();
        this.infoObjeto = false;
    }
    //OBJ3
    ColisionObj3() {
        this.objeto3.disableBody(true, true);
        this.countObjetos();
        this.ObjetoMessage();
        this.infoObjeto = false;
    }
    //OBJ4
    ColisionObj4() {
        this.objeto4.disableBody(true, true);
        this.countObjetos();
        this.ObjetoMessage();
        this.infoObjeto = false;
    }
    //OBJ5
    ColisionObj5() {
        this.objeto5.disableBody(true, true);
        this.countObjetos();
        this.ObjetoMessage();
        this.infoObjeto = false;
    }

    moveController(onFloor) {
        const control = this.input.gamepad.getPad(0);
        if (!control) {
            return;
        }

        if (control.buttons[1].pressed && this.btnReload) {

            setTimeout(() => {
                this.scene.stop('Plano2');
                window.location.reload();
            }, 3500)

        }
        if (control.buttons[1].pressed && this.btnContinue) {

            this.scene.stop('Plano2');
            this.camara.fade(2500);
            this.scene.start('Mapa3');

        }

        if (control.buttons[0].pressed && this.btnReload) {

            setTimeout(() => {
                this.scene.stop('Plano2');
                window.location.reload();
            }, 1000);

        }

        if (control.buttons[0].pressed && this.btnContinue) {

            this.scene.stop('Plano2');
            this.camara.fade(2500);
            this.scene.start('Mapa3');

        }

        if (control.buttons[1].pressed && onFloor) {
            this.estadoSuelo = false;
            this.player1.setVelocityY(-this.velocidadY * 2);
        }
        if (control.buttons[0].pressed && onFloor) {
            this.estadoSuelo = false;
            this.player1.setVelocityY(-this.velocidadY * 2);

        }

        if (control.buttons[3].pressed && this.objeto_i.body.onFloor()) {
            if (!this.infoObjeto) {
                this.objeto_i.setVelocityY(-150);
                this.objeto_i.body.setGravityY(0);
                Swal.close();
                this.physics.resume();//
                this.temporizador();
            }
        }

        if (control.axes.length) {
            const axisH = control.axes[0].getValue();
            if (axisH === -1) {
                this.player1.setVelocityX(this.velocidadX);
                this.player1.setFlipX(false);

            } else if (axisH === 1) {
                this.player1.setVelocityX(-this.velocidadX);
                this.player1.setFlipX(this.volteoP1);
            } else {
                this.player1.setVelocityX(0);
            }
            this.estadoSuelo ?
                this.player1.body.velocity.x !== 0 ?
                    this.player1.play(`${this.animacionMove}`, true) : this.player1.play(`${this.animacionStop}`, true) :
                this.player1.play(`${this.animacionJump}`, true);
        }
    }
    moveController2(onFloor) {
        const control = this.input.gamepad.getPad(1);
        if (this.isMultiPLayer) {
            if (!control) {
                return;
            }
            if (control.buttons[1].pressed && onFloor) {
                this.estadoSueloP2 = false;
                this.Jugador2.setVelocityY(-this.velocidadY * 2);
            }
            if (control.buttons[0].pressed && onFloor) {
                this.estadoSueloP2 = false;
                this.Jugador2.setVelocityY(-this.velocidadY * 2);
            }


            if (control.buttons[3].pressed && this.objeto_i.body.onFloor()) {
                if (!this.infoObjeto) {
                    this.objeto_i.setVelocityY(-150);
                    this.objeto_i.body.setGravityY(0);
                    Swal.close();
                    this.physics.resume();//
                    this.temporizador();
                }
            }

            if (control.axes.length) {
                const axisH = control.axes[0].getValue();
                if (axisH === -1) {
                    this.Jugador2.setVelocityX(this.velocidadX);
                    this.Jugador2.setFlipX(false);
                } else if (axisH === 1) {
                    this.Jugador2.setVelocityX(-this.velocidadX);
                    this.Jugador2.setFlipX(this.volteoP2);
                } else {
                    this.Jugador2.setVelocityX(0);
                }
                this.estadoSueloP2 ?
                    this.Jugador2.body.velocity.x !== 0 ?
                        this.Jugador2.play(`${this.animacionMoveP2}`, true) : this.Jugador2.play(`${this.animacionStopP2}`, true) :
                    this.Jugador2.play(`${this.animacionJumpP2}`, true);
            }
        }
    }
    /*   teclado() {
           this.cursors = this.input.keyboard.createCursorKeys();
           const { left, right, up } = this.cursors;
           if (left.isDown) {
               console.log(this.player1.x);
               this.player1.setVelocityX(-this.velocidadX);
               this.player1.setFlipX(true);
           } else if (right.isDown) {
               console.log(this.player1.x);
               this.player1.setVelocityX(this.velocidadX);
               this.player1.setFlipX(false);
           } else {
               this.player1.setVelocityX(0);
           }
           if (up.isDown && this.estadoSuelo) {
               this.estadoSuelo=false;
               this.player1.setVelocityY(-this.velocidadY * 2);
           }
       }*/
}
export default Plano2;
