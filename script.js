// --- THEME LOGIC ---
const btnTheme = document.getElementById('toggleTheme');
const body = document.body;

// Check for saved preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

btnTheme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
});

// --- LIST LOGIC (Only runs if elements exist) ---
const btnAdd = document.getElementById('btnAdicionar');
const input = document.getElementById('novoAprovado');
const lista = document.getElementById('listaAprovados');
const btnClear = document.getElementById('btnLimpar');

if (btnAdd) {
    btnAdd.addEventListener('click', () => {
        const nome = input.value.trim();
        if (nome === "") return alert("Digite um nome!");

        const li = document.createElement('li');
        li.className = "item-aprovado";
        li.innerHTML = `
            <span>${nome}</span>
            <button class="btn-delete">✕</button>
        `;

        // Delete specific item
        li.querySelector('.btn-delete').addEventListener('click', () => {
            li.style.opacity = '0';
            setTimeout(() => li.remove(), 300);
        });

        lista.appendChild(li);
        input.value = "";
        input.focus();
    });

    // Enter key support
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') btnAdd.click();
    });
}

if (btnClear) {
    btnClear.addEventListener('click', () => {
        if (confirm("Deseja limpar toda a lista?")) {
            lista.innerHTML = "";
        }
    });
}