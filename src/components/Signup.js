import React from "react";
import {withRouter} from "react-router-dom"

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
    this.props.history.push('/login')
  }

  render() {
    
    return (
      <div
        className="container-fluid column "
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginTop: 20,
        }}
      >
        <div
          className="container-sm shadow-1 br4 mx-auto pa4 "
          style={{ maxWidth: 300 }}
        >
          <input
            type="text"
            className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            style={{ border: 0, marginTop: 10 }}
            placeholder="Username"
            onChange={(e) => {
              this.setState({ userName: e.target.value });
            }}
          />
          <br />
          <input
            type="password"
            className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            style={{ border: 0, marginTop: 10 }}
            placeholder="Password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          <br />
          <input
            type="text"
            className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            style={{ border: 0, marginTop: 10 }}
            placeholder="First Name"
            onChange={(e) => {
              this.setState({ firstname: e.target.value });
            }}
          />
          <br />
          <input
            type="text"
            className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            style={{ border: 0, marginTop: 10 }}
            placeholder="Last Name"
            onChange={(e) => {
              this.setState({ lastName: e.target.value });
            }}
          />
          <br />
          <input
            type="text"
            className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            style={{ border: 0, marginTop: 10 }}
            placeholder="Email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <br />
          <input
            type="text"
            className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            style={{ border: 0, marginTop: 10 }}
            placeholder="Mobile Number"
            onChange={(e) => {
              this.setState({ mobile: e.target.value });
            }}
          />
          <br />

          <button
            style={{ marginTop: 15, color: "white" }}
            className="btn btn-danger btn-lg grow"
            onClick={() => this.register()}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
