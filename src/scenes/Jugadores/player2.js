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
        key:'celebrate' ,
        frames: anims.generateFrameNumbers(`player2_C`,{start:0, end:11}),
        frameRate: 6,
        repeat:-1, 
     })

     anims.create({
        key:'celebrateP2' ,
        frames: anims.generateFrameNumbers(`player2_C`,{start:0, end:11}),
        frameRate: 6,
        repeat:-1, 
     })

     anims.create({
        key:'up',
        frames:anims.generateFrameNumbers(`player2_JUMP`,{start:0, end:3}),
        frameRate:3,
         repeat:-1
     })

     anims.create({
        key:'down',
        frames:anims.generateFrameNumbers(`player2_JUMP`,{start:0, end:3}),
        frameRate:3,
         repeat:-1
     })


}