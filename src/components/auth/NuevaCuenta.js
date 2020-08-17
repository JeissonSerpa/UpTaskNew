import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

   //state para iniciar sesion
   const [ usuario, guardarUsuario ] = useState({
      nombre: '',
      email: '',
      password: '',
      confirmar: ''
   });

   //Extraer valores de usuario
   const {nombre, email, password, confirmar } = usuario;

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
            <h2>Obtener una Cuenta</h2>
            <form
               onSubmit={ capturarForm }
            >
               <div className="campo-form">
                  <label htmlFor="nombre">Nombre:</label>
                  <input 
                     type="text"
                     id="nombre"
                     name="nombre"
                     placeholder="Ingresa tu Nombre..."
                     value={ nombre }
                     onChange={ capturarInput }
                  />
               </div>

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
                  <label htmlFor="confirmar">Confirmar Contraseña:</label>
                  <input 
                     type="password"
                     id="confirmar"
                     name="confirmar"
                     placeholder="Confirma tu Contraseña..."
                     value={ confirmar }
                     onChange={ capturarInput }
                  />
               </div>

               <div className="campo-form">
                  <input 
                     type="submit"
                     className="btn btn-primario btn-block"
                     value="Registrar"
                  />
               </div>
            </form>

            <Link to={'/'} className="enlace-cuenta">
               Iniciar Sesión
            </Link>

         </div>
      </div>
    );
}
 
export default NuevaCuenta;