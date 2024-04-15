
import BaseScene from "./BaseScene";

class MenuScene extends BaseScene {

  constructor(config) {

    super('MenuScene', config);

    this.menu = [
      { scene: 'PlayScene', text: 'Play' },
      { scene: 'ScoreScene', text: 'Score' },
      { scene: 'CreditScene', text:'Credits'}
    ]


  }

  create() {

    super.create();
    this.createMenu(this.menu, this.setupMenuEvents.bind(this));

  }


  setupMenuEvents(menuItem) {



    const textGO = menuItem.textGO;
    textGO.setInteractive();

    //console.log(this)
    textGO.on('pointerover', () => {
      textGO.setStyle({ fill: '#ff0' });
    })

    textGO.on('pointerout', () => {
      textGO.setStyle({ fill: '#fff' });
    })

    textGO.on('pointerup', () => {
      menuItem.scene && this.scene.start(menuItem.scene);

      if (menuItem.text === 'Exit') {
        this.game.destroy(true);
      }

    })




  }

  update() {

   this.moveController();

  }

  moveController() {
    const control = this.input.gamepad.getPad(0);
    if (!control) {
      return;
    }
    if (control.buttons[0].pressed) {
    
      this.scene.start('PlayScene');

    }
    if (control.buttons[1].pressed) {

      this.scene.start('ScoreScene');
    }

    if (control.buttons[2].pressed) {

      this.scene.start('CreditScene');
    }

  }
}



export default MenuScene