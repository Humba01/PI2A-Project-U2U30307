let appRootGrafos = document.getElementById('appRootGrafos');

const Grafos = () => {
  return (
    <div className="app-card-grafos" id="cgrafos">
      <div>
        <img id="grafo-img" src="./legacy/another/120px-invisible_square.png" alt="Grafo da Jogada" title="Grafos"/>
      </div>
    </div>
  )
}

ReactDOM.render(<Grafos />, appRootGrafos);
