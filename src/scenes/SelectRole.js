import BaseScene from "./BaseScene";

class SelectRole extends BaseScene {
    role;
    musicAmbiente;
    musciNino;
    musicNina;
    constructor(config) {
        super('SelectRole', config);
    }

    create() {
        this.add.image(0, 0, 'personaje').setOrigin(0);
        this.role = this.physics.add.image(280, 210, 'pesonaje-select').setOrigin(0);
        this.musicAmbiente= this.sound.add('op');
        this.musicAmbiente.play();
        this.musciNino= this.sound.add('sl');
        this.musicNina= this.sound.add('ob');
    }

    update() {

        const control = this.input.gamepad.getPad(0);
        if (!control) {
            return;
        }
        if (control.buttons[0].pressed) {

            if(this.role.x===750){
                sessionStorage.setItem('selectPLayer','player2');
                this.musicAmbiente.stop();
                this.musciNino.stop();
                this.musicNina.stop();
                this.scene.start('Mapa1');

            }
            if(this.role.x===280){
                sessionStorage.setItem('selectPLayer','player1');
                this.musicAmbiente.stop();
                this.musciNino.stop();
                this.musicNina.stop();
                this.scene.start('Mapa1');
            }
        }
        if (control.axes.length) {
            const axisH = control.axes[0].getValue();
            if (axisH === -1) {
                this.musicAmbiente.stop();
                this.musicNina.stop();
                this.musciNino.play();
                this.role.setPosition(750, 210);
            } else if (axisH === 1) {
                this.musciNino.stop();
                this.musicAmbiente.stop();
                this.musicNina.play();
              this.role.setPosition(280, 210);
            } else {
            }
          }
    }
}

export default SelectRole;