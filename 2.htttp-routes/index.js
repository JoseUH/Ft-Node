const http = require("http");

const PORT = 5000;

const requestHandler = (req, res) => {
    
    res.setHeader("Content-type", "application/json");
    res.writeHeader(200);
    // console.log(req.url);
    if (req.url == "/") {
        res.end("estoy en la home")
    }else if(req.url == "/moda"){
        res.end("estoy en la ruta de moda")
    }else if(req.url == "/contacto"){
        res.end("estoy en la ruta de contacto")
    }else{
        res.end("estas perdido compañero")
    }

    res.end("funcionando")

}
const app = http.createServer(requestHandler);

app.listen(PORT, ()=> console.log(`listening in the port http://localhost:${PORT}`))