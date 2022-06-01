var likeModel = require("../models/likeModel");

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
    var idUser = sessionStorage.ID_USUARIO;

    likeModel.knowLike1(idUser)
    .then(function (resultado) {
        if (resultado == 0) {
            
        } else if (resultado == 1) {
            
        } else {
            console.log("ERRO NO QUERY KNOWLIKE1");
        }
    })
}

module.exports = {
    getLikes,
    knowLike1,
    knowLike2,
    knowLike3,
    knowLike4,
    knowLike5,
    knowLike6
}