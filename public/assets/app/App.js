let appRootCabecalho = document.getElementById('appRootCabecalho');

const Application = () => {
  return (
    <div className="app-structure">
      <Cabecalho />
    </div>
  )
}

ReactDOM.render(<Application />, appRootCabecalho);
