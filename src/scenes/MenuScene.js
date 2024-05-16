import BaseScene from "./BaseScene";

class MenuScene extends BaseScene {
  selector;
  mOpening;
  mSleccion;

  constructor(config) {

    super('MenuScene', config);



  }



  create() {
    this.mOpening = this.sound.add('op');
    this.mSleccion= this.sound.add('sl');
    this.add.image(0, 0, 'MenuInicial').setOrigin(0);
    this.selector = this.physics.add.image(425, 693, 'select');
    this.mOpening.loop = true;
    this.mOpening.play();
    //posicion1 425, 693
    //posicion2 713, 693
    //posicion3 1000,693

  }


  update() {
    // this.positionSelect(this.selector);
    this.moveController();

  }
  positionSelect(x) {



  }

  posiciones() {
    this.selector.setPosition(713, 693);
    this.selector.setPosition(1000, 693);
    this.selector.setPosition(425, 693);
  }

  moveController() {

    const control = this.input.gamepad.getPad(0);
    if (!control) {
      return;
    }
    if (control.buttons[3].pressed) {
      this.selector.setPosition(1000, 693);
    }
    if (control.buttons[1].pressed) {
      this.mSleccion.play();
      let multiplayer;
      switch (this.selector.x) {
        case 425:
          this.mOpening.stop();
          multiplayer= JSON.stringify(false);
          sessionStorage.setItem('multiplayer', multiplayer);
          setTimeout(() => {
            this.mSleccion.stop();
          }, 2000);
          this.scene.start('SelectRole');
          break;
        case 713:
          this.mOpening.stop();
          multiplayer= JSON.stringify(true);
          sessionStorage.setItem('multiplayer', multiplayer);
          sessionStorage.setItem('selectPLayer','player1');
          setTimeout(() => {
            this.mSleccion.stop();
          }, 2000);
          this.scene.start('Plano1');
          break;

        case 1000:

          break;

        default:

          break;
      }
    }

    if (control.axes.length) {
      const axisH = control.axes[0].getValue();
      if (axisH === -1) {
        this.selector.setPosition(713, 693);
      } else if (axisH === 1) {
        this.selector.setPosition(425, 693);
      } else {


      }

    }
  }
}

export default MenuScene