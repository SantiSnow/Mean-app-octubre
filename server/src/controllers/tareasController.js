
const tareas = {

};


tareas.getTarea = (req, res) => {
    res.send('getTarea');
};
tareas.getTareas = (req, res) => {
    res.send('getTareas');
};
tareas.setTarea = (req, res) => {
    res.send('setTareas');
};
tareas.updateTareas = (req, res) => {
    res.send('updateTareas');
};
tareas.deleteTareas = (req, res) => {
    res.send('deleteTareas');
};

module.exports = tareas;