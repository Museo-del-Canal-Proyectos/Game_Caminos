import BaseScene from "./BaseScene";
import AnimacionPlayer1 from "./Jugadores/player";

class InicioScene extends BaseScene {

    constructor(config) {
        super('InicioScene', config);
    }

    create() {
        this.add.image(0, 0, 'startInicio').setOrigin(0);
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
            console.log("Botones Programando 0");
            this.scene.stop('InicioScene');
            this.scene.start('IntroGame');
        }

        if (control.buttons[1].pressed) {
            console.log("Botones Programando 0");
            this.scene.stop('InicioScene');
            this.scene.start('IntroGame');
        }

    }

}

export default InicioScene;