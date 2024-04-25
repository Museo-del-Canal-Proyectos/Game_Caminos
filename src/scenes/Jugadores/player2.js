export default anims=>{
    anims.create({
        key:'move2',
        frames:anims.generateFrameNumbers('player2',{start:0, end:15}),
        frameRate:16,
        repeat:-1
    });
  

    anims.create({
       key:'stop2',
       frames:anims.generateFrameNumbers('player2_IDE',{start:0, end:8}),
       frameRate:10,
        repeat:-1
    })

    anims.create({
        key:'jump2',
        frames:anims.generateFrameNumbers('player2_JUMP',{start:0, end:3}),
        frameRate:3,
         repeat:-1
     })

    anims.create({
        key:'test',
        frames:anims.generateFrameNumbers('mosquitoTest',{start:0, end:6}),
        frameRate:24,
         repeat:-1
     })



}