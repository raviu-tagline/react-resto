import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/ListComponent";
import Insert from "./components/InsertComponent";
import Update from "./components/UpdateComponent";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { Navbar, Nav } from "react-bootstrap";
import {
  faHome,
  faList,
  faPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/home">
                  <FontAwesomeIcon icon={faHome} />
                  <span>&nbsp;Home</span>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/list">
                  <FontAwesomeIcon icon={faList} />
                  <span>&nbsp;List</span>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/insert">
                  <FontAwesomeIcon icon={faPlus} />
                  <span>&nbsp;Insert</span>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/">
                  <FontAwesomeIcon icon={faSignInAlt} />
                  <span>&nbsp;Login</span>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/logout">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span>&nbsp;Logout</span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/insert">
          <Insert />
        </Route>
        <Route
          path="/update/:id"
          render={(props) => <Insert {...props} />}
        ></Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
