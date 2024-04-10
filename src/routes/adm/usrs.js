const {Router} = require("express");
const router = Router();

const {leeUsrs, agrUsr, leeUsr, actUsr, bajUsr} = require("../../controllers/adm/usrs.js");

router.route("/")

    .get(leeUsrs)
    .post(agrUsr);

router.route("/:id")

    .get(leeUsr)
    .put(actUsr)
    .delete(bajUsr)

module.exports = router;