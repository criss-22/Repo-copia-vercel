import db from '../config/db.js';

export const obtenerTerminosActivos = async () => {
  // Llamamos al procedimiento que mencionas para obtener título y contenido
    const [rows] = await db.query('CALL sp_obtener_terminos_activos()');
    
  // MySQL devuelve los resultados dentro de un array anidado cuando se usa CALL
  return rows[0][0]; 
};