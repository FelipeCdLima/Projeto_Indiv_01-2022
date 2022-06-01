var express = require("express");
var router = express.Router();

var likeController = require("../controllers/likeController");

router.post("/mostrar", function (req, res) {
    likeController.getLikes(req, res);
});

module.exports = router;