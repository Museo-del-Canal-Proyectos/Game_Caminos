import BaseScene from "./BaseScene";
import AnimacionPlayer1 from "../scenes/Jugadores/player";

class IntroCity extends BaseScene {
    video=null;
    activacion = false;
    constructor(config) {
        super('IntroCity', config);
    }


    create() {
        this.storagePlayer = sessionStorage.getItem('selectPLayer');
        this.video =  this.add.video(0, 0, 'videoCity').setOrigin(0);
        this.video.play();
        this.video.on('complete', () => {
          AnimacionPlayer1(this.anims,this.storagePlayer);
          this.activacion=true;
          this.btn = this.add.image(1035, 545, 'btnRed').setScale(0.2).setOrigin(0);
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
            this.player1 = this.physics.add.sprite(940, 510,this.storagePlayer).setOrigin(0);
            this.btn.setVisible(false);
            this.player1.play('celebrateV', true);
            this.activacion=false;
            setTimeout(()=>{
                this.scene.start('Plano1');
            },1600);
        }
        if(control.buttons[0].pressed){
            this.player1 = this.physics.add.sprite(940, 510,this.storagePlayer).setOrigin(0);
            this.btn.setVisible(false);
            this.player1.play('celebrateV', true);
            this.activacion=false;
            setTimeout(()=>{
                this.scene.start('Plano1');
            },1600)
        }
    }
}

export default IntroCity;