const mongoose = require('mongoose');
const conexion = 'mongodb://localhost/mean-app';
mongoose
    .connect(conexion, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then((db)=> console.log("Conectado a la base de datos"))
    .catch((err)=> console.error("Error al conectar con la base de datos"));