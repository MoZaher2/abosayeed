import React, { useState, useEffect } from 'react';
import api from '../../components/db/api';
import "./TripPage.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import img1 from "../../images/1.avif"
import img2 from "../../images/2.avif"
import img3 from "../../images/3.avif"
import img4 from "../../images/4.avif"
import img5 from "../../images/5.avif"
import img6 from "../../images/6.avif"
function TripPage() {


  return (
    <>
    <Header />

    <h2 className="text-center my-5">Our Trips</h2>
    <Container>
    <Row className="mt-5 mb-5">
      
              <div  className="col-sm-6 col-xs-12 col-md-4 col-lg-4 text-center p-2">
                <Card>
                  <Card.Img variant="top" src={img1} className="heightImageCard" />
                  <Card.Body>
                    <Card.Text className="fs-5">Trip 1....</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <span className="price">185</span><span className="price">$</span>/Per person
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Duration:</span> <span className="statusTravel">04:Hur</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Vehicle:</span> <span className="statusTravel">Car</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Guiding:</span> <span className="statusTravel">yes</span>
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Link to={`/details`}>
                      <button className="btn btn-primary">MORE DETAILS</button>
                    </Link>
                  </Card.Body>
                </Card>
            
              </div>
              <div  className="col-sm-6 col-xs-12 col-md-4 col-lg-4 text-center p-2">
                <Card>
                  <Card.Img variant="top" src={img2} className="heightImageCard" />
                  <Card.Body>
                    <Card.Text className="fs-5">Trip 2....</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <span className="price">185</span><span className="price">$</span>/Per person
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Duration:</span> <span className="statusTravel">04:Hur</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Vehicle:</span> <span className="statusTravel">Car</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Guiding:</span> <span className="statusTravel">yes</span>
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Link to={`/details`}>
                      <button className="btn btn-primary">MORE DETAILS</button>
                    </Link>
                  </Card.Body>
                </Card>
            
              </div>
              <div  className="col-sm-6 col-xs-12 col-md-4 col-lg-4 text-center p-2">
                <Card>
                  <Card.Img variant="top" src={img3} className="heightImageCard" />
                  <Card.Body>
                    <Card.Text className="fs-5">Trip 3....</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <span className="price">185</span><span className="price">$</span>/Per person
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Duration:</span> <span className="statusTravel">04:Hur</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Vehicle:</span> <span className="statusTravel">Car</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Guiding:</span> <span className="statusTravel">yes</span>
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Link to={`/details`}>
                      <button className="btn btn-primary">MORE DETAILS</button>
                    </Link>
                  </Card.Body>
                </Card>
            
              </div>

              <div  className="col-sm-6 col-xs-12 col-md-4 col-lg-4 text-center p-2">
                <Card>
                  <Card.Img variant="top" src={img4} className="heightImageCard" />
                  <Card.Body>
                    <Card.Text className="fs-5">Trip 4....</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <span className="price">185</span><span className="price">$</span>/Per person
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Duration:</span> <span className="statusTravel">04:Hur</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Vehicle:</span> <span className="statusTravel">Car</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Guiding:</span> <span className="statusTravel">yes</span>
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Link to={`/details`}>
                      <button className="btn btn-primary">MORE DETAILS</button>
                    </Link>
                  </Card.Body>
                </Card>
            
              </div>
              <div  className="col-sm-6 col-xs-12 col-md-4 col-lg-4 text-center p-2">
                <Card>
                  <Card.Img variant="top" src={img5} className="heightImageCard" />
                  <Card.Body>
                    <Card.Text className="fs-5">Trip 5....</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <span className="price">185</span><span className="price">$</span>/Per person
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Duration:</span> <span className="statusTravel">04:Hur</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Vehicle:</span> <span className="statusTravel">Car</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Guiding:</span> <span className="statusTravel">yes</span>
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Link to={`/details`}>
                      <button className="btn btn-primary">MORE DETAILS</button>
                    </Link>
                  </Card.Body>
                </Card>
            
              </div>
              <div  className="col-sm-6 col-xs-12 col-md-4 col-lg-4 text-center p-2">
                <Card>
                  <Card.Img variant="top" src={img6} className="heightImageCard" />
                  <Card.Body>
                    <Card.Text className="fs-5">Trip 6....</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <span className="price">185</span><span className="price">$</span>/Per person
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Duration:</span> <span className="statusTravel">04:Hur</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Vehicle:</span> <span className="statusTravel">Car</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-around">
                      <span>Guiding:</span> <span className="statusTravel">yes</span>
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Link to={`/details`}>
                      <button className="btn btn-primary">MORE DETAILS</button>
                    </Link>
                  </Card.Body>
                </Card>
            
              </div>
        
        </Row>

    </Container>
    <Footer />
      
    </>
  )
}

export default TripPage
