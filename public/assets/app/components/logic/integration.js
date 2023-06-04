let integracao = {

  backend: {


    leitor: class Reader {

      lerLance(lance="") {

      }
    
    },

    referenciador: class Organizer { }

  }

}

let pecasTabuleiro = `r n b q k b n r 
                      p p p p p p p p 
                      . . . . . . . . 
                      . . . . . . . . 
                      . . . . . . . . 
                      . . . . . . . . 
                      P P P P P P P P 
                      R N B Q K B N R`

let lancesTabuleiro = ["e5", "h7"];

console.log(component);

// desenvolver funcionalidade...
// Sinalizadores de jogadas viáveis, no tabuleiro
// Disposições = 6;

setTimeout(() => {
      
  for(let i = 1; i < 9; i++) {
    for(let j = 1; j < 9; j++) {
      let padraoId = "cs"+i.toString()+j.toString();
  
      let indicadores = document.createElement("canvas");
        indicadores.style.height = "50px";
        indicadores.style.width = "50px";
        indicadores.style.zIndex = "1";
        indicadores.style.position = "absolute";
        indicadores.style.visibility = "hidden";
        indicadores.id = "cnv"+i.toString()+j.toString();
      let cnxt = indicadores.getContext("2d");
        cnxt.beginPath();
        cnxt.roundRect(100, 50, 100, 60, [120]);
        cnxt.stroke();
        cnxt.fillStyle = "#44444455";
        cnxt.fill();
    
      let pElemento = document.getElementById(padraoId);
        pElemento.appendChild(indicadores);
      
    }
  }

}, 2000);
