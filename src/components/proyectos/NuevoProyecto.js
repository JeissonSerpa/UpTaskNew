import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

   //State para proyecto nuevo
   const [ proyecto, guardarProyecto ] = useState({
      nombre: '',

   });

   //Lee el contenido de el input
   const { nombre } = proyecto;
   const onChangeProyecto = e => {
      guardarProyecto({
         ...proyecto,
         [e.target.name] : e.target.value
      })
   }

   //Enviar el proyecto
   const onsubmitProyecto = e => {
      e.preventDefault();

      //validar Proyecto

      //Agregar al State

      //Reiniciar Formulario
   }

   return (
      <Fragment>
         <button
            type="button"
            className="btn btn-block btn-primario"
         >
            Nuevo Proyecto
         </button>

         <form
            className="formulario-nuevo-proyecto"
            onSubmit={ onsubmitProyecto }
         >
            <input 
               type="text"
               className="input-text"
               placeholder="Nueva Tarea"
               name="nombre"
               value={ nombre }
               onChange={ onChangeProyecto }
            />

            <input 
               type="submit"
               className="btn btn-primario btn-block"
               value="Agregar Proyecto"            
            />
         </form>
      </Fragment> 
    );
}
 
export default NuevoProyecto;