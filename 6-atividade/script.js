function verificarAposentadoria() {
    const matricula = document.getElementById("matricula").value.trim();
    const anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    const tempoTrabalho = parseInt(document.getElementById("tempoTrabalho").value);
    const resultadoDiv = document.getElementById("resultado");

    if (!matricula) {
        resultadoDiv.innerHTML = "🎵 Por favor, digite um código de matrícula válido!";
        resultadoDiv.className = "resultado-erro";
        resultadoDiv.style.display = "block";
        return;
    }

    if (isNaN(anoNascimento) || anoNascimento <= 0) {
        resultadoDiv.innerHTML = "💀 Por favor, digite um ano de nascimento válido!";
        resultadoDiv.className = "resultado-erro";
        resultadoDiv.style.display = "block";
        return;
    }

    if (isNaN(tempoTrabalho) || tempoTrabalho < 0) {
        resultadoDiv.innerHTML = "⏳ Por favor, digite um tempo de trabalho válido (não negativo)!";
        resultadoDiv.className = "resultado-erro";
        resultadoDiv.style.display = "block";
        return;
    }

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    let requerAposentadoria = (idade >= 65 || tempoTrabalho >= 30);
    let mensagem = requerAposentadoria ? "Requerer aposentadoria" : "Não requerer aposentadoria";

    resultadoDiv.innerHTML = `
        <strong>Código:</strong> ${matricula}<br>
        <strong>Idade:</strong> ${idade} anos<br>
        <strong>Tempo de trabalho:</strong> ${tempoTrabalho} anos<br>
        <strong>Resultado:</strong> ${mensagem}
    `;
    resultadoDiv.className = "resultado-sucesso";
    resultadoDiv.style.display = "block";
}

const botao = document.getElementById("btnVerificar");
botao.addEventListener("click", verificarAposentadoria);