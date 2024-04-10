const pool = require("../../database");
const objsAdm = {};

objsAdm.leeObjs = async(req, res) => {
    const objetos = await pool.query("SELECT * FROM objetos");
    res.json(objetos)
}

objsAdm.agrObj = async(req, res) => {
    const {denom, desc_sint, desc_extensa, usr_origen,
            usr_design, sw_design, fork_de, mostrar, 
            precio, moneda} = req.body;
    const newObj = {
        denom, 
        desc_sint, 
        desc_extensa,
        usr_origen,
        usr_design, 
        sw_design, 
        fork_de, 
        mostrar, 
        precio, 
        moneda
    };
    newObj.alta=new Date();
    await pool.query('INSERT INTO objetos SET ?', [newObj]);
    res.json({resultado: "Objeto Agregado"});
}

objsAdm.leeObj = async(req, res) => {
    const {id} = req.params;
    const objeto = await pool.query("SELECT * FROM objetos WHERE id = ?", [id]);
    res.json(objeto);
}

objsAdm.actObj = async(req, res) => {
    const { id } = req.params;
    const {denom, desc_sint, desc_extensa, alta, usr_origen,
        usr_design, sw_design, fork_de, mostrar, 
        precio, moneda} = req.body;
    const objeto = {
        denom, 
        desc_sint, 
        desc_extensa,
        alta,
        usr_origen,
        usr_design, 
        sw_design, 
        fork_de, 
        mostrar, 
        precio, 
        moneda
    };
    await pool.query('UPDATE objetos SET ? WHERE id = ?', [objeto, id]);
    res.json({resultado: "Objeto Actualizado"});
}

objsAdm.bajObj = async(req, res) => {
    const { id } = req.params;
    const objeto = await pool.query('DELETE FROM objetos WHERE id = ?', [id]);
    res.json({resultado: "Objeto Eliminado"});
}

module.exports = objsAdm;