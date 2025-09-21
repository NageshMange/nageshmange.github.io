import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center bg-gradient" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      paddingTop: '80px'
    }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="text-center text-lg-start">
            <div className="text-white">
              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-warning">Nagesh Mange</span>
              </h1>
              <h2 className="h3 mb-4">Software Developer & Problem Solver</h2>
              <p className="lead mb-4">
                Passionate about creating innovative solutions through programming. 
                Specializing in C++, Java, Web Development, and Data Science.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button 
                  variant="warning" 
                  size="lg" 
                  className="fw-bold"
                  href="/resume.pdf" 
                  target="_blank"
                >
                  <FaDownload className="me-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  href="https://github.com/NageshMange"
                  target="_blank"
                >
                  <FaGithub className="me-2" />
                  View GitHub
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className="text-center mt-5 mt-lg-0">
            <div className="position-relative">
              <Image 
                src="/profile-image.jpg" 
                alt="Nagesh Mange" 
                roundedCircle 
                fluid 
                className="shadow-lg border border-4 border-warning"
                style={{ 
                  maxWidth: '350px', 
                  height: '350px', 
                  objectFit: 'cover',
                  backgroundColor: '#f8f9fa'
                }}
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=Nagesh+Mange&size=350&background=ffc107&color=000&format=png`;
                }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-4 border-warning animate-pulse"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;