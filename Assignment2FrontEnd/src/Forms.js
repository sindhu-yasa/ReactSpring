import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import MultipleResultUnit from './MultipleResultUnit';

function Forms() {
  const [apodData, setApodData] = useState({});
  const [date, setDate] = useState('');
  const [count, setCount] = useState('');
  const [results, setResults] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const fetchApod = async (queryDate = '') => {
    const apiKey = 'JVxN7pjB45luFSxGwHkTLntxg7wPrMAS8yra2F74'; // Replace with your actual API key
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    if (queryDate) {
      url += `&date=${queryDate}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    setApodData(data);
  };

  useEffect(() => {
    fetchApod();
  }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  const handleSelectedDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const submitDate = (e) => {
    e.preventDefault();
    fetchApod(date);
  };

  const submitForm = async (e) => {
    e.preventDefault();
  
    const apiKey = 'JVxN7pjB45luFSxGwHkTLntxg7wPrMAS8yra2F74'; // Replace with your actual API key
    
    if (count) {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data) {
            setResults(data); // Since it's a single date, wrap data in an array for consistency with the results state
          }
        } catch (error) {
          console.error("Failed to fetch APOD data:", error);
        }
      
    } else if (selectedDate) {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
          setResults(data); // Since it's a single date, wrap data in an array for consistency with the results state
        }
      } catch (error) {
        console.error("Failed to fetch APOD data:", error);
      }
    }
  };
  

  return (
    <div>
      <Container fluid style={{ height: '100vh', background: `url(${apodData.hdurl}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
        <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Col md={6}>
            <Form onSubmit={submitDate}>
              <Form.Group controlId="dateForm">
                <Form.Label>Select a Date</Form.Label>
                <Form.Control type="date" name="date" value={date} onChange={handleDateChange} />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
            {apodData.media_type === 'video' ? (
              <iframe title="apodVideo" src={apodData.url} frameBorder="0" />
            ) : (
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>{apodData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{apodData.explanation}</p>
                </Modal.Body>
                <Modal.Footer>
                  <p>Date: {apodData.date}</p>
                  <p>Copyright: {apodData.copyright}</p>
                </Modal.Footer>
              </Modal.Dialog>
            )}
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ height: '100vh' }}>
        <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
          <Col md={6}>
            <Form onSubmit={submitForm}>
              <Form.Group controlId="countForm">
                <Form.Label>Select Count</Form.Label>
                <Form.Control type="number" name="count" value={count} onChange={handleCountChange} />
              </Form.Group>
              <Form.Group controlId="dateForm">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" name="selectedDate" value={selectedDate} onChange={handleSelectedDateChange} />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
              {results.map((result, index) => (
                  <MultipleResultUnit key={index} result={result} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Forms;