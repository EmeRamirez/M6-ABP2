const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log('Servicio levantado en el puerto 3000');
})

app.get("/", (req , res)=>{
    console.log("Hola mundo Server")
    res.send("<h1>Hola Mundo2</h1>")
})



app.get("/astrologia-china/:anio&:mes&:dia", (req , res)=>{
    let aniopersona = (parseInt(req.params.anio))
    console.log(req.params)
    console.log(aniopersona)

    res.send(calcularAnimalChino(aniopersona));
})


app.get("/zodiaco/:anio&:mes&:dia", (req , res)=>{
    // let fechapersona = new Date(`${parseInt(req.params.anio)}/${parseInt(req.params.mes)}/${parseInt(req.params.dia)}`)
    console.log(req.params)

    let mesusuario = parseInt(req.params.mes);
    let diausuario = parseInt(req.params.dia);

    res.send(calcularHoroscopo(mesusuario,diausuario));

})



function calcularHoroscopo(mesusuario,diausuario){
    if (mesusuario == 12 && diausuario>=22 || mesusuario == 1 && diausuario <= 20){
        return(`<script>alert("Eres Capricornio")</script>`)
    } else if (mesusuario == 1 && diausuario>=22 || mesusuario == 2 && diausuario <= 20){
        return(`<script>alert("Eres Acuario")</script>`)
    } else if (mesusuario == 2 && diausuario>=22 || mesusuario == 3 && diausuario <= 20){
        return(`<script>alert("Eres Piscis")</script>`)
    } else if (mesusuario == 3 && diausuario>=22 || mesusuario == 4 && diausuario <= 20){
        return(`<script>alert("Eres Aries")</script>`)
    } else if (mesusuario == 4 && diausuario>=22 || mesusuario == 5 && diausuario <= 20){
        return(`<script>alert("Eres Tauro")</script>`)
    } else if (mesusuario == 5 && diausuario>=22 || mesusuario == 6 && diausuario <= 20){
        return(`<script>alert("Eres Géminis")</script>`)
    } else if (mesusuario == 6 && diausuario>=22 || mesusuario == 7 && diausuario <= 20){
        return(`<script>alert("Eres Cáncer")</script>`)
    } else if (mesusuario == 7 && diausuario>=22 || mesusuario == 8 && diausuario <= 20){
        return(`<script>alert("Eres Leo")</script>`)
    } else if (mesusuario == 8 && diausuario>=22 || mesusuario == 9 && diausuario <= 20){
        return(`<script>alert("Eres Virgo")</script>`)
    } else if (mesusuario == 9 && diausuario>=22 || mesusuario == 10 && diausuario <= 20){
        return(`<script>alert("Eres Libra")</script>`)
    } else if (mesusuario == 10 && diausuario>=22 || mesusuario == 11 && diausuario <= 20){
        return(`<script>alert("Eres Escorpio")</script>`)
    } else if (mesusuario == 11 && diausuario>=22 || mesusuario == 12 && diausuario <= 20){
        return(`<script>alert("Eres Sagitario")</script>`)
    } 
}

function calcularAnimalChino(aniopersona){
    let animal = aniopersona%12;

    let respuestas = [`<script>alert("Eres Mono")</script>` , `<script>alert("Eres Gallo")</script>` , `<script>alert("Eres Perro")</script>` , `<script>alert("Eres Cerdo")</script>` , `<script>alert("Eres Rata")</script>` , `<script>alert("Eres Buey")</script>` , `<script>alert("Eres Tigre")</script>` , `<script>alert("Eres Conejo")</script>` , `<script>alert("Eres Dragon")</script>` , `<script>alert("Eres Serpiente")</script>` , `<script>alert("Eres Caballo")</script>` , `<script>alert("Eres Oveja")</script>`]

    return respuestas[animal];
}