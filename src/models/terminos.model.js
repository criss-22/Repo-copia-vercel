import db from '../config/db.js';

export const obtenerTerminosActivos = async () => {
    const [rows] = await db.query(`
        SELECT titulo, contenido 
        FROM terminos_condiciones 
        WHERE activo = 1 
        ORDER BY id DESC 
        LIMIT 1
    `);
    
    return rows[0]; 
};