function calcularMacas() {
    const quantidade = parseInt(document.getElementById("qtdMacas").value);
    const resultadoDiv = document.getElementById("resultado");

    // Verificação
    if (isNaN(quantidade) || quantidade <= 0) {
        resultadoDiv.innerHTML = "🍎 Por favor, digite uma quantidade válida de maçãs!";
        resultadoDiv.className = "resultado-sucesso";
        resultadoDiv.style.display = "block";
        return; 
    }

    // Calculando o preço das maçãs
    let precoDaMaca;
    
    if (quantidade < 12) {
        precoDaMaca = 1.30; 
    } else {
        precoDaMaca = 1.00; 
    }

    // Calcula o valor total
    const valorTotal = quantidade * precoDaMaca;

    // Formata o número para o padrão de dinheiro 
    const valorFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    resultadoDiv.innerHTML = `🍏 Você comprou ${quantidade} maçã(s).<br>💰 Total a pagar: <strong>${valorFormatado}</strong>`;
    resultadoDiv.className = "resultado-sucesso";
    resultadoDiv.style.display = "block";
}

// Função
const botao = document.getElementById("btnCalcular");
botao.addEventListener("click", calcularMacas);