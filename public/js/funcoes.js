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
    
}
