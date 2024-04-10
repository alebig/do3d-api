const {Router} = require("express");
const router = Router();

//const {leeImgs, agrImg, leeImg, actImg, bajImg} = require("../../controllers/adm/imgs.js");

router.route("/signup")

    .post(agrUsu);

router.route("/signin")

    .post(logUsu)

module.exports = router;