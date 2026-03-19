function calcularMediaLimoes() {
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    const display = document.getElementById('resultado');

    // Validação
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Ops! A Limãozinha precisa das 3 notas! 🍋");
        return;
    }

    const media = (n1 + n2 + n3) / 3;
    const mediaFixa = media.toFixed(1);

    display.style.display = "block";

    if (media >= 7) {
        display.className = "resultado-box aprovado";
        display.innerHTML = `Média: ${mediaFixa} <br> ✨ Arrasou! Você foi aprovado(a)! ✨`;
        soltarLimoesDoTopo(); 
    } else {
        display.className = "resultado-box reprovado";
        display.innerHTML = `Média: ${mediaFixa} <br> Não dessa vez! Estude mais com a Limãozinha.`;
    }
}

function soltarLimoesDoTopo() {
    for (let i = 0; i < 40; i++) {
        const limao = document.createElement('div');
        limao.className = 'limao-confete';
        limao.innerText = '🍋';
        
        limao.style.left = Math.random() * 100 + 'vw';
        limao.style.animationDelay = Math.random() * 2 + 's';
        
        const duracao = 2 + Math.random() * 2 + 's';
        limao.style.animationDuration = duracao;

        document.body.appendChild(limao);

        setTimeout(() => {
            limao.remove();
        }, 5000);
    }
}

const btn = document.getElementById('btnCalcular');
btn.addEventListener('click', calcularMediaLimoes);