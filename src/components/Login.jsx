import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm() {}
  render() {
    return (
      <>
        <div className="container">
          <div className="container-fluid col-6 mt-5">
            <div classNam="card">
              <div className="card-title">
                <h1>Login here</h1>
              </div>
              <div className="card-body">
                <form onSubmit={this.submitForm}>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Enter usename"
                      name="username"
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={this.state.password}
                      className="form-control"
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
