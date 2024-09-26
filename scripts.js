const form = document.getElementById('cadastroForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;

    if (!nome || !email || !senha || !confirmSenha) {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    if (senha !== confirmSenha) {
        mensagem.textContent = 'As senhas não correspondem.';
        return;
    }

    mensagem.textContent = 'Cadastro realizado com sucesso!';
    mensagem.style.color = 'green';
    form.reset();
});
