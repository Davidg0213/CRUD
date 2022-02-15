const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "crud"
})

connection.connect((error)=>{
    if(error){
        console.error("El error de connexión es: "+error);
        return 
    }
    console.log("¡Conectado a la base de datos!")
})

module.exports = connection;