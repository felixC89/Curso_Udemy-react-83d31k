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
  console.log(props);
  return (
    <div>
      <h1>
        Adios {props.UserInfo.nombre} tiene {props.UserInfo.edad} años y le
        gusta el color {props.UserInfo.color}.
      </h1>
    </div>
  );
}

export function SaludarUser(props) {
  const { UserInfo, Greet } = props;
  const { nombre = 'Anonimo' } = UserInfo;

  return (
    <div>
      <button onClick={() => Greet(nombre)}>Saludar</button>
    </div>
  );
}
