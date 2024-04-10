
import BaseScene from "./BaseScene";

class ScoreScene extends BaseScene {

  constructor(config) {

    super('ScoreScene', config);
    this.lineHeight = 42;

  }

  create() {
   
    this.mundo = this.add.image(0, 0, 'mundo1').setAlpha(5).setOrigin(0); this.mundo = this.add.image(0, 0, 'mundo1').setAlpha(5).setOrigin(0);

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
  
    let test= this.orderPor(arregloPlayerRecord, ['puntos', 'nombre'], ['DESCENDENTE','ASCENDENTE']);
    test.forEach(item => {
        item.nombre;
        const posiciones=[this.screenCenter[0], this.screenCenter[1] + lastMenuPositionY];
        this.add.text(...posiciones,`${item.nombre}  ${item.puntos}`,{ fontSize: '38px', fontFamily: 'Comic Sans MS', fill: "#fff" }).setOrigin(0.5, 2);
        lastMenuPositionY += this.lineHeight;
      })
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


  }

}


export default ScoreScene;