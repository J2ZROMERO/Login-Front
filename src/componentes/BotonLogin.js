import React from 'react';

const BotonLogin = ({ onClick, disabled, nombreBoton }) => {
  return (
    <button className="btn btn-primary" onClick={onClick} disabled={disabled}>
      {nombreBoton}
    </button>
  );
};

export default BotonLogin;
