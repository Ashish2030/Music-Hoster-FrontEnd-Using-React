import React from "react";
import { withRouter } from "react-router-dom";
import "../style/login.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
  async login() {
    await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
       if(result.status !== 200){
         toast("Incorrect Username or Password");
       }else{
          result.json().then((res) => {
          localStorage.setItem("jwt", res.jwt);
          this.props.history.push("/uploadmusic");
          window.location.reload();
          });
       }
     
    });
      
    // if (
    //   localStorage.getItem("jwt") !== null &&
    //   localStorage.getItem("jwt") !== "undefined"
    // ) {
    //   this.props.history.push("/uploadmusic");
    //   window.location.reload();
    // } else {
    //   this.props.history.push("/login");
    //   toast("Incorrect Username or Password");
    // }
  }

  render() {
    return (
      <div className="container-fluid column login">
        <h2>Sign In To MusicHost</h2>
        <div className="container-sm shadow-1 br4 mx-auto pa4">
          <div className="fontuser">
            <i className="fas fa-user"></i>
            <input
              type="text"
              className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
              placeholder="Enter Username"
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
          </div>

          <br />

          <div className="fontpassword">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
              placeholder="Enter Password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <br />

          <button
            className="btn btn-primary btn-lg grow"
            onClick={() => this.login()} >
            {" "}
            Login{" "}
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
          <p>
            <a href="/login">Forgot Password ?</a>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
