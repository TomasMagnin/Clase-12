import { useState, useEffect } from "react";
import { NavLink ,Link, useParams, Form } from "react-router-dom";
import "./ItemListContainer";
import { producsBK } from "./data.js";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs} from "firebase/firestore";

// Para uysar el context, sacamos el darkMoe y setDarkmode, que es lo que recive.

export default function ItemListContainer({}) {        

  console.log("Rendfer de Item List Container");


  const { idcategory } = useParams();                   /*  Sacamos el ID de categoria de la URL */

  const [productos, setProductos] = useState([]);

  useEffect(() => {           
    /* Vamos a llamar a la base de Datos, y traerlos a todos usando este estado ! */
    const db = getFirestore();
    const productos = collection(db, 'productos')
    
    getDocs(productos).then((res) => {
      console.log(res);
    });      
    }, [idcategory]);        /* Si cambia el ID de Categoria se ejecuta de nuevo el componente, por ende la promesa se ejecuta */

  return (
    <div  className="text-center"  style={{ border: "2px solid red"}}></div>
  )
};