import BaseScene from "./BaseScene";

class MenuScene extends BaseScene {
  selector;  // Imagen del selector en el menú.
  mOpening; //Sonido de apertura del menú.
  mSleccion; // Sonido de selección en el menú.

  constructor(config) {

    super('MenuScene', config); //Configuración de la escena.



  }


  
  /**
   * Método create
   * 
   * Este método se ejecuta al crear la escena. Añade imágenes y sonidos, y configura el selector.
   */

  create() {
    this.mOpening = this.sound.add('music-inicio');
    this.mSleccion = this.sound.add('sl');
    this.add.image(0, 0, 'MenuInicial').setOrigin(0);
    this.selector = this.physics.add.image(583, 695, 'select');
    console.log(this.selector);
    this.mOpening.loop = true;
    this.mOpening.play();

  }

    /**
   * Método update
   * 
   * Este método se ejecuta en cada frame de la escena. Llama al método moveController para manejar la entrada del usuario.
   */
  update() {
    this.moveController();
  }

    /**
   * Método posiciones
   * 
   * Este método establece varias posiciones para el selector.
   */
  posiciones() {
    this.selector.setPosition(870, 695,);
    this.selector.setPosition(1000, 693);
    this.selector.setPosition(583, 695,);
  }


   /**
   * Método moveController
   * 
   * Este método maneja la entrada del controlador de juego para mover el selector y realizar acciones basadas en los botones presionados.
   */

  moveController() {

    const control = this.input.gamepad.getPad(0);
    if (!control) {
      return;
    }
    if (control.buttons[3].pressed) {
      //Info por poner modal
    }

    if (control.buttons[2].pressed) {
      this.scene.stop('MenuScene');
      this.scene.start('ScoreScene');
    }

    if (control.buttons[1].pressed) {
      this.mSleccion.play();
      let multiplayer;
      switch (this.selector.x) {
        case 583:
          this.mOpening.stop();
          multiplayer = JSON.stringify(false);
          sessionStorage.setItem('multiplayer', multiplayer);
          setTimeout(() => {
            this.mSleccion.stop();
          }, 2000);
          this.scene.stop('MenuScene');
          this.scene.start('SelectRole');
          break;
        case 870:
          this.mOpening.stop();
          multiplayer = JSON.stringify(true);
          sessionStorage.setItem('multiplayer', multiplayer);
          sessionStorage.setItem('selectPLayer', 'player1');
          setTimeout(() => {
            this.mSleccion.stop();
          }, 2000);
          this.scene.stop('MenuScene');
          this.scene.start('IntroScene');
          break;

        case 1000:

          break;
      }
    }

    if (control.axes.length) {
      const axisH = control.axes[0].getValue();
      if (axisH === -1) {
        this.selector.setPosition(870, 695);
      } else if (axisH === 1) {
        this.selector.setPosition(583, 695);
      } else {


      }

    }
  }
}

export default MenuScene