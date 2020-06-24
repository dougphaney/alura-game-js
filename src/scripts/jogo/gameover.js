class GameOver {
  constructor(imagem) {
    this.imagem = imagem;
  }

  exibir() {
    image(this.imagem, 250, 250, 1000, 300);
  }
}
