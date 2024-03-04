import React, { useState } from 'react';
import api from '../../components/db/api';
import "./Dashboard.css";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import img1 from "../../images/images (15).jpeg"
import img2 from "../../images/images (1).jpeg"
import img3 from "../../images/65496b509aea5.webp"
import img4 from "../../images/9.avif"

function AllTrips() {
  const [trips, setTrips] = useState([]);
  const [show, setShow] = useState(false);
  const [currentTripId, setCurrentTripId] = useState(null);





  const handleClose = () => {
    setShow(false);
    setCurrentTripId(null); 
  };

  const handleShow = (tripId) => {
    setShow(true);
    setCurrentTripId(tripId);
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className={` d-flex justify-content-between  bg-light sidebar`}>
            <SideBar />
            <main className={`maincontent `}>
              <nav className="navbar navbar-light bg-light ">
                <span className="navbar-brand">Dashboard</span>
              </nav>
              <div className="pt-3 pb-2 mb-3 ">
                <h2 className="text-center">All Trips</h2>
                <Container>
                  <Row className="mt-5 mb-5">
                
                      <Col  xs={12} lg={4} className="text-center p-2">
                        <Card>
                          <Card.Img variant="top" src={img1} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text className="fs-3">Trip 1</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item><span className="price">98</span><span className="price">$</span>/Per person</ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Duration:</span> <span className="statusTravel">85-H8</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Vehicle:</span> <span className="statusTravel">sertyu</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Guiding:</span> <span className="statusTravel">kjhvgf</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            <Link to={`/updateTrip`}>
                              <Button variant="primary">Update</Button>
                            </Link>
                            <Button variant="danger" onClick={() => handleShow()} className="ms-2">Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                
                      <Col  xs={12} lg={4} className="text-center p-2">
                        <Card>
                          <Card.Img variant="top" src={img4} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text className="fs-3">Trip 1</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item><span className="price">98</span><span className="price">$</span>/Per person</ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Duration:</span> <span className="statusTravel">85-H8</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Vehicle:</span> <span className="statusTravel">sertyu</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Guiding:</span> <span className="statusTravel">kjhvgf</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            <Link to={`/updateTrip`}>
                              <Button variant="primary">Update</Button>
                            </Link>
                            <Button variant="danger" onClick={() => handleShow()} className="ms-2">Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col  xs={12} lg={4} className="text-center p-2">
                        <Card>
                          <Card.Img variant="top" src={img3} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text className="fs-3">Trip 1</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item><span className="price">98</span><span className="price">$</span>/Per person</ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Duration:</span> <span className="statusTravel">85-H8</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Vehicle:</span> <span className="statusTravel">sertyu</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Guiding:</span> <span className="statusTravel">kjhvgf</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            <Link to={`/updateTrip`}>
                              <Button variant="primary">Update</Button>
                            </Link>
                            <Button variant="danger" onClick={() => handleShow()} className="ms-2">Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col  xs={12} lg={4} className="text-center p-2">
                        <Card>
                          <Card.Img variant="top" src={img1} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text className="fs-3">Trip 1</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item><span className="price">98</span><span className="price">$</span>/Per person</ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Duration:</span> <span className="statusTravel">85-H8</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Vehicle:</span> <span className="statusTravel">sertyu</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Guiding:</span> <span className="statusTravel">kjhvgf</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            <Link to={`/updateTrip`}>
                              <Button variant="primary">Update</Button>
                            </Link>
                            <Button variant="danger" onClick={() => handleShow()} className="ms-2">Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col  xs={12} lg={4} className="text-center p-2">
                        <Card>
                          <Card.Img variant="top" src={img2} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text className="fs-3">Trip 1</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item><span className="price">98</span><span className="price">$</span>/Per person</ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Duration:</span> <span className="statusTravel">85-H8</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Vehicle:</span> <span className="statusTravel">sertyu</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Guiding:</span> <span className="statusTravel">kjhvgf</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            <Link to={`/updateTrip`}>
                              <Button variant="primary">Update</Button>
                            </Link>
                            <Button variant="danger" onClick={() => handleShow()} className="ms-2">Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col  xs={12} lg={4} className="text-center p-2">
                        <Card>
                          <Card.Img variant="top" src={img4} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text className="fs-3">Trip 1</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item><span className="price">98</span><span className="price">$</span>/Per person</ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Duration:</span> <span className="statusTravel">85-H8</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Vehicle:</span> <span className="statusTravel">sertyu</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Guiding:</span> <span className="statusTravel">kjhvgf</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            <Link to={`/updateTrip`}>
                              <Button variant="primary">Update</Button>
                            </Link>
                            <Button variant="danger" onClick={() => handleShow()} className="ms-2">Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                  </Row>
                </Container>
              </div>
            </main>
          </nav>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You Will Delete This Trip !!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="danger" >Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AllTrips;
