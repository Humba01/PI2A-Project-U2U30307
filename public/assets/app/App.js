let appRoot = document.getElementById('appRoot');

const Application = () => {
  return (
    <div className="app-structure">
      <Cabecalho />
      {/* <Tabuleiro /> */}
    </div>
  )
}

ReactDOM.render(<Application />, appRoot);
