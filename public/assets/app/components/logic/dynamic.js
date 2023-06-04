// Ferramentas de Depuração
let elemenpcoordsRoot = document.getElementById("root");
let element = document.createElement("p");
elemenpcoordsRoot.appendChild(element);
element.style.color = "#ffffff";

document.addEventListener("mousemove", () => {
  element.texpcontent = `Debug Tools: Mouse Coords[${event.clientX}, ${event.clientY}]`;
});

// Eventos de Animações de Movimentação 
let Animations = {};

// Imagens das Peças do Tabuleiro (Começo do Jogo);
setTimeout(() => {
  
  // peoes do tabuleiro
  let peoes = 
  [
    document.getElementById("pcimg21"),
    document.getElementById("pcimg22"),
    document.getElementById("pcimg23"),
    document.getElementById("pcimg24"),
    document.getElementById("pcimg25"),
    document.getElementById("pcimg26"),
    document.getElementById("pcimg27"),
    document.getElementById("pcimg28"),
    document.getElementById("pcimg71"),
    document.getElementById("pcimg72"),
    document.getElementById("pcimg73"),
    document.getElementById("pcimg74"),
    document.getElementById("pcimg75"),
    document.getElementById("pcimg76"),
    document.getElementById("pcimg77"),
    document.getElementById("pcimg78")
  ];
  let peoesSrc = [
    "./assets/imgs/pieces/selected/Chess_pdt45.svg.png",
    "./assets/imgs/pieces/selected/Chess_plt45.svg.png"
  ];
  
  for(let i = 0; i < peoes.length; i++) {
  
    if(i <= 7) {
      peoes[i].src = peoesSrc[0];
    } else {
      peoes[i].src = peoesSrc[1];
    }

  }

  // torres do tabuleiro
  let torres = [
    document.getElementById("pcimg11"),
    document.getElementById("pcimg18"),
    document.getElementById("pcimg81"),
    document.getElementById("pcimg88")
  ];
  let torresSrc = [
    "./assets/imgs/pieces/selected/Chess_rdt45.svg.png",
    "./assets/imgs/pieces/selected/Chess_rlt45.svg.png"
  ];

  for(let i = 0; i < torres.length; i++) {
    
    if(i <= 1) {
      torres[i].src = torresSrc[0];
    } else {
      torres[i].src = torresSrc[1];
    }

  }
  
  // cavalos do tabuleiro
  let cavalos = [
    document.getElementById("pcimg12"),
    document.getElementById("pcimg17"),
    document.getElementById("pcimg82"),
    document.getElementById("pcimg87")
  ];
  let cavalosSrc = [
    "./assets/imgs/pieces/selected/Chess_ndt45.svg.png",
    "./assets/imgs/pieces/selected/Chess_nlt45.svg.png"
  ];

  for(let i = 0; i < cavalos.length; i++) {
    
    if(i <= 1) {
      cavalos[i].src = cavalosSrc[0];
    } else {
      cavalos[i].src = cavalosSrc[1];
    }

  }
  
  // bispos do tabuleiro
  let bispos = [
    document.getElementById("pcimg13"),
    document.getElementById("pcimg16"),
    document.getElementById("pcimg83"),
    document.getElementById("pcimg86")
  ];
  let bisposSrc = [
    "./assets/imgs/pieces/selected/Chess_bdt45.svg.png",
    "./assets/imgs/pieces/selected/Chess_blt45.svg.png"
  ];
  
  for(let i = 0; i < bispos.length; i++) {
    
    if(i <= 1) {
      bispos[i].src = bisposSrc[0];
    } else {
      bispos[i].src = bisposSrc[1];
    }

  }
  
  // reis do tabuleiro
  let reis = [
    document.getElementById("pcimg14"),
    document.getElementById("pcimg84")
  ];
  let reisSrc = [
    "./assets/imgs/pieces/selected/Chess_kdt45.svg.png",
    "./assets/imgs/pieces/selected/Chess_klt45.svg.png"
  ];
  reis[0].src = reisSrc[0];
  reis[1].src = reisSrc[1];

  // rainhas do tabuleiro
  let rainhas = [
    document.getElementById("pcimg15"),
    document.getElementById("pcimg85")
  ];
  let rainhasSrc = [
    "./assets/imgs/pieces/selected/Chess_qdt45.svg.png",
    "./assets/imgs/pieces/selected/Chess_qlt45.svg.png"
  ];
  rainhas[0].src = rainhasSrc[0];
  rainhas[1].src = rainhasSrc[1];

}, 1500);

let dataStruct = [];
