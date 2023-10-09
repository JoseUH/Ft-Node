const express = require("express");//importamos nuestra libreria de express

const PORT = 5000;

const app = express();//crear nuestro servidor

app.use("/movies", (req,res)=> {
    const movies =  [
        {
            title:"big fish",
            director:"tim burton"
        },
        {
            title:"sweeny tood:el barbero diabolico de la calle fleet",
            director:"tim burton"
        }
    ]
    res.send(movies)
 })

app.use("/", (req,res)=> {
   res.send("Estoy en la home")
})

app.listen(PORT, ()=> console.log(`listening in the port http://localhost:${PORT}`))
