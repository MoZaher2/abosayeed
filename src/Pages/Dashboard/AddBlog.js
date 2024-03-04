import React, { useState, useEffect } from 'react';
import "./Dashboard.css"
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import { Container, Form, Button } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AddBlog() {
  const [validated, setValidated] = useState(false);
  const [inputDate, setInputDate] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    if (uploadProgress === 100) {
      setImages(prevImages => [...prevImages, ...images]);
    }
  }, [uploadProgress]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } 
    setValidated(true);
  };

  const handleImageUpload = (event) => {
    const selectedFiles = event.target.files;
    const filesArray = Array.from(selectedFiles);
    setImages(filesArray);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
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
        return newProgress>=100?100:newProgress;
      });
      uploadedImages++;
    }, 1000);
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className={`d-flex justify-content-between bg-light sidebar`}>
            <SideBar />
            <main className={`maincontent `}>
              <nav className="navbar navbar-light bg-light ">
                <span className="navbar-brand">Dashboard</span>
              </nav>
              <div className="pt-3 pb-2 mb-3 p-3">
                <h2 className="text-center">Add New Blog</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        placeholder="date..."
                        value={inputDate}
                        onChange={e => setInputDate(e.target.value)}
                      />
                      <Form.Control.Feedback>Very Good!!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="my-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                      <Form.Label>Description For Blog</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={7}
                        placeholder="Your Message"
                        className="mt-3"
                        value={inputDescription}
                        onChange={e => setInputDescription(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter Description for Blog
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Container>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                      <Form.Label>Select Images</Form.Label>
                      <Form.Control type="file" multiple onChange={handleImageUpload} />
                    </Form.Group>
                    <Button variant="primary" onClick={handleUpload}>Upload Images</Button>
                    <div className="mt-3">
                      <progress className="w-75 h-20px me-3" max="100" value={uploadProgress}></progress>
                      <span className="fs-5">{Math.round(uploadProgress)} %</span>
                    </div>
                  </Container>
                  {images.length > 0 && (
                    <Container className="my-4">
                      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                        {images.map((image, index) => (
                          <Col key={index}>
                            <div className="image-preview-container">
                              <div
                                className="image-preview"
                                style={{ backgroundImage: `url(${URL.createObjectURL(image)})`, height: '200px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}
                              />
                              <Button variant="danger" onClick={() => handleDeleteImage(index)} className=" d-block ms-auto me-auto mt-2">Delete</Button>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  )}
                  <Button type="submit" className="mt-3">Add Blog</Button>
                </Form>
              </div>
            </main>
          </nav>
        </div>
      </div>
    </>
  )
}

export default AddBlog;
