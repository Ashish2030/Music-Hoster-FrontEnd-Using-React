import { Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import React from 'react';
import "../style/Navbar2.css";


class Navbar2 extends React.Component{

   logout(){
       localStorage.clear();
        this.props.history.push("/login");
        window.location.reload();
   }
  render(){

  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-dark mt-0 sticky-top" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            MusicHost
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/MusicData">
                  All Files
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/uploadmusic">
                  Upload Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={
                 () => this.logout()}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
       </div>  
         
      </nav>

      

    </>
  );
 }
}

export default withRouter(Navbar2);
