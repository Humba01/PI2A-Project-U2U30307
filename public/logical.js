// DOM manipulação
let gancho = document.getElementById("tabuleiro"), counter = 0, separador;

// Sources e Animações do Programa
let imgSrcPieces = [
  "assets/imgs/pieces/selected/Chess_bdt45.svg.png",
  "assets/imgs/pieces/selected/Chess_blt45.svg.png",
  "assets/imgs/pieces/selected/Chess_kdt45.svg.png",
  "assets/imgs/pieces/selected/Chess_klt45.svg.png",
  "assets/imgs/pieces/selected/Chess_ndt45.svg.png",
  "assets/imgs/pieces/selected/Chess_nlt45.svg.png",
  "assets/imgs/pieces/selected/Chess_pdt45.svg.png",
  "assets/imgs/pieces/selected/Chess_plt45.svg.png",
  "assets/imgs/pieces/selected/Chess_qdt45.svg.png",
  "assets/imgs/pieces/selected/Chess_qlt45.svg.png",
  "assets/imgs/pieces/selected/Chess_rdt45.svg.png",
  "assets/imgs/pieces/selected/Chess_rlt45.svg.png",
];

// Construtor do Tabuleiro
for(let i = 1; i <= 8; i++) { 
  
  for(let j = 1; j <= 8; j++) {
    
    let element = document.createElement("div");
      counter++;
      element.id = `cs${i}${j}`;
      element.style.gridColumn = j;
      element.style.gridRow = i; 
      element.classList.add("app-tabuleiro-casa");

    let elementImg = document.createElement("img");
      elementImg.id = `cs/img${i}${j}`;
      element.appendChild(elementImg);

    separador = i % 2;
    
    if(separador == 1) { 
      if(counter % 2 == 0) { element.classList.add("app-tabuleiro-casa-par"); }
      if(counter % 2 == 1) { element.classList.add("app-tabuleiro-casa-impar"); }
    } else {
      if(counter % 2 == 0) { element.classList.add("app-tabuleiro-casa-impar"); }
      if(counter % 2 == 1) { element.classList.add("app-tabuleiro-casa-par"); }
    }

    gancho.appendChild(element);

  }

}
