
import "./Blog.css"
import React, { useState, useEffect } from 'react';
import "./Blog.css"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import img1 from "../../images/5.avif"
import img2 from "../../images/8.avif"
import img3 from "../../images/9.avif"

function Blog() {

  return (
    <>
  
  <Container className="text-center mt-5">
        <span className="mt-5 d-block aboutUs">ARABIANTRAVEL BLOG</span>
        <h2>Our Blog & Event</h2>
        <Row className="mt-5 mb-5">

                      <Col xs={12} lg={4} className="text-center p-2" >
                        <Card>
                          <Card.Img variant="top" src={img1} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text>sdfghjkljhgfdfdgfhgouiyutytrygu</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Date:</span>{" "}
                              <span className="statusTravel">2-2-2587</span>
                            </ListGroup.Item>
                          </ListGroup>
                    
                        </Card>
                      </Col>
                  
                      <Col xs={12} lg={4} className="text-center p-2" >
                        <Card>
                          <Card.Img variant="top" src={img2} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text>sdfghjkljhgfdfdgfhgouiyutytrygu</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Date:</span>{" "}
                              <span className="statusTravel">2-2-2587</span>
                            </ListGroup.Item>
                          </ListGroup>
                    
                        </Card>
                      </Col>

                      <Col xs={12} lg={4} className="text-center p-2" >
                        <Card>
                          <Card.Img variant="top" src={img3} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text>sdfghjkljhgfdfdgfhgouiyutytrygu</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Date:</span>{" "}
                              <span className="statusTravel">2-2-2587</span>
                            </ListGroup.Item>
                          </ListGroup>
                    
                        </Card>
                      </Col>
                  </Row>
      </Container>
  
    </>
  )
}

export default Blog
