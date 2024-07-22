const express= require('express');
const app= express();

/*
verbos http
GET
POST - publicar informacion
PATCH - ACTUALIZAR un dato de un recurso
PUT - ACTUALIZAR todos los elementos
DELETE
*/

app.get("/", (req, res, next)=>{
    res.status(200);
    res.send("Bienvenido");
});

//Pueto de salida y funciom
app.listen(3000, ()=>{
    console.log("Server is running...");
});