import BaseScene from "./BaseScene";
import DataPlataforma from "../scenes/platforma/plataforma";
import DataPlataformaBloque from "../scenes/platforma/plataformaBloques";
import DataPlataformaAerea from "../scenes/platforma/plataformaArea";
import AnimacionPlayer1 from "../scenes/Jugadores/player";
import AnimacionPlayer2 from "../scenes/Jugadores/player2";


class Plano1 extends BaseScene {

    plataforma;
    plataformaBloque;
    plataformaZone;
    liena1;
    linea2;
    salto1;
    salto2;
    Jugador2;
    image;
    m;
    poligono;
    circulo;
    circuloF1;
    circuloF2;
    bolcanon;
    estadoSuelo;
    estadoSuelo2;
    storagePlayer;
    isMultiPLayer;
    velocidadX = 210;
    velocidadY = 280;

    constructor(config) {
        super('Plano1', config);
    }

    createPlayer2() {
        //validamos si es multiplayer
        this.isMultiPLayer = false;

        if (this.isMultiPLayer) {
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

        } else {
            console.log("Jugador 2 no conectado")
        }
    }

    createPlayer1() {
        //cuando son dos seteo en storage jugador 1 en seleccion  
        this.storagePlayer = "player2"
        //33
        this.player1 = this.physics.add.sprite(33, 326, this.storagePlayer)
            .setOrigin(0);
        this.player1.setCollideWorldBounds(true);
        this.player1.body.setGravityY(820);
        AnimacionPlayer1(this.anims, this.storagePlayer);
        this.cameras.main.startFollow(this.player1, true);
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

    create() {
        this.cameras.main.setBounds(0, 0, 4095, 768);
        this.physics.world.setBounds(0, 0, 4095, 768);
        this.add.image(0, 0, 'Plano1').setOrigin(0);
        this.add.image(250, 30, 'estado').setScale(1).setScrollFactor(0);
        this.add.image(1048, 407, 'piedra');
        this.createPlayer1();
        this.poligon();
        this.circulos();
        this.plataforma = this.physics.add.staticGroup();
        this.plataformaBloque = this.physics.add.staticGroup();
        this.plataformaZone = this.physics.add.staticGroup();
        DataPlataforma(this.plataforma);
        DataPlataformaBloque(this.plataformaBloque);
        DataPlataformaAerea(this.plataformaZone);
        this.createPlayer2();
        this.physics.add.collider(this.player1, this.plataforma, this.alert, null, this);
        this.physics.add.collider(this.player1, this.poligono, this.alert, null, this);
        this.physics.add.collider(this.player1, this.circulo, this.alert, null, this);
        this.physics.add.collider(this.player1, this.circulo, this.alert, null, this);
        this.physics.add.collider(this.player1, this.circuloF1, this.alert, null, this);
        this.physics.add.collider(this.player1, this.circuloF2, this.alert, null, this);
        this.physics.add.collider(this.player1, this.plataformaBloque, this.alert, null, this);
        this.physics.add.collider(this.player1, this.plataformaZone, this.mEspecial, null, this);

    }
    alert() {
        this.estadoSuelo = true;
    }

    mEspecial() {
        //this.estadoSuelo=true;
    }

    alert2() {
        this.estadoSuelo2 = true;
    }

    mEspecial2() {
        //this.estadoSuelo=true;
    }


    update() {
        const onFloor = this.player1.body.onFloor();
        this.moveController(this.estadoSuelo);
        this.moveController2(this.estadoSuelo2);
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