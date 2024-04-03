import Phaser from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";
import MenuScene from "./scenes/MenuScene";
import ScoreScene from "./scenes/ScoreScene";
import TestScene from "./scenes/TestScene";
import WorldScene1 from "./scenes/worldScene1";

const WIDTH= 1366;
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
    //gravity:{ y: 400 },
    //debug: true //linea verde de velocidad PARA VER DISTACIA DE OBJETOS
    },
  },
  scene:initScenes()
}
new Phaser.Game(config);

