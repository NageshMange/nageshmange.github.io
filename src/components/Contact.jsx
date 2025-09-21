import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPaperPlane, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:mangenagesh@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
            <p className="lead text-muted">
              I'm always open to discussing new opportunities, projects, or just having a chat about technology!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            {showAlert && (
              <Alert variant="success" className="mb-4">
                <FaPaperPlane className="me-2" />
                Your default email client should open shortly. If it doesn't, please send an email directly to mangenagesh@gmail.com
              </Alert>
            )}
            
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <Row>
                  <Col md={6} className="mb-4 mb-md-0">
                    <h4 className="fw-bold mb-4">Contact Information</h4>
                    
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary rounded-circle p-3 me-3">
                        <FaEnvelope className="text-white" />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Email</h6>
                        <a 
                          href="mailto:mangenagesh@gmail.com" 
                          className="text-muted text-decoration-none"
                        >
                          mangenagesh@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success rounded-circle p-3 me-3">
                        <FaPhone className="text-white" />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">WhatsApp</h6>
                        <a 
                          href="https://wa.me/9730302261" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted text-decoration-none"
                        >
                          +91 9730302261
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <div className="bg-info rounded-circle p-3 me-3">
                        <FaUser className="text-white" />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Let's Connect</h6>
                        <p className="text-muted mb-0">
                          I'm always excited to connect with fellow developers and potential collaborators.
                        </p>
                      </div>
                    </div>

                    <div className="bg-light rounded p-3">
                      <h6 className="fw-bold mb-2">Quick Response</h6>
                      <small className="text-muted">
                        I typically respond to emails within 24 hours. For urgent matters, 
                        feel free to reach out via WhatsApp.
                      </small>
                    </div>
                  </Col>

                  <Col md={6}>
                    <h4 className="fw-bold mb-4">Send me a message</h4>
                    
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project or just say hi!"
                          required
                        />
                      </Form.Group>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-100"
                      >
                        <FaPaperPlane className="me-2" />
                        Send Message
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;