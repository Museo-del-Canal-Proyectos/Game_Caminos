import BaseScene from "./BaseScene";
import DataPlataforma from "../scenes/platforma/plataforma";
import DataPlataformaBloque from "../scenes/platforma/plataformaBloques";
import AnimacionPlayer1 from "../scenes/Jugadores/player";
import AnimacionPlayer2 from "../scenes/Jugadores/player2";



class Plano1 extends BaseScene {
    intervaloTIEMPO=null;
    tiempo = 45;
    textoTiempo = "0:00";
    valorIntervalo = 1000;
    plataforma;
    volteoP1= true;
    volteoP2= true;
    infoObjeto = true;
    monedas = 100;
    animacionStop = 'stop';
    animacionMove = 'move';
    animacionJump = 'jump';
    animacionStopP2 = 'stop2';
    animacionMoveP2 = 'move2';
    animacionJumpP2 = 'jump2';
    objetoPerulera = 0;
    textoObjetos = null;
    textoMonedas = null;
    gate;
    perulera1;
    perulera2;
    perulera3;
    perulera4;
    perulera5;
    plataformaBloque;
    plataformaZone;
    Jugador2;
    poligono;
    circulo;
    circuloF1;
    circuloF2;
    bolcanon1;
    bolcanon2;
    flecha1;
    flecha2;
    flecha3;
    estadoSuelo;
    estadoSuelo2;
    storagePlayer;
    isMultiPLayer;
    velocidadX = 300;
    velocidadY = 280;
    velocidadFlecha = 400;
    velocidadBala = 275;

    constructor(config) {
        super('Plano1', config);
    }

    createPlayer2() {
        //validamos si es multiplayer
       // this.isMultiPLayer = false;

        let r= JSON.parse(sessionStorage.getItem('multiplayer'));

        this.isMultiPLayer = r;

        if (this.isMultiPLayer) {
            this.monedas = 150;
            this.Jugador2 = this.physics.add.sprite(102, 326, 'player2')
                .setOrigin(0);
            this.Jugador2.setCollideWorldBounds(true);
            this.Jugador2.body.setGravityY(820);
            this.Jugador2.body.setSize(50, 120);
            AnimacionPlayer2(this.anims);
            this.physics.add.collider(this.Jugador2, this.plataforma, this.alert2, null, this);
            this.physics.add.collider(this.Jugador2, this.poligono, this.alertCirculos2, null, this);
            this.physics.add.collider(this.Jugador2, this.circulo, this.alertCirculos2, null, this);
            this.physics.add.collider(this.Jugador2, this.circulo, this.alertCirculos2, null, this);
            this.physics.add.collider(this.Jugador2, this.circuloF1, this.alertCirculos2, null, this);
            this.physics.add.collider(this.Jugador2, this.circuloF2, this.alertCirculos2, null, this);
            this.physics.add.collider(this.Jugador2, this.plataformaBloque, this.alert2, null, this);
            this.physics.add.collider(this.Jugador2, this.flecha1, this.EvFlecha1P2, null, this);
            this.physics.add.collider(this.Jugador2, this.flecha2, this.EvFlecha2P2, null, this);
            this.physics.add.collider(this.Jugador2, this.flecha3, this.EvFlecha3P2, null, this);
            this.physics.add.collider(this.Jugador2, this.bolcanon1, this.EvBala1P2, null, this);
            this.physics.add.collider(this.Jugador2, this.bolcanon2, this.EvBala2P2, null, this);
            //PERULERA
            this.physics.add.collider(this.Jugador2, this.perulera1, this.ColisionPerulera1, null, this);
            this.physics.add.collider(this.Jugador2, this.perulera2, this.ColisionPerulera2, null, this);
            this.physics.add.collider(this.Jugador2, this.perulera3, this.ColisionPerulera3, null, this);
            this.physics.add.collider(this.Jugador2, this.perulera4, this.ColisionPerulera4, null, this);
            this.physics.add.collider(this.Jugador2, this.perulera5, this.ColisionPerulera5, null, this);
            this.physics.add.collider(this.Jugador2, this.gate, this.vacio,null,this);

        } else {
            // console.log("Jugador 2 no conectado")
        }
    }
    vacio(){

    }
    createPlayer1() {
        //cuando son dos seteo en storage jugador 1 en seleccion  
        this.storagePlayer = sessionStorage.getItem('selectPLayer');
        //33
        this.player1 = this.physics.add.sprite(33, 326, this.storagePlayer)
            .setOrigin(0);
        this.player1.setCollideWorldBounds(true);
        this.player1.body.setGravityY(820);
        console.log(this.player1);
        this.player1.body.setSize(50, 120);
        AnimacionPlayer1(this.anims, this.storagePlayer /*'player2'*/);
        this.cameras.main.startFollow(this.player1, true);
    }

    perulerasCreate() {
        this.perulera1 = this.physics.add.image(795, 215, 'perulera').setScale(0.7);
        this.perulera2 = this.physics.add.image(1650, 425, 'perulera').setScale(0.7);
        this.perulera3 = this.physics.add.image(2050, 212, 'perulera').setScale(0.7);
        this.perulera4 = this.physics.add.image(2545, 425, 'perulera').setScale(0.7);
        this.perulera5 = this.physics.add.image(3400, 160, 'perulera').setScale(0.7);
    }

    countPerulera() {
        this.objetoPerulera++;
        this.textoObjetos.setText(`x${this.objetoPerulera}`);
    }

    //colision con perulera y suma
    ColisionPerulera1() {
        this.perulera1.disableBody(true, true);
        this.countPerulera();
        this.Objeto();
        this.infoObjeto = false;
    }
    //perulera 2 colision
    ColisionPerulera2() {
        this.perulera2.disableBody(true, true);
        this.countPerulera();
        this.Objeto();
        this.infoObjeto = false;
    }
    //perulera 3 colision
    ColisionPerulera3() {
        this.perulera3.disableBody(true, true);
        this.countPerulera();
        this.Objeto();
        this.infoObjeto = false;
    }
    //perulera 4 colision
    ColisionPerulera4() {
        this.perulera4.disableBody(true, true);
        this.countPerulera();
        this.Objeto();
        this.infoObjeto = false;
    }
    //perulera 5 colsion
    ColisionPerulera5() {
        this.perulera5.disableBody(true, true);
        this.countPerulera();
        this.Objeto();
        this.infoObjeto = false;
    }

    Objeto() {
        if (this.infoObjeto) {
            Swal.fire({
                position: "center",
                imageUrl: "./assets/iconos/perulera.png",
                imageWidth: 50,
                imageHeight: 50,
                imageAlt: "Custom image",
                title: `<p style="font-size:20px;text-align:justify;"><center>Info por Anexar</center></p>`,
                showConfirmButton: false,
                backdrop: false,
                timer: 3500
            });
            this.physics.pause();
            //this.textoTiempo.setText("-:--");//
            clearInterval(this.intervaloTIEMPO);//
            setTimeout(() => {
                this.physics.resume();
                // this.tiempo=this.tiempo+1;
                this.temporizador();//
            }, 3600)
        } else {
            // console.log("test no Funciona ya se activo")
        }
    }


    poligon() {
        this.poligono = this.add.graphics();
        this.poligono.fillCircle(100, -300, 100);
        this.physics.world.enable(this.poligono);
        this.poligono.body.setCircle(100, 0, -400);
        this.poligono.body.setCollideWorldBounds(true);
        this.poligono.body.setImmovable(true);
        this.poligono.setPosition(207, 761);

        this.circulo = this.add.graphics();
        this.circulo.fillCircle(100, -300, 100);
        this.physics.world.enable(this.circulo);
        this.circulo.body.setCircle(100, 0, -400);
        this.circulo.body.setCollideWorldBounds(true);
        this.circulo.body.setImmovable(true);
        this.circulo.setPosition(265, 761);
    }

    circulos() {
        this.circuloF1 = this.add.graphics();
        this.circuloF1.fillCircle(100, -300, 100);
        this.physics.world.enable(this.circuloF1);
        this.circuloF1.body.setCircle(100, 0, -400);
        this.circuloF1.body.setCollideWorldBounds(true);
        this.circuloF1.body.setImmovable(true);
        this.circuloF1.setPosition(2863, 761);

        this.circuloF2 = this.add.graphics();
        this.circuloF2.fillCircle(100, -300, 100);
        this.physics.world.enable(this.circuloF2);
        this.circuloF2.body.setCircle(100, 0, -400);
        this.circuloF2.body.setCollideWorldBounds(true);
        this.circuloF2.body.setImmovable(true);
        this.circuloF2.setPosition(2805, 761);
    }

    EnemigoFlecha() {
        this.flecha1 = this.physics.add.sprite(7498, 410, 'flecha1').setScale(0.5);
        this.flecha2 = this.physics.add.sprite(3898, 340, 'flecha2').setScale(0.5);
        this.flecha3 = this.physics.add.sprite(5298, 190, 'flecha3').setScale(0.5);
    }

    EnemigoBalaCanon() {
        this.bolcanon2 = this.physics.add.sprite(5098, 340, 'bala1').setScale(0.7);
        this.bolcanon1 = this.physics.add.sprite(4198, 400, 'bala1').setScale(0.7);
    }

    gateMundo2() {
        this.gate = this.physics.add.staticGroup();
        this.gate.create(3975, 300, 'block_2').setScale(0, 4).refreshBody();
    }

    create() {
        this.music=this.sound.add('w1');
        this.music.play();
        this.camara = this.cameras.main.setBounds(0, 0, 4095, 768);
        this.camara.flash(2000);
        this.physics.world.setBounds(0, 0, 4095, 768);
        this.mundo=this.add.image(0, 0, 'Plano1').setOrigin(0);
        this.add.image(250, 30, 'estado').setScale(1).setScrollFactor(0);
        this.add.image(1048, 407, 'piedra');
        this.poligon();
        this.circulos();
        this.plataforma = this.physics.add.staticGroup();
        this.plataformaBloque = this.physics.add.staticGroup();
        // this.plataformaZone = this.physics.add.staticGroup();
        DataPlataforma(this.plataforma);
        DataPlataformaBloque(this.plataformaBloque);
        this.gateMundo2();
        this.EnemigoFlecha();
        this.EnemigoBalaCanon();
        this.perulerasCreate();
        this.createPlayer1();
        this.createPlayer2();
        this.textoMonedas = this.add.text(230, 15, 'x' + this.monedas, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.textoObjetos = this.add.text(373, 15, 'x' + this.objetoPerulera, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.textoTiempo = this.add.text(65, 15, `0:${this.tiempo}`, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.physics.add.collider(this.player1, this.plataforma, this.alert, null, this);
        this.physics.add.collider(this.player1, this.poligono, this.alertCirculos, null, this);
        this.physics.add.collider(this.player1, this.circulo, this.alertCirculos, null, this);
        this.physics.add.collider(this.player1, this.circulo, this.alertCirculos, null, this);
        this.physics.add.collider(this.player1, this.circuloF1, this.alertCirculos, null, this);
        this.physics.add.collider(this.player1, this.circuloF2, this.alertCirculos, null, this);
        this.physics.add.collider(this.player1, this.plataformaBloque, this.alert, null, this);
        this.physics.add.collider(this.player1, this.flecha1, this.EvFlecha1, null, this);
        this.physics.add.collider(this.player1, this.flecha2, this.EvFlecha2, null, this);
        this.physics.add.collider(this.player1, this.flecha3, this.EvFlecha3, null, this);
        this.physics.add.collider(this.player1, this.bolcanon1, this.EvBala1, null, this);
        this.physics.add.collider(this.player1, this.bolcanon2, this.EvBala2, null, this);
        this.physics.add.collider(this.player1, this.perulera1, this.ColisionPerulera1, null, this);
        this.physics.add.collider(this.player1, this.perulera2, this.ColisionPerulera2, null, this);
        this.physics.add.collider(this.player1, this.perulera3, this.ColisionPerulera3, null, this);
        this.physics.add.collider(this.player1, this.perulera4, this.ColisionPerulera4, null, this);
        this.physics.add.collider(this.player1, this.perulera5, this.ColisionPerulera5, null, this);
        this.physics.add.collider(this.player1, this.gate, this.mundo2, null, this);
        this.temporizador();
    }

    gameOver(){
      /*resta monedas*/
         this.monedas-=10;
         if(this.monedas==0){
            this.tiempo='00';
         }

         this.monedas<0 ? this.textoMonedas.setText(`x0`) : this.textoMonedas.setText(`x${this.monedas}`);
      /*Fin Resta Monedas*/
    }

    temporizador(){
        this.intervaloTIEMPO = setInterval(() => {
            --this.tiempo;
            if (this.tiempo === 30) {
                this.mundo.setTint(0xfad6a5);
            } else if (this.tiempo === 15) {
                this.mundo.setTint(0x2d3451);
            }else if(this.tiempo===0){
                console.log("Se Acabo el tiempo y se muere");
            }else{
                if(this.tiempo<0){
                    this.tiempo='00';
                }
                if(this.tiempo<10 && this.tiempo>0){
                    this.tiempo='0'+this.tiempo;
                }
                try {
                    this.textoTiempo.setText(`0:${this.tiempo}`);
                } catch (error) {
                    console.log(error);
                }
            }
        }, this.valorIntervalo);
    }

    mundo2() {
        clearInterval(this.intervaloTIEMPO);
        this.music.stop();
        this.volteoP1=false;
        this.velocidadX = 0;
        this.velocidadY = 0;
        this.animacionStop='celebrate';
        this.animacionJump='celebrate';
        this.animacionMove='celebrate';
        this.animacionMoveP2='celebrateP2';
        this.animacionJumpP2='celebrateP2';
        this.animacionStopP2='celebrateP2';
        this.player1.setPosition(3915,310);
        if(this.isMultiPLayer){
            this.volteoP2=false;
            this.Jugador2.setPosition(3820,310);
        }
        this.physics.pause();
        sessionStorage.setItem('PuntajeActual',this.monedas);
        this.camara.fade(2500);
        setTimeout(() => {
            this.physics.resume();
            this.scene.stop('Plano1');
            this.scene.start('Mapa2');
        }, 2000)
    }

    alertCirculos(){
        this.estadoSuelo=true;
    }

    alert() {

        const posiciony = Math.trunc(this.player1.y);
        switch (posiciony) {
            case 56:
                this.estadoSuelo = true;
                break;
            case 114:
                this.estadoSuelo = true;
                break;
            case 118:
                this.estadoSuelo = true;
                break;
            case 175:
                this.estadoSuelo = true;
                break;
            case 254:
                this.estadoSuelo = true;
                break;
            case 258:
                this.estadoSuelo = true;
                break;
            case 322:
                this.estadoSuelo = true;
                break;

            default:
                this.estadoSuelo = false;
        }

    }


    alert2() {
        const posiciony = Math.trunc(this.Jugador2.y);
        this.EnemigoBalaCanon
    
        switch (posiciony) {
            case 56:
                this.estadoSuelo2 = true;
                break;
            case 114:
                this.estadoSuelo2 = true;
                break;
            case 118:
                this.estadoSuelo2 = true;
                break;
            case 175:
                this.estadoSuelo2 = true;
                break;
            case 254:
                this.estadoSuelo2 = true;
                break;
            case 258:
                this.estadoSuelo2 = true;
                break;
            case 322:
                this.estadoSuelo2 = true;
                break;

            default:
                this.estadoSuelo2 = false;
        }

    }
    alertCirculos2(){
        this.estadoSuelo2=true;
    }


    /**/
    /*Evento Colision Flecha*/
    EvFlecha1() {
        this.gameOver();
        this.flecha1.body.setEnable(false);
        this.flecha1.setPosition(7498, 410);
        this.player1.setPosition(this.player1.x + 4, this.player1.y);
        this.damagePlayer1();
        this.flecha1.body.setEnable(true);
    }

    EvFlecha2() {
        this.gameOver();
        this.flecha2.body.setEnable(false);
        this.flecha2.setPosition(8498, 410);
        this.player1.setPosition(this.player1.x + 4, this.player1.y);
        this.damagePlayer1();
        this.flecha2.body.setEnable(true);
    }

    EvFlecha3() {
        this.gameOver();
        this.flecha3.body.setEnable(false);
        this.flecha3.setPosition(9498, 410);
        this.player1.setPosition(this.player1.x + 4, this.player1.y);
        this.damagePlayer1();
        this.flecha3.body.setEnable(true);
    }

    EvFlecha1P2() {
        this.gameOver();
        this.flecha1.body.setEnable(false);
        this.flecha1.setPosition(7498, 410);
        this.Jugador2.setPosition(this.Jugador2.x + 4, this.Jugador2.y);
        this.damagePlayer2();
        this.flecha1.body.setEnable(true);
    }

    EvFlecha2P2() {
        this.gameOver();
        this.flecha2.body.setEnable(false);
        this.flecha2.setPosition(8498, 410);
        this.Jugador2.setPosition(this.Jugador2.x + 4, this.Jugador2.y);
        this.damagePlayer2();
        this.flecha2.body.setEnable(true);
    }

    EvFlecha3P2() {
        this.gameOver();
        this.flecha3.body.setEnable(false);
        this.flecha3.setPosition(9498, 410);
        this.Jugador2.setPosition(this.Jugador2.x + 4, this.Jugador2.y);
        this.damagePlayer2();
        this.flecha3.body.setEnable(true);
    }

    EvBala1() {
        this.gameOver();
        this.bolcanon1.body.setEnable(false);
        this.bolcanon1.setPosition(4900, 430);
        this.player1.setPosition(this.player1.x + 2, this.player1.y);
        this.damagePlayer1();
        this.bolcanon1.body.setEnable(true);
    }

    EvBala2() {
        this.gameOver();
        this.bolcanon2.body.setEnable(false);
        this.bolcanon2.setPosition(4500, 370);
        this.player1.setPosition(this.player1.x + 4, this.player1.y);
        this.damagePlayer1();
        this.bolcanon2.body.setEnable(true);
    }

    EvBala1P2() {
        this.gameOver();
        this.bolcanon1.body.setEnable(false);
        this.bolcanon1.setPosition(6498, 400);
        this.Jugador2.setPosition(this.Jugador2.x + 2, this.Jugador2.y);
        this.damagePlayer2();
        this.bolcanon1.body.setEnable(true);
    }

    EvBala2P2() {
        this.gameOver();
        this.bolcanon2.body.setEnable(false);
        this.bolcanon2.setPosition(7500, 340);
        this.Jugador2.setPosition(this.Jugador2.x + 4, this.Jugador2.y);
        this.damagePlayer2();
        this.bolcanon2.body.setEnable(true);
    }



    /*Comienzo Daño Player1*/
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

    /*Fianl Daño Player1*/

    update() {
        //const onFloor = this.player1.body.onFloor();
        this.moveController2(this.estadoSuelo2);
        this.moveController(this.estadoSuelo);
        this.flechaAtaque(this.flecha1, this.flecha2, this.flecha3);
        this.canonAtaque(this.bolcanon1, this.bolcanon2);
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
                this.estadoSuelo2 = false;
                this.Jugador2.setVelocityY(-this.velocidadY * 2);
            }
            if (control.buttons[0].pressed && onFloor) {
                this.estadoSuelo2 = false;
                this.Jugador2.setVelocityY(-this.velocidadY * 2);
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
                this.estadoSuelo2 ?
                    this.Jugador2.body.velocity.x !== 0 ?
                        this.Jugador2.play(`${this.animacionMoveP2}`, true) : this.Jugador2.play(`${this.animacionStopP2}`, true) :
                    this.Jugador2.play(`${this.animacionJumpP2}`, true);
            }
        }
    }

    flechaAtaque(x1, x2, x3) {
        this.flecha1.setVelocityX(-this.velocidadFlecha);

        if (Math.trunc(x1.x) < 0) {
            this.flecha1.setPosition(4498, 410);
        }

        this.flecha2.setVelocityX(-this.velocidadFlecha);
        if (Math.trunc(x2.x) < -0) {
            this.flecha2.setPosition(4898, 340);
        }

        this.flecha3.setVelocityX(-this.velocidadFlecha);
        if (Math.trunc(x3.x) < -0) {
            this.flecha3.setPosition(5298, 190);
        }
    }

    canonAtaque(x1, x2,) {
        this.bolcanon1.setVelocityX(-this.velocidadBala);
        if (Math.trunc(x1.x) < 0) {
            this.bolcanon1.setPosition(5498, 400);
        }
        this.bolcanon2.setVelocityX(-this.velocidadBala);
        if (Math.trunc(x2.x) < -0) {
            this.bolcanon2.setPosition(4898, 340);
        }
    }

    teclado() {
        // this.cursors = this.input.keyboard.createCursorKeys();
        // const { left, right, up } = this.cursors;
        // if (left.isDown) {
        //     console.log(this.player1.x);
        //     this.player1.setVelocityX(-this.velocidadX);
        //     this.player1.setFlipX(true);
        // } else if (right.isDown) {
        //     console.log(this.player1.x);
        //     this.player1.setVelocityX(this.velocidadX);
        //     this.player1.setFlipX(false);
        // } else {
        //     this.player1.setVelocityX(0);
        // }
        // if(up.isDown && onFloor){
        //     this.estadoSuelo=false;
        //     this.player1.setVelocityY(-this.velocidadY*2);
        // }
    }
}
export default Plano1;