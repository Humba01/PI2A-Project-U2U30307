let appRoot = document.getElementById('appRoot');

const Application = () => {
  return (
    <div className="app-structure">
      <Cabecalho />
      <Organizer />
      <Grafo />
    </div>
  )
}

ReactDOM.render(<Application />, appRoot);
