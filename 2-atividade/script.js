function calculandoResultados() {
    // Pegando os valores dos inputs.
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)

    // Mostrando resultados.
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    // Verifica se os números são válidos.
    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerHTML = "<p>Por favor, digite um números válidos nos dois campos!</p>";
        return;
    }
    // Calculando.
    const soma = num1 + num2;
    const media = soma / 2;
    const produto = num1 * num2;
    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);
    
    // Resultados em cada linha.
    resultadoDiv.innerHTML += `<p>SOMA: ${soma}</p>`;
    resultadoDiv.innerHTML += `<p>MÉDIA: ${media}</p>`;
    resultadoDiv.innerHTML += `<p>PRODUTO: ${produto}</p>`;
    resultadoDiv.innerHTML += `<p>MAIOR NÚMERO: ${maior}</p>`;
    resultadoDiv.innerHTML += `<p>MENOR NÚMERO: ${menor}</p>`;
}


const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click", calculandoResultados);