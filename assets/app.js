function criar_cartao(categoria, pergunta, resposta){
    let container = document.getElementById("container")
    let cartao = document.createElement("article")
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="conteudo">
                <h3>${categoria}</h3>
                <div class="pergunta">
                    ${pergunta}
                </div>
                <div class="resposta">
                    ${resposta}
                </div>
            </div>
    `
    

    container.appendChild(cartao)
}
const botao_add = document.getElementById("botao_add");

botao_add.addEventListener("click", function() {
    let categoriaUsuario = prompt("Qual é a categoria do cartão? ");
    let perguntaUsuario = prompt("Qual é a pergunta?");
    let respostaUsuario = prompt("Qual é a resposta?");

    
    if (categoriaUsuario && perguntaUsuario && respostaUsuario) {
        criar_cartao(categoriaUsuario, perguntaUsuario, respostaUsuario);
    }
});