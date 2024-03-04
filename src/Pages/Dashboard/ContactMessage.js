import React, { useState, useEffect } from 'react';
import api from '../../components/db/api';
import "./Dashboard.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SideBar from '../../components/SideBar/SideBar'
import { Container, Form, Button  } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
function ContactMessage() {
  const [contacts, setContacts] = useState([]);



  return (
    <>
    <Header />
    <div className="container-fluid">
      <div className="row ">
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
    <h2 className="text-center">Contact US</h2>
    <Form>
            
                  <Row  className="mb-3 p-3">
                    <Form.Group as={Col} md="3" >
                      <Form.Label>Name :</Form.Label>
                      <Form.Control type="text" value="muhammad" readOnly />
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                      <Form.Label>E-mail : </Form.Label>
                      <Form.Control type="text" value="muhammad@gmail.com" readOnly />
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                      <Button className="btn btn-danger deletecontact"> Delete</Button>
                    </Form.Group>
                    <Form.Group as={Col} md="12"  className="mt-2">
                      <Form.Label>Message from User : </Form.Label>
                      <Form.Control as="textarea" rows={7} value="grthjkljhgfdgdhgjhkjdtf" className="mt-3" readOnly />
                    </Form.Group>
                    <hr className="mt-4" />
                  </Row>
            
              </Form>
          </div>
        </main>
        </nav>

      </div>
    </div>
    
    </>
  )
}

export default ContactMessage
