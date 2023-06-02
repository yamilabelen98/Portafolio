import React from 'react';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Sobremi from './Components/Sobremi';
import Inicio from './Components/Inicio';

function App() {
  return (
    <div>
      <Navbar />
      <Inicio id="inicio" />
      <Sobremi id="sobremi"/>
      <Skills/>
    </div>
  );
}

export default App;

