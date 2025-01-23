document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos HTML
    const selectOm = document.getElementById("om");
    const omInputContainer = document.getElementById("om-input-container");
    const omInput = document.getElementById("om-input");
    const errorMessage = document.getElementById("error-message");
    const inputTitle = document.getElementById("input-title");
    const form = document.querySelector("form"); // Seleciona o formulário
  
    // Adiciona um evento para verificar qual opção foi selecionada
    selectOm.addEventListener("change", function() {
      // Exibe ou oculta o campo de input dependendo da opção selecionada
      if (selectOm.value === "om") {
        omInputContainer.style.display = "block"; // Exibe o campo de input
        omInput.setAttribute("maxlength", "12"); // Limita a 12 caracteres
        omInput.setAttribute("pattern", "[0-9]{12}"); // Somente números e 12 dígitos
        omInput.placeholder = "Digite 12 números"; // Altera o placeholder
        inputTitle.textContent = "Digite a Ordem"; // Altera o título para "Digite a Ordem"
        errorMessage.style.display = "none"; // Esconde a mensagem de erro
      } else if (selectOm.value === "forms") {
        omInputContainer.style.display = "block"; // Exibe o campo de input
        omInput.removeAttribute("maxlength"); // Permite qualquer número de caracteres
        omInput.removeAttribute("pattern"); // Remove a restrição de números
        omInput.placeholder = "Digite qualquer texto (letras, números, símbolos)"; // Altera o placeholder
        inputTitle.textContent = "Digite o Form's"; // Altera o título para "Digite o Form's"
        errorMessage.style.display = "none"; // Esconde a mensagem de erro
      } else {
        omInputContainer.style.display = "none"; // Oculta o campo de input se nenhuma opção for selecionada
        errorMessage.style.display = "none"; // Esconde a mensagem de erro
      }
      
      // Limpa o campo de entrada quando mudar a seleção
      omInput.value = '';
    });
  
    // Verifica a quantidade de números digitados no campo input para OM
    omInput.addEventListener("input", function() {
      if (selectOm.value === "om") {
        // Remove qualquer caractere que não seja número
        omInput.value = omInput.value.replace(/[^0-9]/g, '');
  
        // Exibe ou oculta a mensagem de erro
        if (omInput.value.length < 12) {
          errorMessage.style.display = "inline"; // Exibe a mensagem de erro
        } else {
          errorMessage.style.display = "none"; // Esconde a mensagem de erro
        }
      }
    });
  
    // Adiciona validação antes do envio do formulário
    form.addEventListener("submit", function(event) {
      if (selectOm.value === "") {
        event.preventDefault(); // Impede o envio do formulário se nada for selecionado
        alert("Por favor, selecione uma opção entre Ordem de Serviço ou Forms.");
        return;
      }
      
      // Validação do campo de input conforme a seleção
      if (selectOm.value === "om") {
        if (omInput.value.length !== 12 || !/^\d+$/.test(omInput.value)) {
          event.preventDefault(); // Impede o envio se o valor não for válido
          alert("Por favor, digite uma Ordem de Serviço válida com 12 números.");
          return;
        }
      } else if (selectOm.value === "forms" && omInput.value.trim() === "") {
        event.preventDefault(); // Impede o envio se o campo estiver vazio
        alert("Por favor, preencha o campo Form's.");
        return;
      }
    });
  });
  