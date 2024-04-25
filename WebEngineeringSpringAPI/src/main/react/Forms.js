import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import MultipleResultUnit from './MultipleResultUnit';
import useApodStore from './store/statemanager';

function Forms() {
    const {
        apodData,
        date,
        count,
        results,
        startDate,
        endDate,
        setApodData,
        setDate,
        setCount,
        setResults,
        setStartDate,
        setEndDate,
        fetchApod,
        fetchApodCount,
        fetchApodDateRange
    } = useApodStore();

    useEffect(() => {
        if (apodData === null) {
            fetchApod();
        }
    }, []);
    // const [apodData, setApodData] = useState({});
    // const [date, setDate] = useState('');
    // const [count, setCount] = useState('');
    // const [results, setResults] = useState([]);
    // const [startDate, setStartDate] = useState(''); // Updated state hook for start date
    // const [endDate, setEndDate] = useState(''); // Updated state hook for end date


    // const fetchApod = async (queryDate = '') => {
    //     const apiKey = 'JVxN7pjB45luFSxGwHkTLntxg7wPrMAS8yra2F74'; // Replace with your actual API key
    //     // let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    //     let url =`/get/nasaapodapi`
    //     if (queryDate) {
    //         url += `?date=${queryDate}`;
    //     }
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setApodData(data);
    // };

    // useEffect(() => {
    //     fetchApod();
    // }, []);

    const handleDateChange = (e) => setDate(e.target.value);
    const handleCountChange = (e) => {
        setCount(e.target.value);
        setStartDate('');
        setEndDate('');
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
        setCount('');
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
        setCount('');
    };



    const submitDate = (e) => {
        e.preventDefault();
        fetchApod(date);
    };

    const submitForm = async (e) => {
        e.preventDefault();

        const apiKey = 'JVxN7pjB45luFSxGwHkTLntxg7wPrMAS8yra2F74'; // Replace with your actual API key

        if (count) {
            // Handle count-based fetch separately
            // const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
            let url = `/get/nasaapodapi?count=${count}`
            try {
                const response = await fetch(url);
                const data = await response.json();
                setResults(Array.isArray(data) ? data : [data]);
            } catch (error) {
                console.error("Failed to fetch APOD data:", error);
            }
        } else if (startDate && endDate) {
            // Updated to fetch based on start and end dates
            // const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`;
            let url = `/get/nasaapodapi?start_date=${startDate}&end_date=${endDate}`
            try {
                const response = await fetch(url);
                const data = await response.json();
                setResults(Array.isArray(data) ? data : [data]); // Ensure results are always treated as an array
            } catch (error) {
                console.error("Failed to fetch APOD data:", error);
            }
        }
    };
    //   fluid style={{ height: '100vh', background: `url(${apodData.hdurl}) no-repeat center center fixed`, backgroundSize: 'cover' }}
    const renderBackground = () => {

        console.log(apodData);
        console.log(apodData == null);
        console.log(apodData === null);
        if (apodData == null) return null;
        if (apodData !== null) {
            if (apodData.media_type === 'video') {
                return (
                    <iframe
                        src={apodData.url}
                        frameBorder="0"
                        title="video-bg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100vh',
                            zIndex: '-1',
                        }}
                    />
                );
            } else {
                return (
                    <div
                        style={{
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100vh',
                            backgroundImage: `url(${apodData.hdurl || apodData.url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: '-1',
                        }}
                    ></div>
                );
            }
        }
    };

    return (
        <div>
            {renderBackground()}
            
            <Container >
                {/* a soft rounded div that contains hyperlink to dateForm and countForm */}
                <div className="rounded shadow p-3 mb-5 bg-white rounded" >
                    <p className="text-center" style={{ color: 'black' }}> CLick on links below to go to forms </p>
                    <a className="text-center" style={{ color: 'black' }} href= "#dateForm">Date Form</a>
                    <br></br>
                    <a className="text-center" style={{ color: 'black' }} href= "#countForm">Count Form</a>
                </div>
                <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <Col md={6} style={{ backgroundColor: 'rgb(255,255,255,0.4' }}>
                        <Form onSubmit={submitDate} id ="dateForm">
                            <Form.Group controlId="dateForm">
                                <Form.Label>Select a Date</Form.Label>
                                <Form.Control type="date" name="date" value={date} onChange={handleDateChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                        {apodData && apodData.media_type === 'video' ? (
                            <iframe title="apodVideo" src={apodData.url} frameBorder="0" />
                        ) : (
                            <br />
                        )}
                        {apodData  && <Modal.Dialog >
                            <Modal.Header closeButton>
                                <Modal.Title>{apodData.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>{apodData.explanation}</p>
                                <div>
                                    <p>{apodData.media_type === 'image' && <a href={apodData.hdurl} target="_blank" rel="noopener noreferrer">View HD Image</a>}</p>
                                </div>
                                <div>Date: {apodData.date}</div>
                            </Modal.Body>
                            <Modal.Footer><p>Copyright: {apodData.copyright}</p></Modal.Footer>
                        </Modal.Dialog>}
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ height: '100vh' }}>
                <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
                    <Col md={6} style={{ backgroundColor: 'rgb(255,255,255,0.4' }}>
                        <Form onSubmit={submitForm} id ="countForm" >
                            {/* Count Form */}
                            <Form.Group controlId="countForm">
                                <Form.Label>Select Count</Form.Label>
                                <Form.Control type="number" name="count" value={count} onChange={handleCountChange} />
                            </Form.Group>

                            <p className="text-center">OR</p>

                            {/* Start Date Form */}
                            <Form.Group controlId="startDateForm">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="date" name="startDate" value={startDate} onChange={handleStartDateChange} />
                            </Form.Group>

                            {/* End Date Form */}
                            <Form.Group controlId="endDateForm">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="date" name="endDate" value={endDate} onChange={handleEndDateChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                    <Col md={10}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Results</th>
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