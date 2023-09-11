const { Schema, model } = require('mongoose');

const EmpresaSchema = Schema({ 
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descrpcion es obligatorio'],
    }
});

module.exports = model('Juego', EmpresaSchema)