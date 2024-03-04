import React, { useState, useEffect } from 'react';
import api from '../../components/db/api';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import { Container, Form, Button, ProgressBar, Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const AddTrip = () => {
  const [validated, setValidated] = useState(false);
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedTrip, setSelectedTrip] = useState('');
  const [tripOptions, setTripOptions] = useState([]);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true && selectedTrip !== '') {
      const formData = new FormData(form);
      const tripData = {};
      formData.forEach((value, key) => {
        tripData[key] = value;
      });

    }
  };

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    setImages([selectedFile]);
  };

  const handleUpload = async () => {
    if (selectedTrip === '') {
      console.error('Please select a trip before uploading images.');
      return;
    }
  
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
    
        setImages(prevImages => [...prevImages, ...images]);
      }
    }, 1000);
  };
  


  

  const handleSelectChange = (event) => {
    setSelectedTrip(event.target.value);
  };

  const handleDeleteImage = () => {
    setImages([]);
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <nav id="sidebarMenu" className={` d-flex justify-content-between  bg-light sidebar`}>
            <SideBar />
            {/* Content */}
            <main className={`maincontent `}>
              {/* Navbar */}
              <nav className="navbar navbar-light bg-light ">
                <span className="navbar-brand">Dashboard</span>
              </nav>
              {/* Page Content */}
              <div className="pt-3 pb-2 mb-3 ">
                <Container>
                  <h2 className="text-center">Add New Trip</h2>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group controlId="validationCustom01" className="mt-2" as={Col} md="4">
                      <Form.Label>Name :</Form.Label>
                      <Form.Control required type="text" placeholder="Name..." name="name" />
                      <Form.Control.Feedback>Very Good!!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02" className="mt-2" as={Col} md="4">
                      <Form.Label>Price :</Form.Label>
                      <Form.Control required type="number" placeholder="Price..." name="price" />
                      <Form.Control.Feedback>Very Good!!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom03" className="mt-2" as={Col} md="4">
                      <Form.Label>Vehicle :</Form.Label>
                      <Form.Control required type="text" placeholder="Vehicle..." name="vehicle" />
                      <Form.Control.Feedback>Very Good!!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom04" className="mt-2" as={Col} md="4">
                      <Form.Label>Guiding :</Form.Label>
                      <Form.Control required type="text" placeholder="Guiding..." name="guiding" />
                      <Form.Control.Feedback>Very Good!!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom05" className="mt-2" as={Col} md="4">
                      <Form.Label>Duration :</Form.Label>
                      <Form.Control required type="text" placeholder="Duration..." name="duration" />
                      <Form.Control.Feedback>Very Good!!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom06" className="mt-2" >
                      <Form.Label>Description For Trips :</Form.Label>
                      <Form.Control as="textarea" rows={7} placeholder="Your Message" className="mt-3" required />
                      <Form.Control.Feedback type="invalid">Please Enter Description for Trip</Form.Control.Feedback>
                    </Form.Group>

                    </Row>
                    <Button type="submit" className="mt-3 mb-5">Add Trip</Button>
                  </Form>

                  <div className="d-flex justify-content-between align-items-center mb-4 uploadimageselection">
                    <Form.Group controlId="formFileSingle" className="mt-2 upladimg" as={Col} md="5">
                      <Form.Label>Select Image:</Form.Label>
                      <Form.Control type="file" onChange={handleImageUpload} />
                    </Form.Group>
  
                    <Form.Group controlId="formSelectTrip" className="mt-2 upladimg" as={Col} md="4">
                      <Form.Label>Select Trip:</Form.Label>
                      <Form.Select aria-label="Select Trip" onChange={handleSelectChange}>
                        <option>Select a trip</option>
                        {/* {tripOptions.map((trip) => (
                          <option key={trip.id} value={trip.id}>{trip.name}</option>
                        ))} */}
                          <option  value="1">hgg</option>
                          <option  value="2">loiu</option>
                          <option  value="3">mnh</option>
                          <option  value="4">ggg</option>
                      </Form.Select>
                    </Form.Group>
  
                    <Button variant="primary" onClick={handleUpload} className="mt-4 upladimg" as={Col} md="2">Upload Image</Button>
  
                  </div >
                  <div className="mt-3">
                    <ProgressBar className="w-75 me-3" now={uploadProgress} />
                    <span className="fs-5">{uploadProgress} %</span>
                  </div>
                  <div className="mt-3">
  {images.length > 0 && (
    <div className='image-preview'>
      <Image src={URL.createObjectURL(images[0])} fluid />
      <br/>
      <Button onClick={handleDeleteImage} className="mt-2"  variant="danger" >Delete Image</Button>
    </div>
  )}
</div>

                </Container>
              </div>
            </main>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AddTrip;
