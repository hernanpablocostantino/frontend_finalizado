import React from 'react'

function Navegacion() {
  return (
    <header className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-gradient-secondary">
        <div className="container">
          <a className="navbar-brand" href="/"><img src="./logo.png" className="opacity-50" alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item m-3 text-center">
                <a className="nav-link active btn btn-outline-secondary d-inline p-2" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item m-3 text-center">
                <a className="nav-link btn btn-outline-secondary d-inline p-2" href="agregarusuario">Agregar Usuario</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navegacion