class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, lSprite, aSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, lSprite, aSprite);

    this.velocidade = 10;
  }

  mover(){
    this.x = this.x - this.velocidade;

    if(this.x < - this.largura){
      this.x = width
    }
  }
}
