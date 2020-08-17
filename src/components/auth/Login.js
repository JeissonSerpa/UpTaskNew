import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

   //state para iniciar sesion
   const [ usuario, guardarUsuario ] = useState({
      email: '',
      password: ''
   });

   //Extraer valores de usuario
   const { email, password } = usuario;

   const capturarInput = e => {
      guardarUsuario({
         ...usuario,
         [e.target.name] : e.target.value
      })

   }

   const capturarForm = e => {
      e.preventDefault();

      //Validar campos


      //Pasarlo al action
   }

   return ( 
      <div className="form-usuario">
         <div className="contenedor-form sombra-dark">
            <h2>Iniciar Sesión</h2>
            <form
               onSubmit={ capturarForm }
            >
               <div className="campo-form">
                  <label htmlFor="email">Email:</label>
                  <input 
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Ingresa tu Correo..."
                     value={ email }
                     onChange={ capturarInput }
                  />
               </div>

               <div className="campo-form">
                  <label htmlFor="password">Contraseña:</label>
                  <input 
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Ingresa tu Contraseña..."
                     value={ password }
                     onChange={ capturarInput }
                  />
               </div>

               <div className="campo-form">
                  <input 
                     type="submit"
                     className="btn btn-primario btn-block"
                     value="Iniciar Sesión"
                  />
               </div>
            </form>

            <Link to={'/nueva-cuenta'} className="enlace-cuenta">
               Obtener Cuenta
            </Link>

         </div>
      </div>
    );
}
 
export default Login;