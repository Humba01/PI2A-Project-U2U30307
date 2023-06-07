let recursos = {

  tabuleiro: {

    pecas: {

      peoes: {

        "#preta": "./assets/imgs/pieces/selected/Chess_pdt45.svg.png",
        "#branca": "./assets/imgs/pieces/selected/Chess_plt45.svg.png"

      },

      torres: {
        
        "#preta": "./assets/imgs/pieces/selected/Chess_rdt45.svg.png",
        "#branca": "./assets/imgs/pieces/selected/Chess_rlt45.svg.png"

      },

      cavalos: {
        
        "#preta": "./assets/imgs/pieces/selected/Chess_ndt45.svg.png",
        "#branca": "./assets/imgs/pieces/selected/Chess_nlt45.svg.png"

      },

      bispos: {

        "#preta": "./assets/imgs/pieces/selected/Chess_bdt45.svg.png",
        "#branca": "./assets/imgs/pieces/selected/Chess_blt45.svg.png"

      },

      reis: {
        
        "#preta": "./assets/imgs/pieces/selected/Chess_kdt45.svg.png",
        "#branca": "./assets/imgs/pieces/selected/Chess_klt45.svg.png"

      },

      rainhas: {
        
        "#preta": "./assets/imgs/pieces/selected/Chess_qdt45.svg.png",
        "#branca": "./assets/imgs/pieces/selected/Chess_qlt45.svg.png"

      }

    }

  }

};


let modelos = { 

  "#.": null,

  "#r": recursos.tabuleiro.pecas.torres["#preta"],

  "#R": recursos.tabuleiro.pecas.torres["#branca"],

  "#n": recursos.tabuleiro.pecas.cavalos["#preta"],

  "#N": recursos.tabuleiro.pecas.cavalos["#branca"],

  "#b": recursos.tabuleiro.pecas.bispos["#preta"],

  "#B": recursos.tabuleiro.pecas.bispos["#branca"],

  "#q": recursos.tabuleiro.pecas.rainhas["#preta"],

  "#Q": recursos.tabuleiro.pecas.rainhas["#branca"],

  "#k": recursos.tabuleiro.pecas.reis["#preta"],

  "#K": recursos.tabuleiro.pecas.reis["#branca"],

  "#p": recursos.tabuleiro.pecas.peoes["#preta"],

  "#P": recursos.tabuleiro.pecas.peoes["#branca"],

}
