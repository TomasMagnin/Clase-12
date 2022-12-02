import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { contextoGeneral,  } from '../components/ContextContainer';

export default function ItemDetail({ producto }) {
  const { carrito, addItem } = useContext(contextoGeneral);
  function onAdd(cant) {
    addItem(producto, cant);
  }
  return (
    <div style={{ border: '2px solid violet', margin: '10px' }}>
      {producto.id ? (
        <>
          id: {producto.id}
          <br />
          brand: {producto.brand}
          <br />
          model: {producto.model}
          <br />
          category: {producto.category}
          <br />
          price: {producto.price}
          <br />
          stock: {producto.stock}
          <br />
          year: {producto.year}
          <br />
          img: {producto.img}
          <br />
          <ItemCount ini={1} max={producto.stock} onAdd={onAdd} />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}