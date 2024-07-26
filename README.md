# phaser-webpack-boilerplate-new

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository or Download

3. Navigate into the project directory

```bash
  $ cd phaser-webpack-boilerplate-new
```

4. Install the requirements

```bash
  $ npm install
```

5. Run the app

```bash
  $ npm run dev
```

// Suponiendo que ya tienes configurado el gamepad
let gamepad = this.input.gamepad.getPad(0);

if (gamepad) {
    const threshold = 0.5; // Umbral para considerar el movimiento como una pulsación de botón

    // Obtener el valor del eje
    let valorEjeX = gamepad.axes[0].getValue();
    let valorEjeY = gamepad.axes[1].getValue();

    // Detectar si el valor del eje supera el umbral
    if (valorEjeX > threshold) {
        console.log('Botón derecho pulsado');
        // Lógica para cuando se mueve a la derecha
    } else if (valorEjeX < -threshold) {
        console.log('Botón izquierdo pulsado');
        // Lógica para cuando se mueve a la izquierda
    }

    if (valorEjeY > threshold) {
        console.log('Botón abajo pulsado');
        // Lógica para cuando se mueve hacia abajo
    } else if (valorEjeY < -threshold) {
        console.log('Botón arriba pulsado');
        // Lógica para cuando se mueve hacia arriba
    }
}

Aquí tienes la suma total de las coordenadas \(x\) e \(y\) para cada punto en tu lista:

1. Q: \(x = 310\), \(y = 380\), suma = 690
2. W: \(x = 385\), \(y = 380\), suma = 765
3. E: \(x = 460\), \(y = 380\), suma = 840
4. R: \(x = 536\), \(y = 380\), suma = 916
5. T: \(x = 613\), \(y = 380\), suma = 993
6. Y: \(x = 688\), \(y = 380\), suma = 1068
7. V: \(x = 764\), \(y = 380\), suma = 1144
8. I: \(x = 839\), \(y = 380\), suma = 1219
9. O: \(x = 914\), \(y = 380\), suma = 1294
10. P: \(x = 990\), \(y = 380\), suma = 1370
11. A: \(x = 343\), \(y = 468\), suma = 811
12. S: \(x = 418\), \(y = 468\), suma = 886
13. D: \(x = 493\), \(y = 468\), suma = 961
14. F: \(x = 568\), \(y = 468\), suma = 1036
15. G: \(x = 645\), \(y = 468\), suma = 1113
16. H: \(x = 718\), \(y = 468\), suma = 1186
17. J: \(x = 796\), \(y = 468\), suma = 1264
18. K: \(x = 872\), \(y = 468\), suma = 1340
19. L: \(x = 946\), \(y = 468\), suma = 1414
20. Z: \(x = 403\), \(y = 559\), suma = 962
21. X: \(x = 478\), \(y = 559\), suma = 1037
22. C: \(x = 553\), \(y = 559\), suma = 1112
23. V: \(x = 630\), \(y = 559\), suma = 1189
24. B: \(x = 706\), \(y = 559\), suma = 1265
25. N: \(x = 780\), \(y = 559\), suma = 1339
26. M: \(x = 856\), \(y = 559\), suma = 1415
27. DELETE: \(x = 935\), \(y = 558\), suma = 1493
28. BARRA ESPACIO: \(x = 597\), \(y = 645\), suma = 1242

Si necesitas algo más, ¡avísame! 😊