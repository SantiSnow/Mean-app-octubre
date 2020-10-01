const { Router } = require('express');
const tareasController = require('../controllers/tareasController');
const router = Router();

router.get('/', tareasController.getTareas);
router.get('/:id', tareasController.getTarea);
router.post('/', tareasController.setTarea);
router.put('/:id', tareasController.updateTareas);
router.delete('/:id', tareasController.deleteTareas);

module.exports = router;