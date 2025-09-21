import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaLightbulb, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">About Me</h2>
            <p className="lead text-muted">
              Get to know more about who I am and what I do
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} md={12} className="mb-4">
            <div className="bg-light p-4 rounded-3 shadow-sm h-100">
              <h3 className="h4 fw-bold mb-3 text-primary">Who Am I?</h3>
              <p className="mb-3">
                Hello! I'm Nagesh Mange, a passionate software developer with a strong foundation in 
                multiple programming languages and technologies. I'm currently working as a C++ Programming 
                intern at CodSoft, where I'm gaining hands-on experience in software development.
              </p>
              <p className="mb-3">
                My journey in programming began with a curiosity to solve problems through code. 
                I've developed expertise in C++, Java, Web Development, and Data Science, 
                always staying updated with the latest technologies and best practices.
              </p>
              <p>
                I enjoy working on projects that challenge me to think creatively and implement 
                innovative solutions. When I'm not coding, you can find me exploring new technologies 
                or contributing to open-source projects.
              </p>
            </div>
          </Col>

          <Col lg={6} md={12}>
            <Row>
              <Col md={6} className="mb-4">
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <FaCode size={40} className="text-primary mb-3" />
                    <h5 className="fw-bold">Problem Solver</h5>
                    <p className="text-muted">
                      Love tackling complex problems and finding efficient solutions through clean, maintainable code.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <FaLightbulb size={40} className="text-warning mb-3" />
                    <h5 className="fw-bold">Innovative Thinker</h5>
                    <p className="text-muted">
                      Always exploring new technologies and approaches to create innovative software solutions.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12} className="mb-4">
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <FaGraduationCap size={40} className="text-success mb-3" />
                    <h5 className="fw-bold">Continuous Learner</h5>
                    <p className="text-muted">
                      Committed to continuous learning and professional development through courses, certifications, and hands-on projects.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;