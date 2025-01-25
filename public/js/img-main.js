// Selecionando as imagens
const logoLeft = document.querySelector('.logo-left img');
const logoRight = document.querySelector('.logo-right img');

// Função para ativar a animação na imagem da direita
function ativarAnimacaoDireita() {
    logoRight.classList.add('active'); // Adiciona a classe para ativar a animação de brilho
    logoRight.classList.add('move');   // Adiciona a classe para o movimento ondulado
}

// Função para desativar a animação na imagem da direita
function desativarAnimacaoDireita() {
    logoRight.classList.remove('active'); // Remove a classe para desativar o brilho
    logoRight.classList.remove('move');   // Remove o movimento ondulado
}

// Função para ativar a rotação na imagem da esquerda
function ativarRotacaoEsquerda() {
    logoLeft.classList.add('rotate');
}

// Função para desativar a rotação na imagem da esquerda
function desativarRotacaoEsquerda() {
    logoLeft.classList.remove('rotate');
}

// Adicionando eventos de hover para a imagem da direita
logoRight.addEventListener('mouseenter', ativarAnimacaoDireita);
logoRight.addEventListener('mouseleave', desativarAnimacaoDireita);

// Adicionando eventos de hover para a imagem da esquerda
logoLeft.addEventListener('mouseenter', ativarRotacaoEsquerda);
logoLeft.addEventListener('mouseleave', desativarRotacaoEsquerda);
