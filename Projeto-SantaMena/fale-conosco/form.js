document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha").value.trim();
    const mensagem = document.getElementById("mensagem");

    // Limpa mensagens anteriores
    mensagem.textContent = "";

    // Validações básicas
    if (senha !== confirmarSenha) {
        mensagem.textContent = "As senhas não coincidem.";
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";
    
    // Aqui você pode adicionar lógica para enviar os dados para um servidor.
    console.log({ nome, email, senha });
});
