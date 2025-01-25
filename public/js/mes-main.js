// Lista de meses
const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];
  
  // Seleciona o elemento <select> pelo ID
  const selectMeses = document.getElementById("meses");
  
  // Adiciona cada mês como uma opção no <select>
  meses.forEach((mes, index) => {
    const option = document.createElement("option"); // Cria o elemento <option>
    option.value = (index + 1).toString().padStart(2, '0'); // Define o valor (01, 02, ..., 12)
    option.textContent = mes; // Define o texto visível
    selectMeses.appendChild(option); // Adiciona o <option> ao <select>
  });
  