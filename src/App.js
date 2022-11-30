import logo from './logo.svg';
import './App.css';



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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
