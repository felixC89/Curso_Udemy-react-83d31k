import React from 'react';
//import './style.css';
import { Button } from 'react-bootstrap';
import Saludo, { Despedida, SaludarUser } from './Componentes/Saludar.js';

const Saludar = nombre => {
  alert('Hola ' + nombre);
};

export default function App() {
  const useri = {
    nombre: 'Antonio',
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

      <SaludarUser UserInfo={useri} Greet={Saludar} />

      <hr />

      <h1>React Bootstrap</h1>
      <Button
        variant="primary"
        onClick={() => {
          alert('Hola');
        }}
      >
        Saludo
      </Button>
    </div>
  );
}
