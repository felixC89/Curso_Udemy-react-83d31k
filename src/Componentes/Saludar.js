import React from 'react';

export default Saludo;

function Saludo(props) {
  console.log(props.name);
  return (
    <div>
      <h1>
        Hola {props.name} tiene {props.edad} años.
      </h1>
    </div>
  );
}

export function Despedida(props) {
  console.log(props.name);
  return (
    <div>
      <h1>
        Adios {props.name} tiene {props.edad} años.
      </h1>
    </div>
  );
}
