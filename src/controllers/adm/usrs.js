const pool = require("../../database");
const usrsAdm = {};

usrsAdm.leeUsrs = async(req, res) => {
    const usuarios = await pool.query("SELECT * FROM usuarios");
    res.json(usuarios)
}

usrsAdm.agrUsr = async(req, res) => {
    const {username, pwd, nombre, apellido,
        email, perfil, aut_acc, estado} = req.body;
    const alta = new Date();
    const newUsr = {
        username,
        pwd,
        nombre,
        apellido,
        email,
        perfil,
        alta,
        aut_acc,
        estado
    };
    await pool.query('INSERT INTO usuarios SET ?', [newUsr]);
    res.json({resultado: "Usuario Agregado"});
}

usrsAdm.leeUsr = async(req, res) => {
    const {id} = req.params;
    const usuario = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]);
    res.json(usuario);
}

usrsAdm.actUsr = async(req, res) => {
    const { id } = req.params;
    let {username, pwd, nombre, apellido,
           email, perfil, alta, ult_ing, aut_acc, estado} = req.body;
    if (ult_ing == "") {ult_ing = null};
    const usuario = {
        username,
        pwd,
        nombre,
        apellido,
        email,
        perfil,
        alta,
        ult_ing,
        aut_acc,
        estado
    };
    await pool.query('UPDATE usuarios SET ? WHERE id = ?', [usuario, id]);
    res.json({resultado: "Usuario " + id + " Actualizado"});
}

usrsAdm.bajUsr = async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
    res.json({resultado: "Usuario Eliminado"});
}

module.exports = usrsAdm;