import React from 'react';


class Footer extends React.Component {

  render() {

    return (

        <footer className="container">
           
            <p>&copy; {(new Date().getFullYear())} TinderTalents, Inc. &middot; <a href="#" rel="noopener noreferrer">Política de Privacidad</a> &middot; <a href="#" rel="noopener noreferrer">Términos</a></p>
        </footer>

    )
    
  }

}

export default Footer;