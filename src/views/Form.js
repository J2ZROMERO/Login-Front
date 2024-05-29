import React, { useState } from 'react';
import InputLogin from '../componentes/InputLogin';
import BotonLogin from '../componentes/BotonLogin';
import { Navigate } from 'react-router-dom';
function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedInEmail, setLoggedInEmail] = useState(localStorage.getItem('email_usuario'));
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);  // Estado para manejar la redirección

  
    const manejoLogin= async (e) => {
      e.preventDefault(); // Evita la recarga de la página

      console.log("hola mundo");
      // Simulación de conexión asíncrona con delay aleatorio
      const retraso = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;
      await new Promise(resolve => setTimeout(resolve, retraso));
  
      if (password == 'password1234') {
        setErrorMessage('');
        localStorage.setItem('email_usuario', email);
        setLoggedInEmail(email);
        setRedirectToDashboard(true);
        
      } else {
        setErrorMessage('Error de autenticación. Contraseña incorrecta.');
      }
    };
  

    if (redirectToDashboard) {
        return <Navigate to="/dashboard" />;  // Redirección condicional
    }


    const emailInput = (e) => {
      setEmail(e.target.value);
    };
  
    const passInput= (e) => {
      setPassword(e.target.value);
    };



  
    return (
      <div
      className='container text-center d-flex'
      style={{
        flexWrap: 'wrap',
        height: '50vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        {loggedInEmail && <p className='text-center mt-5 w-100'>Usuario logueado: {loggedInEmail}</p>}
        <form className='w-50 mt-4'>
  <div className="mb-3">
    <InputLogin
      type="email"
      placeholder="Email"
      value={email}
      onChange={emailInput}
    />
  </div>
  <div className="mb-3">
    <InputLogin
      type="password"
      placeholder="Contraseña"
      value={password}
      onChange={passInput}
    />
  </div>
  
  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

  <BotonLogin onClick={manejoLogin} disabled={password.length < 6} nombreBoton="Iniciar sesión"/>
</form>

      </div>
    );
  }

export default Form;
