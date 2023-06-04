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
function criaIndicadores() {
  // Sinalizadores de jogadas viáveis, no tabuleiro
  // Disposições = 6;
  let indicadores = document.createElement("canvas");
    indicadores.height = "20px";
    indicadores.width = "20px";
    indicadores.style.zIndex = "1";
    indicadores.style.position = "relative";
    
  let cnxt = indicadores.getContext("2d");
    cnxt.roundRect(0, 0, 20, 20, 5);
    cnxt.fillStyle = "#44444455";

  // adicionar ao elemento pai;
 
};

