import { Router } from 'express';
import * as ctrl from '../controllers/terminos.controladores.js';

const router = Router();

router.get('/activo', ctrl.obtenerTerminos);

export default router;