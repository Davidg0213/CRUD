const connection = require("../database/db");

exports.save = (req,res)=>{
    const user = req.body.user;
    const edad = req.body.edad;
    const gender = req.body.gender;
    const email = req.body.email;
    const profesion = req.body.profesion;
    const salary = req.body.salary;
    const rol = req.body.rol;

    connection.query("INSERT INTO users SET ?", {user:user,edad:edad, gender:gender, email:email, profesion:profesion, salary:salary, rol:rol},(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect("/");
        }
    })
};

exports.update = (req,res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const edad = req.body.edad;
    const gender = req.body.gender;
    const email = req.body.email;
    const profesion = req.body.profesion;
    const salary = req.body.salary;
    const rol = req.body.rol;
    connection.query("UPDATE users SET ? WHERE id = ?", [{user:user, edad:edad, gender:gender, email:email, profesion:profesion, salary:salary, rol:rol},id], (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect("/");
        }
    })
}