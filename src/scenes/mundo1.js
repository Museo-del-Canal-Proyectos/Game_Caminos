import BaseScene from "./BaseScene";
import DataPlataforma from "../scenes/platforma/plataforma";
import DataPlataformaBloque from "../scenes/platforma/plataformaBloques";
import DataPlataformaAerea from "../scenes/platforma/plataformaArea";
import AnimacionPlayer1 from "../scenes/Jugadores/player";
import AnimacionPlayer2 from "../scenes/Jugadores/player2";


class Plano1 extends BaseScene {

    plataforma;
    infoObjeto = true;
    monedas = 100;
    objetoPerulera = 0;
    textoObjetos = null;
    textoMonedas = null;
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
    velocidadX = 230;
    velocidadY = 280;
    velocidadFlecha = 400;
    velocidadBala = 275;

    constructor(config) {
        super('Plano1', config);
    }

    createPlayer2() {
        //validamos si es multiplayer
        this.isMultiPLayer = true;

        if (this.isMultiPLayer) {
            this.monedas = 200;
            this.Jugador2 = this.physics.add.sprite(102, 326, 'player2')
                .setOrigin(0);
            this.Jugador2.setCollideWorldBounds(true);
            this.Jugador2.body.setGravityY(820);
            AnimacionPlayer2(this.anims);
            this.physics.add.collider(this.Jugador2, this.plataforma, this.alert2, null, this);
            this.physics.add.collider(this.Jugador2, this.poligono, this.alert2, null, this);
            this.physics.add.collider(this.Jugador2, this.circulo, this.alert2, null, this);
            this.physics.add.collider(this.Jugador2, this.circulo, this.alert2, null, this);
            this.physics.add.collider(this.Jugador2, this.circuloF1, this.alert2, null, this);
            this.physics.add.collider(this.Jugador2, this.circuloF2, this.alert2, null, this);
            this.physics.add.collider(this.Jugador2, this.plataformaBloque, this.alert2, null, this);
            this.physics.add.collider(this.Jugador2, this.plataformaZone, this.mEspecial2, null, this);
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

        } else {
            console.log("Jugador 2 no conectado")
        }
    }

    createPlayer1() {
        //cuando son dos seteo en storage jugador 1 en seleccion  
        this.storagePlayer = "player1"
        //33
        this.player1 = this.physics.add.sprite(33, 326, this.storagePlayer)
            .setOrigin(0);
        this.player1.setCollideWorldBounds(true);
        this.player1.body.setGravityY(820);
        AnimacionPlayer1(this.anims, this.storagePlayer);
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
    ColisionPerulera4(){
        this.perulera4.disableBody(true, true);
        this.countPerulera();
        this.Objeto();
        this.infoObjeto = false;
    }
    //perulera 5 colsion
    ColisionPerulera5(){
        this.perulera5.disableBody(true, true);
        this.countPerulera();
        this.Objeto();
        this.infoObjeto = false;
    }

    Objeto() {
        if (this.infoObjeto) {
            Swal.fire({
                position: "bottom",
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
            setTimeout(()=>{
                this.physics.resume();
            },3600)
        } else {
            console.log("test no Funciona ya se activo")
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

    create() {
        this.cameras.main.setBounds(0, 0, 4095, 768);
        this.physics.world.setBounds(0, 0, 4095, 768);
        this.add.image(0, 0, 'Plano1').setOrigin(0);
        this.add.image(250, 30, 'estado').setScale(1).setScrollFactor(0);
        this.add.image(1048, 407, 'piedra');
        this.poligon();
        this.circulos();
        this.plataforma = this.physics.add.staticGroup();
        this.plataformaBloque = this.physics.add.staticGroup();
        this.plataformaZone = this.physics.add.staticGroup();
        DataPlataforma(this.plataforma);
        DataPlataformaBloque(this.plataformaBloque);
        DataPlataformaAerea(this.plataformaZone);
        this.EnemigoFlecha();
        this.EnemigoBalaCanon();
        this.perulerasCreate();
        this.createPlayer1();
        this.createPlayer2();
        this.textoMonedas = this.add.text(230, 15, 'x' + this.monedas, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.textoObjetos = this.add.text(373, 15, 'x' + this.objetoPerulera, { fontSize: '28px', fontFamily: 'Comic Sans MS', fill: "#ffffff" }).setScrollFactor(0);
        this.physics.add.collider(this.player1, this.plataforma, this.alert, null, this);
        this.physics.add.collider(this.player1, this.poligono, this.alert, null, this);
        this.physics.add.collider(this.player1, this.circulo, this.alert, null, this);
        this.physics.add.collider(this.player1, this.circulo, this.alert, null, this);
        this.physics.add.collider(this.player1, this.circuloF1, this.alert, null, this);
        this.physics.add.collider(this.player1, this.circuloF2, this.alert, null, this);
        this.physics.add.collider(this.player1, this.plataformaBloque, this.alert, null, this);
        this.physics.add.collider(this.player1, this.plataformaZone, this.mEspecial, null, this);
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
    }

    alert() {
        this.estadoSuelo = true;
    }

    mEspecial() {
        //this.estadoSuelo=true;
        // this.Objeto();
    }

    alert2() {
        this.estadoSuelo2 = true;
    }

    mEspecial2() {
        //this.estadoSuelo=true;
    }
    /**/
    /*Evento Colision Flecha*/
    EvFlecha1() {
        this.flecha1.body.setEnable(false);
        this.flecha1.setPosition(7498, 410);
        this.player1.setPosition(this.player1.x + 4, this.player1.y);
        this.damagePlayer1();
        this.flecha1.body.setEnable(true);
    }

    EvFlecha2() {
        this.flecha2.body.setEnable(false);
        this.flecha2.setPosition(8498, 410);
        this.player1.setPosition(this.player1.x + 4, this.player1.y);
        this.damagePlayer1();
        this.flecha2.body.setEnable(true);
    }

    EvFlecha3() {
        this.flecha3.body.setEnable(false);
        this.flecha3.setPosition(9498, 410);
        this.player1.setPosition(this.player1.x + 4, this.player1.y);
        this.damagePlayer1();
        this.flecha3.body.setEnable(true);
    }

    EvFlecha1P2() {
        this.flecha1.body.setEnable(false);
        this.flecha1.setPosition(7498, 410);
        this.Jugador2.setPosition(this.Jugador2.x + 4, this.Jugador2.y);
        this.damagePlayer2();
        this.flecha1.body.setEnable(true);
    }

    EvFlecha2P2() {
        this.flecha2.body.setEnable(false);
        this.flecha2.setPosition(8498, 410);
        this.Jugador2.setPosition(this.Jugador2.x + 4, this.Jugador2.y);
        this.damagePlayer2();
        this.flecha2.body.setEnable(true);
    }

    EvFlecha3P2() {
        this.flecha3.body.setEnable(false);
        this.flecha3.setPosition(9498, 410);
        this.Jugador2.setPosition(this.Jugador2.x + 4, this.Jugador2.y);
        this.damagePlayer2();
        this.flecha3.body.setEnable(true);
    }

    EvBala1() {
        this.bolcanon1.body.setEnable(false);
        this.bolcanon1.setPosition(4900, 430);
        this.player1.setPosition(this.player1.x + 2, this.player1.y);
        this.damagePlayer1();
        this.bolcanon1.body.setEnable(true);
    }

    EvBala2() {
        this.bolcanon2.body.setEnable(false);
        this.bolcanon2.setPosition(4500, 370);
        this.player1.setPosition(this.player1.x + 4, this.player1.y);
        this.damagePlayer1();
        this.bolcanon2.body.setEnable(true);
    }

    EvBala1P2() {
        this.bolcanon1.body.setEnable(false);
        this.bolcanon1.setPosition(6498, 400);
        this.Jugador2.setPosition(this.Jugador2.x + 2, this.Jugador2.y);
        this.damagePlayer2();
        this.bolcanon1.body.setEnable(true);
    }

    EvBala2P2() {
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
            console.log("boton presionado");
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
                    this.player1.play('move', true) : this.player1.play('stop', true) :
                this.player1.play('jump', true);
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
            if (control.axes.length) {
                const axisH = control.axes[0].getValue();
                if (axisH === -1) {
                    this.Jugador2.setVelocityX(this.velocidadX);
                    this.Jugador2.setFlipX(false);
                } else if (axisH === 1) {
                    this.Jugador2.setVelocityX(-this.velocidadX);
                    this.Jugador2.setFlipX(true);
                } else {
                    this.Jugador2.setVelocityX(0);
                }
                this.estadoSuelo2 ?
                    this.Jugador2.body.velocity.x !== 0 ?
                        this.Jugador2.play('move2', true) : this.Jugador2.play('stop2', true) :
                    this.Jugador2.play('jump2', true);
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