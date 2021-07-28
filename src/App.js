import React from 'react';
import './style.css';
import Saludo, { Despedida } from './Componentes/Saludar.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>
        <Saludo name="Felix" edad="25" />
        Start editing to see some magic happen :)
        <Despedida name="Antonio" edad="31" />
      </p>
    </div>
  );
}
