import React, { useState } from 'react';
import "./Dashboard.css"
import Header from '../../components/Header/Header'
import { Container, Form, Button, ListGroup  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
function UpdateCurrentTrip() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [inputValue, setInputValue] = useState(''); 
  const [items, setItems] = useState([]); 

  
  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); 
    }
  };


  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  
  const handleImageUpload = (event) => {
    const selectedFiles = event.target.files;
    const filesArray = Array.from(selectedFiles);
    setImages(filesArray);
  };


  const handleUpload = () => {
    setUploadProgress(0);
    const totalImages = images.length;
    let uploadedImages = 0
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress + (100 / totalImages);
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return newProgress>=100?100:100;
      });
      uploadedImages++;
    }, 1000);
  };

  
  const openPopup = (index) => {
    setSelectedImage(index);
  };

  
  const closePopup = () => {
    setSelectedImage(null);
  };

const handleDeleteImage = (index) => {
  const updatedImages = images.filter((_, i) => i !== index);
  setImages(updatedImages);
  closePopup(); 
};
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Header />
    <div className="container-fluid">
      <div className="row ">
        {/* Sidebar */}
        <nav id="sidebarMenu" className={` d-flex justify-content-between  bg-light sidebar`}>
  
          
        {/* Content */}
        <main className={`maincontent w-100`}>
          {/* Navbar */}
          <nav className="navbar navbar-light bg-light ">
        
            <span className="navbar-brand">Dashboard</span>
          </nav>

          {/* Page Content */}
          <div className="pt-3 pb-2 mb-3 p-3">
    <h2 className="text-center">Update Trip</h2>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price..."
            
          />
          <Form.Control.Feedback>Very Good!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Vehicle</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Vehicle...."
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom07">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name...."
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
          <Form.Label>Duration</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Duration...."
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Duration for Trip.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Cuiding</Form.Label>
          <Form.Control type="text" placeholder="Cuiding..." required />
          <Form.Control.Feedback type="invalid">
            Please Enter Cuiding.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="my-3">
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Description For Trips</Form.Label>
          <Form.Control as="textarea" rows={7} placeholder="Your Message" className="mt-3" required />
          <Form.Control.Feedback type="invalid">
            Please Enter Description for Trip
          </Form.Control.Feedback>
        </Form.Group>

      </Row>


      <Button type="submit" className="mt-3">Update</Button>
  

    </Form>
          </div>
          
        </main>
        </nav>

      </div>
    </div>

    </>
  )
}

export default UpdateCurrentTrip
