// Lista de minas
const minas = [
    "Timbopeba",
    "TCLD-Timbopeba",
    "TCLD-Fabrica Nova",
    "Fabrica Nova",
    "Alegria",
    "Fazendão",
    "Samarco"
  ];
  
  // Seleciona o elemento <select> pelo ID
  const selectMinas = document.getElementById("minas");
  
  // Adiciona cada mina como uma opção no <select>
  minas.forEach((mina) => {
    const option = document.createElement("option"); // Cria o elemento <option>
    option.value = mina; // Define o atributo value
    option.textContent = mina; // Define o texto visível
    selectMinas.appendChild(option); // Adiciona o <option> ao <select>
  });
  