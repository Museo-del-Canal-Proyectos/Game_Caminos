import Phaser from "phaser";

class PreloadScene extends Phaser.Scene {

  constructor() {

    super('PreloadsScene');


  }

  preload() {

    //funciones y propiedades que podemos usar dentro de preload
    /*Music*/
    this.load.audio('op', [ 'assets/Audios/WarioSound/opening.mp3']);
    this.load.audio('sl', [ 'assets/Audios/WarioSound/seleccion.mp3']);
    this.load.audio('ob', [ 'assets/Audios/WarioSound/objetos.mp3']);
    this.load.audio('w1', [ 'assets/Audios/WarioSound/world1.mp3']);
    this.load.audio('w2', [ 'assets/Audios/WarioSound/world2.mp3']);
    /*Music*/
    /*menu*/
    this.load.image('MenuInicial','assets/menu/Inicio.png');
    this.load.image('select','assets/menu/Select-Inicio.png');
    this.load.image('personaje','assets/menu/seleccionpersonaje.png');
    this.load.image('pesonaje-select','assets/menu/Select-personaje.png');
    /*menu*/
    this.load.image('sky', 'assets/sky.png');//cargamos el fondo del mundo
    //   this.load.image('bird', 'assets/bird.png');//cargamos el sprite del jugador
    // this.load.spritesheet('player1','assets/personaje1.png',{frameWidth:70,frameHeight:113});
    this.load.spritesheet('bird', 'assets/birdSprite.png', { frameWidth: 16, frameHeight: 16 });
    this.load.image('pipe', 'assets/pipe.png');//cargamos el sprite de los obstaculos
    this.load.image('pause', 'assets/pause.png');//cargamos boton de pausa
    this.load.image('back', 'assets/back.png');//cargamos boton de regresar
    this.load.image('bg1', 'assets/plano1.png');//BG movimiento
    this.load.image('wordl1', 'assets/worlds/w1.jpg');
    this.load.image('mundo1', 'assets/worlds/world 1.png');//Mundo 1

    this.load.image('Plano1', 'assets/worlds/plano-1.png');//LEVEL 1 CONFIRMADO
    this.load.image('Plano2', 'assets/worlds/plano-2.png');
    this.load.image('Plano3', 'assets/worlds/plano-3.png');
    this.load.spritesheet('player1_IDE', 'assets/player1/player1-ide-R.png', { frameWidth: 70, frameHeight: 113 });
    this.load.spritesheet('player1_JUMP', 'assets/player1/player1-jump-R.png', { frameWidth: 87, frameHeight: 113 });
    this.load.spritesheet('player1', 'assets/player1/player1-walk-R.png', { frameWidth: 70, frameHeight: 113 });
    this.load.image('piedra', 'assets/piedra.png');
    this.load.image('estado', 'assets/estados/barra-estado.png');
    this.load.image('perulera', 'assets/iconos/perulera.png');
    //pl2
    this.load.spritesheet('player2_IDE', 'assets/player2/player2-ide-R.png', { frameWidth: 70, frameHeight: 113 });
    this.load.spritesheet('player2_JUMP', 'assets/player2/player2-jump.png', { frameWidth: 77, frameHeight: 114 });
    this.load.spritesheet('player2', 'assets/player2/player2_R.png', { frameWidth: 70, frameHeight: 113 });

    this.load.spritesheet('serpiente', 'assets/enemigos/Serpiente.png', { frameWidth: 101, frameHeight: 71 });//enemigo
    this.load.spritesheet('serpiente2', 'assets/enemigos/Serpiente-attack.png', { frameWidth: 167, frameHeight: 65 });//enemigo
    //   this.load.spritesheet('mosquito','assets/enemigos/mosquito.png',{frameWidth:36,frameHeight:51});//enemigo
    //   this.load.spritesheet('mosquito2','assets/enemigos/mosquito.png',{frameWidth:36,frameHeight:51});//enemigo
    //   this.load.spritesheet('mosquito3','assets/enemigos/mosquito.png',{frameWidth:36,frameHeight:51});//enemigo
    this.load.spritesheet('mosquito', 'assets/enemigos/mosquito2.png', { frameWidth: 67, frameHeight: 65 });//enemigo
    this.load.image('flecha1', 'assets/enemigos/flecha.png');
    this.load.image('flecha2', 'assets/enemigos/flecha.png');
    this.load.image('flecha3', 'assets/enemigos/flecha.png');
    this.load.spritesheet('bala1', 'assets/enemigos/baladecanon.png', { frameWidth: 50, frameHeight: 71 });
    /*LUVIA*/
    this.load.image('lluvia', 'assets/enemigos/LLUVIA.png',{ frameWidth: 899, frameHeight: 454 });
     
    this.load.image('block_1', 'assets/1.png');//bloques transparentes
    this.load.image('block_2', 'assets/2.png');//bloques transparentes
    this.load.image('block_3', 'assets/3.png');//bloques transparentes
    this.load.image('block_4', 'assets/4.png');//bloques transparentes

    this.load.image('bolsa', 'assets/iconos/dineroBolsa.png');
    this.load.image('fin', 'assets/iconos/gameOver.png');
    this.load.image('diamantes', 'assets/iconos/diamantes.png');
    this.load.image('libro', 'assets/iconos/Libro.png');
    this.load.image('casco', 'assets/iconos/casco.png');

    this.load.audio('choque', './assets/Audios/level_up.mp3');//audios Moi Music
    this.load.audio('choque_plat', './assets/Audios/pasos.ogg');//audios Moi Music
  }

  create() {
    // this.scene.start('MenuScene');//enviamos la escena menu
    this.scene.start('MenuScene');
  }



}


export default PreloadScene;