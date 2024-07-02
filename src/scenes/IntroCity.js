import BaseScene from "./BaseScene";


class IntroCity extends BaseScene {

    activacion = false;
    constructor(config) {
        super('IntroCity', config);
    }


    create() {
        this.cameras.main.setBounds(0, 0, 1366, 768);
        this.cameras.main.flash(1500);
        const titulo = "Ciudad de Panamá";
        const content = [
            'Fundada en 1673 por Antonio Fernández de Córdoba sobre el sitio del «ancón» o pequeña ensenada,',
            'la nueva ciudad de Panamá substituye a Panamá la Vieja como el principal puerto del circuito ',
            ' comercial transístmico en el Pacífico y fue fortificada desde su establecimiento,',
            'creando un recinto amurallado que separaba a la elite de la sociedad que vivía en su interior de la clase popular que residía en su exterior. ',
            '', ,
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
            this.scene.start('Plano1');
        }
        if(control.buttons[0].pressed){
            this.scene.start('Plano1');
        }
    }

}

export default IntroCity;