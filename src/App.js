import React from 'react';
//import './style.css';
import { Button } from 'react-bootstrap';
//import { ReactComponent as ReactIcon } from './src/assets/react.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Saludo, { Despedida, SaludarUser } from './Componentes/Saludar.js';
import Contacto from './Pages/Contacto';
import QuienSoy from './Pages/Quiensoy';

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
      <hr />
      <Router>
        <div>
          <Link to="/contacto">
            <Button>Contacto</Button>
          </Link>
          <Link to="/quien-soy">
            <Button variant="success">Quien Soy</Button>
          </Link>
        </div>
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/quien-soy">
            <QuienSoy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
