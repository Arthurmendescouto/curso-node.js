const Sequelize=require('sequelize')
//conexão

const sequelize= new Sequelize('postapp','root','root',{
    host:'localhost',
    dialect:'mysql'
})
module.exports={
    Sequelize: Sequelize,
    sequelize:sequelize
}

