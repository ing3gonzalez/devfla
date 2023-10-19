import React from 'react';
import {NavLink} from "react-router-dom";


class Menu extends React.Component {

  render() {

  	return (

  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

		    <NavLink to="/" className="navbar-brand">Tinder Talents</NavLink>

		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">

			        <li className="nav-item">
			          	<NavLink to="/" className="nav-link">Home </NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink to="/talentos" className="nav-link">Talentos </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/empresas" className="nav-link">Empresas </NavLink>
			        </li>
					<li className="nav-item">
			          	<NavLink to="/habilidades" className="nav-link">Habilidades </NavLink>
			        </li>
			        

			    </ul>


		    </div>		    

		</nav>

  	)
    
  }

}

export default Menu;