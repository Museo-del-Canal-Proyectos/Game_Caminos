import BaseScene from "./BaseScene";


class IntroScene extends BaseScene {

    activacion = false;
    constructor(config) {
        super('IntroScene', config);
    }


    create() {
        this.cameras.main.setBounds(0, 0, 1366, 768);
        this.cameras.main.flash(1500);
        const titulo = "";
        const content = [
            '¡Embárcate en una aventura a través del Camino Real y el Camino de Cruces!',
            '', ,
            'Con Rutaurum y Rutarge, dos jóvenes amantes de la historia, viajarás al pasado atravesando selvas ',
            'densas para descubrir tesoros ocultos y enfrentar numerosos desafíos mientras transitas por los ',
            'caminos transístmicos de Panamá que conectaron ambos océanos.',
            '', ,
            'By ITMSOFT.'
        ];

        this.add.image(0, 0, 'TextoIMG1').setOrigin(0);
        this.texto1 = this.add.text(235, 280, content, { fontFamily: 'Comic Sans MS', fontSize: '20px', color: '#151515', wordWrap: { width: 950 } }).setOrigin(0);
        this.texto1.setShadow(5, 5, '#333333', 4, true, true);
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
            this.scene.start('Mapa1');
        }
        if(control.buttons[0].pressed){
            this.scene.start('Mapa1');
        }
    }

}

export default IntroScene;