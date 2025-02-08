import { Router } from 'express';
import usuariosControllers from '../controllers/usuarios.controllers.js';
import { authenticateToken } from '../middlewares/authenticate.middleware.js';

const router = Router();

router.route('/')
    .get(usuariosControllers.getUsuarios)
    .post(usuariosControllers.createUsuario);

router.route('/:id')
    .get(authenticateToken, usuariosControllers.getUsuario)
    .put(authenticateToken, usuariosControllers.updateUsuario)
    //.patch(authenticateToken, usuariosControllers.activateInactivate)
    .delete(authenticateToken, usuariosControllers.deleteUsuario);

//router.route('/:id/tasks')
    //.get(authenticateToken, usuariosControllers.getTasks);

export default router;
