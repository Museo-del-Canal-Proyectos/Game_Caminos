
import BaseScene from "./BaseScene";

class SavePlayer extends BaseScene {

    constructor(config) {

        super('SavePlayer', config);
        this.nombre="";
        this.dataName=null;
        this.dataPuntos=null;
        this.key=null;
    }

    getDataChange(){
        this.dataSesion= sessionStorage.length;
        let parseData
        console.log(this.dataSesion)
        if(this.dataSesion === 1){ 
           for(let i=0;i<=5;i++){
            parseData = JSON.parse(sessionStorage.getItem(`${i}`));
            if(parseData!=null){
            this.key=i;  
            this.dataName=parseData.nombre;
            this.dataPuntos=parseData.puntos;
            }
           }
        }
        console.log(this.key,this.dataName,this.dataPuntos);
    }

    create() {
        this.getDataChange();
        this.add.text(10, 10, 'Enter your name:', { font: '32px Courier', fill: '#ffffff' });

        const textEntry = this.add.text(10, 50, '', { font: '32px Courier', fill: '#ffff00' });

        this.input.keyboard.on('keydown', event => {
            if (event.keyCode === 8 && textEntry.text.length > 0) {
             this.dataName=textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
            }
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode <= 90)) {
             this.dataName=textEntry.text += event.key;
            }
        });
    }


    guardarData(){
     let dataJugador=[]
     const data={
        nombre : this.dataName,
        puntos : this.dataPuntos
     }
     dataJugador.push(JSON.stringify(data));
     localStorage.setItem(`${this.key}`,dataJugador);
     sessionStorage.clear();
     this.scene.start("ScoreScene");
    }




    update() {
     
        this.moveController();

    }
    moveController() {
        const control = this.input.gamepad.getPad(0);
        if (!control) {
            return;
        }
        if (control.buttons[0].pressed) {
           this.guardarData();
        }
       
    }



}


export default SavePlayer;