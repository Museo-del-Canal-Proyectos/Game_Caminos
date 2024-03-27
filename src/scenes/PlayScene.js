import BaseScene from "./BaseScene";


class PlayScene extends BaseScene {

    constructor(config) {
        super('PlayScene', config);
   

       
    }


    create() { 

        this.add.image(0, 0, 'mundo1').setOrigin(0);

    }





}


export default PlayScene;