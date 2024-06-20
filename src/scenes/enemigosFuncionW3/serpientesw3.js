flag = false;
count = 0;

exports.createSerpiente1 = (Serpiente, velocidad) => {
    Serpiente.setSize(80, 30);
    Serpiente.setOffset(20, 30);
    Serpiente.setVelocityX(velocidad);
}
exports.createSerpiente2 = (Serpiente, velocidad) => {
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
    x.play('s-atack', true);
}

exports.EstadoSerpiente = (serpiente, x, y) => {
    serpiente.body.setEnable(false);
    serpiente.setVisible(false);
    setTimeout(() => {
        serpiente.body.setEnable(true);
        serpiente.setPosition(x, y);
        serpiente.setVisible(true);
    }, 7000);
}
