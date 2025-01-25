document.getElementById('meuFormulario').addEventListener('submit', async (e) => {
    e.preventDefault(); // Previne o envio padrão do formulário

    const formData = new FormData(e.target);

    // Enviar os dados do formulário para o servidor
    const response = await fetch('/alguma-rota', {
        method: 'POST',
        body: formData,
    });

    const result = await response.json();
    console.log(result);
});
