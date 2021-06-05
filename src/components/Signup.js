import React from "react";
import {withRouter} from "react-router-dom"
import '../style/signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Signup extends React.Component {
  register() {
    
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
     body: JSON.stringify(this.state),
      
    });
    toast("Successful registered!");
    this.props.history.push('/login');
   


  }

  render() {
    
    return (
      
      <div className="container-fluid column signup">
        <h2>Create Your Account</h2>
        <div className="container-sm shadow-1 br4 mx-auto pa4 ">

          <div className="fontuser">
          <i className="fas fa-user"></i>
          <input type="text" className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            placeholder="Enter Username" onChange={(e) => {
              this.setState({ userName: e.target.value });
            }}/>
          </div>
          <br />
           
          <div className="fontuser">
          <i className="fas fa-lock"></i>
          <input type="password" className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            placeholder="Enter Password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}/>
          </div>
          <br />

          <div className="fontuser">
          <i className="fas fa-user-edit"></i>
          <input type="text" className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            placeholder="Enter First Name"
            onChange={(e) => {
              this.setState({ firstname: e.target.value });
            }} />
          </div>
          <br />

          <div className="fontuser">
          <i className="fas fa-user-edit"></i>
          <input type="text" className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            placeholder="Enter Last Name"
            onChange={(e) => {
              this.setState({ lastName: e.target.value });
            }} />
          </div>
          <br />
          
          <div className="fontuser">
          <i className="fas fa-envelope"></i>
          <input type="text" className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            placeholder="Enter Email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}/>
          </div>
          <br />

          <div className="fontuser">
          <i className="fas fa-mobile-alt"></i>
          <input type="text" className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            placeholder="Enter Mobile Number"
            onChange={(e) => {
              this.setState({ mobile: e.target.value });
            }} />
          </div>
          <br />

          <button className="btn btn-primary btn-lg grow" onClick={() => this.register()}>
            Register
          </button>
          <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
         
          
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
