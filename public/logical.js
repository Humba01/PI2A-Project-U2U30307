// DOM manipulação
let gancho = document.getElementById("tabuleiro")
  ,counter = 0
  ,corCasaTabuleiro;
const element = document.createElement("div");

for(let i = 1; i <= 8; i++) { 

  for(let j = 1; j <= 8; j++) {

    counter++;
    element.id = `${i}${j}`;
    element.style.gridColumn = i;
    element.style.gridRow = j / 8; 
    
    corCasaTabuleiro = counter % 2;
    if(corCasaTabuleiro == 0) { element.classList.add("layout-tabuleiro-casa-par"); }
    if(corCasaTabuleiro == 1) { element.classList.add("layout-tabuleiro-casa-impar"); }

    gancho.appendChild(element);

  }

}
