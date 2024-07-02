import BaseScene from "./BaseScene";


class IntroBoqueron extends BaseScene {

    activacion = false;
    constructor(config) {
        super('IntroBoqueron', config);
    }


    create() {
        this.cameras.main.setBounds(0, 0, 1366, 768);
        this.cameras.main.flash(1500);
        const titulo = "Boquerón";
        const content = [
            'Una de las primeras ventas que surgieron en el Camino Real, estaba ubicada a 24 km de Portobelo',
            'y era la primera parada en la ruta hacia la ciudad de Panamá. Al igual que otros pueblos transístmicos,',
            'en Boquerón los viajeros podían encontrar hospedaje y comida como bollos de maíz,',
            'plátanos y platos de carne o pescado.',
            '',,
            'By ITMSOFT.'
        ];

        this.add.image(0, 0, 'TextoIMG1').setOrigin(0);
        this.texto1 = this.add.text(235, 320, content, { fontFamily: 'Comic Sans MS', fontSize: '20px', color: '#151515', wordWrap: { width: 950 } }).setOrigin(0);
        this.texto1.setShadow(5, 5, '#333333', 4, true, true);
        this.titulo= this.add.text(600,225,titulo,{ fontFamily: 'Comic Sans MS', fontSize: '36px', color: '#151515', wordWrap: { width: 950 } }).setOrigin(0);
        this.titulo.setShadow(5, 5, '#333333', 4, true);
        setTimeout(() => {
            this.activacion = true;
            this.btn = this.add.image(1035, 545, 'btnRed').setScale(0.2).setOrigin(0);
        }, 7000)
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
            this.scene.start('Plano3');
        }
        if(control.buttons[0].pressed){
            this.scene.start('Plano3');
        }
    }

}

export default IntroBoqueron;