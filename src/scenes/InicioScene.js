import BaseScene from "./BaseScene";
import AnimacionPlayer1 from "./Jugadores/player";

class InicioScene extends BaseScene {

    constructor(config) {
        super('InicioScene', config);
    }

    create() {
        this.add.image(0, 0, 'startInicio').setOrigin(0);
        this.flechaOp = this.physics.add.sprite(616.5, 576, 'f-menu').setOrigin(0);
        this.anims.create({
            key: 'moveflecha',
            frames: this.anims.generateFrameNumbers('f-menu', { start: 0, end: 2 }),
            frameRate: 4,
            repeat: -1
        });
        this.flechaOp.play('moveflecha',true);
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