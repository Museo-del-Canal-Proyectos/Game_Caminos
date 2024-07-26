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
    this.mSleccion = this.sound.add('sl');
    this.add.image(0, 0, 'MenuInicial').setOrigin(0);
    this.selector = this.physics.add.image(583, 695, 'select');
    console.log(this.selector);
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
    this.selector.setPosition(870, 695,);
    this.selector.setPosition(1000, 693);
    this.selector.setPosition(583, 695,);
  }

  moveController() {

    const control = this.input.gamepad.getPad(0);
    if (!control) {
      return;
    }
    if (control.buttons[3].pressed) {
      //Info por poner modal
      console.log("por poner");
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

        default:

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