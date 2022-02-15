const express = require("express")
const router = express.Router();
const connection = require("../database/db")

router.get("/",(req,res)=>{
    
    connection.query("SELECT * FROM users", (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render("index.ejs", {results:results});
        }
    });
})

//creando registros

router.get("/create", (req,res)=>{
    res.render("create.ejs");
})

//editando registros

router.get("/edit/:id", (req,res)=>{
    const id = req.params.id;
    connection.query("SELECT * FROM users Where id=?", [id], (error,results)=>{
        if(error){
            throw error;
        }else{
            res.render("edit.ejs", {user:results[0]});
        }
    });
})

router.get("/delete/:id", (req,res)=>{
    const id = req.params.id;
    connection.query("DELETE FROM users WHERE id = ?", [id], (error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect("/");
        }
    })
})

const crud = require("../controllers/crud");
router.post("/save", crud.save);
router.post("/update", crud.update);

module.exports = router;