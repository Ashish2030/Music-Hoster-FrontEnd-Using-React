import { Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style/Navbar.css";


class Navbar extends React.Component{
  search(){
    if(this.state.search === 'login' || this.state.search === 'Login'){
       this.props.history.push('/login');
    }
    else if(this.state.search === 'home' || this.state.search === 'Home'){
       this.props.history.push('/home');
    }
    else if(this.state.search === 'signup' || this.state.search === 'Signup')
    {
      this.props.history.push('/Signup');
    }
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              
            </ul>
          <ul className="navbar-nav text-light ml-auto">
                <li className="nav-item" id="search-ele">
                    <form>
                        <div className="input-group mt-2">
                            <input type="search" name="search" className="form-control border border-danger border-right-0" placeholder="Search Here"
                            onChange={(e) => {
                            this.setState({ search: e.target.value });
                            }} />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-danger text-light text-center navbar-search-btn"
                                 onClick={() => this.search()}>Search</button>
                            </div>
                        </div>
                    </form>
                </li>
            </ul>
          </div>
       </div>  
         
      </nav>
    </>
  );
 }
}

export default withRouter(Navbar);