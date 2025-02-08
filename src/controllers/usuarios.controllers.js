import logger from "../logs/logger.js";
import { Usuarios } from "../models/usuarios.model.js";

async function getUsuarios(req, res) {
    try{
    const usuarios = await Usuarios.findAll({
        attributes:['id_usuario', 'usuario', 'contraseña', 'rol'],
        order:[[ 'id_usuario', 'DESC']],
    });
    res.json(usuarios);
    } catch(error){
        logger.error(`Error getUsuarios: ${error}`);
        res.status(500).json({message: "Error retrieving Usuarios"});
    }  
};

async function createUsuario(req, res) {
    try {
        const { usuario, contraseña, rol, id_estudiante, id_docente, id_administrativo } = req.body; // Incluye rol y los IDs
        const newUsuario = await Usuarios.create({ usuario, contraseña, rol, id_estudiante, id_docente, id_administrativo });
        res.status(201).json(newUsuario); // 201 Created
    } catch (error) {
        logger.error('Error createUsuario: ', error);
        res.status(500).json({ message: "Error creating user" });
    }
};

async function getUsuario(req, res) {
    try {
        const usuario = await Usuarios.findByPk(req.params.id, {
            attributes: ['id_usuario', 'usuario', 'rol'], // No incluyas la contraseña
            include: [ // Incluye los modelos relacionados, si existen
                { model: Estudiantes, as: 'estudiante' },
                { model: Docentes, as: 'docente' },
                { model: Administrativos, as: 'administrativo' }
            ]
        });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario not found' });
        }
        res.json(usuario);
    } catch (error) {
        logger.error(`Error getUsuario: ${error}`);
        res.status(500).json({ message: "Error retrieving user" });
    }
};

/*async function updateUsuario(req, res) {
    const { id } = req.params;
    const { usuario, contraseña } = req.body;
    try {
        if (!usuario || !contraseña)
            return res
                .status(400)
                .json({ message: 'Username or password are required' });

        const update_usuario = await Usuarios.update(
            {
                usuario,
                contraseña,
            },
            {
                where: { id_usuario },
            }
        );
        res.json(update_usuario);
    } catch (error) {
        logger.error('Error getUser: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};*/
async function updateUsuario(req, res) {
    const { id } = req.params;
    const { usuario, contraseña, rol, id_estudiante, id_docente, id_administrativo } = req.body; // Incluir rol y IDs
    try {
        const updatedUsuario = await Usuarios.update(
            { usuario, contraseña, rol, id_estudiante, id_docente, id_administrativo }, // Actualizar todos los campos
            { where: { id_usuario: id } } // Usar id_usuario
        );
        if (updatedUsuario[0] === 0) { // Comprobar si se actualizó algún registro
            return res.status(404).json({ message: 'Usuario not found' });
        }
        res.json({ message: 'Usuario updated successfully' }); // Mensaje de éxito más claro
    } catch (error) {
        logger.error('Error updateUsuario: ' + error); // Corregir nombre del error
        res.status(500).json({ message: 'Server error' });
    }
};

async function deleteUsuario(req, res) {
    const { id_usuario } = req.params;
    try {
        const usuario = await Usuarios.findByPk(id_usuario);
        if (!usuario){
            return res.status(404).json({message: 'Usuario not found'});
        }
        await usuario.destroy();
        res.json({ message: 'Usuario deleted successfully' });
    } catch (error) {
        logger.error('Error deleteUser: '+ error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
}