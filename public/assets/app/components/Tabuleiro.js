let casasTabuleiro = [], identificadores = [], i, j, padraoId, struct;

for(i = 1; i < 9; i++) {
  for(j = 1; j < 9; j++) {
    padraoId = "cs"+i.toString()+j.toString();
    struct = <div className="app-card-tabuleiro-casa" id={padraoId} key={"0k"+i+"-"+j}>
      <img id={"pcimg"+i.toString()+j.toString()}/>
    </div>;  
    casasTabuleiro.push(struct);

    identificadores.push(
      [
        padraoId.slice(0, 1), 
        padraoId.slice(1, 2), 
        padraoId.slice(2, 3), 
        padraoId.slice(3, 4)
      ]
    );

  }
}

const Tabuleiro = () => {
  let struct = casasTabuleiro.map(casa => {
    return casa;
  });
  
  return (
    <div className="app-card-tabuleiro" id="tabuleiro">{struct}</div>
  )
}
  
var component = identificadores;