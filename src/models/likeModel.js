var database = require("../database/config");

function getLikes() {
    console.log("ACESSEI O LIKE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mostrarlikes()");
    var instrucao = `
    select (sum(userLike)),
    (select (sum(userLike)) from UserToPic where fkPic = 1) as 'Like1',
    (select (sum(userLike)) from UserToPic where fkPic = 2) as 'Like2',
    (select (sum(userLike)) from UserToPic where fkPic = 3) as 'Like3',
    (select (sum(userLike)) from UserToPic where fkPic = 4) as 'Like4',
    (select (sum(userLike)) from UserToPic where fkPic = 5) as 'Like5',
    (select (sum(userLike)) from UserToPic where fkPic = 6) as 'Like6' from UserToPic;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function knowLike1(idUser) {
    console.log("ACESSEI O LIKE MODEL")
    var instrucao = `
    select userLike as 'like1' from UserToPic, userTable where fkPic = 1 and fkUser = idUser and fkUser = ${idUser};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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