
import BaseScene from "./BaseScene";
import AnimacionPlayer1 from "./Jugadores/player";
import AnimacionPlayer2 from "./Jugadores/player2";
class Mapa1 extends BaseScene {

  constructor(config) {

    super('Mapa1', config);
    this.personaje = null;
    this.cursors = null;
    this.plat = null;
    this.plat1 = null;
    this.plat2 = null;
    this.control = null;
    this.fondo = null;
    this.boton = null;

  }



  create() {
    this.cameras.add(1366, 768);
    this.fondo = this.add.image(0, 0, 'bg1').setOrigin(0);
    this.createPersonaje();
    this.createPlatform();
    this.plataformaND();
    this.plataformaPanamaViejo();
    this.collision();
    this.collisionEv1();
    this.collisionEv2();
    this.createBotonW1();
    this.colisionChangeWorld();
    this.choque = this.sound.add('choque');
    this.choque_plat = this.sound.add('choque_plat');


  }

  createBotonW1() {
    this.boton = this.physics.add.group();
    this.boton.create(577, 659, 'block_3')
      .setScale(0.1)
      .setImmovable(true)
      .setOrigin(0, 0);
  }

  colisionChangeWorld() {
  this.physics.add.collider(this.personaje, this.boton, this.cambioScenario, null, this);
  }

  createPersonaje() {
    this.personaje = this.physics.add.sprite(120, 623, sessionStorage.getItem('selectPLayer'))
      .setScale(0.5)
      .setOrigin(0);
    console.log(this.personaje)
    this.personaje.setCollideWorldBounds(true);
    AnimacionPlayer1(this.anims, sessionStorage.getItem('selectPLayer'))

  }


  alerta() {
    //alert('Has Colisionado');
    // this.personaje.setRotation(-90);
    // setTimeout(()=>{
    //  this.personaje.setRotation(0);
    //  this.personaje.setPosition(824,384);
    // },500)
    this.choque_plat.play();

  }

  cambioScenario() {
    this.physics.pause();
    this.cameras.main.fade(2000);
    setTimeout(()=>{
      this.scene.stop('Mapa1');
      this.scene.start('IntroCity');
    },400)
  }



  createPlatform() {
    //bloque1 Horizontal 1
    this.plat = this.physics.add.group();
    this.plat.create(274, 580, 'block_1')
      .setScale(0.4)
      .setImmovable(true)
      .setOrigin(0, 0);
    //bloque1 horizontal 2
    this.plat.create(120, 580, 'block_1')
      .setScale(0.4)
      .setImmovable(true)
      .setOrigin(0, 0);
    //bloque1 horizontal 3
    this.plat.create(120, 690, 'block_1')
      .setScale(0.6)
      .setImmovable(true)
      .setOrigin(0, 0);
    //bloque2 Vertical 4 * crear Aparte para funcion de moises Modal


    //bloque2 vertical 5
    this.plat.create(366.2, 440, 'block_2')
      .setImmovable(true)
      .setOrigin(0, 0);
    //bloque2 vertical 6
    this.plat.create(10, 590, 'block_2')
      .setImmovable(true)
      .setOrigin(0, 0);
    //bloque3 vertical 7
    this.plat.create(543, 690, 'block_3')
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque4 horizontal 8
    this.plat.create(620, 580, 'block_4')
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque4 horizontal 9
    this.plat.create(363, 415, 'block_4')///
      .setScale(0.2)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque4 horizontal 10
    this.plat.create(280, 340, 'block_3')
      .setScale(1)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque4 horizontal 11
    this.plat.create(280, 300, 'block_4')
      .setScale(0.5)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque2 Vertical 12
    this.plat.create(512, 300, 'block_2')
      .setImmovable(true)
      .setOrigin(0, 0);
    //bloque4 horizontal 13
    this.plat.create(512, 425, 'block_3')
      .setScale(1)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque2 Vertical 14
    this.plat.create(600, 300, 'block_2')
      .setImmovable(true)
      .setOrigin(0, 0);
    //bloque4 horizontal 15
    this.plat.create(600, 425, 'block_3')
      .setScale(1)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque2 Vertical 16
    this.plat.create(726, 300, 'block_2')
      .setImmovable(true)
      .setOrigin(0, 0);
    //bloque3 horizontal 17
    this.plat.create(715, 405, 'block_3')
      .setScale(1)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque4 horizontal 18
    this.plat.create(790, 550, 'block_4')
      .setScale(0.5)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque2 Vertical 19
    this.plat.create(890, 320, 'block_2')
      .setImmovable(true)
      .setOrigin(0, 0);
    //bloque4 horizontal 20
    this.plat.create(890, 469, 'block_3')
      .setScale(1)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque4 horizontal 21
    this.plat.create(890, 315, 'block_4')
      .setScale(0.5)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque4 horizontal 22 * para moi colision aparte abrir el Modal


    //bloque4 horizontal 23
    this.plat.create(830, 110, 'block_4')
      .setScale(0.5)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque4 horizontal 24
    this.plat.create(750, 110, 'block_4')
      .setScale(0.5)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque4 horizontal 25
    this.plat.create(780, 215, 'block_4')
      .setScale(0.5)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque2 vertical 26
    this.plat.create(763, 215, 'block_2')
      .setScale(0.5)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque4 horizontal 27
    this.plat.create(630, 215, 'block_4')
      .setScale(0.5)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque2 vertical 28
    this.plat.create(575, 50, 'block_2')
      .setScale(1)
      .setImmovable(true)
      .setOrigin(0, 0)
    //bloque2 vertical 29
    this.plat.create(680, 27.4, 'block_2')
      .setScale(0.6)
      .setImmovable(true)
      .setOrigin(0, 0)

  }


  plataformaND() {

    this.plat1 = this.physics.add.group();

    this.plat1.create(1045, 140, 'block_2')
      .setImmovable(true)
      .setOrigin(0, 0)

  }

  collision() {

    console.log(this.personaje, this.plat);
    this.physics.add.collider(this.personaje, this.plat, this.alerta, null, this);
  }

  nombreDeDios() {
    this.choque.play();
    Swal.fire({
      position: "center",
      customClass: "manoDeDios",
      background: 'url(./assets/data-nombre-de-Dios.png) no-repeat center center',
      imageWidth: 50,
      imageHeight: 50,
      showConfirmButton: false,
    });
    this.physics.pause();
  }
  collisionEv1() {
    console.log(this.personaje, this.plat1);
    this.physics.add.collider(this.personaje, this.plat1, this.nombreDeDios, null, this);
  }
  plataformaPanamaViejo() {
    this.plat2 = this.physics.add.group();
    this.plat2.create(635, 580, 'block_2')
      .setImmovable(true)
      .setOrigin(0, 0);
  }
  panamaViejo() {
    this.choque.play();
    Swal.fire({
      position: "center",
      customClass: "manoDeDios",
      background: 'url(./assets/data-panama-la-vieja.png) no-repeat center center',
      imageWidth: 50,
      imageHeight: 50,
      showConfirmButton: false,
    });
    this.physics.pause();
  }
  collisionEv2() {
    this.physics.add.collider(this.personaje, this.plat2, this.panamaViejo, null, this);
  }

  update() {
    const control = this.input.gamepad.getPad(0);
    if (!control) {
      return;
    }

    if (control.axes.length) {

      const axisH = control.axes[0].getValue();
      const axisV = control.axes[1].getValue();

      if (axisH === -1) {
        this.personaje.setVelocityX(105);
        this.personaje.setFlipX(false);
        console.log(this.personaje.body.x);
        this.move();
      } else if (axisH === 1) {
        this.personaje.setVelocityX(-105);
        this.personaje.setFlipX(true);
        console.log(this.personaje.body.x);
        this.move();
      }
      else if (axisV === 1) {
        this.personaje.setVelocityY(-105);
        console.log(this.personaje.body.y);
        this.move();
        //this.moveUp();
      } else if (axisV === -1) {
        this.personaje.setVelocityY(105);
        console.log(this.personaje.body.y);
        this.move();
        // this.moveDown();
      } else if (control.buttons[3].pressed ) {
        Swal.close()
        this.physics.resume();
      } else {
        this.personaje.setVelocityX(0);
        this.personaje.setVelocityY(0);
        this.standBy();
      }
    }
  }
  move() {
    this.personaje.play('move', true);
  }
  moveUp() {
    this.personaje.play('up', true);
  }
  moveDown() {
    this.personaje.play('down', true);
  }
  standBy() {
    this.personaje.play('stop', true);
  }
}

export default Mapa1