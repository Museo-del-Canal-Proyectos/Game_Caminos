
import BaseScene from "./BaseScene";

class CreditScene extends BaseScene {

    constructor(config) {
 
        super('CreditScene',config);

    }


    create() {

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
        }
        if (control.buttons[1].pressed) {
            console.log("Botones Programando 1")
        }
        if (control.buttons[2].pressed) {
            console.log("Botones Programando 2")
        }
        if (control.buttons[3].pressed) {
            console.log("Botones Programando 3")
        }

    }



}


export default CreditScene;