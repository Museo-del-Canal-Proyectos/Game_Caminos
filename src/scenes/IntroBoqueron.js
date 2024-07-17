import BaseScene from "./BaseScene";
import AnimacionPlayer1 from "../scenes/Jugadores/player";

class IntroBoqueron extends BaseScene {
    video = null;
    activacion = false;
    constructor(config) {
        super('IntroBoqueron', config);
    }


    create() {
        this.storagePlayer = sessionStorage.getItem('selectPLayer');
        this.video = this.add.video(0, 0, 'videoBoqueron').setOrigin(0);
        this.video.play();
        this.video.on('complete', () => {
            AnimacionPlayer1(this.anims, this.storagePlayer);
            this.activacion = true;
            this.btn = this.physics.add.sprite(450, 450, 'btn').setScale(0.5).setOrigin(0);
            this.anims.create({
              key:'btnV' ,
              frames: this.anims.generateFrameNumbers('btn',{start:0, end:3}),
              frameRate: 4,
              repeat:-1, 
             })
            this.btn.play('btnV',true);
        });
    }


    update() {

        if (this.activacion) {
            this.moveController();
        }

    }

    moveController() {
        const control = this.input.gamepad.getPad(0);
        if (!control) {
            return;
        }
        if (control.buttons[1].pressed) {
            this.player1 = this.physics.add.sprite(450, 450, this.storagePlayer).setOrigin(0);
            this.player1.setScale(0.5);
            this.btn.setVisible(false);
            this.player1.play('celebrateV', true);
            this.activacion = false;
            setTimeout(() => {
                this.scene.start('Plano3');
            }, 1500);
        }
        if (control.buttons[0].pressed) {
            this.player1 = this.physics.add.sprite(450, 450, this.storagePlayer).setOrigin(0);
            this.player1.setScale(0.5);
            this.btn.setVisible(false);
            this.player1.play('celebrateV', true);
            this.activacion = false;
            setTimeout(() => {
                this.scene.start('Plano3');
            }, 1500);
        }
    }
}

export default IntroBoqueron;