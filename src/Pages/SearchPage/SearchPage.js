import React, { useState, useEffect } from 'react';
import "./SearchPage.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import api from '../../components/db/api';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import noResultsImage from "../../images/notfound.jpeg";

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    api.get('/trips/search')
      .then(response => {
        setSearchResults(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row className="mt-5 mb-5">

            <Col className="text-center">
              <img src={noResultsImage} alt="No results" className="no-results-image" />
              <h2>No results available.</h2>
            </Col>
    
          
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default SearchPage;
