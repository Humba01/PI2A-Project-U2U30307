let appRoot = document.getElementById('appRoot');

const Application = () => {
  return (
    <div className="app-structure">
      <Cabecalho />
      <SelectionSide />
      <TabuleiroState />
      <Organizer />
      <Grafo />
    </div>
  )
}

ReactDOM.render(<Application />, appRoot);
