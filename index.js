const express=require('express')
const app=express()
const handlebars=require('express-handlebars')
const engine=handlebars.engine

//config
//template engine
app.engine('handlebars',engine({defaultLayout:'main'}))
app.set('view engine','handlebars')
//conexão
const Sequelize=require('sequelize')
const sequelize= new Sequelize('test','root','root',{
    host:'localhost',
    dialect:'mysql'
})
//Rotas
app.get('/cad',function(req, res){
    res.send('ROTA DE CADASTRO DE POSTS')
})

app.listen(8081,function(){
    console.log('Servidor Rodando na url http:localhost:8081')
})