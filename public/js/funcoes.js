// sessão
function validarSessao() {
    // aguardar();

    //var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    //var h_nav = document.getElementById("h_nav");
    var a_login = document.getElementById("a_login");
    //var i_nome = document.getElementById("i_nome");
    var a_cadastro = document.getElementById("a_cadastro");
    var b_sair = document.getElementById("b_sair");

    var gAdvHover = document.getElementById("gAdvHover");

    var ima1 = document.getElementById("ima1");
    var ima2 = document.getElementById("ima2");
    var ima3 = document.getElementById("ima3");
    var ima4 = document.getElementById("ima4");
    var ima5 = document.getElementById("ima5");
    var ima6 = document.getElementById("ima6");

    //email != null && 
    if (nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.style.display = 'block';
        b_usuario.innerHTML = nome;
        //h_nav.style.display = 'none';
        a_login.style.display = 'none';
        //i_nome.innerHTML = nome;
        a_cadastro.style.display = 'none';
        b_sair.style.display = 'block';

        // gAdvHover.onclick = GuiaLogado;

        ima1.onclick = darLike1;
        ima2.onclick = darLike2;
        ima3.onclick = darLike3;
        ima4.onclick = darLike4;
        ima5.onclick = darLike5;
        ima6.onclick = darLike6;

        // finalizarAguardar();
    } else {
        //window.location = "../login.html";
        b_usuario.style.display = 'none';
        b_sair.style.display = 'none';

        gAdvHover.onclick = GuiaNaoLogado;

        ima1.onclick =nadaAcontece;
        ima2.onclick =nadaAcontece;
        ima3.onclick =nadaAcontece;
        ima4.onclick =nadaAcontece;
        ima5.onclick =nadaAcontece;
        ima6.onclick =nadaAcontece;
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}

function nadaAcontece() {
    //Eis que nada acontece.... feijoada...
}

// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}



function darLike1() {
    console.log('Clickei na 1ª IMG')
    idUser = sessionStorage.getItem('ID_USUARIO');
    var pic = 1;

    fetch("/likes/darLike1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUser
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO darLike1()!")

        if (resposta.ok) {

            // console.log(resposta);

            resposta.json().then(json => {
                // console.log(json);
                // console.log(JSON.stringify(json));
                // console.log(json[0].Like1);
                
                if (json[0].Like1 == 0) {

                    updateLike(idUser, pic)
                    
                    // setTimeout(updateLike(idUser, pic), 2000);
                    // setTimeout(mostrarLikes(), 2000);

                } else if (json[0].Like1 == 1) {
                    updateDeslike(idUser, pic);
                    
                } else {
                    console.log("ERRO NA VERIFICAÇÃO DE 1 OU 0")
                }
            }); 
            
            setTimeout(() => mostrarLikes(),3000)

        } else {

            console.log("Houve um erro na FUNC darLike1");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}
function darLike2() {
    // console.log('Clickei na 2ª IMG')
}
function darLike3() {
    // console.log('Clickei na 3ª IMG')
}
function darLike4() {
    // console.log('Clickei na 4ª IMG')
}
function darLike5() {
    // console.log('Clickei na 5ª IMG')
}
function darLike6() {
    // console.log('Clickei na 6ª IMG')
}

async function updateLike(idUser, pic) {
    console.log("Dando UPDATE LIKE")

    fetch("/likes/updateLike", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUpdate: idUser,
            idPic: pic
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO updateLike()!")

        if (resposta.ok) {

            // console.log(resposta);

            resposta.json().then(json => {
                // console.log(json);
                // console.log(JSON.stringify(json));
                // console.log(json[0].Like1);
                
            });
        } else {

            console.log("Houve um erro na FUNC updateLike");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

}

async function updateDislike(idUser, pic) {
    console.log("Dando UPDATE DISLIKE")

    fetch("/likes/updateDislike", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUpdate: idUser,
            idPic: pic
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO updateLike()!")

        if (resposta.ok) {

            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                // console.log(json[0].Like1);
                
            });
        } else {

            console.log("Houve um erro na FUNC updateLike");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

}

function mostrarLikes() {
    //dar select nos likes
    
    fetch("/likes/mostrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO mostrarLikes()!")

        if (resposta.ok) {

            resposta.json().then(json => {
                // console.log((json[0].Like1).length);
                console.log(json[0].Like1);
                var like1 = document.getElementById("like1");
                like1.innerHTML = json[0].Like1;
                var like2 = document.getElementById("like2");
                like2.innerHTML = json[0].Like2;
                var like3 = document.getElementById("like3");
                like3.innerHTML = json[0].Like3;
                var like4 = document.getElementById("like4");
                like4.innerHTML = json[0].Like4;
                var like5 = document.getElementById("like5");
                like5.innerHTML = json[0].Like5;
                var like6 = document.getElementById("like6");
                like6.innerHTML = json[0].Like6;
            
            });
        } else {

            console.log("Houve um erro ao tentar mostrar!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

}