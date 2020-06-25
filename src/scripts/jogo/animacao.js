class Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, lSprite, aSprite) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY
    this.y = height - this.altura - this.variacaoY;
    this.lSprite = lSprite;
    this.aSprite = aSprite;

    this.frameAtual = 0;
  }

  exibir() {
    image(
      this.imagem, 
      this.x, 
      this.y, 
      this.largura, 
      this.altura, 
      this.matriz[this.frameAtual][0], 
      this.matriz[this.frameAtual][1],  
      this.lSprite, 
      this.aSprite);
    
    this.animar()
  }

  animar() {
    this.frameAtual++;

    if(this.frameAtual > this.matriz.length - 1) {
      this.frameAtual = 0
    }
  }
}
