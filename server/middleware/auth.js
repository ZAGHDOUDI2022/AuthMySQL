const models = require('../controller/session')

module.exports={
    CreateSession:((req,res,user_id,session)=>{
        models.Post(user_id,session)
        .then((result)=>{
            if(result){
                res.status(200).cookie("test",session,{
                    path: '/',
                    expires: new Date(new Date().getTime() + 86400 * 1000),
                    httpOnly: false,
                    test: false
                }).send([session,"success",user_id])
            }else{
                console.log("object")
            }
       
        })
        .catch((err)=>{
           res.send(err)
        })
    }),
    VerifySession:(req,res,next)=>{
        console.log(req.cookies.test)
        if(req.cookies.test){
            models.Get(req.cookies.test)
            .then((result)=>{
                if(result.length>0){
                    var registerInfo={
                        user_id:result[0].user_id,
                        session:result[0].session,
                    }
                    res.status(200).send(registerInfo)
                }else{
                    res.status(200).send('session login fail')
                }
            })
            .catch((err)=>{
                res.status(500).send(err)
            })
        }else{
            res.status(200).send('session login fail')
        }
    }
}
