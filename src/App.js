import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from "./Components/Signup-Login/Signup";
import Signin from "./Components/Signup-Login/Signin";
import Reset from "./Components/Signup-Login/Reset";
import PasswordReset from "./Components/Signup-Login/Password-reset";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav.Link as={NavLink} to="/">
              <Navbar.Brand>Password Reset</Navbar.Brand>
            </Nav.Link>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/signup">
                Signup
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signin">
                Signin
              </Nav.Link>
              <Nav.Link as={NavLink} to="/reset">
                Password Reset
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/reset/:token" component={PasswordReset} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
