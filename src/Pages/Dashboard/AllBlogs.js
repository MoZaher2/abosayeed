import React, { useState, useEffect } from 'react';
import "./Dashboard.css"
import api from '../../components/db/api';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import img1 from "../../images/4.avif"
import img2 from "../../images/images (14).jpeg"
import img3 from "../../images/download (11).jpeg"
import img4 from "../../images/654967e597b02.webp"

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);


  const handleClose = () => setShow(false);
  const handleShow = (blog) => {
    setSelectedBlog(blog);
    setShow(true);
  };



  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row ">
          <nav id="sidebarMenu" className={` d-flex justify-content-between  bg-light sidebar`}>
            <SideBar />
            <main className={`maincontent `}>
              <nav className="navbar navbar-light bg-light ">
                <span className="navbar-brand">Dashboard</span>
              </nav>
              <div className="pt-3 pb-2 mb-3 ">
                <h2 className="text-center">All Blogs</h2>
                <Container>
                  <Row className="mt-5 mb-5">
                  
                      <Col xs={12} lg={4} className="text-center p-2" >
                        <Card>
                          <Card.Img variant="top" src={img1} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text>fghjkln vcdhgkguihgiublgubljkb,mnb</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Date:</span>{" "}
                              <span className="statusTravel">2/2/2002</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            {/* <Link to={`/updateBlog/${blog.id}`}><Button variant="primary">Update</Button></Link> */}
                            <Button variant="danger" onClick={() => handleShow()} className="ms-2">Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>
              
                      <Col xs={12} lg={4} className="text-center p-2" >
                        <Card>
                          <Card.Img variant="top" src={img2} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text>fghjkln vcdhgkguihgiublgubljkb,mnb</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Date:</span>{" "}
                              <span className="statusTravel">2/2/2002</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            {/* <Link to={`/updateBlog/${blog.id}`}><Button variant="primary">Update</Button></Link> */}
                            <Button variant="danger" onClick={() => handleShow()} className="ms-2">Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col xs={12} lg={4} className="text-center p-2" >
                        <Card>
                          <Card.Img variant="top" src={img3} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text>fghjkln vcdhgkguihgiublgubljkb,mnb</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Date:</span>{" "}
                              <span className="statusTravel">2/2/2002</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            {/* <Link to={`/updateBlog/${blog.id}`}><Button variant="primary">Update</Button></Link> */}
                            <Button variant="danger" onClick={() => handleShow()} className="ms-2">Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col xs={12} lg={4} className="text-center p-2" >
                        <Card>
                          <Card.Img variant="top" src={img4} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text>fghjkln vcdhgkguihgiublgubljkb,mnb</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Date:</span>{" "}
                              <span className="statusTravel">2/2/2002</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            {/* <Link to={`/updateBlog/${blog.id}`}><Button variant="primary">Update</Button></Link> */}
                            <Button variant="danger" onClick={() => handleShow()} className="ms-2">Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col xs={12} lg={4} className="text-center p-2" >
                        <Card>
                          <Card.Img variant="top" src={img2} className="heightImageCard" />
                          <Card.Body>
                            <Card.Text>fghhjghfgdhfsgd,mnb</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex align-items-center justify-content-around">
                              <span>Date:</span>{" "}
                              <span className="statusTravel">2/2/2002</span>
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            {/* <Link to={`/updateBlog/${blog.id}`}><Button variant="primary">Update</Button></Link> */}
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
        <Modal.Body>You Will Delete This Blog !!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AllBlogs;
