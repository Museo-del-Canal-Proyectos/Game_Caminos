import BaseScene from "./BaseScene";


class IntroGame extends BaseScene {
    video=null; // Objeto de video que se reproduce en la escena de introducción.
    activacion = false;//Indicador de activación de la escena.
    constructor(config) {
        super('IntroGame', config);//onfiguración de la escena.
    }

    create() {
        //Este método se ejecuta al crear la escena. Añade y reproduce un video, y define el comportamiento al finalizar el video.
        this.video =  this.add.video(0, 0, 'videoGame').setOrigin(0);
        this.video.play();
        this.video.on('complete', () => {
            setTimeout(()=>{
                this.scene.stop('IntroGame');
                this.video.stop();
                this.scene.start('MenuScene');
            },2500)
        });
    }


    /**
     * Método update
     * 
     * Este método se ejecuta en cada frame de la escena. Actualmente no realiza ninguna acción.
     */

    update() {
    
    }
   
}

export default IntroGame;