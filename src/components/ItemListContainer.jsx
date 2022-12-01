import React from "react";
import { useState, useEffect } from "react";
import { NavLink ,Link, useParams, Form } from "react-router-dom";
import { producsBK } from "./data.js";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
                                                                
// Para uysar el context, sacamos el darkMoe y setDarkmode, que es lo que recive.

export default function ItemListContainer() {        

  console.log("Render de Item List Container");


  const { idcategory } = useParams();                   /*  Sacamos el ID de categoria de la URL */

  const [productos, setProductos] = useState([]);

  useEffect(() => {           

    /* Vamos a llamar a la base de Datos, y traerlos a todos usando este estado ! */
    const db = getFirestore();
    const productos = collection(db, "products");  /* Aca en Collection, llamamos a la base de datos y despues tenemos que colocar el nombre que le pusimos a la coleccion, tiene que ser igual, en este caso "Productss" */
    
    getDocs(productos).then((res) => {            /* Seria una promesa, y usamos el then del response y le pedimos toda la coleccion de productos */
        console.log(res);                           /* Cuando llega le hacemos un LOG del response con los productops */
    });      
    }, [idcategory]);        /* Si cambia el ID de Categoria se ejecuta de nuevo el componente, por ende la promesa se ejecuta */




  return (
    <div style = {{ border: "2px solid red", margin: `10px`}}></div>
  );
}