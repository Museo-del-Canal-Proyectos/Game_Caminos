import BaseScene from "./BaseScene";
import DataPlataformaW3 from "./plataforma_w3/plataforma_w3";
import DataVacio from "./plataforma_w3/plataforma_Vacio3";
import DataVacio_2 from "./plataforma_w3/plataforma_Vacio3_2";
import DataVacio_3 from "./plataforma_w3/plataforma_Vacio3_3";
import DataVacio_4 from "./plataforma_w3/plataforma_Vacio3_4";
import DataVacio_5 from "./plataforma_w3/plataforma_Vacio3_5";
import AnimacionPlayer1 from "../scenes/Jugadores/player";
import AnimacionPlayer2 from "../scenes/Jugadores/player2";
import MosquitoACT1 from "../scenes/enemigosFuncionW3/mosquitosw3";
import SerpientesACT1 from "../scenes/enemigosFuncionW3/serpientesw3";

class Plano3 extends BaseScene {
    isMultiPLayer;
    Jugador2 = null;
    lluvia = null;
    infoObjeto = true;
    mundo = null;
    intervaloTIEMPO = null;
    tiempo = 45;//
    textoTiempo = "0:00";//
    valorIntervalo = 1000;//
    monedasW3;//
    textoObjetos = null;//
    textoMonedas = null;//
    objeto = 0; //
    estadoSueloP2;
    plataformaW3 = null;
    plataformaVacio3 = null;
    plataformaVacio3_2 = null;
    plataformaVacio3_3 = null;
    plataformaVacio3_4 = null;
    plataformaVacio3_5 = null;
    Circle1 = null;
    Circle2 = null;
    estadoSuelo;
    animacionStop = 'stop';
    animacionMove = 'move';
    animacionJump = 'jump';
    animacionStopP2 = 'stop2';
    animacionMoveP2 = 'move2';
    animacionJumpP2 = 'jump2';
    velocidadX = 300;
    velocidadX_P2 = 300;
    velocidadY = 280;
    volteoP1= true;
    volteoP2= true;
    Mosquito = null;
    entradaLLuvia = null;
    salidaLLuvia = null;
    entradaLLuviaP2 = null;
    salidaLLuviaP2 = null;
    Mosquito2 = null;
    Mosquito3 = null;
    Mosquito4 = null;
    Mosquito5 = null;
    Serpiente1 = null;
    Serpiente2 = null;
    velocidadMosquito = 230;
    velocidadSerpiente = 100;
    balas = null;
    balas2 = null;
    flechas = null;
    flechas2 = null;
    velocidadBalas = 325;
    objeto1 = null;
    objeto2 = null;
    objeto3 = null;;
    objeto4 = null;
    objeto5 = null;

    constructor(config) {
        super('Plano3', config);
    }

    gateMundo2() {
        this.gate = this.physics.add.staticGroup();
        this.gate.create(3945, 300, 'block_2').setScale(0, 4).refreshBody();
    }
    createPlayer1() {
        //cuando son dos seteo en storage jugador 1 en seleccion  
        this.storagePlayer = sessionStorage.getItem('selectPLayer');
        //33
        this.player1 = this.physics.add.sprite(33, 326, this.storagePlayer)
            .setOrigin(0);
        this.player1.setCollideWorldBounds(true);
        this.player1.body.setGravityY(820);
        this.player1.body.setSize(50, 120);
        AnimacionPlayer1(this.anims, this.storagePlayer /*'player2'*/);
        this.cameras.main.startFollow(this.player1, true);
    }

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
            this.physics.add.collider(this.Jugador2, this.plataformaW3, this.colisionMundo2, null, this);
            this.physics.add.collider(this.Jugador2, this.plataformaVacio3, this.colisionVacio1_P2, null, this);
            this.physics.add.collider(this.Jugador2, this.plataformaVacio3_2, this.colisionVacio2_P2, null, this);
            this.physics.add.collider(this.Jugador2, this.plataformaVacio3_3, this.colisionVacio3_P2, null, this);
            this.physics.add.collider(this.Jugador2, this.plataformaVacio3_4, this.colisionVacio4_P2, null, this);
            this.physics.add.collider(this.Jugador2, this.plataformaVacio3_5, this.colisionVacio5_P2, null, this);
            this.physics.add.collider(this.Jugador2, this.Circle1, this.colisionEsfera_P2, null, this);
            this.physics.add.collider(this.Jugador2, this.Circle2, this.colisionEsfera_P2, null, this);
            //this.physics.add.collider(this.Jugador2, this.entradaLLuviaP2, this.lluviaInP2, null, this);
            //this.physics.add.collider(this.Jugador2, this.salidaLLuviaP2, this.lluviaOutP2, null, this);
            this.physics.add.collider(this.Jugador2, this.Mosquito, this.mosquito1Colisionp1P2, null, this);
            this.physics.add.collider(this.Jugador2, this.Mosquito2, this.mosquito2Colisionp1P2, null, this);
            this.physics.add.collider(this.Jugador2, this.Mosquito3, this.mosquito3Colisionp1P2, null, this);
            this.physics.add.collider(this.Jugador2, this.Mosquito4, this.mosquito4Colisionp1P2, null, this);
            this.physics.add.collider(this.Jugador2, this.Mosquito5, this.mosquito5Colisionp1P2, null, this);
            this.physics.add.collider(this.Jugador2, this.Serpiente1, this.serpiente1Colisionp1P2, null, this);
            this.physics.add.collider(this.Jugador2, this.Serpiente2, this.serpiente2Colisionp1P2, null, this);
            this.physics.add.overlap(this.Jugador2, this.balas, this.hitBala1P2, null, this);
            this.physics.add.overlap(this.Jugador2, this.balas2, this.hitBala2P2, null, this);
            this.physics.add.overlap(this.Jugador2, this.flechas, this.hitflecha1P2, null, this);
            this.physics.add.overlap(this.Jugador2, this.flechas2, this.hitflecha2P2, null, this);
            this.physics.add.collider(this.Jugador2, this.objeto1, this.ColisionObj1, null, this);
            this.physics.add.collider(this.Jugador2, this.objeto2, this.ColisionObj2, null, this);
            this.physics.add.collider(this.Jugador2, this.objeto3, this.ColisionObj3, null, this);
            this.physics.add.collider(this.Jugador2, this.objeto4, this.ColisionObj4, null, this);
            this.physics.add.collider(this.Jugador2, this.objeto5, this.ColisionObj5, null, this);
            this.physics.add.collider(this.Jugador2, this.gate, this.vacio,null,this);
        } else {
            console.log("Jugador 2 no conectado en mundo 2")
        }
    }

    vacio(){

    }
    CirculosW3() {
        this.Circle1 = this.add.graphics();
        this.Circle1.fillCircle(100, -300, 100);
        this.physics.world.enable(this.Circle1);
        this.Circle1.body.setCircle(100, 0, -400);
        this.Circle1.body.setCollideWorldBounds(true);
        this.Circle1.body.setImmovable(true);
        this.Circle1.setPosition(3225, 761);

        this.Circle2 = this.add.graphics();
        this.Circle2.fillCircle(100, -300, 100);
        this.physics.world.enable(this.Circle2);
        this.Circle2.body.setCircle(100, 0, -400);
        this.Circle2.body.setCollideWorldBounds(true);
        this.Circle2.body.setImmovable(true);
        this.Circle2.setPosition(3305, 674);
        console.log(this.Circle2);
    }

    create() {
        this.monedasW3 = sessionStorage.getItem('PuntajeActual');
        this.music3 = this.sound.add('w3');
        this.lluviaMusic = this.sound.add('rain');
        this.music3.play();
        this.camara = this.cameras.main.setBounds(0, 0, 4095, 768);
        this.camara.flash(2000);

        this.objeto_i = this.physics.add.image(200, 157, 'block_3').setScale(0.2).setOrigin(0);
        this.linea = this.physics.add.image(110, 170, 'block_3').setImmovable(true).setScale(5, 0).setOrigin(0);
        this.objeto_i.body.setGravityY(500);
        this.physics.add.collider(this.objeto_i, this.linea, null, null, this);

        this.physics.world.setBounds(0, 0, 4095, 768);
        this.mundo = this.add.image(0, 0, 'Plano3').setOrigin(0);
        this.add.image(250, 30, 'estado').setScale(1).setScrollFactor(0);
        this.add.image(353, 24, 'herradura-estado').setScale(1).setScrollFactor(0);
        this.textoTiempo = this.add.text(65, 15, `0:${this.tiempo}`, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.textoMonedas = this.add.text(230, 15, 'x' + this.monedasW3, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.textoObjetos = this.add.text(373, 15, 'x' + this.objeto, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.plataformaW3 = this.physics.add.staticGroup();
        this.plataformaVacio3 = this.physics.add.staticGroup();
        this.plataformaVacio3_2 = this.physics.add.staticGroup();
        this.plataformaVacio3_3 = this.physics.add.staticGroup();
        this.plataformaVacio3_4 = this.physics.add.staticGroup();
        this.plataformaVacio3_5 = this.physics.add.staticGroup();
        DataPlataformaW3(this.plataformaW3);
        DataVacio(this.plataformaVacio3);
        DataVacio_2(this.plataformaVacio3_2);
        DataVacio_3(this.plataformaVacio3_3);
        DataVacio_4(this.plataformaVacio3_4);
        DataVacio_5(this.plataformaVacio3_5);
        this.CirculosW3();
        this.Mosquito = this.physics.add.sprite(430, 300, 'mosquito').setImmovable(true).setOrigin(0);
        this.Mosquito2 = this.physics.add.sprite(745, 300, 'mosquito').setImmovable(true).setOrigin(0);
        this.Mosquito3 = this.physics.add.sprite(1010, 300, 'mosquito').setImmovable(true).setOrigin(0);
        this.Mosquito4 = this.physics.add.sprite(1272, 300, 'mosquito').setImmovable(true).setOrigin(0);
        this.Mosquito5 = this.physics.add.sprite(2490, 300, 'mosquito').setImmovable(true).setOrigin(0);
        this.Serpiente1 = this.physics.add.sprite(1400, 375, 'serpiente').setImmovable(true).setOrigin(0);
        this.Serpiente2 = this.physics.add.sprite(2600, 375, 'serpiente').setImmovable(true).setOrigin(0);
        MosquitoACT1.createMosquitoW3_1(this.Mosquito, this.velocidadMosquito);
        MosquitoACT1.Animacion(this.Mosquito, this.anims);
        MosquitoACT1.createMosquitoW3_1(this.Mosquito2, this.velocidadMosquito - 130);
        MosquitoACT1.Animacion(this.Mosquito2, this.anims);
        MosquitoACT1.createMosquitoW3_1(this.Mosquito3, this.velocidadMosquito - 80);
        MosquitoACT1.Animacion(this.Mosquito3, this.anims);
        MosquitoACT1.createMosquitoW3_1(this.Mosquito4, this.velocidadMosquito - 150);
        MosquitoACT1.Animacion(this.Mosquito4, this.anims);
        MosquitoACT1.createMosquitoW3_1(this.Mosquito5, this.velocidadMosquito);
        MosquitoACT1.Animacion(this.Mosquito5, this.anims);
        //Serpientes
        SerpientesACT1.createSerpiente1(this.Serpiente1, this.velocidadSerpiente);
        SerpientesACT1.createSerpiente2(this.Serpiente2, this.velocidadSerpiente);
        SerpientesACT1.Animacion(this.Serpiente1, this.anims);
        SerpientesACT1.Animacion(this.Serpiente2, this.anims);
        ////test lluvia lentitud efecto
        // this.entradaLLuvia = this.physics.add.sprite(1353, 228, 'block_2').setImmovable(true).setScale(0, 3).refreshBody();
        // this.salidaLLuvia = this.physics.add.sprite(1353, 228, 'block_2').setImmovable(true).setScale(0, 3).refreshBody();
        // this.salidaLLuvia.body.setEnable(false);
        // ///testlluvia player2
        // this.entradaLLuviaP2 = this.physics.add.sprite(1353, 228, 'block_2').setImmovable(true).setScale(0, 3).refreshBody();
        // this.salidaLLuviaP2 = this.physics.add.sprite(1353, 228, 'block_2').setImmovable(true).setScale(0, 3).refreshBody();
        // this.salidaLLuviaP2.body.setEnable(false);
        this.balas = this.physics.add.group({
            key: 'bala1',
            frame: [0, 1, 2],
            setXY:
            {
                x: 4500,
                y: 100,
                stepX: 1500,
                stepY: 150,
            },
            setScale: { x: 0.7, y: 0.7 },
            velocityX: -this.velocidadBalas,
        });

        this.balas2 = this.physics.add.group({
            key: 'bala1',
            frame: [0, 1, 2],
            setXY:
            {
                x: 9000,
                y: 100,
                stepX: 1500,
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
                x: 18000,
                y: 100,
                stepX: 1000,
                stepY: 150,
            },
            setScale: { x: 0.5, y: 0.5 },
            velocityX: -this.velocidadBalas,
        });

        this.flechas2 = this.physics.add.group({
            key: 'flecha1',
            frame: [0, 1, 2],
            setXY:
            {
                x: 16000,
                y: 100,
                stepX: 1000,
                stepY: 150,
            },
            setScale: { x: 0.5, y: 0.5 },
            velocityX: -this.velocidadBalas,
        });
        this.temporizador();
        this.createObjetos();
        this.gateMundo2();
        this.createPlayer1();
        this.createPlayer2();
        this.lluvia = this.physics.add.sprite(1525, 0, 'lluvia').setImmovable(true).setOrigin(0);
        this.add.image(1525, 0, 'nubes').setOrigin(0);
        this.anims.create({
            key: 'caer',
            frames: this.anims.generateFrameNumbers('lluvia', { start: 0, end: 5 }),
            frameRate: 8,
            repeat: -1,
        })
        this.lluvia.play('caer', true);
        //this.lluvia3.play('caer',true);
        this.physics.add.collider(this.player1, this.plataformaW3, this.colisionMundo, null, this);
        this.physics.add.collider(this.player1, this.plataformaVacio3, this.colisionVacio1, null, this);
        this.physics.add.collider(this.player1, this.plataformaVacio3_2, this.colisionVacio2, null, this);
        this.physics.add.collider(this.player1, this.plataformaVacio3_3, this.colisionVacio3, null, this);
        this.physics.add.collider(this.player1, this.plataformaVacio3_4, this.colisionVacio4, null, this);
        this.physics.add.collider(this.player1, this.plataformaVacio3_5, this.colisionVacio5, null, this);
        this.physics.add.collider(this.player1, this.Circle1, this.colisionEsfera, null, this);
        this.physics.add.collider(this.player1, this.Circle2, this.colisionEsfera, null, this);
        //this.physics.add.collider(this.player1, this.entradaLLuvia, this.lluviaIn, null, this);
        // this.physics.add.collider(this.player1, this.salidaLLuvia, this.lluviaOut, null, this);
        this.physics.add.collider(this.player1, this.Mosquito, this.mosquito1Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Mosquito2, this.mosquito2Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Mosquito3, this.mosquito3Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Mosquito4, this.mosquito4Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Mosquito5, this.mosquito5Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Serpiente1, this.serpiente1Colisionp1, null, this);
        this.physics.add.collider(this.player1, this.Serpiente2, this.serpiente2Colisionp1, null, this);
        this.physics.add.overlap(this.player1, this.balas, this.hitBala1, null, this);
        this.physics.add.overlap(this.player1, this.balas2, this.hitBala2, null, this);
        this.physics.add.overlap(this.player1, this.flechas, this.hitflecha1, null, this);
        this.physics.add.overlap(this.player1, this.flechas2, this.hitflecha2, null, this);
        this.physics.add.collider(this.player1, this.objeto1, this.ColisionObj1, null, this);
        this.physics.add.collider(this.player1, this.objeto2, this.ColisionObj2, null, this);
        this.physics.add.collider(this.player1, this.objeto3, this.ColisionObj3, null, this);
        this.physics.add.collider(this.player1, this.objeto4, this.ColisionObj4, null, this);
        this.physics.add.collider(this.player1, this.objeto5, this.ColisionObj5, null, this);
        this.physics.add.collider(this.player1, this.gate, this.mundo2, null, this);
    }

    sonidoLLuvuia(player) {
        if (player.x > 1470 && player.x < 2280) {
            this.velocidadX = 160;
            if (this.lluviaMusic.isPlaying) {
                //no hacemos nada
                this.music3.stop();
            } else {
                this.lluviaMusic.play();
            }
        } else {
            if (this.music3.isPlaying) {
                //no hacemos nada
                this.lluviaMusic.stop();
            } else {
                this.music3.play();
            }
            this.velocidadX = 300;
        }
    }
    
    //lentitud Player2
    sonidoLLuvuia_P2(player) {
       if(this.isMultiPLayer){
        if (player.x > 1470 && player.x < 2280) {
            this.velocidadX_P2 = 160;
        }else{
            this.velocidadX_P2 = 300;
        }
       }
    }

    /**/
    mundo2() {
        clearInterval(this.intervaloTIEMPO);
        this.volteoP1=false;
        this.velocidadX = 0;
        this.velocidadY = 0;
        this.animacionStop='celebrate';
        this.animacionJump='celebrate';
        this.animacionMove='celebrate';
        this.animacionMoveP2='celebrateP2';
        this.animacionJumpP2='celebrateP2';
        this.animacionStopP2='celebrateP2';
        this.player1.setPosition(3790,127);
        if(this.isMultiPLayer){
            this.volteoP2=false;
            this.Jugador2.setPosition(3685,127);
        }
        this.physics.pause();
        sessionStorage.setItem('PuntajeActual',this.monedasW3);
        this.camara.fade(2500);
        setTimeout(() => {
            this.physics.resume();
            this.game.sound.stopAll();
            this.scene.stop('Plano3');
            this.scene.start('Mapa4');
        }, 2000)
    }
 /**/
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
    /*resta monedas*/
    gameOver() {
        this.monedasW3 -= 10;
        if (this.monedasw3 == 0) {
            this.tiempo = '00';
        }
        this.monedasW3 < 0 ? this.textoMonedas.setText(`x0`) : this.textoMonedas.setText(`x${this.monedasW3}`);
    }
    /*Fin Resta Monedas*/
    temporizador() {
        this.intervaloTIEMPO = setInterval(() => {
            --this.tiempo;
            if (this.tiempo === 30) {
                this.mundo.setTint(0xfad6a5);
            } else if (this.tiempo === 15) {
                this.mundo.setTint(0x2d3451);
            } else if (this.tiempo === 0) {
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

    colisionMundo() {
        const posiciony = Math.trunc(this.player1.y);
        switch (posiciony) {
            case 327:
                this.estadoSuelo = true;
                break;
            case 493:
                this.estadoSuelo = true;
                break;
            case 494:
                this.estadoSuelo = true;
                break;
            case 425:
                this.estadoSuelo = true;
                break;
            case 157:
                this.estadoSuelo = true;
                break;
            case 158:
                this.estadoSuelo = true;
                break;
            default:
                this.estadoSuelo = false;
        }
    }
    colisionEsfera() {
        this.estadoSuelo = true;
    }
    colisionVacio1() {
        this.player1.setPosition(338, 317);
    }
    colisionVacio2() {
        this.player1.setPosition(695, 480);
    }
    colisionVacio3() {
        this.player1.setPosition(938, 420);
    }
    colisionVacio4() {
        this.player1.setPosition(1198, 318);
    }
    colisionVacio5() {
        this.player1.setPosition(2358, 315);
    }
    //player2
    colisionMundo2() {
        const posiciony = Math.trunc(this.Jugador2.y);
        switch (posiciony) {
            case 327:
                this.estadoSueloP2 = true;
                break;
            case 493:
                this.estadoSueloP2 = true;
                break;
            case 494:
                this.estadoSueloP2 = true;
                break;
            case 425:
                this.estadoSueloP2 = true;
                break;
            case 157:
                this.estadoSueloP2 = true;
                break;
            case 158:
                this.estadoSueloP2 = true;
                break;
            default:
                this.estadoSueloP2 = false;
        }
    }
    colisionEsfera_P2() {
        this.estadoSueloP2 = true;
    }
    colisionVacio1_P2() {
        this.Jugador2.setPosition(338, 317);
    }
    colisionVacio2_P2() {
        this.Jugador2.setPosition(695, 480);
    }
    colisionVacio3_P2() {
        this.Jugador2.setPosition(938, 420);
    }
    colisionVacio4_P2() {
        this.Jugador2.setPosition(1198, 318);
    }
    colisionVacio5_P2() {
        this.Jugador2.setPosition(2358, 315);
    }

    lluviaIn() {
        this.entradaLLuvia.body.setEnable(false);
        setTimeout(() => {
            this.salidaLLuvia.body.setEnable(true);
        }, 1000)
        this.velocidadX = 160;
        console.log("quitamos velocidad", this.velocidadX);
    }

    lluviaOut() {
        this.salidaLLuvia.body.setEnable(false);
        setTimeout(() => {
            this.entradaLLuvia.body.setEnable(true);
        }, 1000)
        this.velocidadX = 300;
        console.log("regresamos velocidad", this.velocidadX);
    }

    lluviaInP2() {
        this.entradaLLuviaP2.body.setEnable(false);
        setTimeout(() => {
            this.salidaLLuviaP2.body.setEnable(true);
        }, 1000)
        this.velocidadX_P2 = 160;
        console.log("quitamos velocidad P2", this.velocidadX_P2);
    }

    lluviaOutP2() {
        this.salidaLLuviaP2.body.setEnable(false);
        setTimeout(() => {
            this.entradaLLuviaP2.body.setEnable(true);
        }, 1000)
        this.velocidadX_P2 = 300;
        console.log("regresamos velocidad P2", this.velocidadX_P2);
    }

    mosquito1Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        MosquitoACT1.EstadoMosquitos(this.Mosquito, 430, 300);
    }
    mosquito1Colisionp1P2() {
        this.gameOver();
        this.damagePlayer2();
        MosquitoACT1.EstadoMosquitos(this.Mosquito, 430, 300);
    }

    mosquito2Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        MosquitoACT1.EstadoMosquitos(this.Mosquito2, 745, 300);
    }
    mosquito2Colisionp1P2() {
        this.gameOver();
        this.damagePlayer2();
        MosquitoACT1.EstadoMosquitos(this.Mosquito2, 745, 300);
    }

    mosquito3Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        MosquitoACT1.EstadoMosquitos(this.Mosquito3, 1010, 300);
    }
    mosquito3Colisionp1P2() {
        this.gameOver();
        this.damagePlayer2();
        MosquitoACT1.EstadoMosquitos(this.Mosquito3, 1010, 300);
    }

    mosquito4Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        MosquitoACT1.EstadoMosquitos(this.Mosquito4, 1272, 300);
    }
    mosquito4Colisionp1P2() {
        this.gameOver();
        this.damagePlayer2();
        MosquitoACT1.EstadoMosquitos(this.Mosquito4, 1272, 300);
    }

    mosquito5Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        MosquitoACT1.EstadoMosquitos(this.Mosquito5, 2490, 300);
    }
    mosquito5Colisionp1P2() {
        this.gameOver();
        this.damagePlayer2();
        MosquitoACT1.EstadoMosquitos(this.Mosquito5, 2490, 300);
    }

    serpiente1Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        SerpientesACT1.EstadoSerpiente(this.Serpiente1, 1400, 375);
        this.player1.setVelocityX(0);
    }
    serpiente1Colisionp1P2() {
        this.gameOver();
        this.damagePlayer2();
        SerpientesACT1.EstadoSerpiente(this.Serpiente1, 1400, 375);
        this.Jugador2.setVelocityX(0);
    }

    serpiente2Colisionp1() {
        this.gameOver();
        this.damagePlayer1();
        SerpientesACT1.EstadoSerpiente(this.Serpiente2, 2600, 375);
        this.player1.setVelocityX(0);
    }
    serpiente2Colisionp1P2() {
        this.gameOver();
        this.damagePlayer2();
        SerpientesACT1.EstadoSerpiente(this.Serpiente2, 2600, 375);
        this.Jugador2.setVelocityX(0);
    }

    hitBala1(player, bala) {
        this.gameOver();
        this.damagePlayer1();
        bala.disableBody(true, true);
    }
    hitBala2(player, bala) {
        this.gameOver();
        this.damagePlayer1();
        bala.disableBody(true, true);
    }
    hitflecha1(player, flecha) {
        this.gameOver();
        this.damagePlayer1();
        flecha.disableBody(true, true);
    }
    hitflecha2(player, bala) {
        this.gameOver();
        this.damagePlayer1();
        bala.disableBody(true, true);
    }
    //P2
    hitBala1P2(player, bala) {
        this.gameOver();
        this.damagePlayer2();
        bala.disableBody(true, true);
    }
    hitBala2P2(player, bala) {
        this.gameOver();
        this.damagePlayer2();
        bala.disableBody(true, true);
    }
    hitflecha1P2(player, flecha) {
        this.gameOver();
        this.damagePlayer2();
        flecha.disableBody(true, true);
    }
    hitflecha2P2(player, bala) {
        this.gameOver();
        this.damagePlayer2();
        bala.disableBody(true, true);
    }
    //contador de objetos 
    countObjetos() {
        this.objeto++;
        this.textoObjetos.setText(`x${this.objeto}`);
    }
    //Activador de Objeto
    ObjetoMessage() {
        if (this.infoObjeto) {
            Swal.fire({
                position: "center",
                customClass: "manoDeDios",
                background: 'url(./assets/pieza-herradura.png) no-repeat center center',
                imageWidth: 50,
                imageHeight: 50,
                showConfirmButton: false,
            });
            this.physics.pause();
            clearInterval(this.intervaloTIEMPO);//limpio intervalo
        } else {
            // console.log("test no Funciona ya se activo")
        }
    }

    createObjetos() {
        this.objeto1 = this.physics.add.image(608, 590, 'herradura').setScale(0.9);
        this.objeto2 = this.physics.add.image(900, 520, 'herradura').setScale(0.9);
        this.objeto3 = this.physics.add.image(1175, 420, 'herradura').setScale(0.9);
        this.objeto4 = this.physics.add.image(1976, 420, 'herradura').setScale(0.9);
        this.objeto5 = this.physics.add.image(3145, 420, 'herradura').setScale(0.9);
    }
    //colision Objetos Suma
    //OBJ1
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

    update() {
       // console.log(this.player1.x, ":", this.player1.y);
        MosquitoACT1.MoveW3_1(this.Mosquito, this.velocidadMosquito);
        MosquitoACT1.MoveW3_1(this.Mosquito2, this.velocidadMosquito);
        MosquitoACT1.MoveW3_1(this.Mosquito3, this.velocidadMosquito);
        MosquitoACT1.MoveW3_1(this.Mosquito4, this.velocidadMosquito);
        MosquitoACT1.MoveW3_1(this.Mosquito5, this.velocidadMosquito + 120);
        SerpientesACT1.MoveW3_1(this.Serpiente1, this.velocidadSerpiente);
        SerpientesACT1.MoveW3_2(this.Serpiente2, this.velocidadSerpiente);
        this.sonidoLLuvuia(this.player1);
        this.sonidoLLuvuia_P2(this.Jugador2);
        this.moveController(this.estadoSuelo);
        this.moveController2(this.estadoSueloP2);
        //console.log(this.Serpiente1.x);
        //console.log(this.player1.x,": ",this.player1.y);
    }

    moveController(onFloor) {
        const control = this.input.gamepad.getPad(0);
        if (!control) {
            return;
        }
        if (control.buttons[1].pressed && onFloor) {
            this.estadoSuelo = false;
            this.player1.setVelocityY(-this.velocidadY * 2);
        }
        if (control.buttons[0].pressed && onFloor) {
            this.estadoSuelo = false;
            this.player1.setVelocityY(-this.velocidadY * 2);
        }

        if(control.buttons[3].pressed && this.objeto_i.body.onFloor()){
            if(!this.infoObjeto){
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

            if(control.buttons[3].pressed && this.objeto_i.body.onFloor()){
                if(!this.infoObjeto){
                 this.objeto_i.setVelocityY(-150);
                 this.objeto_i.body.setGravityY(0);
                 Swal.close();
                 this.physics.resume();//
                 this.temporizador();
                }
             }

            if (control.buttons[0].pressed && onFloor) {
                this.estadoSueloP2 = false;
                this.Jugador2.setVelocityY(-this.velocidadY * 2);
            }
            if (control.axes.length) {
                const axisH = control.axes[0].getValue();
                if (axisH === -1) {
                    this.Jugador2.setVelocityX(this.velocidadX_P2);
                    this.Jugador2.setFlipX(false);
                } else if (axisH === 1) {
                    this.Jugador2.setVelocityX(-this.velocidadX_P2);
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



    // teclado() {
    //     this.cursors = this.input.keyboard.createCursorKeys();
    //     const { left, right, up } = this.cursors;

    //     if (left.isDown) {
    //         this.player1.setFlipX(true);
    //         this.player1.setVelocityX(-100);
    //     }
    //     else if (right.isDown) {
    //         this.player1.setFlipX(false);
    //         this.player1.setVelocityX(100);
    //     }
    //     else if (up.isDown) {
    //         this.player1.setVelocityY(-100);
    //     } else {
    //         this.player1.setVelocityX(0);
    //     }
    // }
}
export default Plano3;