import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

   const proyectos = [
      {nombre: 'Tienda Virtual'},
      {nombre: 'UpTask'},
      {nombre: 'Ecommerce'}
   ];

   //test
   return ( 
      <ul className="listado-proyectos">
         { proyectos.map(proyecto => (
            <Proyecto
               proyecto={ proyecto }
            />
         )) }
      </ul>
    );
}
 
export default ListadoProyectos;