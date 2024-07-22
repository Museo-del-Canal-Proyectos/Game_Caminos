import BaseScene from "./BaseScene";


class IntroScene extends BaseScene {
    d1=null;
    activacion = false;
    constructor(config) {
        super('IntroScene', config);
    }


    create() {
       // this.cameras.main.setBounds(0, 0, 1366, 768);
       // this.cameras.main.flash(1500);
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
       this.d1 = this.physics.add.sprite(865,206,'f-menu').setOrigin(0);
       this.d1.setAngle(90);
       this.d2 = this.physics.add.sprite(903,224,'f-menu').setOrigin(0);
       this.d2.setAngle(270);
       this.d3 = this.physics.add.sprite(827,432,'f-menu').setOrigin(0);
       this.d4 = this.physics.add.sprite(853,617,'f-menu').setOrigin(0);

        this.anims.create({
            key:'moveflecha',
            frames:this.anims.generateFrameNumbers('f-menu',{start:0, end:2}),
            frameRate:4,
            repeat:-1
        });

        this.d1.play('moveflecha',true);
        this.d2.play('moveflecha',true);
        this.d3.play('moveflecha',true);
        this.d4.play('moveflecha',true);
        // this.texto1 = this.add.text(235, 280, content, { fontFamily: 'Comic Sans MS', fontSize: '20px', color: '#151515', wordWrap: { width: 950 } }).setOrigin(0);
        // this.texto1.setShadow(5, 5, '#333333', 4, true, true);
        setTimeout(() => {
            this.activacion = true;
           // this.btn = this.add.image(1035, 545, 'btnRed').setScale(0.2).setOrigin(0);
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
        if (control.buttons[3].pressed) {
            this.scene.stop('IntroScene');
            this.scene.start('Mapa1');
        }
    }

}

export default IntroScene;