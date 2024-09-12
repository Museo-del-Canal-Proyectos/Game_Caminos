import BaseScene from "./BaseScene";

class SelectRole extends BaseScene {
    role;
    musicAmbiente;
    musciNino;
    musicNina;
    constructor(config) {
        super('SelectRole', config);
    }

    createPersonajes(){
        this.player1 = this.physics.add.sprite(365, 326, 'personaje_Boy')
        .setOrigin(0);
        this.player2 = this.physics.add.sprite(840, 326, 'personaje_Girl')
        .setOrigin(0);



        this.anims.create({
            key: 'p1',
            frames: this.anims.generateFrameNumbers('personaje_Boy', { start: 0, end: 7 }),
            frameRate: 9,
            repeat: -1
        });


        this.anims.create({
            key: 'p2',
            frames: this.anims.generateFrameNumbers('personaje_Girl', { start: 1, end: 7 }),
            frameRate: 9,
            repeat: -1
        });


        this.player1.play('p1',true);
        this.player2.play('p2',true);
    }

    create() {
        this.add.image(0, 0, 'personaje').setOrigin(0);
        this.role = this.physics.add.image(280, 210, 'pesonaje-select').setOrigin(0);
        this.musicAmbiente= this.sound.add('op');
        this.musicAmbiente.play();
        this.musciNino= this.sound.add('sl');
        this.musicNina= this.sound.add('ob');

        this.createPersonajes()
    }


    update() {

        const control = this.input.gamepad.getPad(0);
        if (!control) {
            return;
        }
        if (control.buttons[3].pressed) {

            if(this.role.x===750){
                sessionStorage.setItem('selectPLayer','player2');
                this.musicAmbiente.stop();
                this.musciNino.stop();
                this.musicNina.stop();
                this.scene.stop('SelectRole');
                this.scene.start('IntroScene');

            }
            if(this.role.x===280){
                sessionStorage.setItem('selectPLayer','player1');
                this.musicAmbiente.stop();
                this.musciNino.stop();
                this.musicNina.stop();
                this.scene.stop('SelectRole');
                this.scene.start('IntroScene');
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