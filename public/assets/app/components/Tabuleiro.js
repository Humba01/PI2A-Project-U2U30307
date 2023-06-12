let casasTabuleiro = [], identificadores = [], i, j, k, padraoId, struct;
i = ["a", "b", "c", "d", "e", "f", "g", "h"];

for(k = 0; k < i.length; k++) {
  for(j = 1; j < 9; j++) {
    padraoId = i[k].toString()+j.toString();
    struct = <div className="app-card-tabuleiro-casa" id={"cs"+padraoId} key={"0k"+padraoId}>
      <img className="app-card-tabuleiro-casa-img" id={"pcimg"+padraoId}/>
    </div>;  

    casasTabuleiro.push(struct);

    identificadores.push(
      [
        padraoId.slice(0, 1), 
        padraoId.slice(1, 2)
      ]
    );

  }
}


const Tabuleiro = () => {
  let struct = casasTabuleiro.map(casa => {
    return casa;
  });
  
  return (
    <div className="app-card-tabuleiro" id="tabuleiro">
      {struct}
    </div>
  )
}
  
var component = identificadores;
