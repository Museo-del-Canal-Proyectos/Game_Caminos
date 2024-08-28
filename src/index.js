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
import Mapa3 from "./scenes/Mapa3";
import IntroScene from "./scenes/Intro.Scene";
import IntroCity  from "./scenes/IntroCity";
import IntroCruces from "./scenes/IntroCruces";
import IntroBoqueron from "./scenes/IntroBoqueron";
import videoTest from "./scenes/videoTest";
import IntroPortobelo from "./scenes/IntroPortobelo";
import Mapa4 from "./scenes/Mapa4";
import IntroGame from "./scenes/IntroGame";
import InicioScene from "./scenes/InicioScene";
import FinalScene from "./scenes/FinalScene";

// arriba de este texto estan todas la clases de cada esceneario utilizado en el proyecto 

const WIDTH = 1368;  //tamaño de pantalla en ancho
const HEIGHT = 768;  //tamaño de pantalla en alto

const SHARED_CONFIG = {  //constante objeto de contien las dimenciones de el tamaño en pantalla
  width: WIDTH,  
  height: HEIGHT,
}

// constante Scenes tiene el arreglo de todas las clases escenas que se estan usando
const Scenes = [PreloadScene,InicioScene ,MenuScene, IntroScene,IntroGame,IntroCity,videoTest,IntroCruces,IntroBoqueron,IntroPortobelo,SelectRole, Plano1,Plano2,Plano3, ScoreScene, CreditScene, SavePlayer, PlayScene, Mapa1, Mapa2,Mapa3,Mapa4, WorldScene1,FinalScene];
// constante createScenes crea una nueva escena de manera global con la configuracion de tamaño que establecimos
const createScene = Scene => new Scene(SHARED_CONFIG)
// constante initScenes realiza la creacion de todas las scenas con la configuracion del tamaño establecido
const initScenes = () => Scenes.map(createScene);

//configuracion global para todas las scenas 
const config = {
  //WEBGL libreria de renderizado de JS  api para renderizado de 2D y 3D graficas 
  type: Phaser.AUTO,
  ...SHARED_CONFIG, //agregamos las configuraciones de tamaño de pantalla
  pixelArt: true, //para que las imagenes queden con el toque 
  input: {
    gamepad: true,//declaramos que usamos gamepad en nuestro caso usaos joystick pero trabaja Igual
  },
  physics: {
    //fisicas de simulacion juegos Arcade 
    default: 'arcade',
    arcade: {
      //gravity:{y: 400 },
     //debug: true //linea verde de velocidad PARA VER DISTANCIA DE OBJETOS
    },
  },
  //iniciamos todas las scenas en el arreglo declarado anteriormente
  scene: initScenes()
}
// agrgamos configuracion global para todas las scenas al generar el renderizado 
new Phaser.Game(config);

