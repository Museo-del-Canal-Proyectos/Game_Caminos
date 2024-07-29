
import BaseScene from "./BaseScene";

class ScoreScene extends BaseScene {

  constructor(config) {

    super('ScoreScene', config);
    this.lineHeight = 42;
    this.textoPlayer;
    this.puntajePlayer;
    this.ObjetosValor;
    this.coordenadaX=250;
    this.coordenadaY=130;

    this.PuntajecoordenadaX=565;
    this.PuntajecoordenadaY=130;

    this.objetoCoordenadaX=555;
    this.objetoCoordenadaY=173;

    this.textoPlayer_F;
    this.puntajePlayer_F;
    this.ObjetosValor_F;
    this.coordenadaX_F=800;
    this.coordenadaY_F=130;

    this.PuntajecoordenadaX_F=1115;
    this.PuntajecoordenadaY_F=130;

    this.objetoCoordenadaX_F=1106;
    this.objetoCoordenadaY_F=173;

  }

  create() {

    this.mundo = this.add.image(0, 0, 'MP').setOrigin(0); 

    this.dataPlayer();

  }


  dataPlayer() {

    let arregloPlayerRecord = [];
    let dataConverter;
    let regitros = localStorage.length;

    for (let i = 1; i <= regitros; i++) {
      dataConverter = JSON.parse(localStorage.getItem(`${i}`));
      arregloPlayerRecord.push(dataConverter);
    }

    let lastMenuPositionY = 0;
    let playerobjy=169;
   

    if(arregloPlayerRecord.length>5){
      let test = this.orderPor(arregloPlayerRecord.slice(0,5), ['puntos', 'nombre'], ['DESCENDENTE', 'ASCENDENTE']);
      test.forEach(item => {
        
        this.textoPlayer= this.add.text(this.coordenadaX,this.coordenadaY,`${item.nombre}`,{fontSize:"32px",fontFamily:"Myriad Pro",color:"#918477"});
        this.puntajePlayer= this.add.text(this.PuntajecoordenadaX,this.PuntajecoordenadaY,`${item.puntos}`,{fontSize:"38px",fontFamily:"Myriad Pro",fontWeight:"bold",color:"#534d46"});
        this.ObjetosValor= this.add.text(this.objetoCoordenadaX,this.objetoCoordenadaY,`${item.perulera}    ${item.cruz}   ${item.herradura}`,{fontSize:"18px",fontFamily:"Myriad Pro",fontWeight:"bold",color:"#7c6f64"});
        
        this.coordenadaY += 118;
        this.PuntajecoordenadaY += 118;
        this.objetoCoordenadaY += 120;
     
      })

      let test2 = this.orderPor(arregloPlayerRecord.slice(6,10), ['puntos', 'nombre'], ['DESCENDENTE', 'ASCENDENTE']);
      test2.forEach(item => {
        
        this.textoPlayer_F= this.add.text(this.coordenadaX_F,this.coordenadaY_F,`${item.nombre}`,{fontSize:"32px",fontFamily:"Myriad Pro",color:"#918477"});
        this.puntajePlayer_F= this.add.text(this.PuntajecoordenadaX_F,this.PuntajecoordenadaY_F,`${item.puntos}`,{fontSize:"38px",fontFamily:"Myriad Pro",fontWeight:"bold",color:"#534d46"});
        this.ObjetosValor_F= this.add.text(this.objetoCoordenadaX_F,this.objetoCoordenadaY_F,`${item.perulera}    ${item.cruz}   ${item.herradura}`,{fontSize:"18px",fontFamily:"Myriad Pro",fontWeight:"bold",color:"#7c6f64"});
        
        this.coordenadaY_F += 118;
        this.PuntajecoordenadaY_F += 118;
        this.objetoCoordenadaY_F += 120;
     
      })

    }else{
      let test = this.orderPor(arregloPlayerRecord, ['puntos', 'nombre'], ['DESCENDENTE', 'ASCENDENTE']);
      test.forEach(item => {
        
        this.textoPlayer= this.add.text(this.coordenadaX,this.coordenadaY,`${item.nombre}`,{fontSize:"32px",fontFamily:"Myriad Pro",color:"#918477"});
        this.puntajePlayer= this.add.text(this.PuntajecoordenadaX,this.PuntajecoordenadaY,`${item.puntos}`,{fontSize:"38px",fontFamily:"Myriad Pro",fontWeight:"bold",color:"#534d46"});
        this.ObjetosValor= this.add.text(this.objetoCoordenadaX,this.objetoCoordenadaY,`${item.perulera}    ${item.cruz}   ${item.herradura}`,{fontSize:"18px",fontFamily:"Myriad Pro",fontWeight:"bold",color:"#7c6f64"});
        
        this.coordenadaY += 118;
        this.PuntajecoordenadaY += 118;
        this.objetoCoordenadaY += 120;


      })
    }

    
  }
  //orden de objetos 
  orderPor(objetos, propiedades, modosOrden) {
    return [...objetos].sort((a, b) => propiedades.reduce((acumulador, p, i) => {
      if (acumulador === 0) {
        let [m, n] = modosOrden && modosOrden[i] == 'DESCENDENTE' ? [b[p], a[p]] : [a[p], b[p]];
        acumulador = m > n ? 1 : m < n ? - 1 : 0;
      }
      return acumulador;
    }, 0))
  }

  update() {
    this.moveController();
  }

  moveController() {

    const control = this.input.gamepad.getPad(0);
    if (!control) {
      return;
    }

    if (control.buttons[3].pressed) {
      console.log("Botones Programando 0");
      this.scene.stop('ScoreScene');
      window.location.reload();
    }

  }

}


export default ScoreScene;