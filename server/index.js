const express = require('express')
const app = express()
const port = 3002
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {userRouter}= require('./router/userRouter')



app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:false,
        optionsSuccessStatus:200,
    })
)
app.use(cookieParser());

app.use(express.json())
app.use('/',userRouter)

app.listen(port, ()=>{
    console.log('server is alive')
    console.log('http://localhost:'+port)
})