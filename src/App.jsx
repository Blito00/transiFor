import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import sidebar from './components/sidebar.css'
import style from './components/style.css'


function App() {

  return (
    <div>

      <div class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
        <ul class="nav flex-column text-white w-100">
          <a href="#" class="nav-link h3 text-white my-2"><img src="src\assets\img\cropped-cono.png" width="45px" /> TransiFor<br /></a>
          <li href="#" class="nav-link">
            <i class="bi bi-house-fill"></i>
            <span class="mx-2">Inicio</span>
          </li>
          <li href="#" class="nav-link">
            <i class="bi bi-person-fill"></i>
            <span class="mx-2">Perfil</span>
          </li>
          <li href="" class="nav-link">
            <i class="bi bi-gear-fill"></i>
            <span class="mx-2">Configuración</span>
          </li>
          <li href="#" class="nav-link">
            <i class="bi bi-question-circle"></i>
            <span class="mx-2">Ayuda</span>
          </li>
        </ul>
        <span href="#" class="nav-link h4 w-100 mb-5">
          <a href=""><i class="bx bxl-instagram px-2 text-white"></i></a>
          <a href=""><i class="bx bxl-twitter px-2 text-white"></i></a>
          <a href=""><i class="bx bxl-facebook text-white"></i></a>
        </span>
      </div>
      <div class="my-container active-cont">
        <nav class="navbar navbar-dark bg-dark px-5">
          <a class="btn border-0" id="menu-btn"><i><img width="30px" src="src\assets\img\descarga.png" alt="" /></i></a>
          <img src="src\assets\img\logo-user.png" width="40px" />
        </nav>
        <div>
          <p class="h1">Bienvenido Inspertor!</p>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4" style={{ width: "80%" }}>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src="src\assets\img\descarga.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Buscar dominio:</h5>
                <p class="card-text">Verifique si un vehiculo está para funcionar como transporte de personas.</p>
              </div>
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Verificar
              </button>
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" 
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Dominio</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src="src\assets\img\descarga.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Realizar un denuncia:</h5>
                <p class="card-text">Complete este formulario si desea notificarde que hay un vehiculo con pedido de secuestro.</p>
                <div>
                  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Denunciar
                  </button>
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">Formulario de denuncia:</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <label htmlFor="formFile" class="form-label">Indique la marca del vehiculo:</label>
                          <select
                            class="form-select form-select mx-4 mb-5"
                            aria-label="Default select example"
                            style={{
                              width: "400px",
                              top: "10px",
                              position: "relative",
                            }}
                            name="categoria"
                          >
                            <option selected>Selecciona una opción.</option>
                            <option value="1">Alfa Romeo</option>
                            <option value="2">Audi</option>
                            <option value="3">BMW</option>
                            <option value="4">Chevrolet</option>
                            <option value="5">Citroen</option>
                            <option value="6">Fiat</option>
                            <option value="7">Ford</option>
                          </select>
                        </div>
                        <div class="modal-body">
                          <label htmlFor="exampleColorInput" class="form-label">Indique el color del vehiculo:</label>
                          <input type="color" class="form-control form-control-color" id="exampleColorInput" title="Choose your color" />
                        </div>
                        <div class="modal-body">
                          <label htmlFor="exampleFormControlTextarea1" class="form-label">Indique detalles los cuales para facilitar la identificación del vehículo.
                            Especificar sí ocurrieron otras infracciones.</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                          <button type="button" class="btn btn-success">Enviar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
