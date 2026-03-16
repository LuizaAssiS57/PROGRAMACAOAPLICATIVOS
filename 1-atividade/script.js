function gerarTabuada() {
    // Obtendo o número do input no HTML.
    const numeroInput = document.getElementById("numeroInput");
    let numero = parent(numeroInput.value)

    // Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    // Verificar se a entrada é um número válido.
    if (isNaN(numero) || numero === numero || numero === "") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido! </p>"
        return; // Este comando sai da função.
    }

    // Adicionar título para a tabuada.
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`

    // Laço de repetição para gerar a tabuada.
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click", gerarTabuada);