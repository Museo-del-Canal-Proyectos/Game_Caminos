import Phaser from "phaser"; //importacion de libreria Phaser

class BaseScene extends Phaser.Scene { //clase y extendemos la importacion de pHaser

    constructor(key, config) { //llave y configuracion  en este caso Scena y las configuracion global

        super(key);//clase a usar 
        this.config = config; //configuracionn
        this.screenCenter = [config.width / 2, config.height / 2];  // centramos objetos en pantalla
        this.fontSize = 34; //tamaño de letra
        this.lineHeight = 42; //grueso de linea
        this.fontOptions = { fontSize: `${this.fontSize}px`, fill: "#fff" }; //opciones de estilo

    }

    create() {
        //agregamos imagen Sky 
        this.add.image(0, 0, 'sky').setOrigin(0);

        //no esta en uso es una manera para usar el mouse 
        if (this.config.canGoBack) {
            const backButton = this.add.image(this.config.width - 10, this.config.height - 10, 'back')
                .setOrigin(1)
                .setScale(2)
                .setInteractive()

            backButton.on('pointerup', () => {
                this.scene.start('MenuScene');
            })
        }




    }

    //cargamos escenas
    createMenu(menu, setupMenuEvents) {
        //posicion de objeto en Y
        let lastMenuPositionY = 0;
        //Cargamos las configuraciones por scena en el arreglo que recibe
        menu.forEach(menuItem => {
            const menuPosition = [this.screenCenter[0], this.screenCenter[1] + lastMenuPositionY];
            menuItem.textGO = this.add.text(...menuPosition, menuItem.text, this.fontOptions).setOrigin(0.5, 1);
            lastMenuPositionY += this.lineHeight;
            setupMenuEvents(menuItem)
        })

    }



}


export default BaseScene