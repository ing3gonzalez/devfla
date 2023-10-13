import React from 'react';

import Menu from '../components/menu/Menu';
//import Slider from './slider/Slider';
//import Servicios from './servicios/Servicios';
import Footer from '../components/footer/Footer';

class Home extends React.Component {

	render() {

		return(

			<>

			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">

		        <div className="container">
		  	  		
                <div className="col-lg-4">
 
                    <h2>Tinder Talent</h2>
                    <p>Buscador de talentos.</p>
                    
                </div>

		  	  		<hr className="featurette-divider" />

		        </div>

	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Home;