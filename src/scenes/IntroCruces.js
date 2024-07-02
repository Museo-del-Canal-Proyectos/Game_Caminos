import BaseScene from "./BaseScene";


class IntroCruces extends BaseScene {

    activacion = false;
    constructor(config) {
        super('IntroCruces', config);
    }


    create() {
        this.cameras.main.setBounds(0, 0, 1366, 768);
        this.cameras.main.flash(1500);
        const titulo = "Venta de Cruces";
        const content = [
            'Venta de Cruces o San Francisco de Cruces estaba ubicado al margen del río Chagres y ',
            'era el punto de transición entre la ruta terrestre (de Panamá a Cruces) a la ruta fluvial (de Cruces ',
            'a Chagres) en el Camino de Cruces.',
            '',,
            'By ITMSOFT.'
        ];

        this.add.image(0, 0, 'TextoIMG1').setOrigin(0);
        this.texto1 = this.add.text(235, 320, content, { fontFamily: 'Comic Sans MS', fontSize: '20px', color: '#151515', wordWrap: { width: 950 } }).setOrigin(0);
        this.texto1.setShadow(5, 5, '#333333', 4, true, true);
        this.titulo= this.add.text(550,225,titulo,{ fontFamily: 'Comic Sans MS', fontSize: '36px', color: '#151515', wordWrap: { width: 950 } }).setOrigin(0);
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
            this.scene.start('Plano2');
        }
        if(control.buttons[0].pressed){
            this.scene.start('Plano2');
        }
    }

}

export default IntroCruces;