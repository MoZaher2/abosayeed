import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faFaceGrinWink,
  faAddressBook,
  faHandHoldingHeart,
  
} from "@fortawesome/free-solid-svg-icons";



import Header from "../../components/Header/Header"
import Carousel from "../../components/Slider/Slider"
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Blog from "../../components/Blog/Blog";

import img1 from "../../images/1.avif"
import img2 from "../../images/2.avif"
import img3 from "../../images/3.avif"
import img4 from "../../images/4.avif"

const Home = () => {


  return (
    <>
      <Header />
      <Carousel />
      <AboutUs />
      <hr />
<Container className="text-center mt-5">
  <span className="mt-5 d-block aboutUs">OUR SERVICES</span>
  <h2>Discover Our Services</h2>
  <p className="mb-5">
    We offer all the popular experiences available in our destinations,
    All Types of guided Excursions Desert safari , City tours , Mountain
    Safari , Hiking, water sea activities and VIP Airport Transfers ,with
    a focus on quality and attention to detail. However, what makes us
    stand apart are the themed excursions and programs that are specially
    designed by our experience engineers and available exclusively to our
    clients .
  </p>
</Container>

<Container>
  <Row className="mt-5 mb-5">
    <Col
      sm={6}
      xs={12}
      md={4}
      className="text-center contentServiecs p-2"
    >
      <FontAwesomeIcon icon={faBookmark} className="icon" />
      <h4>Book Now</h4>
      <p>
        Pay Later First Online Booking System have an Option to book your
        Service First and you can pay upon Pick up time.
      </p>
    </Col>
    <Col
      sm={6}
      xs={12}
      md={4}
      className="text-center contentServiecs p-2"
    >
      <FontAwesomeIcon icon={faFaceGrinWink} className="icon" />
      <h4>Premium FIT & Family</h4>
      <p>
        Premium FIT & Family Travel Our experts are happy to handcraft
        packages for our Beloved clients as well as their families We
        organize every aspect of the.
      </p>
    </Col>

    <Col
      sm={6}
      xs={12}
      md={4}
      className="text-center contentServiecs p-2"
    >
      <FontAwesomeIcon icon={faBookmark} className="icon" />
      <h4>Excursions</h4>
      <p>
        Excursions We offer a full range of city tours, Desert Safari By
        Modern Landcruiser’s as well as Overnight in Empty Quarter ,
        Discover Mountain and Hiking.
      </p>
    </Col>

    <Col
      sm={6}
      xs={12}
      md={4}
      className="text-center contentServiecs p-2"
    >
      <FontAwesomeIcon icon={faBookmark} className="icon" />
      <h4>Transfers</h4>
      <p>
        Transfers - Transfers in each destination , Own and escorted fleet
        , Competitive rates , Guarantee of highest quality and safety due
        to regular checks.
      </p>
    </Col>

    <Col
      sm={6}
      xs={12}
      md={4}
      className="text-center contentServiecs p-2"
    >
      <FontAwesomeIcon icon={faAddressBook} className="icon" />
      <h4>Tailor-Made Programs</h4>
      <p>
        Tailor-Made Programs , trip can be tailor made throughout the year
        and can be adapted to suit your interests, budget and requirements
        as necessary Unique.
      </p>
    </Col>

    <Col
      sm={6}
      xs={12}
      md={4}
      className="text-center contentServiecs p-2"
    >
      <FontAwesomeIcon icon={faHandHoldingHeart} className="icon" />
      <h4>Full Insurance Services</h4>
      <p>
        Full Insurance Services , Feel safe , Enjoy your Service and be
        100 % that all Provided Services is Fully Insured.
      </p>
    </Col>
  </Row>
</Container>

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
        
        </Row>
      </Container>

      <Link to="/ourTrips" style={{textDecoration:"none"}}>
        <button className="btn btn-outline-primary me-auto ms-auto d-block">
          DISCOVER NOW
        </button>
      </Link>
      <hr />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
