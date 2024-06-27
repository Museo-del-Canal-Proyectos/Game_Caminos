export default (anims,data)=>{
    anims.create({
        key:'move',
        frames:anims.generateFrameNumbers(`${data}`,{start:0, end:15}),
        frameRate:16,
        repeat:-1
    });
  
    anims.create({
       key:'stop',
       frames:anims.generateFrameNumbers(`${data}_IDE`,{start:0, end:8}),
       frameRate:10,
        repeat:-1
    })

    anims.create({
        key:'jump',
        frames:anims.generateFrameNumbers(`${data}_JUMP`,{start:0, end:3}),
        frameRate:3,
         repeat:-1
     })

    anims.create({
       key:'celebrate' ,
       frames: anims.generateFrameNumbers(`${data}_C`,{start:0, end:11}),
       frameRate: 6,
       repeat:-1, 
    })

     anims.create({
        key:'up',
        frames:anims.generateFrameNumbers(`${data}_JUMP`,{start:0, end:3}),
        frameRate:3,
         repeat:-1
     })

     anims.create({
        key:'down',
        frames:anims.generateFrameNumbers(`${data}_JUMP`,{start:0, end:3}),
        frameRate:3,
         repeat:-1
     })




}