
import BaseScene from "./BaseScene";

class MenuScene extends BaseScene {

    constructor(config) {

        super('MenuScene', config);

        this.menu = [
           { scene: 'PlayScene', text: 'Play'},
           { scene: 'ScoreScene',text:'Score'},
           {scene: 'TestScene',text:'Test'}
        ]


    }

    create() {

        super.create();
        this.createMenu(this.menu, this.setupMenuEvents.bind(this));

    }


  setupMenuEvents(menuItem){

    

    const textGO =menuItem.textGO;
    textGO.setInteractive();

    //console.log(this)
    textGO.on('pointerover',()=>{
        textGO.setStyle({fill:'#ff0'});
    })

    textGO.on('pointerout',()=>{
        textGO.setStyle({fill:'#fff'});
    })

    textGO.on('pointerup',()=>{
      menuItem.scene && this.scene.start(menuItem.scene);
     
      if(menuItem.text=== 'Exit'){
        this.game.destroy(true);
      }

    })

    


  }

  update(){

    const botonInicio=this.input.gamepad.getPad(0);


    if (!botonInicio) {
      return;
    }

    if(botonInicio.buttons.length){
      
     if(botonInicio.buttons[9].pressed){
    
      this.scene.start('PlayScene');
       
     }else if(botonInicio.buttons[4].pressed){

      this.scene.start('ScoreScene');
       
     }

   }
  }

}


export default MenuScene