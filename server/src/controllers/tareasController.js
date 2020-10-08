
const tareas = {

};

const Tarea = require('../models/Tareas');

tareas.getTarea = async (req, res) => {
    const tarea = await Tarea.findOne({_id: req.params.id});

    res.json(tarea);
};
tareas.getTareas = async (req, res) => {
    const tareas = await Tarea.find();

    res.json(tareas);
};
tareas.setTarea = async (req, res) => {
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.json({ Status: "Creada"});
};
tareas.updateTareas = async (req, res) => {
    
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body);

    res.json({ Status: "Actualizada"});
};
tareas.deleteTareas = async (req, res) => {
    const tarea = await Tarea.findByIdAndDelete({_id: req.params.id});

    res.json({ Status: "Eliminado"});
};

module.exports = tareas;