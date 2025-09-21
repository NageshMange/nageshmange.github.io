import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCode } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Experience</h2>
            <p className="lead text-muted">
              My professional journey and work experience
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-lg experience-card">
              <Card.Body className="p-5">
                <div className="d-flex align-items-start mb-4">
                  <div className="bg-primary rounded-circle p-3 me-4 flex-shrink-0">
                    <FaBriefcase className="text-white" size={24} />
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-2">
                      <h3 className="fw-bold text-primary mb-1">C++ Programming Intern</h3>
                      <Badge bg="success" className="mb-2 mb-md-0">
                        Current Position
                      </Badge>
                    </div>
                    
                    <div className="d-flex align-items-center mb-3">
                      <FaBuilding className="text-muted me-2" />
                      <h5 className="text-secondary mb-0 me-4">CodSoft</h5>
                      <FaCalendarAlt className="text-muted me-2" />
                      <span className="text-muted">February 2025</span>
                    </div>

                    <p className="text-muted mb-4">
                      Currently working as a C++ Programming intern at CodSoft, where I'm gaining hands-on 
                      experience in software development, working on real-world projects, and collaborating 
                      with experienced developers.
                    </p>

                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">Key Responsibilities & Achievements:</h6>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <FaCode className="text-primary me-2" />
                          Developing and maintaining C++ applications
                        </li>
                        <li className="mb-2">
                          <FaCode className="text-primary me-2" />
                          Collaborating on software development projects
                        </li>
                        <li className="mb-2">
                          <FaCode className="text-primary me-2" />
                          Learning industry best practices and coding standards
                        </li>
                        <li className="mb-2">
                          <FaCode className="text-primary me-2" />
                          Gaining experience in problem-solving and debugging
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h6 className="fw-bold mb-3">Skills Developed:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        <Badge bg="primary" className="px-3 py-2">C++ Programming</Badge>
                        <Badge bg="secondary" className="px-3 py-2">Object-Oriented Programming</Badge>
                        <Badge bg="info" className="px-3 py-2">Problem Solving</Badge>
                        <Badge bg="success" className="px-3 py-2">Team Collaboration</Badge>
                        <Badge bg="warning" className="px-3 py-2">Code Review</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={8} className="mx-auto">
            <Card className="border-0 shadow-sm bg-primary text-white">
              <Card.Body className="p-4 text-center">
                <FaBriefcase size={40} className="mb-3" />
                <h4 className="fw-bold mb-3">Looking Forward</h4>
                <p className="mb-0">
                  I'm actively seeking new opportunities to apply my skills and continue growing 
                  as a software developer. Open to internships and entry-level positions in 
                  software development, web development, and data science.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default Experience;