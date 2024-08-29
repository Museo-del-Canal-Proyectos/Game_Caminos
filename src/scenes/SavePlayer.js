
import BaseScene from "./BaseScene";

class SavePlayer extends BaseScene {
    i = 0;
    scala = false;
    constructor(config) {
        super('SavePlayer', config);
        this.textEntry
        this.calcular = { x: 310, y: 380 }
        this.nombre = "";
        this.dataName = null;
        this.dataPuntos = null;
        this.obj1 = null;
        this.obj2 = null;
        this.obj3 = null;
        this.key = null;
        this.objeto = null;
        this.liena = null;
        this.c1 = null;
        this.c2 = null;
        this.c3 = null;
        this.c4 = null;
        this.puntoR = [
            { x: 310, y: 380 },//Q
            { x: 385, y: 380 },//W
            { x: 460, y: 380 },//E
            { x: 536, y: 380 },//R
            { x: 613, y: 380 },//T
            { x: 688, y: 380 },//Y
            { x: 764, y: 380 },//V
            { x: 839, y: 380 },//I
            { x: 914, y: 380 },//O
            { x: 990, y: 380 },//P
            { x: 343, y: 468 },//A
            { x: 418, y: 468 },//S
            { x: 493, y: 468 },//D
            { x: 568, y: 468 },//F
            { x: 645, y: 468 },//G
            { x: 718, y: 468 },//H
            { x: 796, y: 468 },//J
            { x: 872, y: 468 },//K
            { x: 946, y: 468 },//L
            { x: 403, y: 559 },//Z
            { x: 478, y: 559 },//X
            { x: 553, y: 559 },//C
            { x: 630, y: 559 },//V
            { x: 706, y: 559 },//B
            { x: 780, y: 559 },//N
            { x: 856, y: 559 },//M
            { x: 935, y: 558 },//DELETE
            { x: 597, y: 645 },//BARRA ESPACIO
        ];

        //letras
        this.letras = [{
            690: "Q",
            765: "W",
            840: "E",
            916: "R",
            993: "T",
            1068: "Y",
            1144: "U",
            1219: "I",
            1294: "O",
            1370: "P",
            811: "A",
            886: "S",
            961: "D",
            1036: "F",
            1113: "G",
            1186: "H",
            1264: "J",
            1340: "K",
            1414: "L",
            962: "Z",
            1037: "X",
            1112: "C",
            1189: "V",
            1265: "B",
            1339: "N",
            1415: "M",
            1493: "BORRAR",
            1242: " ",
        }];
    }

    letrasE(numero) {
        // if(this.textEntry.text==="BORRAR" && this.textEntry.text.length>0){
        //     this.textEntry.text=this.textEntry.text.substr(0, this.textEntry.text.length - 1);
        // }
        this.letras.forEach(data => {

            let verificacion = data[1493];
            let valorActual;
            valorActual = data[numero];

            if (verificacion === valorActual && this.textEntry.text.length > 0) {
                console.log("Valido");
                this.dataName = this.textEntry.text = this.textEntry.text.substr(0, this.textEntry.text.length - 1);
            } else {
                if (this.textEntry.text.length < 12) {
                    this.dataName = this.textEntry.text += data[numero]
                    console.log(valorActual);
                }
            }
        });
    }

    create() {
        this.musicP= this.sound.add('music-inicio');
        this.musicP.loop=true;
        this.musicP.play();
        this.valorActual = 'selector-letras';
        this.add.image(0, 0, 'teclado').setOrigin(0);
        this.selector = this.physics.add.image(310, 380, this.valorActual).setOrigin(0);
        this.delete = this.physics.add.image(935, 558, 'selector-delete').setOrigin(0);
        this.espacio = this.physics.add.image(597, 645, 'selector-espacio').setOrigin(0);
        this.delete.setVisible(false);
        this.espacio.setVisible(false);
        console.log(this.selector)

        this.objeto = this.physics.add.image(200, 157, 'block_3').setScale(0.2).setOrigin(0);
        this.linea = this.physics.add.image(110, 170, 'block_3').setImmovable(true).setScale(5, 0).setOrigin(0);
        this.objeto.body.setGravityY(500);
        this.physics.add.collider(this.objeto, this.linea, null, null, this);
        this.c1 = this.physics.add.image(297, 360, 'block_3').setImmovable(true).setScale(9.1, 0).setOrigin(0);
        this.c2 = this.physics.add.image(297, 730, 'block_3').setImmovable(true).setScale(9.1, 0).setOrigin(0);
        this.c3 = this.physics.add.image(297, 360, 'block_3').setImmovable(true).setScale(0, 5.8).setOrigin(0);
        this.c4 = this.physics.add.image(1070, 360, 'block_3').setImmovable(true).setScale(0, 5.8).setOrigin(0);
        this.physics.add.collider(this.selector, this.c1, null, null, this);
        this.physics.add.collider(this.selector, this.c2, null, null, this);
        this.physics.add.collider(this.selector, this.c3, null, null, this);
        this.physics.add.collider(this.selector, this.c4, null, null, this);
        this.dataSesion = localStorage.length;
        this.dataPuntos = sessionStorage.getItem('PuntajeActual');
        this.obj1 = sessionStorage.getItem('PeruleraObj1');
        this.obj2 = sessionStorage.getItem('CruzObj2');
        this.obj3 = sessionStorage.getItem('HerraduraObj3');
        if (this.dataSesion > 0) {
            this.key = this.dataSesion + 1;
        } else {
            this.key = 1;
        }
        console.log(this.key, this.dataName, this.dataPuntos);

        //this.add.text(100, 100, 'Enter your name:', { font: '32px Courier', fill: '#ffffff' });

        this.textEntry = this.add.text(390, 270, '', { font: '45px Engravers MT', fill: '#A99D8D', stroke: '#40FF00' });
        let countLetra = 0;
        console.log(countLetra);

        this.input.keyboard.on('keydown', event => {
            if (event.keyCode === 8 && this.textEntry.text.length > 0) {
                this.dataName = this.textEntry.text = this.textEntry.text.substr(0, this.textEntry.text.length - 1);
            }
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode <= 90)) {

                if (countLetra < 13) {
                    this.dataName = this.textEntry.text += event.key.toUpperCase();
                } else {
                    console.log("Sobre pasate el limite de letras permitidas");
                }

            }
            countLetra = this.textEntry.text.length;
            console.log(countLetra);
        });


    }




    guardarData() {
        let dataJugador = [];

        const data = {
            nombre: this.dataName,
            puntos: this.dataPuntos,
            perulera: this.obj1,
            cruz: this.obj2,
            herradura: this.obj3
        }

        dataJugador.push(JSON.stringify(data));
        localStorage.setItem(`${this.key}`, dataJugador);
        sessionStorage.clear();
        this.scene.stop('SavePlayer');
        this.musicP.loop=false;
        this.musicP.stop();
        this.scene.start("ScoreScene");
    }



    calcularDistancia(punto1, punto2) {
        const dx = punto1.x - punto2.x;
        const dy = punto1.y - punto2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Función para encontrar el punto más cercano
    encontrarPuntoMasCercano(puntoReferencia) {
        let puntoMasCercano = null;
        let distanciaMinima = Infinity;

        for (const punto of this.puntoR) {
            const distancia = this.calcularDistancia(punto, puntoReferencia);
            if (distancia < distanciaMinima) {
                distanciaMinima = distancia;
                puntoMasCercano = punto;
            }
        }

        return puntoMasCercano;
    }


    update() {

        this.moveController();

    }

    moveController() {
        const control = this.input.gamepad.getPad(0);

        if (!control) {
            return;
        }
        if (control.buttons[1].pressed && this.objeto.body.onFloor()) {
            this.objeto.setVelocityY(-150);
            this.letrasE(this.calcular.x + this.calcular.y);

        }

        if (control.buttons[2].pressed) {
            if (this.textEntry.text.length === 0) {
                this.dataName = "PLAYER"
                this.guardarData();
            } else {
                this.guardarData();
            }
        }

        if (control.axes.length && this.objeto.body.onFloor()) {
            const axisH = control.axes[0].getValue();
            const axisV = control.axes[1].getValue();
            if (axisH === -1) {
                this.i++;
                let num = this.i
                this.selector.setVelocityX(450);
            } else if (axisH === 1) {
                this.selector.setVelocityX(-450);

            } else if (axisV === 1) {
                this.selector.setVelocityY(-450);

            } else if (axisV === -1) {
                this.selector.setVelocityY(450);

            } else {
                this.selector.setVelocityX(0);
                this.selector.setVelocityY(0);
                let referencia = { x: Math.trunc(this.selector.body.x), y: Math.trunc(this.selector.body.y) }
                const puntoMasCercano = this.encontrarPuntoMasCercano(referencia);
                this.calcular = puntoMasCercano;

                if (this.calcular.x == 935) {
                    this.delete.setVisible(true);
                    this.espacio.setVisible(false);
                    this.selector.setVisible(false);
                    this.selector.setPosition(this.calcular.x, this.calcular.y);
                } else if (this.calcular.x == 597) {
                    this.espacio.setVisible(true);
                    this.delete.setVisible(false);
                    this.selector.setVisible(false);
                    this.selector.setPosition(this.calcular.x, this.calcular.y);
                } else {
                    this.delete.setVisible(false);
                    this.espacio.setVisible(false);
                    this.selector.setVisible(true);
                    this.selector.setPosition(this.calcular.x, this.calcular.y);

                }


            }
        }
    }
}

export default SavePlayer;