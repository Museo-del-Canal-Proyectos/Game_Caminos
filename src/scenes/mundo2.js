import BaseScene from "./BaseScene";
import DataPlataformaW2 from "../scenes/plataforma_w2/plataforma_w2";
import DataBloquePlataformaW2 from "../scenes/plataforma_w2/plataformaBW2";
import DataVacioW21 from "../scenes/plataforma_w2/plataformaVacioW2_1";
import DataVacioW22 from "../scenes/plataforma_w2/plataformaVacioW2_2"
import DataVacioW23 from "../scenes/plataforma_w2/plataformaVacioW2_3";

class Plano2 extends BaseScene {
    estadoSuelo;
    velocidadX=210;
    velocidadY=280;
    plataformaW2;
    BloquePW2;
    bloqueVacioW2_1;
    bloqueVacioW2_2;
    bloqueVacioW2_3;


    constructor(config) {
        super('Plano2', config);
    }


    createPlayer1() {
        //cuando son dos seteo en storage jugador 1 en seleccion  
        this.storagePlayer = "player1"
        //33
        this.player1 = this.physics.add.sprite(2937, 326, this.storagePlayer)
            .setOrigin(0);
        this.player1.setCollideWorldBounds(true);
        this.player1.body.setGravityY(820);
        this.cameras.main.startFollow(this.player1, true);
    }

    circuloW2_part1(){
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

    create() {
        this.cameras.main.setBounds(0, 0, 4095, 768);
        this.physics.world.setBounds(0, 0, 4095, 768);
        this.add.image(0, 0, 'Plano2').setOrigin(0);
        this.plataformaW2= this.physics.add.staticGroup();
        this.BloquePW2= this.physics.add.staticGroup();
        this.bloqueVacioW2_1= this.physics.add.staticGroup();
        this.bloqueVacioW2_2= this.physics.add.staticGroup();
        this.bloqueVacioW2_3= this.physics.add.staticGroup();
        this.createPlayer1();
        DataPlataformaW2(this.plataformaW2);
        DataBloquePlataformaW2(this.BloquePW2);
        DataVacioW21(this.bloqueVacioW2_1);
        DataVacioW22(this.bloqueVacioW2_2);
        DataVacioW23(this.bloqueVacioW2_3);
        this.circuloW2_part1();
        this.physics.add.collider(this.player1, this.plataformaW2, this.alert, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_1, this.alert, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_2, this.alert, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_3, this.alert, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_4, this.alert, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_5, this.alert, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_6, this.alert, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_7, this.alert, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_8, this.alert, null, this);
        this.physics.add.collider(this.player1, this.sphereW2_9, this.alert, null, this);
        this.physics.add.collider(this.player1, this.BloquePW2, this.bspecial, null, this);
        this.physics.add.collider(this.player1, this.bloqueVacioW2_1, this.vaciow2_1, null, this);
        this.physics.add.collider(this.player1, this.bloqueVacioW2_2, this.vaciow2_2, null, this);
        this.physics.add.collider(this.player1, this.bloqueVacioW2_3, this.vaciow2_3, null, this);
    }
 
    alert(){
     //suelo 1
     this.estadoSuelo=true;
    }

    vaciow2_1(){
        this.player1.setPosition(435,310);
    }

    vaciow2_2(){
        this.player1.setPosition(1144,310);
    }
    
    vaciow2_3(){
        this.player1.setPosition(2412,310);
    }

    bspecial(){
      //
    }

    update() {
        this.teclado();
    }

    teclado() {
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
    }
}

export default Plano2;
