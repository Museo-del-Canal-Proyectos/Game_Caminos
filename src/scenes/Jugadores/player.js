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
        key:'test',
        frames:anims.generateFrameNumbers('mosquitoTest',{start:0, end:6}),
        frameRate:24,
         repeat:-1
     })



}