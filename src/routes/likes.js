var express = require("express");
var router = express.Router();

var likeController = require("../controllers/likeController");

router.post("/mostrar", function (req, res) {
    likeController.getLikes(req, res);
});

router.post("/darLike", function (req, res) {
    likeController.knowLike(req, res);
});

router.post("/updateLike", function (req, res) {
    likeController.updateLike(req, res);
});

router.post("/updateDislike", function (req, res) {
    likeController.updateDislike(req, res);
});

module.exports = router;