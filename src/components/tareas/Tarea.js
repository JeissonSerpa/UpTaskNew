import React from 'react';

const Tarea = ({ tarea }) => {
   return ( 
      <li className="tarea sombra">
         <p>{ tarea.nombre }</p>
         <div className="estado">
            { tarea.estado
               ? 
               (  
                  <button
                     type="submit"
                     className="completo btn"
                  >
                     Completo
                  </button> 
               )
               :
               (  
                  <button
                     type="submit"
                     className="incompleto btn"
                  >
                     Incompleto
                  </button> 
               )

            }
         </div>

         <div className="acciones">
            <button
               type="button"
               className="btn btn-primario"
            >
               Editar
            </button>
            <button
               type="button"
               className="btn btn-primario"
            >
               Eliminar
            </button>
         </div>
      </li>
    );
}
 
export default Tarea;