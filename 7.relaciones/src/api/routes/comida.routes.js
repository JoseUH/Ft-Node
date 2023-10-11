const express = require("express");
const {getComidas,postComida,getComidasById,putComida,deleteComida} = require("../controllers/comida.controllers")

const comidasRoutes = express.Router();

comidasRoutes.get("/id/:id", getComidasById);

comidasRoutes.get("/", getComidas);

comidasRoutes.post("/", postComida);

comidasRoutes.put("/:id", putComida);

comidasRoutes.delete("/:id", deleteComida);

module.exports = comidasRoutes;
