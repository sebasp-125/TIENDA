import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionLogoutAsyn } from "../redux/actions/actionsLogin";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Logo = styled.img`
  width: auto;
  height: 40px;
`;

const Navbars = () => {
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Logo src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1708566287/TIENDA/Tiendita_nderwo.png" alt="Imagen Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/add">Add</Nav.Link>
            <Nav.Link as={Link} to="/list">List</Nav.Link>
            <Nav.Link as={Link} to="/search">Buscar</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button style={{border: "none"}}
              variant="outline-success"
              onClick={() => dispatch(actionLogoutAsyn())}
            >
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>

      
    </Navbar>
  );
};

export default Navbars;
