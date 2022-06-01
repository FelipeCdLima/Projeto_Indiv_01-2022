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

        // finalizarAguardar();
    } else {
        //window.location = "../login.html";
        b_usuario.style.display = 'none';
        b_sair.style.display = 'none';
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


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

function mostrarLikes() {
    //dar select nos likes
    
    fetch("/likes/mostrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {

            resposta.json().then(json => {
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

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })


    //mandar os likes[x] como parâmetro
    //no html function(like1,like2...) setar os #likeX como likeX
}

function darLike() {
    
}