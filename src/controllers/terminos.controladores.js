import * as terminos from "../models/terminos.model.js";

export const obtenerTerminos = async (req, res) => {
    try {
    const datos = await terminos.obtenerTerminosActivos();

    if (!datos) {
        return res.status(404).json({ message: "No se encontraron términos activos" });
    }

    res.status(200).json(datos);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};