import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nageshmange/',
      icon: <FaLinkedin size={24} />,
      color: '#0077b5'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/its_nageshmange/',
      icon: <FaInstagram size={24} />,
      color: '#E4405F'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/NageshMange',
      icon: <FaGithub size={24} />,
      color: '#333'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/9730302261',
      icon: <FaWhatsapp size={24} />,
      color: '#25D366'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Nagesh Mange</h5>
            <p className="text-light mb-3">
              Software Developer passionate about creating innovative solutions through code.
            </p>
            <p className="text-light mb-0">
              <small>Always learning, always growing! 🚀</small>
            </p>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-lg-0 text-center">
            <h6 className="fw-bold mb-3">Connect With Me</h6>
            <div className="d-flex justify-content-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white social-link"
                  style={{ 
                    transition: 'all 0.3s ease',
                    padding: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = social.color;
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>

          <Col lg={4} className="text-center text-lg-end">
            <button
              onClick={scrollToTop}
              className="btn btn-outline-light btn-sm mb-3"
              style={{
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#333';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#fff';
                e.target.style.transform = 'translateY(0)';
              }}
              title="Back to top"
            >
              <FaArrowUp />
            </button>
            <div>
              <small className="text-light">
                Available for opportunities
              </small>
            </div>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Row>
          <Col md={6} className="text-center text-md-start">
            <small className="text-light">
              © {currentYear} Nagesh Mange. All rights reserved.
            </small>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <small className="text-light">
              Made with <FaHeart className="text-danger mx-1" /> using React & Bootstrap
            </small>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <small className="text-muted">
              "The best way to predict the future is to create it." - Peter Drucker
            </small>
          </Col>
        </Row>
      </Container>

    </footer>
  );
};

export default Footer;