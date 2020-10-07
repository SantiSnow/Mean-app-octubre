const { Schema, model } = require('mongoose');

const TareaScheema = new Schema ({
    'nombre': { type: String, required: true},
    'descripcion': { type: String, required: true},
    'importancia': { type: String, required: true},
    'completada': { type: Boolean, required: true},
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("Tarea", TareaScheema);

