const Restaurante = require("../models/restaurante.models")

const getRestaurantes = async (req,res) => {
try {
    
    const allRestaurantes = await Restaurante.find().populate("carta", "nombre pais");

    //siempre vamos a popular como primer campo "carta" en este caso, porque es lo que existe dentro de mi coleccion Restaurante que a su vez esta relacionado con el modelo de comidas, y el segundo parametro es si no queremos mostrar toda la información elegimos que campos dentro del modelo de comida queremos mostrar
    return res.status(200).json(allRestaurantes)
} catch (error) {
    return res.status(500).json(error)
}
}
const postRestaurante = async ( req, res )=> {
    try {
        const newRestaurante = new Restaurante(req.body);
        const createdRestaurante= await newRestaurante.save()
        return res.status(201).json(createdRestaurante)
    } catch (error) {
        return res.status(500).json(error)
        
    }
}
module.exports = {getRestaurantes, postRestaurante}