const express=require('express')
const app=express()
const handlebars=require('express-handlebars')
const bodyParser=require('body-parser')
const Post=require('./models/Post')


//config
//template engine
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');

//bodyparser
app.use(bodyParser.urlencoded({extended:false}))

//Rotas
app.get('/',function(req,res){
    Post.findAll({order: [['id','DESC']]}).then(function(posts){
        res.render('home',{posts: posts})
    })
})

app.get('/cad',function(req, res){
    res.render('formulario')
})

app.post('/add',function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
    
})


    app.get('/deletar/:id', async function(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Converte o ID para um número
            const result = await Post.destroy({ where: { id } });
    
            if (result) {
                res.send("Postagem deletada com sucesso!");
            } else {
                res.send("Postagem não encontrada.");
            }
        } catch (erro) {
            res.send("Houve um erro: " + erro);
        }
    });

app.listen(8081,function(){
    console.log('Servidor Rodando na url http:localhost:8081') 
})
//usar mongodb
