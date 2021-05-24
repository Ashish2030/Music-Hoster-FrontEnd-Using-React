import React from "react";
import {withRouter} from "react-router-dom"

class Login extends React.Component {
  login() {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((resutlt) => {
      resutlt.json().then((res) => {
        localStorage.setItem("jwt", JSON.stringify(res.jwt));
      });
    });
    this.props.history.push('/uploadmusic')
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
            placeholder="Username"
            style={{ border: 0 }}
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
          />
          <br />
          <input
            type="password"
            className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            placeholder="Password"
            style={{ marginTop: 10, border: 0 }}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          <br />
          <button
            style={{ marginTop: 15, color: "white" }}
            className="btn btn-danger btn-lg grow"
            onClick={() => this.login()}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
