import Phaser from "phaser";

class PreloadScene extends Phaser.Scene {

    constructor(){
    
        super('PreloadsScene');
       

    }

    preload(){

          //funciones y propiedades que podemos usar dentro de preload
          this.load.image('sky', 'assets/sky.png');//cargamos el fondo del mundo
        //   this.load.image('bird', 'assets/bird.png');//cargamos el sprite del jugador
          this.load.spritesheet('ha','assets/personaje.png',{frameWidth:48,frameHeight:68});
          this.load.spritesheet('bird','assets/birdSprite.png',{frameWidth:16,frameHeight:16});
          this.load.image('pipe', 'assets/pipe.png');//cargamos el sprite de los obstaculos
          this.load.image('pause','assets/pause.png');//cargamos boton de pausa
          this.load.image('back','assets/back.png');//cargamos boton de regresar
          this.load.image('bg1','assets/plano1.png');
          this.load.image('block_1','assets/1.png');
          this.load.image('block_2','assets/2.png');
          this.load.image('block_3','assets/3.png');
          this.load.image('block_4','assets/4.png');
          this.load.audio('choque', './assets/Audios/level_up.mp3');
          this.load.audio('choque_plat', './assets/Audios/pasos.ogg');

          

          
        
          
    }

    create(){
    
    // this.scene.start('MenuScene');//enviamos la escena menu
    this.scene.start('TestScene');
      
    }
    


}


export default PreloadScene;