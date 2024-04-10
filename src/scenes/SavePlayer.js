
import BaseScene from "./BaseScene";

class SavePlayer extends BaseScene {

    constructor(config) {

        super('SavePlayer',config);

     


    }

    create() {

        this.mundo = this.add.image(0, 0, 'mundo1').setAlpha(5).setOrigin(0);
        
    }

    


    update(){

   
    }


 

}


export default SavePlayer;