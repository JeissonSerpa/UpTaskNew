import React from 'react';

const FormTarea = () => {
   return ( 
      <div className="formulario">
         <form>
            <div className="contenedor-input">
               <input 
                  type="text"
                  className="input-text"
                  placeholder="Agregar Tarea..."
                  name="nombre"
               />
            </div>

            <div className="contenedor-input">
               <input 
                  type="submit"
                  className="btn btn-block btn-primario btn-submit"
                  value="Crear Tarea"
               />
            </div>
         </form>
      </div>
    );
}
 
export default FormTarea;