let mapaTabuleiro = [], mapaIndicadores = [], eA, eB;

setTimeout(() => { 
  
  let auxA = [], auxB = [];

  // mapeando tabuleiro e seus indicadores
  for(let k = 0; k < i.length; k++) {
    
    for(let j = 1; j < 9; j++) {
      let sensor = j % 8; 
      
      eA = document.getElementById("pcimg"+i[k].toString()+j.toString());
      eB = document.getElementById("ind"+i[k].toString()+j.toString());
      auxA.push(eA);
      auxB.push(eB);
      
      if(sensor == 0) {
        mapaTabuleiro.push(auxA);
        mapaIndicadores.push(auxB);
        auxA = [];
        auxB = [];
      }
    
    }
    
  }

}, 1202);


