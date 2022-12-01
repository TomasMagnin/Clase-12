import logo from './logo.svg';
import TestRender from './components/TestRender';
import ContextContainer from './components/ContextContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';


/* ---------- FIREBASE ---------- */

/* 1- Ir al https://console.firebase.google.com/ y cremos el proyecto */
/* 2- Una Vez en el Panel, vamos a Compilacion > Firestore Database */
/* 3- Usamos la segunda Opcion, Comenzar en modo de Prueba */
/* 4- Luego en Iniciar la Coleccion, seria el equivalente al array con nuestos produsctos */
/* 5- En Productos Añadimos los productos, Tener cuidado con los campos tipo de datos, poner a todos los productos por igual, ya sea number, string, etc.  */
/* 6- La integracion con la App, vamos al engranaje, em la parte superior izquierda, Configuracion de Proyecto > Tus Apps (abajo del todo ), ACa seleccionamos el que es para JS, Luego colocamos el Nombre el mismo que el proyecto */
/* 7- Luego del paso anterior, dos cosas importantes, 1era, intalar modulo (npm install firebase), 2do copiar  el string de conexion */




/* Vamos a Crear en Firebase una Parte para productos y otra para los Pedidos  */

function App() {
  return (
    <BrowserRouter>

    {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LA RUTAS */}

      <Navbar/>
      {/* DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path='/' element={<ItemListContainer/>} /> {/* Estamos colocando en la Home el Item List container */}
        
        <Route path='/category/:idcategory' element={<ItemListContainer/>} />  {/* Esta categoria es multiruta, y filtramos por categoria mostarando solo esa categoria */}
        <Route path='/item/:iditem' element={<ItemDetailContainer/>} /> {/* Este detak se tiene que hacer en la clase 7 */}
        <Route />
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO */} 

    </BrowserRouter>
  );
}

export default App;
