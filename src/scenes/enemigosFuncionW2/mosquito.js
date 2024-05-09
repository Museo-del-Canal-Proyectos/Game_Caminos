exports.Move = (mosquito, velocidad) => {
    if (mosquito.x < 440) {
        mosquito.setFlipX(true);
        mosquito.setVelocityX(velocidad);
    } else if (mosquito.x > 1200) {
        mosquito.setFlipX(false);
        mosquito.setVelocityX(-velocidad);
    }
}

exports.createMosquito = (mosquito, velocidad) => {
    mosquito.setScale(0.8);
    mosquito.setSize(40, 30);
    mosquito.setVelocityX(-velocidad);
}

exports.createMosquito3= (mosquito, velocidad) => {
    mosquito.setScale(0.8);
    mosquito.setSize(40, 30);
    mosquito.setVelocityY(velocidad);
}

exports.Move2 = (mosquito, velocidad) => {
    if (mosquito.y < 240) {
        mosquito.setFlipX(false);
        mosquito.setVelocityY(velocidad);
    } else if (mosquito.y > 550) {
        mosquito.setFlipX(true);
        mosquito.setVelocityY(-velocidad);
    }
}

exports.Move3 = (mosquito, velocidad) => {
    if (mosquito.y < 310) {
        mosquito.setFlipX(false);
        mosquito.setVelocityY(velocidad);
    } else if (mosquito.y > 650) {
        mosquito.setFlipX(true);
        mosquito.setVelocityY(-velocidad);
    }
}

exports.createMosquito2 = (mosquito, velocidad) => {
    mosquito.setScale(0.8);
    mosquito.setSize(40, 30);
    mosquito.setVelocityY(velocidad);
}


exports.Animacion = (mosquito,anims) => {
    anims.create({
        key: 'm-idle',
        frames: anims.generateFrameNumbers('mosquito', { start: 0, end: 5 }),
        frameRate: 36,
        repeat: -1
    });
    mosquito.play('m-idle',true);
}