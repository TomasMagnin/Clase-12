import React, { useState, useEffect } from 'react'
//import Aislado from './aislado';
import Item from './Item';


/* ATENCION !!!!!! PARA USAR ESTE COMPONENTE IR A LA RUTA DE LA NAV TEST RENDER  */


export default function TestRender() {
   // console.log("Console Log de TestRender.jsx");      // Vemos por consola que se esta ejecutando este componente


   /* Creamos los estados para renderizar el componente  */
    
  // const [darkMode, setDarkMode] = useState(false);

  /* Estado de EJ-1 al 7 */
  /*  const [loading, setLoading] = useState(false);  */

  /* Estado de EJ-2 */ 
   //  const [error, setError] = useState(true); 

/*    const arrayProductos = ["Pelota", "Cartera", "algo mas"]; */

  /* Use Effect para el EJ- 3 y 4 */ 

 /*  useEffect(() => {
    setLoading(true)     // A penas arranca la App Loading esta en true      
    setTimeout(() => {
      setLoading(false);  // Luego de 2 segundos se pone en False, simulando que se termino de cargar.
     }, 2000);
   
       }, []); */
   


        /* AHORA VAMOS A USAR EL RETURN TEMPRANO EN EL EJ 1 Y 2, QUE SE EJECUNTA ANTES DEL RETURN ORIGINAL */

  {/* Cada vez que hacemos click cambia de estado y React revisa todo y chequea todo de Nuevo, un componente puede tener hasta 250 lines aporx */}

   /* Ej- 1 */

  {/* Para evitar que cada vez que realizamos un click,  se renderize todo, hacemos un return Temprano, osea ademas de tener el return original con el contenido, antes colocamos otro con un if consultando si esta cargando */}

   /* if(loading) return (                           // Si la varibale loading esta en true va ejecutarse el return y evita el return de abajo

                            <> 
                                  <p>Loading....</p>
                            </>
                      ); */
     

    /* Ej- 2 */       // Para probarlo comentar el otro return             

    /* if (error) return (    // Si el estado error esta en true, entoces se ejecuta primero este return temprano, y no renderiza el restod e la pagina y tampoco usamos el Loading, ya que no tiene sentido.
                        <> 
                          <p>Error Por Favor espere un momento</p>
                        </>
                      ); */

    
    /* Ej- 5 */ /* Logica del ejemplo 5  usando IF y Else normal pero arriba del return*/
    
    /* let cant = 2; // Puede ser 0,1,2 hasta 3-
    let paraImprimir = ` `;

    if (cant == 0) {
      paraImprimir = `Por favor ingrese una cantidad`;    
    } else if (cant == 1) {
      paraImprimir = `No podemos funcionar con una cantidad tan baja`;
    }
    else {
      paraImprimir = <p onClick={() => alert(`Holis`)}> La Cantidad esta Correcta</p>
    } */
    

  /* Ej- 7 */

   /*  let estilo = {};

    if (loading) {
      estilo ={visibility: `visible`, display: `block`};    // Cuando carga la pagina este es el estilo
    } else {
      estilo ={visibility: `hidden`, display: `none` };   // Cuando deja de carhar este es el estilo.
    } */


  /* Ej- 8 */

    const [darkMode, setDarkMode] = useState(false);
    const [name, setName] = useState(`Si ya tengo algo `);

    console.log(name);
    console.log("Render de test Render");

    return (
 <>

 {/*   <button onClick={() => setDarkMode(!darkMode)}> Cambiar a dark mode </button>  */}  {/*  Cada vez que tomcamos el boton cambia el estado de true a false y se renderiza el componente de nuevo  */}
      
  {/*     <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>  <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>  <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p> <p>Contenido</p> */}






  {/*  Ej- 3 */}      {/* En este Ejemplo no usamos mas el return temprano, por eso comente las lines de mas arriba */} 


   {/* Es equivalente a un if(loading) loading? y usamos el operador ternario, y preguntamos susi esta carganmdo */}
  
   {/* {loading ? (
            <h2>La aplicacion se esta cargando...</h2>  // Si es true montamos el H2
        ) : (
            <h3>Listo para usarse</h3>                  // Si es false montamos el H3
        )}
        <div>
            {arrayProductos.map((item) => (       // No Hace falta return  ni llaves ni return luego del map ya que al tener una linea de codigo lo puedo evitar.
             
             <div key={item.length} >{item}</div>   // El key={item.length} lo usamos para pasarle un identificador por props, si no lo ponemos salta un error en la consola 
            ))}
        </div> */}


  {/*  Ej- 4 */} {/*  Hacemos uso de la sintaxis sugar ? && : */}
    
  {/* Es el mismo ejemplo que el 3 nomas que metemos el condicional en un solo div, en lugar de tenerlo separado en dos divs (el if, else), cosa de no desmontar y volver a montar componentes. */}

                                                              {/* Si no queremos poner nada podemos poner "null" */}                                          
  {/*   <div>  {loading ?  `La Aplicacion se esta cargando...` : `Listo para usarse`} </div> */}
    
    {/* Otra forma de Usar un operador ternario es usando un Ampersand &&, que funciona como un IF sin el else. Y tampoco desmontamos el div, solo se retira lo que esta adentrio */}
   {/*  <div> {loading && `La App se esta cargando..`}</div> */}
   

    {/* Vamos a usar otra Opcion con multiples IF sin anidar(distinto al elseif), osea se pueden cumplir todos ninguno excluye al otro, no hay forma de excluirlo, salvo usadno || */}
  
   {/*  <div>
      {cant == 0 && `Por Favor Ingrese una Cantidad`}
      {cant == 1 && `No podemos funcionar con una cantidad tan baja`}
      {cant  > 1 && `La cantidad esta correcta`}
    </div>
   
    <div>
      {arrayProductos.map((item) =>(
        <div>{item}</div>
      ))}
    </div> */}

    {/* Ej- 5 */}  {/* Vamos a usar un if else pero al tener mucha complejidad lo hacemos antes del return */}

        {/* <div>{paraImprimir}</div>
        <div>
            {arrayProductos.map((item) => (
                <div key={item.length}>{item}</div>
          ))}
        </div> */}

    {/* Ej- 6 */}  {/* En estos ejemplos donde el if esta dentro del div, solo cambia el contenido del div en lugar de renderizar toso. */}
        
        {/* <div>
          {loading && `Se esta cargando la App`} */}    {/* Colocamos string de forma condicional, */}
        {/*   {!loading && `Listo para isar`}
        </div>
        <div>
            {arrayProductos.map((item) => (
            <div key={item.length}>{item}</div>
          ))}
        </div>  */}


         {/* Ej- 7 */}    {/* Parecido al anterior solo que el contenido queda fijo y aplicamos una clase */}

          {/* <div style={{color: loading? `red` : `blue` }}>Cargando....</div>
          <div style={{visibility: loading? `visible`: `hidden`, display: loading ? `block` : `none` }}>Cargando....</div>
          */}

          {/* Otra Forma, al tener mucho codigo y mas prolojo lo pasamos arriba */}
         
         {/* <div style={estilo}>Cargando...</div> */}

         {/* Tambien podemos hacer lo Mismo con CLases */}
          
        {/*   <div className={ loading ? 'claseVisible' : `clasenoVisible`} > Cargando... </div>

          <div>
            {arrayProductos.map((item) => (
            <div key={item.length}>{item}</div>
              ))}
          </div> */} 


          {/* Ej- 8  */} 

          {/* Esta en la App.js  una oarte*/}


          <button onClick={()=> setDarkMode(!darkMode)}>Cambiar el Modo</button>

          {/* Atamos la caja con el estado y seteamos el nombre con lo que tiene, y si el nombre tiene un valor lo metemos adentro de la caja */}
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} /> {/* El valor de la caja, usea el value del inpuet es igual al estado */}
          
          {/* Todo lo que esta abajo del input se renderiza nuevamete al hacer in cambio en el input, por mas que lo aisle en otro componente */}

          {/*  El padre TestRender renderiza el input y a su vez el componente aislado */}

          {/* La Soliucion es usar memo */}

          {/* Pasos-------- 1) Aislamos todo,  2) Usamos la funcion Memo */}
         
         
      </>
     );
    }
