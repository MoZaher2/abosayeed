import React from 'react'
import "./AboutUs.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import about1 from "../../images/about-1.webp";
import about2 from "../../images/about-2.webp";

function AboutUs() {
  return (
    <>
  
  <Container>
        <Row className="mt-5 mb-5 ">
          <Col sm={6} xs={12} md={4}>
            <span className="mt-5 d-block aboutUs">ABOUT US</span>
            <h2>Arabian Travel Service</h2>
            <p>
              Explore the destinations world wide and Experience the leisure
              Team arabian travel service provides tailor made tour packages at
              your most satisfaction..
            </p>
          </Col>
          <Col sm={6} xs={12} md={4}>
            <img src={about1} alt="" className="w-100 imageAbout m-2" />
          </Col>
          <Col sm={6} xs={12} md={4}>
            <img src={about2} alt="" className="w-100 imageAbout m-2" />
          </Col>
        </Row>
      </Container>
  
    </>
  )
}

export default AboutUs
