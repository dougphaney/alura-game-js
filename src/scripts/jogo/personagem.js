class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, lSprite, aSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, lSprite, aSprite);

    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.pulos = 0;
  }

  pular() {
    // if(this.pulos > 0 ) {
    //   this.velocidadeDoPulo = - 30
    //   this.pulos--
    // }
    if(this.pulos < 2 ) {
      this.velocidadeDoPulo = - 30
      this.pulos++
    }
  }
  
  retornar() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if(this.y > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0
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
