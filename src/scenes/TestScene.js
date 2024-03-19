
import BaseScene from "./BaseScene";

class TestScene extends BaseScene {

  constructor(config) {

    super('TestScene', config);
    this.personaje = null;
    this.cursors = null;
    this.plat = null;
    this.plat1 = null;
    this.plat2 = null;
    this.control = null;

  }



  create() {

    this.add.image(0, 0, 'bg1').setOrigin(0);


    this.createPersonaje();
    this.createPlatform();
    this.plataformaND();
    this.plataformaPanamaViejo();
    this.collision();
    this.collisionEv1();
    this.collisionEv2();
    // this.choque();
    // this.moveUp();
    // this.moveDown();
    // this.moveRight();
    // this.moveLeft();
    this.choque=this.sound.add('choque');
    this.choque_plat=this.sound.add('choque_plat');


  }

  createPersonaje() {

    this.personaje = this.physics.add.sprite(94, 615, 'ha')
      //.setScale(0)
      .setOrigin(0);
    console.log(this.personaje)
    this.personaje.setCollideWorldBounds(true);

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

  //FUNCION MOISES MODAL
  nombreDeDios() {
  this.choque.play();
    //anexar por moises modal
    Swal.fire({
      position: "center",
      imageUrl: "./assets/star.png",
      imageWidth: 50,
      imageHeight: 50,
      imageAlt: "Custom image",
      title: `<p style="font-size:20px;text-align:justify;">Este camino se cerró por el ataque de Morgan a <b>Nombre de Dios</b>. Se cerro en 1597 y Luego del ataque se decidió mudar la ciudad a Portobelo</p>`,
      showConfirmButton: false,
      timer: 5000
    });

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

  //Moises Funcion Modal 
  panamaViejo(){
    this.choque.play();
    Swal.fire({
      position: "center",
      imageUrl: "./assets/star.png",
      imageWidth: 50,
      imageHeight: 50,
      imageAlt: "Custom image",
      title: `<p style="font-size:20px;text-align:justify;">Este camino se cerró en 1673 por el ataque de Morgan a <b>Panamá viejo</b>. Luego del ataque se decidió mudar la ciudad a lo que hoy conoces como Casco (Panamá) y la vieja quedó vacía</p>`,
      showConfirmButton: false,
      timer: 5000
    });

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
      //console.log("en linea");

      const axisH = control.axes[0].getValue();
      const axisV = control.axes[1].getValue();

      
      if (axisH === -1) {
        this.personaje.setVelocityX(-105);
        console.log(axisH);
        this.moveLeft();
        console.log("Izquierda");
      } else if (axisH === 1 ) {
        this.personaje.setVelocityX(105);
        this.moveRight();
      }
      else if (axisV === -1) {
        this.personaje.setVelocityY(-105);
        this.moveUp();
      }else if( axisV === 1){
        this.personaje.setVelocityY(105);
        this.moveDown();
      }else {
        this.personaje.setVelocityX(0);
        this.personaje.setVelocityY(0);
        this.standBy();
      }

    }

    // this.cursors = this.input.keyboard.createCursorKeys();

    // if (this.cursors.left.isDown) {
    //   this.personaje.setVelocityX(-105);
    //   this.moveLeft();
    // } else if (this.cursors.right.isDown) {
    //   this.personaje.setVelocityX(105);
    //   this.moveRight();
    // } else if (this.cursors.up.isDown) {
    //   this.personaje.setVelocityY(-105);
    //   this.moveUp();
    // } else if (this.cursors.down.isDown) {
    //   this.personaje.setVelocityY(105);
    //   console.log(this.personaje);
    //   this.moveDown();
    // } else {

    //   this.personaje.setVelocityX(0);
    //   this.personaje.setVelocityY(0);
    //   this.standBy();

    // }

  }


  moveRight() {
    this.anims.create({
      key: 'derecha',
      frames: this.anims.generateFrameNumbers('ha', { start: 3, end: 5 }),
      //SON 24 FPS DE ANIMACION POR SEGUNDO
      //EN ESTE CASO  RADIO DE FRAMES SON 2 DE LOS 8 DE LA ANIMACION
      //4 SEC; 8/2=4
      frameRate: 5,
      //repeticion Infinita
      repeat: -1
    })
    this.personaje.play('derecha', true);
   
  }


  moveLeft() {

    this.anims.create({
      key: 'izquierda',
      frames: this.anims.generateFrameNumbers('ha', { start: 8, end: 6 }),
      //SON 24 FPS DE ANIMACION POR SEGUNDO
      //EN ESTE CASO  RADIO DE FRAMES SON 2 DE LOS 8 DE LA ANIMACION
      //4 SEC; 8/2=4
      frameRate: 5,
      //repeticion Infinita
      repeat: -1
    })
    this.personaje.play('izquierda', true);

  }

  moveUp() {
    this.anims.create({
      key: 'arriba',
      frames: this.anims.generateFrameNumbers('ha', { start: 12, end: 14 }),
      //SON 24 FPS DE ANIMACION POR SEGUNDO
      //EN ESTE CASO  RADIO DE FRAMES SON 2 DE LOS 8 DE LA ANIMACION
      //4 SEC; 8/2=4
      frameRate: 5,
      //repeticion Infinita
      repeat: -1
    })
    this.personaje.play('arriba', true);
  }

  moveDown() {
    this.anims.create({
      key: 'abajo',
      frames: this.anims.generateFrameNumbers('ha', { start: 10, end: 11 }),
      //SON 24 FPS DE ANIMACION POR SEGUNDO
      //EN ESTE CASO  RADIO DE FRAMES SON 2 DE LOS 8 DE LA ANIMACION
      //4 SEC; 8/2=4
      frameRate: 5,
      //repeticion Infinita
      repeat: -1
    })
    this.personaje.play('abajo', true);
  }



  standBy() {

    this.anims.create({
      key: 'quieto',
      frames: this.anims.generateFrameNumbers('ha', { frame: 0 }),
      frameRate: 0
    });

    this.personaje.play('quieto');
  }


}


export default TestScene