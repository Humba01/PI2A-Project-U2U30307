let casasTabuleiro = [];

for(let i = 1; i < 9; i++) {
  for(let j = 1; j < 9; j++) {
    let struct = <div className="app-card-tabuleiro-casa" id={"cs"+i.toString()+j.toString()} key={"0k"+i+"-"+j}>
      <img id={"pcimg"+i.toString()+j.toString()}/>
    </div>;  
    casasTabuleiro.push(struct);
  }
}

// VERIFICAR AQUI DEPOIS
let regex = /([1-8]\-[1-8])/gi;
for(let i = 0; i < casasTabuleiro.length; i++) {
  let results = regex.exec(casasTabuleiro[i]);
}


console.log(casasTabuleiro.length, casasTabuleiro);


const Tabuleiro = () => {
  let struct = casasTabuleiro.map(casa => {
    return casa;
  });

  return (
    <div className="app-card-tabuleiro" id="tabuleiro">{struct}</div>
  )
}

let tabuleiro = document.getElementById("tabuleiro")