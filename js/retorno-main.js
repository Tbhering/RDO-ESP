 document.addEventListener("DOMContentLoaded", function() {
    // Lista de retorno
    const retorno = [
      "Iniciado",
      "Executado",
      "Cancelado",
      "Desviado"
    ];

    // Seleciona o elemento <select> pelo ID
    const selectStatus = document.getElementById("retorno");

    // Adiciona cada status como uma opção no <select> de status
    retorno.forEach((st) => {
      const option = document.createElement("option"); // Cria o elemento <option>
      option.value = st; // Define o atributo value
      option.textContent = st; // Define o texto visível
      selectStatus.appendChild(option); // Adiciona o <option> ao <select>
    });
  });

