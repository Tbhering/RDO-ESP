// Seleciona o elemento <select> pelo ID
const selectSemanas = document.getElementById("semana");

// Loop para criar as opções
for (let i = 1; i <= 52; i++) {
  const option = document.createElement("option"); // Cria um elemento <option>
  option.value = `semana${String(i).padStart(2, "0")}`; // Define o value (semana01, semana02, etc.)
  option.textContent = `Semana ${String(i).padStart(2, "0")}`; // Define o texto exibido
  selectSemanas.appendChild(option); // Adiciona o <option> ao <select>
}
