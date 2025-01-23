window.addEventListener("resize", function() {
    var titulo = document.getElementById("titulo-formulario");
    var header = document.querySelector(".header");

    // Verifica a largura da tela e ajusta o título conforme necessário
    if (window.innerWidth < 400) {
        titulo.textContent = "RDO"; // Substitui por "RDO" para telas menores que 400px
        header.classList.add("rdo"); // Adiciona a classe "rdo" para centralizar
    } else if (window.innerWidth >= 400 && window.innerWidth <= 800) {
        titulo.textContent = "Retorno de Atividades"; // Substitui por "Retorno de Atividades" para telas entre 400px e 800px
        header.classList.remove("rdo"); // Remove a classe "rdo"
    } else {
        titulo.textContent = "Formulário de Retorno de Atividades"; // Substitui por "Formulário de Retorno de Atividades" para telas maiores que 800px
        header.classList.remove("rdo"); // Remove a classe "rdo"
    }
});

// Chama a função ao carregar a página para garantir que o título seja ajustado
window.addEventListener("load", function() {
    var titulo = document.getElementById("titulo-formulario");
    var header = document.querySelector(".header");

    // Verifica a largura da tela no momento do carregamento e ajusta o título
    if (window.innerWidth < 400) {
        titulo.textContent = "RDO"; // Substitui por "RDO" se necessário
        header.classList.add("rdo"); // Adiciona a classe "rdo"
    } else if (window.innerWidth >= 400 && window.innerWidth <= 800) {
        titulo.textContent = "Retorno de Atividades"; // Substitui por "Retorno de Atividades"
        header.classList.remove("rdo"); // Remove a classe "rdo"
    } else {
        titulo.textContent = "Formulário de Retorno de Atividades"; // Substitui por "Formulário de Retorno de Atividades"
        header.classList.remove("rdo"); // Remove a classe "rdo"
    }
});
