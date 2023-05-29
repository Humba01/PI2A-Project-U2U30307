// Ferramentas de Depuração
let elementCoordsRoot = document.getElementById("root");
let element = document.createElement("p");
elementCoordsRoot.appendChild(element);
element.style.color = "#ffffff";

document.addEventListener("mousemove", () => {
  element.textContent = `Debug Tools: Mouse Coords[${event.clientX}, ${event.clientY}]`;
});

// Imagens das Peças do Tabuleiro
setTimeout(() => {
  
  let pioes = 
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
  let pioesSrc = [
    "./assets/imgs/pieces/selected/Chess_pdt45.svg.png",
    "./assets/imgs/pieces/selected/Chess_plt45.svg.png",
  ];
  
  for(let i = 0; i < pioes.length; i++) {
  
    if(i <= 7) {
      pioes[i].src = pioesSrc[0];
    } else {
      pioes[i].src = pioesSrc[1];
    }
  }

}, 1500);

let dataStruct = [];
