var likeModel = require("../models/likeModel");

// var idUser = sessionStorage.ID_USUARIO;

function getLikes(req, res) {
    likeModel.getLikes()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function knowLike1(req, res) {
    var idUser = req.body.idServer;
    likeModel.knowLike1(idUser)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            //res.json(resultado[0]);
        }else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function updateLike(req, res) {
    var idUpdate = req.body.idUpdate;
    var idPic = req.body.idPic;
    likeModel.updateLike(idUpdate, idPic)
    .then(function (resultado) {
        // if (resultado.length > 0) {
            res.status(200).json(resultado);
            // res.json(resultado[0]);
        // }else {
            // res.status(204).send("Nenhum resultado encontrado!")
        // }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function updateDislike(req, res) {
    var idUpdate = req.body.idUpdate;
    var idPic = req.body.idPic;
    likeModel.updateDislike(idUpdate, idPic)
    .then(function (resultado) {
        // if (resultado.length > 0) {
            res.status(200).json(resultado);
            // res.json(resultado[0]);
        // }else {
            // res.status(204).send("Nenhum resultado encontrado!")
        // }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    getLikes,
    updateLike,
    updateDislike,
    knowLike1
    // knowLike2,
    // knowLike3,
    // knowLike4,
    // knowLike5,
    // knowLike6
}