const {Router} = require("express");
const router = Router();

const {leeImgs, agrImg, leeImg, actImg, bajImg} = require("../../controllers/adm/imgs.js");

router.route("/")

    .get(leeImgs)
    .post(agrImg);

router.route("/:id")

    .get(leeImg)
    .put(actImg)
    .delete(bajImg)

module.exports = router;