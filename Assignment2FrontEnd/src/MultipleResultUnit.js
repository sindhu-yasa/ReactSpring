import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function MultipleResultUnit({ result }) {
  return (
    <tr>
      <td>
        {result.media_type === 'image' ? (
          <img src={result.url} alt={result.title} style={{ width: '20rem' }} />
        ) : (
          <iframe title={result.title} src={result.url} frameBorder="0" style={{ width: '30rem', height: '30rem' }}></iframe>
        )}
      </td>
      <td>
        <Card>
          <Card.Body>
            <Card.Title>{result.title}</Card.Title>
            <Card.Subtitle className="text-muted">{result.date}</Card.Subtitle>
            <Card.Text>{result.explanation}</Card.Text>
            {result.media_type === 'image' && <a href={result.hdurl} target="_blank" rel="noopener noreferrer">View HD Image</a>}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Copyright: {result.copyright}</small>
          </Card.Footer>
        </Card>
      </td>
    </tr>
  );
}

export default MultipleResultUnit;
