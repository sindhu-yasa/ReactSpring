import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      const apiKey = 'JVxN7pjB45luFSxGwHkTLntxg7wPrMAS8yra2F74'; // Replace with your actual API key
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    //   const url = `localhost:8080/nasaapodapi`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setApod(data);
      } catch (error) {
        console.error("Error fetching APOD:", error);
      }
    };

    fetchApod();
  }, []);

  const renderBackground = () => {
    if (!apod) return null;

    if (apod.media_type === 'video') {
      return (
        <iframe
          src={apod.url}
          frameBorder="0"
          title="video-bg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
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
            height: '100%',
            backgroundImage: `url(${apod.hdurl || apod.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: '-1',
          }}
        ></div>
      );
    }
  };

  return (
    <>
      {renderBackground()}
      <Container className="h-100 d-flex flex-column justify-content-center text-light" style={{ padding: '2rem', zIndex: '10', pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <h1>NASA Astronomy Picture of the Day (APOD)</h1>
          <p>
            Explore the cosmos through the eyes of the NASA APOD API. Every day, this service provides a unique image of our universe along with a brief explanation written by professional astronomers. Discover the beauty and wonders of the cosmos with the APOD API.
          </p>
          {apod && (
            <>
              <p><strong>Today's Feature:</strong> {apod.title}</p>
              <p><em>{apod.explanation}</em></p>
              {apod.hdurl && <a href={apod.hdurl} target="_blank" rel="noopener noreferrer">View in HD</a>}
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default HomePage;
