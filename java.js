//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let colidiu = false;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas (600 ,400);  
} 


function draw() {
  background(0);
  circle(0, 0, 50); 
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
  if (xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
  }
  rect(5, 150, 10, 90);
} 

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}
function movimentaMinhaRaquete() {
    if (keyIsDown(WKEY)) {
        yRaquete -= 10;
} 
    if (keyIsDown(SKEY)) {
        yRaquete += 10;
    }
}
function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete)
        velocidadeXBolinha *= -1;
}
function mostraRaqueteOponente() {
    rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}
function movimentaRaqueteOponente() {
     velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}
function verificaColisaoRaquete(x,y) { colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
    }
}
function incluiPlacar() {fill(255);
                         text(meusPontos, 278, 26);
                         text(pontosDoOponente, 321, 26);
}
function marcaPonto() {
    if (xBolinha > 590){
        meusPontos += 1;
    }
    if (xBolinha < 10){
        pontosDoOponente += 1;
    }
}
