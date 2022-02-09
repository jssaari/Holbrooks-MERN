import React from "react";
// import { Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";
// import { logout } from "../actions/userActions";

const Header = () => {
  //   const dispatch = useDispatch();

  //   const userLogin = useSelector((state) => state.userLogin);
  //   const { userInfo } = userLogin;

  //   const logoutHandler = () => {
  //     dispatch(logout());
  //   };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* <LinkContainer to="/"> */}
          <Navbar.Brand>Holbrooks</Navbar.Brand>
          {/* </LinkContainer> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <LinkContainer to="/cart"> */}
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              {/* </LinkContainer> */}

              {/* <LinkContainer to="/login"> */}
              <Nav.Link>
                <i className="fas fa-user"></i> Sign In
              </Nav.Link>
              {/* </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
