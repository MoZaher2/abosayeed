import React from 'react'
import "./Footer.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram,faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import logoFooter from "../../images/arabian logo-footer.webp";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
    <Row className="  footer p-4 d-flex justify-content-between">
        <Col sm={4} xs={12} className="text-center  p-2">
          <img src={logoFooter} alt="logoFoter" className="w-50" />
          <p className="mt-4 mb-4">Discover a World of Endless Experiences</p>
          <Link to="/" className=" social">
            {" "}
            <FontAwesomeIcon
              icon={faFacebook}
              size="2xl"
              className="m-2"
            />
          </Link>
          <Link to="/" className=" social">
            {" "}
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="m-2 "
            />
          </Link>
          <Link to="/" className=" social">
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2xl"
              className="m-2 "
            />
          </Link>

          <Link to="/" className=" social">
            {" "}
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2xl"
              className="m-2 "
            />
          </Link>

  
        </Col>
        <Col sm={4} xs={12} className=" p-2">
          <span className=" d-block aboutUs fs-5">CONTACT US</span>
          <p className="mt-4 mb-4 fs-5">reservation@arabiantravelservice.com</p>
          <Link to="/" style={{ textDecoration: "none" }} className="link">
            Terms & Conditions
          </Link>
        </Col>

      </Row>
      <Nav
              className="me-auto   w-100 subfooter p-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#" className="linkfooter">Home</Nav.Link>
              <Nav.Link href="#" className="linkfooter"> About US</Nav.Link>
              <Nav.Link href="#" className="linkfooter"> Blog</Nav.Link>
              <Nav.Link href="#" className="linkfooter"> Contact US</Nav.Link>
        
      
            </Nav>
  
    </>
  )
}

export default Footer
