import BaseScene from "./BaseScene";


class FinalScene extends BaseScene {
    protector=false;
    constructor(config) {
        super('FinalScene', config);
       
    }

    create() {
        this.move_cp1='player1';
        this.move_cp2='player2';
        this.add.image(0, 0, 'fondoBarco').setOrigin(0);
        this.mar = this.physics.add.sprite(810,482, 'mar').setOrigin(0);
        this.tortuga = this.physics.add.sprite(820, 730, 'tortuga').setOrigin(0);
        this.tortuga.setVelocityX(20);
        this.tortuga2 = this.physics.add.sprite(1230, 640, 'tortuga').setOrigin(0);
        this.tortuga2.setFlipX(true);
        this.tortuga2.setVelocityX(-20);
        this.pez = this.physics.add.sprite(500, 485, 'pez').setOrigin(0);
        this.pez.setVelocityX(130);
        this.add.image(0, 0, 'fondoPaijase').setOrigin(0);
        this.player1 = this.physics.add.sprite(70, 160, 'player1')
            .setOrigin(0);

        this.player2 = this.physics.add.sprite(0, 160, 'player2')
            .setOrigin(0);
        this.player2.body.setSize(8, 120);

        this.anims.create({
            key: 'moveT',
            frames: this.anims.generateFrameNumbers('tortuga', { start: 0, end: 5 }),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'moveP',
            frames: this.anims.generateFrameNumbers('pez', { start: 0, end: 3 }),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'moveM',
            frames: this.anims.generateFrameNumbers('mar', { start: 0, end: 2 }),
            frameRate: 9,
            repeat: -1
        });

        this.anims.create({
            key: 'movePlayer1',
            frames: this.anims.generateFrameNumbers(this.move_cp1, { start: 0, end: 15 }),
            frameRate: 16,
            repeat: -1
        });

        
        this.anims.create({
            key: 'movePlayer2',
            frames: this.anims.generateFrameNumbers(this.move_cp2, { start: 0, end: 15 }),
            frameRate: 16,
            repeat: -1
        });

        this.tortuga.play('moveT',true);
        this.tortuga2.play('moveT',true);
        this.pez.play('moveP',true);
        this.mar.play('moveM',true);

        setTimeout(()=>{
            this.player1.play('movePlayer1',true);
            this.player2.play('movePlayer2',true);

            this.player1.setVelocityX(100);
            this.player2.setVelocityX(100);
        },1000)


        setTimeout(()=>{
            this.alerta();
            this.protector=true;
        },4500)

        this.move_cp1='player1_IDE';
        this.move_cp2='player2_IDE';

        this.anims.create({
            key: 'k1',
            frames: this.anims.generateFrameNumbers(this.move_cp1, { start: 0, end: 8 }),
            frameRate: 16,
            repeat: -1
        });

        
        this.anims.create({
            key: 'k2',
            frames: this.anims.generateFrameNumbers(this.move_cp2, { start: 0, end: 8 }),
            frameRate: 16,
            repeat: -1
        });

    }

     
    tortugaCiclo(x){

        switch (x) {
            case 1230:
                this.tortuga.setFlipX(true);
                this.tortuga.setVelocityX(-20);
                break;

            case 820:
                this.tortuga.setFlipX(false);
                this.tortuga.setVelocityX(20);
                break;
            default:
                break;
        }

    }


    pezCiclo(x){

        if(x>1390){
            this.pez.setFlipX(true);
            this.pez.setVelocityX(-130);
        }

        if(x<502){
            this.pez.setFlipX(false);
            this.pez.setVelocityX(130);
        }

    }


  alerta(){
    Swal.fire({
        position: "center",
        customClass: "mPlayer",
        background: 'url(./assets/findelamision.png) no-repeat center center',
        text:'hola',
        imageWidth: 50,
        imageHeight: 50,
        showConfirmButton: false,
    });
  }

    tortugaCiclo2(x){

        switch (x) {
            case 1230:
                this.tortuga2.setFlipX(true);
                this.tortuga2.setVelocityX(-20);
                break;

            case 820:
                this.tortuga2.setFlipX(false);
                this.tortuga2.setVelocityX(20);
                break;
            default:
                break;
        }

    }


    stop(X){
      if (X>420){
         this.player1.setVelocityX(0);
         this.player2.setVelocityX(0);
         
         this.player1.stop('movePlayer1',true);
         this.player2.stop('movePlayer2',true);
         

        this.player1.play('k1',true);
        this.player2.play('k2',true);

       
      }
    }


    update() {
        
        this.stop(this.player1.body.x);
        this.tortugaCiclo(Math.trunc(this.tortuga.body.x));
        this.tortugaCiclo2(Math.trunc(this.tortuga2.body.x));
        let pez=Math.trunc(this.pez.body.x)
        this.pezCiclo(pez);
        this.moveController();

    }

    moveController() {
        const control = this.input.gamepad.getPad(0);
        if (!control) {
            return;
        }
        if (control.buttons[3].pressed &&this.protector) {
            console.log("Botones Programando 0");
            Swal.close();
            this.scene.stop('FinalScene');
            this.scene.start('SavePlayer');
           
        }
     
    }
}

export default FinalScene;