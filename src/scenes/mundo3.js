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
    lluvia2 = null;
    mundo = null;
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
    Mosquito = null;
    entradaLLuvia=null;
    salidaLLuvia=null;
    entradaLLuviaP2=null;
    salidaLLuviaP2=null;
    Mosquito2 = null;
    Mosquito3 = null;
    Mosquito4 = null;
    Mosquito5 = null;
    Serpiente1 = null;
    Serpiente2 = null;
    velocidadMosquito  = 230;
    velocidadSerpiente = 100;
    balas = null;
    balas2 = null;
    flechas = null;
    flechas2 = null;
    velocidadBalas = 325;

    constructor(config) {
        super('Plano3', config);
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
            this.physics.add.collider(this.Jugador2,this.entradaLLuviaP2,this.lluviaInP2,null,this);
            this.physics.add.collider(this.Jugador2,this.salidaLLuviaP2,this.lluviaOutP2,null,this);
        } else {
            console.log("Jugador 2 no conectado en mundo 2")
        }
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
        this.cameras.main.setBounds(0, 0, 4095, 768);
        this.physics.world.setBounds(0, 0, 4095, 768);
        this.mundo = this.add.image(0, 0, 'Plano3').setOrigin(0);
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
        console.log(this.lluvia2);
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
        SerpientesACT1.Animacion(this.Serpiente1, this.anims);
        SerpientesACT1.createSerpiente1(this.Serpiente2, this.velocidadSerpiente);
        SerpientesACT1.Animacion(this.Serpiente2, this.anims);
        ////test lluvia lentitud efecto
        this.entradaLLuvia=this.physics.add.sprite(1353,228,'block_2').setImmovable(true).setScale(0,3).refreshBody();
        this.salidaLLuvia=this.physics.add.sprite(1353,228,'block_2').setImmovable(true).setScale(0,3).refreshBody();
        this.salidaLLuvia.body.setEnable(false);
        ///testlluvia player2
        this.entradaLLuviaP2=this.physics.add.sprite(1353,228,'block_2').setImmovable(true).setScale(0,3).refreshBody();
        this.salidaLLuviaP2=this.physics.add.sprite(1353,228,'block_2').setImmovable(true).setScale(0,3).refreshBody();
        this.salidaLLuviaP2.body.setEnable(false);

  
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
        
        this.createPlayer1();
        this.createPlayer2();
        this.lluvia  = this.physics.add.sprite(1353,0,'lluvia').setScale(1.2,1.7).setImmovable(true).setOrigin(0);
        this.lluvia2 = this.physics.add.sprite(2434,0,'lluvia').setScale(1.2,1.7).setImmovable(true).setOrigin(0);
        this.physics.add.collider(this.player1, this.plataformaW3, this.colisionMundo, null, this);
        this.physics.add.collider(this.player1, this.plataformaVacio3, this.colisionVacio1, null, this);
        this.physics.add.collider(this.player1, this.plataformaVacio3_2, this.colisionVacio2, null, this);
        this.physics.add.collider(this.player1, this.plataformaVacio3_3, this.colisionVacio3, null, this);
        this.physics.add.collider(this.player1, this.plataformaVacio3_4, this.colisionVacio4, null, this);
        this.physics.add.collider(this.player1, this.plataformaVacio3_5, this.colisionVacio5, null, this);
        this.physics.add.collider(this.player1, this.Circle1, this.colisionEsfera, null, this);
        this.physics.add.collider(this.player1, this.Circle2, this.colisionEsfera, null, this);
        this.physics.add.collider(this.player1,this.entradaLLuvia,this.lluviaIn,null,this);
        this.physics.add.collider(this.player1,this.salidaLLuvia,this.lluviaOut,null,this);
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
        this.player1.setPosition(2358, 317);
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
        this.Jugador2.setPosition(2358, 317);
    }

    lluviaIn(){
        this.entradaLLuvia.body.setEnable(false);
        setTimeout(()=>{
         this.salidaLLuvia.body.setEnable(true);
        },1000)
        this.velocidadX=160;
        console.log("quitamos velocidad",this.velocidadX);
    }

    lluviaOut(){
        this.salidaLLuvia.body.setEnable(false);
        setTimeout(()=>{
         this.entradaLLuvia.body.setEnable(true);
        },1000)
        this.velocidadX=300;
        console.log("regresamos velocidad",this.velocidadX);
    }

    lluviaInP2(){
        this.entradaLLuviaP2.body.setEnable(false);
        setTimeout(()=>{
         this.salidaLLuviaP2.body.setEnable(true);
        },1000)
        this.velocidadX_P2=160;
        console.log("quitamos velocidad P2",this.velocidadX_P2);
    }

    lluviaOutP2(){
        this.salidaLLuviaP2.body.setEnable(false);
        setTimeout(()=>{
         this.entradaLLuviaP2.body.setEnable(true);
        },1000)
        this.velocidadX_P2=300;
        console.log("regresamos velocidad P2",this.velocidadX_P2);
    }

    update() {
       
        MosquitoACT1.MoveW3_1(this.Mosquito, this.velocidadMosquito);
        MosquitoACT1.MoveW3_1(this.Mosquito2, this.velocidadMosquito);
        MosquitoACT1.MoveW3_1(this.Mosquito3, this.velocidadMosquito);
        MosquitoACT1.MoveW3_1(this.Mosquito4, this.velocidadMosquito);
        MosquitoACT1.MoveW3_1(this.Mosquito5, this.velocidadMosquito + 120);
        SerpientesACT1.MoveW3_1(this.Serpiente1, this.velocidadSerpiente);
        SerpientesACT1.MoveW3_2(this.Serpiente2, this.velocidadSerpiente);
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
        if (control.axes.length) {
            const axisH = control.axes[0].getValue();
            if (axisH === -1) {
                this.player1.setVelocityX(this.velocidadX);
                this.player1.setFlipX(false);
            } else if (axisH === 1) {
                this.player1.setVelocityX(-this.velocidadX);
                this.player1.setFlipX(true);
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
            if (control.axes.length) {
                const axisH = control.axes[0].getValue();
                if (axisH === -1) {
                    this.Jugador2.setVelocityX(this.velocidadX_P2);
                    this.Jugador2.setFlipX(false);
                } else if (axisH === 1) {
                    this.Jugador2.setVelocityX(-this.velocidadX_P2);
                    this.Jugador2.setFlipX(true);
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