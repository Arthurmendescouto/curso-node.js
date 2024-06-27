const express=require('express')
const app=express()
const handlebars=require('express-handlebars')
const engine=handlebars.engine


app.engine('handlebars',engine({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.listen(8081,function(){
    console.log('Servidor Rodando na url http:localhost:8081')
})