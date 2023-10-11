const express = require("express");
const {getRestaurantes,postRestaurante} = require("../controllers/restaurante.controller")

const restauranteRoutes = express.Router();

restauranteRoutes.get("/", getRestaurantes);
restauranteRoutes.post("/",postRestaurante)

module.exports = restauranteRoutes;