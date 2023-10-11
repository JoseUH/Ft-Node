const mongoose = require("mongoose");

const DB_URL =
  "";

const connect = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`conectado a ${name} en el host ${host}`);
  } catch (error) {
    console.log("error conectando a la base de datos", error);
  }
};

module.exports = { connect };
