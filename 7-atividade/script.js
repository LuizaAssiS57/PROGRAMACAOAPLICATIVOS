// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const nota1 = document.getElementById('nota1');
    const nota2 = document.getElementById('nota2');
    const nota3 = document.getElementById('nota3');
    const btnCalcular = document.getElementById('btnCalcular');
    const resultadoDiv = document.getElementById('resultado');

    // Função para limpar estilos de erro dos inputs
    function clearErrorStyles() {
        [nota1, nota2, nota3].forEach(input => {
            input.style.border = '';
            input.style.boxShadow = '';
        });
    }

    // Função para destacar um input inválido
    function highlightInvalid(input) {
        input.style.border = '2px solid #ff4466';
        input.style.boxShadow = '0 0 8px #ff4466';
    }

    // Função para exibir mensagem de erro
    function showError(message) {
        resultadoDiv.innerHTML = `<div class="error-msg">⚠️ ${message} ⚠️</div>`;
    }

    // Função para exibir resultado (média e status)
    function showResult(media, status, statusText) {
        // Define a classe extra conforme o status
        let statusClass = '';
        if (status === 'aprovado') statusClass = 'status-aprovado';
        else if (status === 'recuperacao') statusClass = 'status-recuperacao';
        else if (status === 'reprovado') statusClass = 'status-reprovado';

        resultadoDiv.innerHTML = `
            <div class="result-card">
                <div class="media-box">Média: ${media.toFixed(2)}</div>
                <div class="status-box ${statusClass}">${statusText}</div>
            </div>
        `;
    }

    // Função principal de cálculo
    function calcularMedia() {
        // Limpa estilos anteriores e resultados
        clearErrorStyles();
        
        // Obtém os valores e converte para número
        const n1 = parseFloat(nota1.value);
        const n2 = parseFloat(nota2.value);
        const n3 = parseFloat(nota3.value);
        
        // Validação: são números?
        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            showError('Por favor, preencha todas as notas com números válidos.');
            return;
        }
        
        // Validação: intervalo [0,10]
        let invalid = false;
        if (n1 < 0 || n1 > 10) {
            highlightInvalid(nota1);
            invalid = true;
        }
        if (n2 < 0 || n2 > 10) {
            highlightInvalid(nota2);
            invalid = true;
        }
        if (n3 < 0 || n3 > 10) {
            highlightInvalid(nota3);
            invalid = true;
        }
        
        if (invalid) {
            showError('As notas devem estar entre 0 e 10. Corrija os campos destacados.');
            return;
        }
        
        // Cálculo da média
        const media = (n1 + n2 + n3) / 3;
        
        // Determina o status
        let status = '';
        let statusText = '';
        if (media >= 7) {
            status = 'aprovado';
            statusText = '✅ APROVADO! ✅';
        } else if (media >= 5 && media <= 6.9) {
            status = 'recuperacao';
            statusText = '📚 RECUPERAÇÃO 📚';
        } else {
            status = 'reprovado';
            statusText = '❌ REPROVADO ❌';
        }
        
        // Exibe o resultado
        showResult(media, status, statusText);
    }
    
    // Adiciona o evento de clique ao botão
    btnCalcular.addEventListener('click', calcularMedia);
    
    // (Opcional) Ao digitar nos inputs, remove o destaque de erro
    [nota1, nota2, nota3].forEach(input => {
        input.addEventListener('input', () => {
            input.style.border = '';
            input.style.boxShadow = '';
            // Se houver mensagem de erro, pode apagar (opcional)
            if (resultadoDiv.querySelector('.error-msg')) {
                resultadoDiv.innerHTML = '';
            }
        });
    });
});