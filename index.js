const express=require('express')
const app=express()
const handlebars=require('express-handlebars')
const engine=handlebars.engine
const bodyParser=require('body-parser')
const Post=require('./models/Post')

//config
//template engine
app.engine('handlebars',engine({defaultLayout:'main'}))
app.set('view engine','handlebars')

//bodyparser
app.use(bodyParser.urlencoded({extended:false}))

//Rotas
app.get('/cad',function(req, res){
    res.render('formulario')
})

app.post('/add',function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.send('POST criado com sucesso!')
    }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
    
})

app.listen(8081,function(){
    console.log('Servidor Rodando na url http:localhost:8081')
})