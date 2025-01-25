window.onload = function() {
    // Lista de retorno
    const tarefa = [
      "Montagem",
      "Desmontagem",
      "Montagem e Desmontagem",
      "Adequação"
    ];

    // Seleciona o elemento <select> pelo ID
    const selectStatus = document.getElementById("tarefa");

    // Adiciona cada status como uma opção no <select> de status
    tarefa.forEach((st) => {
      const option = document.createElement("option"); // Cria o elemento <option>
      option.value = st; // Define o atributo value
      option.textContent = st; // Define o texto visível
      selectStatus.appendChild(option); // Adiciona o <option> ao <select>
    });
  };