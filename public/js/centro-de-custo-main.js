document.addEventListener("DOMContentLoaded", function() {
    // Lista de retorno com a opção "Outros"
    const centro = [
      "Manutenção",
      "Elétrica",
      "GSI",
      "Outros" // Adicionando a opção "Outros"
    ];
  
    // Seleciona o elemento <select> pelo ID
    const selectCentro = document.getElementById("centro");
    const outrosContainer = document.getElementById("outros-container");
  
    // Adiciona cada centro de custo como uma opção no <select>
    centro.forEach((st) => {
      const option = document.createElement("option"); // Cria o elemento <option>
      option.value = st; // Define o atributo value
      option.textContent = st; // Define o texto visível
      selectCentro.appendChild(option); // Adiciona o <option> ao <select>
    });
  
    // Adiciona um evento para mostrar o campo de input quando "Outros" for selecionado
    selectCentro.addEventListener("change", function() {
      if (selectCentro.value === "Outros") {
        outrosContainer.style.display = "block"; // Exibe o campo de input
      } else {
        outrosContainer.style.display = "none"; // Oculta o campo de input
      }
    });
  });
  