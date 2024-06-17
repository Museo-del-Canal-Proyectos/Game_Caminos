flag = false;
count = 0;

exports.createSerpiente1= (Serpiente, velocidad) => {
    Serpiente.setSize(80, 30);
    Serpiente.setOffset(20, 30);
    Serpiente.setVelocityX(velocidad);
}
exports.MoveW3_1 = (x, velocidad) => {
    if (x.x > 2350) {
        x.setFlipX(true);
        x.setVelocityX(-velocidad);
    } else if (x.x < 1400) {
        x.setFlipX(false);
        x.setVelocityX(velocidad);
    }
}
exports.MoveW3_2 = (x, velocidad) => {
    if (x.x > 3100) {
        x.setFlipX(true);
        x.setVelocityX(-velocidad);
    } else if (x.x < 2600) {
        x.setFlipX(false);
        x.setVelocityX(velocidad);
    }
}
exports.Animacion = (x, anims) => {
    anims.create({
        key: 's-atack',
        frames: anims.generateFrameNumbers('serpiente2', { start: 0, end: 2 }),
        frameRate: 7,
        repeat: -1
    });
    anims.create({
        key: 's-idle',
        frames: anims.generateFrameNumbers('serpiente', { start: 0, end: 3 }),
        frameRate: 4,
        repeat: -1
    });
    setInterval(() => {
        count++;
        if (count > 1) {
            flag= true;
        } 
        if(count>3){
            count = 0;
            flag= false;
        }
        !flag ? x.play('s-idle', true) : x.play('s-atack', true);
       // console.log(count);
    }, 4000)
    !flag ? x.play('s-idle', true) : x.play('s-atack', true);
}
