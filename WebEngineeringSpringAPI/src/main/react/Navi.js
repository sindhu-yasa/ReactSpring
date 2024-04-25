import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link , Outlet} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";

export default function Navi() {
  const navigate = useNavigate();
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Assignment2</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={(e) => {e.preventDefault();navigate("/home")}} to="/home">Home</Nav.Link>
              <Nav.Link onClick={(e) => {e.preventDefault();navigate("/forms")}} to="/forms">Form</Nav.Link>
            <Nav.Link href="https://api.nasa.gov/">NASA OPEN API's</Nav.Link>
            <Nav.Link href="https://github.com/sindhu-yasa/WebEngineeringSpringAPI">Springboot code</Nav.Link>
            <Nav.Link href="https://github.com/sindhu-yasa/ReactSpring">React code</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
      }