// Lista de status
const status = [
  "Programada",
  "Não Programada",
  "Corretiva"
];

// Seleciona o elemento <select> pelo ID
const selectStatus = document.getElementById("status");

// Adiciona cada status como uma opção no <select> de status
status.forEach((st) => {
  const option = document.createElement("option"); // Cria o elemento <option>
  option.value = st; // Define o atributo value
  option.textContent = st; // Define o texto visível
  selectStatus.appendChild(option); // Adiciona o <option> ao <select>
});

