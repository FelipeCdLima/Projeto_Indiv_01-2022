var express = require("express");
var router = express.Router();

var likeController = require("../controllers/likeController");

router.post("/mostrar", function (req, res) {
    likeController.getLikes(req, res);
});

router.post("/darLike1", function (req, res) {
    likeController.knowLike1(req, res);
});

module.exports = router;