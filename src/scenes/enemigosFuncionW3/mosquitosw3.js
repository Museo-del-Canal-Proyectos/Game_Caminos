exports.Animacion = (mosquito, anims) => {
    anims.create({
        key: 'm-idle',
        frames: anims.generateFrameNumbers('mosquito', { start: 0, end: 5 }),
        frameRate: 36,
        repeat: -1
    });
    mosquito.play('m-idle', true);
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