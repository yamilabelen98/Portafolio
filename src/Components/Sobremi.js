import React from 'react';
import styled from 'styled-components';

const SobreMiSection = styled.section`
  background-color: #1e2326;
  color: #fff;
  padding: 50px 20px;
`;

const ContenidoSeccion = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Titulo = styled.h2`
  font-size: 48px;
  font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
  padding: 20px 0;
`;

const Parrafo = styled.p`
  font: 18px;
  line-height: 22px;
  margin-bottom: 20px;

  span {
    color: #CC0099;
    font-weight: bold;
  }
`;

const Fila = styled.div`
  display: flex;
`;

const Columna = styled.div`
  width: 50%;

  h3 {
    font-size: 28px;
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 25px;
  }

  ul {
    list-style: none;
  }

  ul li {
    margin: 12px 0;
  }

  ul li strong {
    display: inline-block;
    color: #1CB698;
    width: 130px;
  }

  ul li span {
    background-color: #1CB698;
    padding: 3px;
    font-weight: bold;
    border-radius: 5px;
  }

  .contenedor-intereses {
    display: flex;
    flex-wrap: wrap;
  }

  .contenedor-intereses .interes {
    width: 100px;
    height: 100px;
    background-color: #252A2E;
    border-radius: 10px;
    margin: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .3s;
  }

  .contenedor-intereses .interes:hover {
    background-color: #CC0099;
  }

  .contenedor-intereses .interes i {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const Boton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #CC0099;
  width: fit-content;
  display: block;
  margin: 20px auto;
  padding: 10px 22px;
  font-size: 16px;
  color: #fff;
  position: relative;
  z-index: 10;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #CC0099;
    z-index: -1;
    transition: 1s;
  }

  &:hover .overlay {
    width: 100%;
  }
`;

function SobreMi() {
  return (
    <SobreMiSection id="sobremi" className="sobremi">
      <ContenidoSeccion className="contenido-seccion">
        <Titulo>Sobre Mí</Titulo>
        <Parrafo>
          <span>Hola, soy Yamila De Olivera.</span> Soy una persona proactiva, en constante aprendizaje. Me encuentro aprendiendo 2 lenguajes, C y Python. Soy estudiante de Ingeniería Informática y estoy en segundo año.
        </Parrafo>

        <Fila>
          {/* intereses */}
          <Columna className="col">
            <h3>Intereses</h3>
            <div className="contenedor-intereses">
              <div className="interes">
                <i className="fa-solid fa-gamepad"></i>
                <span>JUEGOS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-headphones"></i>
                <span>MUSICA</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-plane"></i>
                <span>VIAJAR</span>
              </div>
              <div className="interes">
                <i className="fa-brands fa-apple"></i>
                <span>MAQUILLAJE</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-person-hiking"></i>
                <span>DEPORTE</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-book"></i>
                <span>LIBROS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-car"></i>
                <span>MODA</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-camera"></i>
                <span>FOTOS</span>
              </div>
            </div>
          </Columna>
        </Fila>

        <Boton>
          Descargar CV <i className="fa-solid fa-download"></i>
          <span className="overlay"></span>
        </Boton>
      </ContenidoSeccion>
    </SobreMiSection>
  );
}

export default SobreMi;

