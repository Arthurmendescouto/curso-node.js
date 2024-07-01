const express=require('express')
const app=express()
const handlebars=require('express-handlebars')
const engine=handlebars.engine
const bodyParser=require('body-parser')
const Sequelize=require('sequelize')

//config
//template engine
app.engine('handlebars',engine({defaultLayout:'main'}))
app.set('view engine','handlebars')

//bodyparser
app.use(bodyParser.urlencoded({extended:false}))
//conexão

const sequelize= new Sequelize('test','root','root',{
    host:'localhost',
    dialect:'mysql'
})
//Rotas
app.get('/cad',function(req, res){
    res.render('formulario')
})

app.post('/add',function(req,res){
    res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo)
})

app.listen(8081,function(){
    console.log('Servidor Rodando na url http:localhost:8081')
})