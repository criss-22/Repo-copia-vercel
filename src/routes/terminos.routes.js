import { Router } from 'express';
import * as terminosCtrl from '../controllers/terminos.controladores.js';

const router = Router();

// GET /api/terminos → todos los registros
router.get('/', terminosCtrl.obtenerTerminosYCondiciones);

// Opcional: si prefieres una ruta específica para el activo
// router.get('/activo', terminosCtrl.obtenerTerminosActivo); 
// (pero tendrías que crear la función en el controlador)

export default router;