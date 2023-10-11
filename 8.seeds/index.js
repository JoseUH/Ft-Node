const express = require("express");
const {connect} = require("./src/utils/db")
const comidasRoutes = require("./src/api/routes/comida.routes")
const restauranteRoutes = require("./src/api/routes/restaurante.routes")

const PORT=5000;
const app = express();
connect();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/restaurantes",restauranteRoutes)
app.use("/comidas", comidasRoutes )


app.listen(PORT, () => console.log(`escuchando en el puerto ${PORT}`))