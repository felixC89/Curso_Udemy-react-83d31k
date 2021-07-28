import React from 'react';
import './style.css';
import Saludo, { Despedida } from './Componentes/Saludar.js';

export default function App() {
  const useri = {
    nombre: 'Jose',
    edad: 28,
    color: 'Azul'
  };

  return (
    <div>
      <h1>Hola Mundo!</h1>
      <p>
        <Saludo name="Felix" edad="25" />
        Start editing to see some magic happen :)
        <Despedida UserInfo={useri} />
      </p>
    </div>
  );
}
