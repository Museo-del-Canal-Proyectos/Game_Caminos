# Juego Rutaurum 

## Arquitectura del Juego

# index.js Crea el proyecto  contiene las configuraciones globales Tamaño de sceneas, # estilo de arte Joystick gamepad

# preload.js se declara la propiedad del elemento y se hace la referencia ejemplo  this.load.spritesheet('referencia', 'assets/player1/player1 SELECCION-idle.png',{frameWidth:195.8,frameHeight:332}); tambien contiene la escena principal del juego al abrirse hay muchas formas para cargar recursos imagenes ,json videos consultar Phaser.js load files : https://newdocs.phaser.io/docs/3.55.2/Phaser.GameObjects.Sprite

# BaseScene.js configuramos la dimesiones en pantalla y centramos los objetos y camara e la clase PHaser que extendemos en las demas escenas para llamar y usar sus propiedades de ciclo create() update() 

# IntroGame.js video de Inicio del JUego

# MenuScene.js 

# InicioScene.js La scena principal del juego al iniciar 



