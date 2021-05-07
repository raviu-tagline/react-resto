import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default class Logout extends Component {
  render() {
    return (
      <>
        <Login />
        {/* <Link to="/">Login again</Link> */}
      </>
    );
  }
}
