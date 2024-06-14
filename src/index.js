import Phaser from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";
import MenuScene from "./scenes/MenuScene";
import ScoreScene from "./scenes/ScoreScene";
import WorldScene1 from "./scenes/worldScene1";
import SavePlayer from "./scenes/SavePlayer";
import CreditScene from "./scenes/CreditScene";
import Plano1 from "./scenes/mundo1";
import Plano2 from "./scenes/mundo2";
import SelectRole from "./scenes/SelectRole";
import Mapa1 from "./scenes/Mapa1";
import Mapa2 from "./scenes/Mapa2";
import Plano3 from "./scenes/mundo3";

const WIDTH = 1368;
const HEIGHT = 768;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
}

const Scenes = [PreloadScene, MenuScene, SelectRole, Plano1,Plano2,Plano3, ScoreScene, CreditScene, SavePlayer, PlayScene, Mapa1, Mapa2, WorldScene1];
const createScene = Scene => new Scene(SHARED_CONFIG)
const initScenes = () => Scenes.map(createScene);

const config = {
  //WEBGL libreria de renderizado de JS  api para renderizado de 2D y 3D graficas 
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true, //para que las imagenes queden con el toque 
  input: {
    gamepad: true,
  },
  physics: {
    //fisicas de simulacion juegos Arcade 
    default: 'arcade',
    arcade: {
      //gravity:{ y: 400 },
      debug: true //linea verde de velocidad PARA VER DISTACIA DE OBJETOS
    },
  },
  scene: initScenes()
}
new Phaser.Game(config);

