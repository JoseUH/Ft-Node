const mongoose = require("mongoose");

const Restaurante = require("../api/models/restaurante.models");

const arrayRestaurantes = [
    {
        "nombre": "bar fermin",
        "ciudad": "madrid",
        "direccion": "calle falsa,32",
        "carta": ["65250976377f5a3db450e7e3"]
    },
    {
        "nombre": "bar Julian",
        "ciudad": "madrid",
        "direccion": "calle falsa,32",
        "carta": ["65250976377f5a3db450e7e3"]
    },
    {
        "nombre": "bar Pepe",
        "ciudad": "madrid",
        "direccion": "calle falsa,32",
        "carta": ["65250976377f5a3db450e7e3"]
    },
    {
        "nombre": "bar San fernando",
        "ciudad": "madrid",
        "direccion": "calle falsa,32",
        "carta": ["65250976377f5a3db450e7e3"]
    }
]

//primero nos conectamos a nuestra base de datos
mongoose.connect("")
.then(async () => {
    //esperamos que nos de una respuesta como que esta conectado y miramos toda la información como si hicieramos un get de Restaurantes para saber si tenemos cosas ya dentro de nuestra coleccion o no
    const allComidas = await Restaurante.find();
    //comporbamos si este array nos esta devolviendo alguna posicion mayor cero, que significara que tenemos datos
    if (allComidas.length > 0) {
        //si  la tienes lo que hacemos es borrar al coleccion entera
        await Restaurante.collection.drop();
        console.log("restaurantes borrados");
    }
})
.catch((error) => console.log("error borrando restaurantes", error))
.then(async () => {
    // Recorremos con un mapeo nuestro array de arriba que va a ser nuestro backup y le decimos que siguiente el modelo de Restaurante me meta cada uno de los restaurantes, porque sino no estaría pasando la comprobación del modelo
    const restauranteMap = arrayRestaurantes.map((restaurante)=> new Restaurante(restaurante));
    //insertamos en nuestra coleccion todo nuestro array que pasa todas las condiciones del modelo,     IMPORTANTE FIJARSE EN LOS COLORES EN ESTE CASO DE RESTAURANTE, SI OS FIJAIS A MI CUANDO SE REFIERE AL MODELO ME SALE EN AMARILLO, Y CUANDO SE REFIERE A LA COLECCION DE MONGO ME SALE EN ROJO
    await Restaurante.insertMany(restauranteMap);
    console.log("restaurantes insertados correctamente");
})
.catch((error)=>console.log("error insertando restaurantes",error))
.finally(() => mongoose.disconnect());