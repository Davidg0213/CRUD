const express = require("express");
const app = express();


app.set("view engone", "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
//llamar ruta

app.use("/", require("./routes/contacto"));

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});
