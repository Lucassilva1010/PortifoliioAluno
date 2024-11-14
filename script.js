// Seleciona o container do carrossel
const containerDoCarrossel = document.querySelector('.carousel-container');

// Seleciona as imagens do carrossel
const imagensDoCarrossel = document.querySelectorAll('.carousel-inner img');

// Seleciona os botões de navegação do carrossel
const botaoAnterior = document.querySelector('.carousel-prev');
const botaoProximo = document.querySelector('.carousel-next');

// Define a largura do carrossel
const larguraDoCarrossel = containerDoCarrossel.offsetWidth;

// Define a posição atual do carrossel
let posicaoAtual = 0;

// Define a quantidade de imagens no carrossel
const quantidadeDeImagens = imagensDoCarrossel.length;

// Função para mover o carrossel para a esquerda
function moverParaEsquerda() {
  posicaoAtual -= larguraDoCarrossel;
  if (posicaoAtual < 0) {
    posicaoAtual = (quantidadeDeImagens - 1) * larguraDoCarrossel;
  }
  containerDoCarrossel.style.transform = `translateX(${posicaoAtual}px)`;
}

// Função para mover o carrossel para a direita
function moverParaDireita() {
  posicaoAtual += larguraDoCarrossel;
  if (posicaoAtual > (quantidadeDeImagens - 1) * larguraDoCarrossel) {
    posicaoAtual = 0;
  }
  containerDoCarrossel.style.transform = `translateX(${posicaoAtual}px)`;
}

// Adiciona evento de clique aos botões de navegação
botaoAnterior.addEventListener('click', moverParaEsquerda);
botaoProximo.addEventListener('click', moverParaDireita);