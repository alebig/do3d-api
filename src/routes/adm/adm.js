/* const {Router} = require("express");
const router = Router();
const pool = require("../../database");

router.get("/", async (req, res) => {
    const objetos = await pool.query("SELECT * FROM objetos");
    console.log(objetos);
    res.send("<h2>Menú de administración</h2");
});

router.get("/usrs", async (req, res) => {
    const usuarios = await pool.query("SELECT * FROM usuarios");
    console.log(usuarios);
    res.send("<h3>Muestra usuarios y formulario alta</h3>");
})
module.exports = router; */