import React from 'react';
import styled from 'styled-components';
import yo from '../IMG/yo.jpeg';
import fondo from '../IMG/fondo.jpg';

const InicioSection = styled.section`
  background: linear-gradient(to top, rgba(29, 34, 37, .8), rgba(29, 34, 37, 1)),
    url(${fondo});
  background-size: cover;
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
`;

const ContenidoBanner = styled.div`
  padding: 20px;
  background-color: #1e2326;
  max-width: 350px;
  margin: auto;
  text-align: center;
  border-radius: 40px;
`;

const Imagen = styled.img`
  margin-top: 40px;
  border: 10px solid #CC0099;
  display: block;
  width: 80%;
  margin: auto;
  border-radius: 100%;
  font-weight:bold;
`;

const Titulo = styled.h1`
  margin-top: 40px;
  font-size: 40px;
  font-family: 'Roboto Condensed', sans-serif;
`;

const Subtitulo = styled.h2`
  font-size: 15px;
  font-weight:bold;
`;

const Redes = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const RedSocial = styled.a`
  color: #fff;
  display: inline-block;
  text-decoration: none;
  border: 1px solid #CC0099;
  border-radius: 100%;
  width: 42px;
  height: 42px;
  line-height: 42px;
  margin: 0 5px;
  font-size: 20px;
  transition: .3s;

  &:hover {
    background-color: #9933CC;
  }
`;

function Inicio() {
  return (
    <InicioSection id="inicio">
      <ContenidoBanner className="contenido-banner">
        <Imagen src={yo} alt="" />
        <Titulo>Yamila De Olivera</Titulo>
        <Subtitulo>Desarrolladora Web Full Stack</Subtitulo>
        <Redes className="redes">
          <RedSocial href="#"><i className="fa-brands fa-linkedin-in"></i></RedSocial>
          <RedSocial href="#"><i className="fa-solid fa-rss"></i></RedSocial>
        </Redes>
      </ContenidoBanner>
    </InicioSection>
  );
}

export default Inicio;
