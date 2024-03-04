import React, { useState } from 'react';
import api from '../../components/db/api';
import "./ContactUs.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const ContactUs = () => {


  return (
    <>
      <Header />

      <Container>
        <Row className="mt-5 mb-5">
          <Col
            sm={6}
            xs={12}
        
            className="text-center  p-2"
          >
        
            <h2>Get In Touch With Us</h2>
            <p className="fs-5">
            We’d love to hear from you.
            </p>
            <div className="contactEmail">
              <span className="me-4 fs-5">E-mail :</span>
              <span className="contact-email fs-5">reservation@arabiantravelservice.com</span>
            </div>
          </Col>
          <Col
            sm={6}
            xs={12}
      
            className="text-center p-2"
          >
      
      <Form className="m-3 btnSubmit">
      <Row>
        <Col>
          <Form.Control
            name="name"
            placeholder="Your Name"
          />
        </Col>
        <Col>
          <Form.Control
            name="email"
    
            type="email"
            placeholder="Your E-mail"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            name="message"
      
            as="textarea"
            rows={7}
            placeholder="Your Message"
            className="mt-3"
          />
        </Col>
      </Row>
      <Button variant="primary" type="submit" className="m-3 btnSubmit ms-0">
        Submit
      </Button>
    </Form>


          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}

export default ContactUs
