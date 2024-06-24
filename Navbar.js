import React from 'react'


class Navbar extends React.Component{
    state = { } 
    render() { 
        return( <div className="row">
              <nav className="navbar navbar-expand-lg navbar-dark bg-white">
        <div className="container-fluid mb-2">
          <h1 className="navbar-brand text-black">Apna Cart</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
         
        </div>
      </nav>
        </div>
        );
    }
}
 
export default Navbar;