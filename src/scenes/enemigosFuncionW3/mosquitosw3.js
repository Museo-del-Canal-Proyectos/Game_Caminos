exports.Animacion = (mosquito, anims) => {
    anims.create({
        key: 'm-idle',
        frames: anims.generateFrameNumbers('mosquito', { start: 0, end: 5 }),
        frameRate: 36,
        repeat: -1
    });
    mosquito.play('m-idle', true);
}
exports.createSerpiente2= (Serpiente, velocidad) => {
    Serpiente.setSize(80, 30);
    Serpiente.setOffset(20, 30);
    Serpiente.setVelocityX(velocidad);
}
exports.createMosquitoW3_1 = (mosquito, velocidad) => {
    mosquito.setScale(0.8);
    mosquito.setSize(40, 30);
    mosquito.setVelocityY(velocidad);
}
exports.MoveW3_1 = (mosquito, velocidad) => {
    if (mosquito.y < 200) {
        mosquito.setFlipX(false);
        mosquito.setVelocityY(velocidad);
    } else if (mosquito.y > 615) {
        mosquito.setFlipX(true);
        mosquito.setVelocityY(-velocidad);
    }
}
exports.EstadoMosquitos = (mosquito,x,y) => {
    mosquito.body.setEnable(false);
    mosquito.setVisible(false);
    setTimeout(() => {
        mosquito.body.setEnable(true);
        mosquito.setPosition(x,y );
        mosquito.setVisible(true);
    }, 7000);
}