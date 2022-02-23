// Requerimos dotenv para acceder a las variables de entorno
const dotenv = require('dotenv');
// Iniciar el dotenv
dotenv.config();
// Requerimos mongoose para comunicarnos con la DB
const mongoose = require('mongoose');
// Guardamos en una variable la url de conexión
const mongoDb = process.env.MONGO_DB;
// Config de la función Connect que cuando sea llamada se conectará a la DB
const connect = async () => {
    try {
        const db = await mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true });
        const { name, host } = db.connection;
        console.log(`Conectado a la Db: ${name} en el host: ${host}`);

    } catch (error) {
        console.log(`No se ha podido conectar a la DB`, error)
    }
}
// Exportamos la función para llamarla en el index.js
module.exports = { connect };