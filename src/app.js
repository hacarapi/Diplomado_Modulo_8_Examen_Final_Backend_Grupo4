//npm install express
import express from 'express';
//npm install morgan
import morgan from 'morgan';
//npm install --save pg pg-hstore

import { authenticateToken } from './middlewares/authenticate.middleware.js';
//routes
import usuariosRoutes from './routes/usuarios.routes.js';
import authRoutes from './routes/auth.routes.js';
import administrativosRoutes from './routes/administrativos.routes.js';
import docentesRoutes from './routes/docentes.routes.js';
import estudiantesRoutes from './routes/estudiantes.routes.js';
import cursosRoutes from './routes/cursos.routes.js';
import matriculasRoutes from './routes/matriculas.routes.js';
import asignacionesRoutes from './routes/asignaciones.routes.js';
import calificacionesRoutes from './routes/calificaciones.routes.js';
import asistenciasRoutes from './routes/asistencias.routes.js';
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use('/api/login', authRoutes);
app.use('/api/usuarios', usuariosRoutes);
//app.use('/api/estudiantes', authenticateToken, estudiantesRoutes);
app.use('/api/administrativos', administrativosRoutes);
app.use('/api/docentes', docentesRoutes);
app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/cursos', cursosRoutes);
app.use('/api/matriculas', matriculasRoutes);
app.use('/api/asignaciones', asignacionesRoutes);
app.use('/api/calificaciones', calificacionesRoutes);
app.use('/api/asistencias', asistenciasRoutes);
// Settings
//app.set('port', 3000);

export default app;
