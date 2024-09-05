

const databaseConfig = {
    db : process.env.DB, 
    username : process.env.USERNAME, 
    password : process.env.PASSWORD, 
    host : process.env.HOST, 
    port : 59308, 
    dialect : 'mysql'
}

module.exports = databaseConfig
