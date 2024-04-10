const {Router} = require("express");
const router = Router();

const {leeObjs, agrObj, leeObj, actObj, bajObj} = require("../../controllers/adm/objs.js");

router.route("/")

    .get(leeObjs)
    .post(agrObj);

router.route("/:id")

    .get(leeObj)
    .put(actObj)
    .delete(bajObj)

module.exports = router;