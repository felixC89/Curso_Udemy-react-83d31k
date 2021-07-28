import React from 'react';
import './style.css';
import HolaMundo, { AdiosMundo } from './Componentes/HolaMundo.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>
        <HolaMundo />
        Start editing to see some magic happen :)
        <AdiosMundo />
      </p>
    </div>
  );
}
