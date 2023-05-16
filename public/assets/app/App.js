let appRoot = document.getElementById('appRoot');

const Application = () => {
  return (
    <div className="app-structure">
      <Cabecalho />
    </div>
  )
}

ReactDOM.render(<Application />, appRoot);
