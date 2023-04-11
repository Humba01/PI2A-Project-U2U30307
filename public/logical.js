// DOM manipulação
let gancho = document.getElementById("tabuleiro")
  ,counter = 0
  ,counterAux = 0
  ,corIndicada;

for(let i = 1; i <= 8; i++) { 
  
  for(let j = 1; j <= 8; j++) {
    
    let element = document.createElement("div");
    counter++;
    element.id = `${i}${j}`;
    element.style.gridColumn = j;
    element.style.gridRow = i; 
    
    // if(counter == 0) { element.classList.add("layout-tabuleiro-casa-par"); }
    // if(counter == 1) { element.classList.add("layout-tabuleiro-casa-impar"); }

    gancho.appendChild(element);

  }

}
