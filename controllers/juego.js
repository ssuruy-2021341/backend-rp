const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Juego = require('../models/juegos');

const getjuegos = async (req = request, res = response) => {

    const listaJuegos = await Promise.all([
        Juego.countDocuments(),
        Juego.find()
    ]);

    res.json({
        msg: 'GET JUEGOS',
        listaJuegos
    });

}

const agregarJuego = async (req = request, res = response) => {

    const {nombre, descripcion} = req.body;
    const juegosDB = new Juego({nombre, descripcion});

    await empresaDB.save();

    res.status(201).json({
        msg: 'POST EMPRESAS',
        juegosDB
    });
}

const editarJuego = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        const juego = await Juego.findByIdAndUpdate(
            id,
            { nombre, descripcion },
            { new: true }
        );

        if (!juego) {
            return res.status(404).json({ mensaje: 'Juego no encontrado' });
        }

        res.json({ mensaje: 'Juego editado con éxito', juego });
    } catch (error) {
        console.error('Error al editar el juego:', error);
        res.status(500).json({ mensaje: 'Error al editar el juego' });
    }
};

const eliminarJuego = async (req, res) => {
    try {
        const { id } = req.params;

        const juego = await Juego.findByIdAndDelete(id);

        if (!juego) {
            return res.status(404).json({ mensaje: 'Juego no encontrado' });
        }

        res.json({ mensaje: 'Juego eliminado con éxito', juego });
    } catch (error) {
        console.error('Error al eliminar el juego:', error);
        res.status(500).json({ mensaje: 'Error al eliminar el juego' });
    }
};


module.exports = {
    agregarJuego,
    getjuegos,
    editarJuego,
    eliminarJuego
}