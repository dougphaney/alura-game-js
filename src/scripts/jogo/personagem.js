class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, lSprite, aSprite) {
    super(matriz, imagem, x, largura, altura, lSprite, aSprite);

    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }

  pular() {
    this.velocidadeDoPulo = - 30;
  }

  retornar() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if(this.y > this.yInicial) {
      this.y = this.yInicial
    }
  }

  colidir(inimigo) {
    // noFill();
    // rect(this.x, this.y,this.largura, this.altura, );
    // rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura,);
    const precisao = 0.62;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao, 
      this.altura * precisao, 
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao,
      );

    return colisao;
  }
}
