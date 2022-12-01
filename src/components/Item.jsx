import React, { useState, useContext } from 'react';        
import { Link } from 'react-router-dom';
import { contextoGeneral,  } from '../components/ContextContainer';    // Importamos el contexto general





export default function Item({item}) {  
  
  console.log("Render de Item ");

  return (
    <div  
     key={item.id}>
      {JSON.stringify(item)}
      <Link to={'/item/' + item.id}>IR AL ITEM</Link>
      <br />
      <br />
      
    </div>
  );
}


