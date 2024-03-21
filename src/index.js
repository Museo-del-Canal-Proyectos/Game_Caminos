import Phaser from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";
import MenuScene from "./scenes/MenuScene";
import ScoreScene from "./scenes/ScoreScene";
import TestScene from "./scenes/TestScene";
import WorldScene1 from "./scenes/worldScene1";

const WIDTH=1366;
const HEIGHT=768;


const SHARED_CONFIG={
  width:WIDTH,
  height:HEIGHT,
  
}

const Scenes=[PreloadScene,MenuScene,ScoreScene,PlayScene,TestScene,WorldScene1];
const createScene=Scene => new Scene(SHARED_CONFIG)
const initScenes = ()=>Scenes.map(createScene);

const config = {
  //WEBGL libreria de renderizado de JS  api para renderizado de 2D y 3D graficas 
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt:true, //para que las imagenes queden con el toque 
  input:{
    gamepad:true,
   },
  physics: {
    //fisicas de simulacion juegos Arcade 
    default: 'arcade',
    arcade: {
      //gravity: { y: 400 },
     //debug: true//linea verde de velocidad PARA VER DISTACIA DE OBJETOS
    },
  },
  // scene: [PreloadScene,new MenuScene(SHARED_CONFIG), new PlayScene(SHARED_CONFIG)]  
  scene:initScenes()
}
new Phaser.Game(config);
//variable de sprite
/*const VELOCITY = 200;
//obstaculos a renderizar
const PIPES_TO_RENDER = 4;

// let upperPipe = null;
// let lowerPipe = null;

let bird = null;
let pipes = null;

let totalDelta = null;

let pipeHorizontalDistance = 0;

const pipeVerticalDistanceRange = [150, 250];
const pipeHorizontalDistanceRange = [500, 550];


const flapVelocity = 250;
//posicion del player inicial
const initialBirdPosition = { x: config.width * 0.1, y: config.height / 2 }*/

//cargamos imagenes, musica, sprite y animaciones
/*function preload() {
  //'this' contine las escenas
  //funciones y propiedades que podemos usar dentro de preload
  this.load.image('sky', 'assets/sky.png');//cargamos el fondo del mundo
  this.load.image('bird', 'assets/bird.png');//cargamos el sprite del jugador
  this.load.image('pipe', 'assets/pipe.png');//cargamos el sprite de los obstaculos

}*/

/*function create() {
  // x - 400 coordenadas
  // y - 300 coordenadas
  // key llave de la imagen ejemplo 'sky'
  // 400
  // this.add.image(0,0,'sky').setOrigin(0,0);
  // this.add.image(400,300,'sky').setOrigin(0,0.5);
  // this.add.image(0,0,'sky').setOrigin(0);
  this.add.image(0, 0, 'sky').setOrigin(0);//agregamos el fondo del juego
  //agregamos fisica del juego al sprite y referenciamos
  bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y, 'bird').setOrigin(0);//agregamos el sprite al fondo del juego  
  bird.body.gravity.y = 400;//gravedad hacia abajo
  //bird.body.velocity.x=VELOCITY; //agregamos velocidad al sprite

  //grupo de obstaculos
  pipes = this.physics.add.group()

  for (let i = 0; i < PIPES_TO_RENDER; i++) {
    //agregamos obstaculos arriba
    const upperPipe = pipes.create(0, 0, 'pipe').setOrigin(0, 1);
    //agregamos obstaculos abajo
    const lowerPipe = pipes.create(0, 0, 'pipe').setOrigin(0, 0);
    //funcion de creacion continua de obstaculos
    placePipe(upperPipe, lowerPipe);

  }
  //establecemos la velocidad a el grupo de obstaculos ya creados
  pipes.setVelocityX(-200);
  //funcion de inputs de entrda DE PRESIONAR CLICK DE MAUSE
  this.input.on('pointerdown', flap);
  //funcion de input de entrada de teclado tecla barra espaciadora
  this.input.keyboard.on('keydown-SPACE', flap);


}*/

//60 fps
//60 frames por segundos
/*function update(time, delta) {
  //posicion del sprite en x || config.width el  ancho de la pantalla || bird.width la posicion del sprite
  /*if(bird.x>=config.width - bird.width){
    bird.body.velocity.x= -VELOCITY;
  }else if(bird.x<=0){
    bird.body.velocity.x=VELOCITY;
  }*/
  /*if (bird.y > config.height || bird.y < 0 - bird.height) {
    restartBirdPosition();
  }
  //funcion de reciclar obstaculos en pantalla
  recyclePipes();
}*/

//funcion de creacion de obstaculos
//obstaculos arriba y abajo
/*function placePipe(uPipe, lPipe) {
  //mas posiciones de obstaculos del eje x(derecha)
  const rigthMostX = getRigthMostPipe();
  //obstaculos distancia entre ellos en vertical
  const pipeVerticalDistance = Phaser.Math.Between(...pipeVerticalDistanceRange);
  //obstaculos posiciones en vertical
  const pipeVerticalPosition = Phaser.Math.Between(0 + 20, config.height - 20 - pipeVerticalDistance);
  //obstaculos distancia horizontal
  const pipeHorizontalDistance = Phaser.Math.Between(...pipeHorizontalDistanceRange);

  //distacia en x de los obstaculos horizontales y verticales ejes x y y
  uPipe.x = rigthMostX+ pipeHorizontalDistance;
  uPipe.y = pipeVerticalPosition;
  //estableciendo valore de distacia en la creacion de obstaculos
  lPipe.x = uPipe.x;
  lPipe.y = uPipe.y + pipeVerticalDistance;

}

//funcion reciclar obstaculos
function recyclePipes(){
  //creamos un arreglo temporal vacio
  const tempPipes=[];
  //referecia al grupo de obstaculos creados los hijos del mismo por cada 
  //obstaculo fuera del rango del tamaño del escenario y que sean igual a 2 fuera del mismo
  //lo anexamos a la funcion placePipe para crearlos nuevamete en posicion 0 y 1 
  //usando la destructuracion de arreglo ...arreglo que es igual a parametro1 y parametro 2 
  //que recibe la funcion
  pipes.getChildren().forEach(pipe=>{
    if(pipe.getBounds().right<=0){
     tempPipes.push(pipe);
     if(tempPipes.length===2){
      placePipe(...tempPipes);
     }
    }
  })
}*/

//funcion para crear mas obstaculos del lado dereocho en el eje x
/*function getRigthMostPipe() {
  let rigthMostX = 0;
  pipes.getChildren().forEach(function (pipe) {
    rigthMostX = Math.max(pipe.x, rigthMostX);
  })
  //retornamos el obstaculo nuevo anexado del lado deerecho al eje x
  return rigthMostX;

}

function restartBirdPosition() {
  bird.x = initialBirdPosition.x;
  bird.y = initialBirdPosition.y;
  bird.body.velocity.y = 0;
}

//funcion de accion para subir en direccion -y a 200 segun lo definido en la constante velocity
function flap() {
  bird.body.velocity.y = -flapVelocity;
}*/



//new Phaser.Game(config);