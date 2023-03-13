const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log('Servicio levantado en el puerto 3000');
})

app.get("/", (req , res)=>{
    console.log("Hola mundo Server")
    res.send("<h1>Instrucciones</h1><h3>Posterior a localhost:3000, ingrese en el navegador el link /zodiaco o /astrologia-china seguido de tu fecha de nacimiento en formato /AAAA&MM&DD.</h3> \n <p>Ejemplo: localhost:3000/zodiaco/1990&06&22</p>")
})



app.get("/astrologia-china/:anio&:mes&:dia", (req , res)=>{
    let aniopersona = (parseInt(req.params.anio))
    console.log(req.params)
    console.log(aniopersona)

    res.send(`
    <h2>${calcularAnimalChino(aniopersona)[1]}</h2>
    <script>alert(${calcularAnimalChino(aniopersona)[0]})</script>`);
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
        return(`<script>alert("Eres Capricornio")</script>
        <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/capricorn-7617684_1280.jpg'</img>`)
    } else if (mesusuario == 1 && diausuario>=22 || mesusuario == 2 && diausuario <= 20){
        return(`<script>alert("Eres Acuario")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/aquarius-7617682_1280.jpg'></img>`)
    } else if (mesusuario == 2 && diausuario>=22 || mesusuario == 3 && diausuario <= 20){
        return(`<script>alert("Eres Piscis")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/pisces-7617687_1280.jpg'></img>`)
    } else if (mesusuario == 3 && diausuario>=22 || mesusuario == 4 && diausuario <= 20){
        return(`<script>alert("Eres Aries")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/aries-7617681_1280.jpg'</img>`)
    } else if (mesusuario == 4 && diausuario>=22 || mesusuario == 5 && diausuario <= 20){
        return(`<script>alert("Eres Tauro")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/taurus-7617693_1280.jpg'></img>`)
    } else if (mesusuario == 5 && diausuario>=22 || mesusuario == 6 && diausuario <= 20){
        return(`<script>alert("Eres Géminis")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/gemini-7617685_1280.jpg'></img>`)
    } else if (mesusuario == 6 && diausuario>=22 || mesusuario == 7 && diausuario <= 20){
        return(`<script>alert("Eres Cáncer")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/cancer-7617683_1280.jpg'></img>`)
    } else if (mesusuario == 7 && diausuario>=22 || mesusuario == 8 && diausuario <= 20){
        return(`<script>alert("Eres Leo")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/leo-7617686_1280.jpg'></img>`)
    } else if (mesusuario == 8 && diausuario>=22 || mesusuario == 9 && diausuario <= 20){
        return(`<script>alert("Eres Virgo")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/virgo-7617694_1280.jpg'></img>`)
    } else if (mesusuario == 9 && diausuario>=22 || mesusuario == 10 && diausuario <= 20){
        return(`<script>alert("Eres Libra")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/libra-7617688_1280.jpg'></img>`)
    } else if (mesusuario == 10 && diausuario>=22 || mesusuario == 11 && diausuario <= 20){
        return(`<script>alert("Eres Escorpio")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/scorpio-7617691_1280.jpg'></img>`)
    } else if (mesusuario == 11 && diausuario>=22 || mesusuario == 12 && diausuario <= 20){
        return(`<script>alert("Eres Sagitario")</script> <img src='https://cdn.pixabay.com/photo/2022/11/26/11/45/sagittarius-7617690_1280.jpg'></img>`)
    } else {
        return('<h1>Datos incorrectos</h1>')
    }
}

function calcularAnimalChino(aniopersona){
    let animal = aniopersona%12;

    let respuestas = [`"Eres Mono"` , `"Eres Gallo"` , `"Eres Perro"` , `"Eres Cerdo"` , `"Eres Rata"` ,
                      `"Eres Buey"` , `"Eres Tigre"` , `"Eres Conejo"` , `"Eres Dragon"` , `"Eres Serpiente"` , `"Eres Caballo"` , `"Eres Oveja"`]
    
    const descripcion = ["Ingenioso, divertido, astuto, curioso, pero también engañoso y egoísta.",
                        "Confiado, valiente, honesto, trabajador, pero también vanidoso y autoritario.",
                        "Leal, honesto, protector, trabajador, pero también terco y posesivo.",
                        "Generoso, amable, compasivo, tranquilo, pero también indulgente y perezoso.",
                        "Inteligente, ambicioso, trabajador, perspicaz, astuto, pero también egoísta y tacaño.",
                        "Paciente, trabajador, confiable, honesto, leal, pero también terco y conservador",
                        "Valiente, decidido, apasionado, aventurero, pero también impulsivo e imprudente.",
                        "Amable, modesto, sensible, reflexivo, pero también indeciso y reservado.",
                        "Poderoso, enérgico, ambicioso, carismático, pero también arrogante y autoritario.",
                        "Inteligente, sabio, intuitivo, misterioso, pero también astuto y vengativo.",
                        "Libre, enérgico, optimista, aventurero, pero también impaciente y superficial.",
                        "Creativa, artística, amable, sensible, pero también indecisa y tímida."]


    return [respuestas[animal], descripcion[animal]];
}