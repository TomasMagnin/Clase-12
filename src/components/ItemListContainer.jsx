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
    //const productos = collection(db, "products");  /* Aca en Collection, llamamos a la base de datos y despues tenemos que colocar el nombre que le pusimos a la coleccion, tiene que ser igual, en este caso "Productss" */
    
    let productos = query(collection(db, "products"), where("category", "==", idcategory));      /* Esta es una forma mas optima de perdir los productos no tan rudimentarias */






    getDocs(productos).then((res) => {            /* Seria una promesa, y usamos el then del response y le pedimos toda la coleccion de productos */
       // console.log(res);                           /* Hacemos un LOG del response del servidor y vemos los datos que nos entrega,  */
       // console.log(res.docs);                      /* Filtramos solamente por el contenido que tenemos en la base de datos, que se encuentra en "docs", el resultado van a ser todos los productos en forma de objeto dentro de un Array, cada objeto tiene el ID que es el mismo ID de productos de las base de datos */
      
        /* Ahora vamos a recorrer con un MAP el Array  que nos devuelve el response del server */
        const arrayNormalizado = res.docs.map((element) => {
            return { id: element.data().id, brand: element.data().brand, model: element.data().model, category: element.data().category, price: element.data().price, year: element.data().year, stock: element.data().stock, img: element.data().img};
      });
        console.log(arrayNormalizado);
        setProductos(arrayNormalizado);

        /* Filtramos por Categoria, pero es un metodo mas rudimentario este, conviene usar una query */

        /* if (idcategory) {
        setProductos(arrayNormalizado.filter((item) => item.category == idcategory));
      } else {
        setProductos(arrayNormalizado);
      } */


      });      

       
    
    }, [idcategory]);        /* Si cambia el ID de Categoria se ejecuta de nuevo el componente, por ende la promesa se ejecuta */




  return (
    <div style = {{ border: "2px solid red", margin: `10px`}}>
       <ItemList productos={productos} />;
    </div>
   
  );
}