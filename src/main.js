let imagemCenario_1;
let imagemCenario_2;
let imagemCenario_3;
let imagemCenario_4;
let imagemCenario_5;
let imagemPersonagem;
let imagemInimigoGota;
let imagemInimigoTroll;
let imagemInimigoVoador;
let imagemGameOver;

let cenario;
let somDoJogo;
let somDoPulo;
let somDeBatida;
let personagem;
let pontuacao;

const inimigos = [];

const matrizInimigoGota = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

const matrizInimigoTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

function preload() {
  imagemGameOver = loadImage('./assets/gameover/game-over.png');
  
  imagemCenario_1 = loadImage('./assets/cenario/floresta_1.png');
  imagemCenario_2 = loadImage('./assets/cenario/floresta_2.png');
  imagemCenario_3 = loadImage('./assets/cenario/floresta_3.png');
  imagemCenario_4 = loadImage('./assets/cenario/floresta_4.png');
  imagemCenario_5 = loadImage('./assets/cenario/floresta_5.png');
  
  imagemPersonagem = loadImage('./assets/personagem/correndo.png');
  
  imagemInimigoGota = loadImage('./assets/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('./assets/inimigos/troll.png');
  imagemInimigoVoador = loadImage('./assets/inimigos/gotinha-voadora.png');
  
  somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('./assets/sons/som_pulo.mp3');
  somDeBatida = loadSound('./assets/sons/som_gameover.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  gameover = new GameOver(imagemGameOver);
  cenario = new Cenario([imagemCenario_1, imagemCenario_2, imagemCenario_3, imagemCenario_4, imagemCenario_5], 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 50, 30, 110, 135, 220, 270);
  pontuacao = new Pontuacao();
  
  const inimigoGota = new Inimigo(matrizInimigoGota, imagemInimigoGota, width - 52, 30, 52, 52, 104, 104);
  const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150);

  inimigos.push(inimigoGota);
  inimigos.push(inimigoTroll);
  inimigos.push(inimigoVoador);

  frameRate(25);
  // somDoJogo.loop();
}

function keyPressed() {
  if(key === 'ArrowUp') {
    personagem.pular()
    somDoPulo.play()
  }
}

function draw() {
  cenario.exibir();
  cenario.exibirGrama();
  cenario.mover();
  
  personagem.exibir();
  personagem.retornar();

  pontuacao.exibir();
  pontuacao.adicionar();
  
  inimigos.forEach(inimigo =>{
    inimigo.exibir()
    inimigo.mover()

    if(personagem.colidir(inimigo)){
      console.log('colidiu!!')
      noLoop()
      somDeBatida.play()
      somDoJogo.stop()
      gameover.exibir()
    }
  });
}
