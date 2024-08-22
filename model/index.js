const {Sequelize,DataTypes} = require('sequelize')
const databaseConfig = require('../config/dbConfig')


const sequelize = new Sequelize(databaseConfig.db,databaseConfig.username,databaseConfig.password,{
    host : databaseConfig.host, 
    port : databaseConfig.port, 
    dialect : databaseConfig.dialect, 
    operatorsAliases : false, 
    pool : {
        max : 5, 
        min : 0, 
        acquire : 30000,
        idle : 10000
    }
})

sequelize.authenticate()
.then(()=>{
    console.log("milyo hai username password")
})
.catch((err)=>{
    console.log("error aayo hai",err)
})

const db = {}
db.Sequelize = Sequelize 
db.sequelize = sequelize


db.sequelize.sync({force : false}).then(()=>{
    console.log("Synced done!!")
})
module.exports = db 

