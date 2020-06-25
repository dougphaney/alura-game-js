class Pontuacao {
  constructor() {
    this.pontos = 0
  }

  exibir() {
    textAlign(RIGHT),
    fill('#fff'),
    textSize(30),
    text(parseInt(this.pontos), width - 100, 50)
  }

  adicionar() {
    this.pontos = this.pontos + 0.1
  }
}
