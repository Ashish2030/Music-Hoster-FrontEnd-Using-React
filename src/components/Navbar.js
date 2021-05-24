import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar(props) {
  return (
    <>
      
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background:
            " linear-gradient(90deg, rgba(115,0,0,1) 0%, rgba(185,1,1,1) 100%)",
        }}
      >
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
                <Link className="nav-link" to="/home">
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
          </div>
       </div>  
         
      </nav>
    </>
  );
}

export default Navbar;
