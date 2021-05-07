// import React, { Component } from "react";
import { decodeToken, isExpired, useJwt } from "react-jwt";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//     let token = "JWT Token";

//     this.state = {
//       decodeTok: decodeToken(token),
//       isExp: isExpired(token),
//     };
//   }

//   componentDidMount() {
//     console.log("Decode -- ", this.state.decodeTok);
//     console.log("expired -- ", this.state.isExp);
//   }
//   render() {
//     return (
//       <>
//         <h1 className="mt-5">Welcome to resturant</h1>
//       </>
//     );
//   }
// }

import React from "react";
const token = localStorage.getItem("token");
export default function Home() {
  const { decTok, isExp } = useJwt(token);
  console.log("Decode -- ", decTok);
  console.log("Exp -- ", isExp);
  return <div></div>;
}
