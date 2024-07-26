import BaseScene from "./BaseScene";
import AnimacionPlayer1 from "./Jugadores/player";

class IntroGame extends BaseScene {
    video=null;
    activacion = false;
    constructor(config) {
        super('IntroGame', config);
    }

    create() {
        this.video =  this.add.video(0, 0, 'videoGame').setOrigin(0);
        this.video.play();
        this.video.on('complete', () => {
            setTimeout(()=>{
                this.scene.stop('IntroGame');
                this.scene.start('MenuScene');
            },2500)
        });
    }

    update() {
    
    }
   
}

export default IntroGame;