const pool = require("../../database");
const imgsAdm = {};

imgsAdm.leeImgs = async(req, res) => {
    const imagenes = await pool.query("SELECT * FROM imagenes");
    res.json(imagenes)
}

imgsAdm.agrImg = async(req, res) => {
    const {obj_id, nro_orden, ruta,
            nomarch, publicar, alta} = req.body;
    const newImg = {
        obj_id,
        nro_orden,
        ruta,
        nomarch,
        publicar,
        alta
    };
    newImg.alta=new Date();
    await pool.query('INSERT INTO imagenes SET ?', [newImg]);
    res.json({resultado: "Imagen Agregada"});
}

imgsAdm.leeImg = async(req, res) => {
    const {id} = req.params;
    const imagen = await pool.query("SELECT * FROM imagenes WHERE id = ?", [id]);
    res.json(imagen);
}

imgsAdm.actImg = async(req, res) => {
    const { id } = req.params;
    const {obj_id, nro_orden, ruta,
        nomarch, publicar, alta} = req.body;
    const imagen = {
        obj_id,
        nro_orden,
        ruta,
        nomarch,
        publicar,
        alta
    };
    await pool.query('UPDATE imagenes SET ? WHERE id = ?', [imagen, id]);
    res.json({resultado: "Imagen Actualizada"});
}

imgsAdm.bajImg = async(req, res) => {
    const { id } = req.params;
    const imagen = await pool.query('DELETE FROM imagenes WHERE id = ?', [id]);
    res.json({resultado: "Imagen Eliminada"});
}

module.exports = imgsAdm;