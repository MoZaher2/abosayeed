import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../components/db/api';
import { Button, Modal, ModalBody, ModalHeader, Container, Row, Col, Card, ListGroup } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './DetaileTrip.css';
import img1 from "../../images/1.avif"
import img2 from "../../images/2.avif"
import img3 from "../../images/3.avif"
import img4 from "../../images/4.avif"
const DetaileTrip = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);





  return (
    <>
      <Header />
  
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block slideImage w-100"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block slideImage w-100"
              src={img2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block slideImage w-100"
              src={img3}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>


          <Container>
            <h2>muhammadukilnknkj bgfsgh jk</h2>
            <Row>
              <Col className="mb-3 w-50">
                <Card className="cardBook">
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="d-flex align-items-center justify-content-between">
                      <p ><span className="price">$</span>185<span className="price">$</span>/Per person</p>
                      <Button color="primary" className="btnBook" onClick={toggle}>Book Now</Button>
                      <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Book Now</ModalHeader>
                        <ModalBody>
                          <form>
                            <div className="mb-1">
                              <label htmlFor="country" className="form-label">Country :</label>
                              <input type="text" className="form-control" id="country" name="country"   required />
                            </div>
                            <div className="mb-1">
                              <label htmlFor="name" className="form-label">Name :</label>
                              <input type="text" className="form-control" id="name" name="name"  required />
                            </div>
                            <div className="mb-1">
                              <label htmlFor="tripName" className="form-label">Trip Name :</label>
                              <input type="text" className="form-control" id="tripName" name="tripName"  required />
                            </div>
                            <div className="mb-1">
                              <label htmlFor="numberOfPeople" className="form-label">Number Of People :</label>
                              <input type="number" className="form-control" id="numberOfPeople" name="numberOfPeople"  />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="arrivalDate" className="form-label">Arrival Date :</label>
                              <input type="date" className="form-control" id="arrivalDate" name="arrivalDate" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="departureDate" className="form-label">Departure Date :</label>
                              <input type="date" className="form-control" id="departureDate" name="departureDate"  />
                            </div>
                            <div className="mb-1">
                              <label htmlFor="flightNumber" className="form-label">Flight Number :</label>
                              <input type="number" className="form-control" id="flightNumber" name="flightNumber"  />
                            </div>
                            <div className="mb-1">
                              <label htmlFor="hotelName" className="form-label">Hotel Name :</label>
                              <input type="text" className="form-control" id="hotelName" name="hotelName"  required />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="roomNumber" className="form-label">Room Number :</label>
                              <input type="number" className="form-control" id="roomNumber" name="roomNumber"  required />
                            </div>
                            <Button type="submit" color="primary">Send</Button>
                          </form>
                        </ModalBody>
                      </Modal>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between">
                      <span>Duration:</span>{" "}
                      <span className="statusTravel">85 H0</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between">
                      <span>Vehicle:</span>{" "}
                      <span className="statusTravel">bkjhgf</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between">
                      <span>Guiding:</span>{" "}
                      <span className="statusTravel">kjhfskkgug</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat, reprehenderit unde a animi magni, tenetur impedit iure dolorum soluta sed porro asperiores autem eligendi repellendus eaque, facere nihil voluptatem.</p>
          </Container>

        <Container>
          <h3 className="text-center mb-5">Another Trips</h3>
          <Row className="mt-5 mb-5">
    
                <div  className="col-sm-6 col-xs-12 col-md-3 text-center p-2">
                  <Card>
                    <Card.Img variant="top" src={img1} className="heightImageCard" />
                    <Card.Body>
                      <Card.Text className="fs-5">muhammad</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <span className="price">89</span><span className="price">$</span>/Per person
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center justify-content-around">
                        <span>Duration:</span> <span className="statusTravel">ghjlhuy</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center justify-content-around">
                        <span>Vehicle:</span> <span className="statusTravel">;lkjhgsrty</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center justify-content-around">
                        <span>Guiding:</span> <span className="statusTravel">l;poihyrd</span>
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
  );
};

export default DetaileTrip;

