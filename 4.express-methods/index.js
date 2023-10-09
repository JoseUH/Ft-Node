import express from "express"; // esta sería una alternativa para importar y traernos express, importante poner en el json"type :"module"

const app = express();

const PORT = 5000;

//CRUD --> create,read,update and delete
   //get--> read -- leer información y devolverla
   //post --> create --> envia información para crear un elemento nuevo
   //put/patch --> update --> envia la información y la actualiza
   //delete --> delete --> elimina uno o mas elementos

// necesitaremos configurar nuestro servidor para poder enviar y recibir json

app.use(express.json());
app.use(express.urlencoded({extended:false}))

//necesitaremos enrutas los metodos a distintos endpoint

const routerMovies = express.Router()


//enrutaremos estos metodos

// esto es un ejemplo de como podemos coger el parametro de una petición y aparte son todas endpoint de get

routerMovies.get("/accion/:title", (req,res) => {
    // const title = req.params.title;
    const {title} = req.params;
    console.log(title)
})
routerMovies.get("/comedia/:title", (req,res) => {
    // const title = req.params.title;
    const {title} = req.params;
    console.log(title)
})
routerMovies.get("/accion", (req,res)=> {
    res.send("este es el get de movies de accion")
})
routerMovies.get("/", (req,res)=> {
    res.send("este es el get de movies")
})

//distintos endpoint segun su metodo

routerMovies.post("/", (req,res)=> {
    // res.send("este es el get de movies")
    // console.log(req.body)
    res.send("este es el post de movies")
})
routerMovies.delete("/", (req,res)=> {
    // res.send("este es el get de movies")
    // console.log(req.body)
    res.send("este es el delete de movies")
})
routerMovies.patch("/", (req,res)=> {
    // res.send("este es el get de movies")
    // console.log(req.body)
    res.send("este es el patch de movies")
})


// decimos a nuestro servidor que en nuestro endpoint /movies va a usar nuestro router

app.use("/movies", routerMovies)


app.use("/", (req, res) => {
  res.send("Estamos en la home");
});

app.listen(PORT, () =>
  console.log(`listening in the port http://localhost:${PORT}`)
);
