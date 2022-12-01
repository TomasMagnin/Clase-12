import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';





export default function Navbar() {
    return (
    
  
      <div>
          
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Quienes Somos</NavLink>
            <NavLink to="/">Contactos</NavLink>
            <NavLink to="/"></NavLink>
            <NavLink to="/test">Tstes Render</NavLink>
        
    


      </div>
    );
}