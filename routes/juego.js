//importaciones
const { Router } = require('express');
const { check } = require('express-validator');

const { getEmpresas, agregarJuego, editarJuego, eliminarJuego } = require('../controllers/empresa');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.get('/mostrar', getEmpresas);

router.post('/agregar', [
    check('nombre', 'El nombre es obligatorio para el post').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria para el post').not().isEmpty(),
    validarCampos
], agregarJuego);


router.put('/editar/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
], editarJuego);

router.delete('/eliminar/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
], eliminarJuego);

module.exports = router;