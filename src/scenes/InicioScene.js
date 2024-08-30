import BaseScene from "./BaseScene"; //importamos la Clase Base 


class InicioScene extends BaseScene { //clase Inicio 

    constructor(config) {
        super('InicioScene', config);
    }

    create() {
        this.mInicio = this.sound.add('music-inicio');
        this.mInicio.loop=true;
        this.mInicio.play();
        this.add.image(0, 0, 'startInicio').setOrigin(0); //imagen cargada en preload.js pantalla de scena
        this.flechaOp = this.physics.add.sprite(616.5, 576, 'f-menu').setOrigin(0);//cragamos el sprite a animar previamente definido con sus caracteristicas en preload.js
         
        //creamos la animacion
        this.anims.create({
            key: 'moveflecha',
            frames: this.anims.generateFrameNumbers('f-menu', { start: 0, end: 2 }),
            frameRate: 4,
            repeat: -1
        });
        //iniciamos la animacion
        this.flechaOp.play('moveflecha',true);
    }

    update() {
        //llamamos a la funcion 
        this.moveController();

    }

    moveController() {
        const control = this.input.gamepad.getPad(0);// declaramos el primer control usamos 
        if (!control) {//si existe o no un control conectado  regresalo en blanco o con sus caracteristicas 
            return;
        }
         // si se presiona el boton 0
        if (control.buttons[0].pressed) {
            //paramos la scena actual
            this.scene.stop('InicioScene');
            //cargamos la siguiente scena
            this.mInicio.loop=false;
            this.mInicio.stop();
            this.scene.start('IntroGame');
        }
        //si el boton 1 es precionado 
        if (control.buttons[1].pressed) {
            //paramos la scena actual
            this.scene.stop('InicioScene');
            //cargamos la siguiente Scena
            this.mInicio.loop=false;
            this.mInicio.stop();
            this.scene.start('IntroGame');
        }
    }
}

export default InicioScene;