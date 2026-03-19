function verificarVoto() {
    // 1. Pega o valor da idade e a div de resultado
    const idade = parseInt(document.getElementById("idadeUsuario").value);
    const resultadoDiv = document.getElementById("resultado");

    // 2. Verifica se a idade é inválida (em branco ou número negativo)
    if (isNaN(idade) || idade < 0) {
        resultadoDiv.className = "resultado erro";
        resultadoDiv.innerHTML = "🕷️ Digite uma idade válida!";
        resultadoDiv.style.display = "block";
        return; // Faz o código parar por aqui
    }

    // 3. Lógica das regras de votação aplicando texto e classes
    if (idade < 16) {
        resultadoDiv.className = "resultado reprovado";
        resultadoDiv.innerHTML = "🕸️ Não pode votar.";
    } 
    else if (idade >= 18 && idade <= 65) {
        resultadoDiv.className = "resultado aprovado";
        resultadoDiv.innerHTML = "🕸️ Voto OBRIGATÓRIO!";
    } 
    else {
        resultadoDiv.className = "resultado reprovado";
        resultadoDiv.innerHTML = "🕸️ Voto opcional.";
    }

    // 4. Exibe a caixa de resultado na tela
    resultadoDiv.style.display = "block";
}

// 5. Conecta o botão à função
const botao = document.getElementById("btnVerificar");
botao.addEventListener("click", verificarVoto);