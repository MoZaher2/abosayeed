import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios'; 
import api from '../db/api'; 
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.webp";
import logoEru from "../../images/eru.png";
import logoEng from "../../images/eng.png";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
function Header() {

  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    try {
      const form = event.target.form;
  
      if (!form.checkValidity()) {
        event.stopPropagation();
        setValidated(true);
        return;
      }
  

  

  
      setIsLoggedIn(false);
  
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };
  const handleRegister = async (event) => {
    try {
      event.preventDefault();
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true);
        return;
      }



      setIsLoggedIn(false);

    } catch (error) {
      console.error('Failed to register:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsUser(false);
    setIsAdmin(false);
    localStorage.removeItem('token');
    navigate("/")
  };





  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };


  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex lang ms-5 my-2 me-5">
          <img src={logoEng} alt="Switch to English" className="me-2" />
          <img src={logoEru} alt="Switch to German" className="me-2" />
        </div>

        <div className=" ms-5 my-2 me-5">
        <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleRegister} className="register">
          <h2 className="text-center">Register</h2>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomname" className="input">
              <Form.Label>Name :</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name...."
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your Name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustommail" className="input">
              <Form.Label>E-mail :</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  name="mail"
                  placeholder="E-mail...."
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your E-mail.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomPassword" className="input">
              <Form.Label>Password :</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  name="pass"
                  placeholder="Password..."
                  aria-describedby="inputGroupPrepend"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomConfirmPassword" className="input">
              <Form.Label>Confirm Password :</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Password..."
                  aria-describedby="inputGroupPrepend"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Passwords do not match.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Button type="submit" className="btnlogin">Register</Button>
        </Form>
      </Modal>
      <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Log in</Modal.Title>
  </Modal.Header>
  <Form noValidate validated={validated} onSubmit={handleSubmit} className="login">
    <h2 className="text-center">Log in</h2>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustomUsername" className="input">
        <Form.Label>E-mail :</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="email"
            name="mail"
            placeholder="E-mail...."
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Your E-mail.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustomPassword" className="input">
        <Form.Label>Password :</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="password"
            name="pass" 
            placeholder="Password..."
            aria-describedby="inputGroupPrepend"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your password.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>
    <Button type="submit" className="btnlogin" onClick={handleSubmit}>Log in</Button>


  </Form>
</Modal>
{isLoggedIn ? (
  <Button variant="primary" onClick={handleLogout} size="sm">Logout</Button>
) : (
  <>
    <Button variant="primary" onClick={handleShow} size="sm">Login</Button>
    <Button variant="primary" className="ms-2" onClick={handleShowRegister} size="sm">Register</Button>
  </>
)}



{isLoggedIn && isAdmin && <Nav.Link href="/addTrip">Dashboard</Nav.Link>}

    

        </div>
      </div>

      <Container>
        <Navbar expand="lg" className="bg-body-tertiary mx-3">
          <Navbar.Brand href="/">
            <img src={logo} alt="" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 w-75" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About US</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/ourTrips">All Trips</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
             <Nav.Link href="/addTrip">Dashboard</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2 " aria-label="Search" />
              <Link to="/search">
                <Button variant="primary">Search</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
