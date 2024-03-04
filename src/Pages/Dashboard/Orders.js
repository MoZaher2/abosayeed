import React, { useState, useEffect } from 'react';
import api from '../../components/db/api';
import "./Dashboard.css"
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
// import Footer from '../../components/Footer/Footer'
import {  Form, Button  } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Orders() {
  const [orders, setOrders] = useState([]);





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
    <h2 className="text-center">Orders </h2>
  
        <Row  className="mb-3 p-3">
          <Form.Group as={Col} lg="3"  className="mt-2">
            <Form.Label>Name :</Form.Label>
            <Form.Control type="text" value="muhammad" readOnly />
          </Form.Group>
          <Form.Group as={Col} lg="3"  className="mt-2">
            <Form.Label>Country : </Form.Label>
            <Form.Control type="text" value="Egypt" readOnly />
          </Form.Group>

          <Form.Group as={Col} lg="3"  className="mt-2">
            <Form.Label>Trip Name : </Form.Label>
            <Form.Control type="text" value="fghjk" readOnly />
          </Form.Group>

          <Form.Group as={Col} lg="3"  className="mt-2">
            <Form.Label>Number Of People : </Form.Label>
            <Form.Control type="text" value="3" readOnly />
          </Form.Group>

          <Form.Group as={Col} lg="3"  className="mt-2">
            <Form.Label>Arrival Date : </Form.Label>
            <Form.Control type="text" value="2-7-2002" readOnly />
          </Form.Group>

          <Form.Group as={Col} lg="3"  className="mt-2">
            <Form.Label>Departure Date : </Form.Label>
            <Form.Control type="text" value="2-2-2024" readOnly />
          </Form.Group>

          <Form.Group as={Col} lg="3"  className="mt-2">
            <Form.Label>Flight Number : </Form.Label>
            <Form.Control type="text" value="6" readOnly />
          </Form.Group>
          <Form.Group as={Col} lg="3"  className="mt-2">
            <Form.Label>Hotel Name : </Form.Label>
            <Form.Control type="text" value="fghj" readOnly />
          </Form.Group>
          <Form.Group as={Col} lg="3"  className="mt-2">
            <Form.Label>Room Number : </Form.Label>
            <Form.Control type="text" value="5" readOnly />
          </Form.Group>
          <Form.Group as={Col} lg="3"  className="mt-2">
            <Button className="btn btn-danger delete-order" >Delete</Button>
          </Form.Group>
          <hr className="mt-4" />
        </Row>

          </div>
        </main>
        </nav>

      </div>
    </div>
      
    </>
  )
}

export default Orders
