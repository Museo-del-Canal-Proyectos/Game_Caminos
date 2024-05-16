flag = false;
count = 0;
exports.createSerpiente = (Serpiente1, velocidad) => {
    Serpiente1.setSize(80, 30);
    Serpiente1.setOffset(20, 30);
    Serpiente1.setVelocityX(velocidad);
}
exports.createSerpiente2= (Serpiente, velocidad) => {
    Serpiente.setSize(80, 30);
    Serpiente.setOffset(20, 30);
    Serpiente.setVelocityX(velocidad);
}

exports.Move = (x, velocidad) => {
    if (x.x > 1120) {
        x.setFlipX(true);
        x.setVelocityX(-velocidad);
    } else if (x.x < 680) {
        x.setFlipX(false);
        x.setVelocityX(velocidad);
    }
}

exports.Move2 = (x, velocidad) => {
    if (x.x > 2010) {
        x.setFlipX(true);
        x.setVelocityX(-velocidad);
    } else if (x.x < 1654) {
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

exports.EstadoSerpiente = (serpiente,x,y) => {
    serpiente.body.setEnable(false);
    serpiente.setVisible(false);
    setTimeout(() => {
        serpiente.body.setEnable(true);
        serpiente.setPosition(x,y );
        serpiente.setVisible(true);
    }, 7000);
}


/**
 * anims.create({
        key: 's-idle',
        frames: anims.generateFrameNumbers('serpiente', { start: 0, end: 3 }),
        frameRate: 4,
        repeat: -1
    });
 !flag ? x.play('s-idle', true) : x.play('s-atack', true);
    anims.create({
        key: 's-atack',
        frames: anims.generateFrameNumbers('serpiente2', { start: 0, end: 2 }),
        frameRate: 6,
        repeat: -1
    }); 
 * 
 */