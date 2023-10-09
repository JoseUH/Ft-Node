
const http = require('http');

const PORT  = 5000;

const requestHandler = (request, response) => {
 // req será la petición que recibimos
 //res será la respuesta que damos
 response.end("servidor funcinando")
}

// crearnos un servidor y guardarlo en una variable a la cual le pasaremos un manejador de eventos

const app = http.createServer(requestHandler)

// necesitamos decirle que nos escuche y en que puerto tiene que escucharse

app.listen(PORT, ()=> console.log("mi servidor esta funcionando"))