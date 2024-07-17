import BaseScene from "./BaseScene";
import AnimacionPlayer1 from "../scenes/Jugadores/player";
class videoTest extends BaseScene {
    video=null;
    bandera=false;
    constructor(config) {
        super('videoTest', config);
    }

    create(){
     this.video =  this.add.video(0, 0, 'videoEntrada').setOrigin(0);
     
     this.video.play();
     this.video.on('complete', () => {
       this.bandera= true;
       this.player1 = this.physics.add.sprite(940, 510,'player1').setOrigin(0);
       AnimacionPlayer1(this.anims,'player1');
       this.player1.play('celebrateV', true);
       this.btn = this.add.image(1035, 545, 'btnRed').setScale(0.2).setOrigin(0);
     });

    }


    
    update(){
   
    }

}
export default videoTest;