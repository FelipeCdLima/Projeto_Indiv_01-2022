var database = require("../database/config");

function mostrarlikes() {
    console.log("ACESSEI O LIKE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mostrarlikes()");
    var instrucao = `
        SELECT (SUM(userLike)) from UserToPic where fkpic = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

