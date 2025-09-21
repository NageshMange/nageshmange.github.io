import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaCertificate, FaAward } from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiJava, 
  SiPython, 
  SiGit,
  SiTensorflow
} from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      title: 'C++ Course: Learn the Essentials',
      icon: <SiCplusplus size={30} />,
      color: 'primary',
      category: 'Programming'
    },
    {
      title: 'Java Course: Mastering the Fundamentals',
      icon: <SiJava size={30} />,
      color: 'danger',
      category: 'Programming'
    },
    {
      title: 'Data Science Course',
      icon: <SiTensorflow size={30} />,
      color: 'success',
      category: 'Data Science'
    },
    {
      title: 'Python Course',
      icon: <SiPython size={30} />,
      color: 'info',
      category: 'Programming'
    },
    {
      title: 'Git and GitHub',
      icon: <SiGit size={30} />,
      color: 'secondary',
      category: 'Version Control'
    },
    {
      title: 'Introduction to Artificial Intelligence',
      icon: <FaAward size={30} />,
      color: 'warning',
      category: 'AI/ML'
    }
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Programming': return 'primary';
      case 'Data Science': return 'success';
      case 'Version Control': return 'secondary';
      case 'AI/ML': return 'warning';
      default: return 'info';
    }
  };

  return (
    <section id="certifications" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Certifications</h2>
            <p className="lead text-muted">
              Professional certifications and courses completed to enhance my skills
            </p>
          </Col>
        </Row>

        <Row>
          {certifications.map((cert, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="h-100 border-0 shadow-sm cert-card">
                <Card.Body className="p-4 text-center">
                  <div className={`text-${cert.color} mb-3`}>
                    {cert.icon}
                  </div>
                  <h5 className="fw-bold mb-3">{cert.title}</h5>
                  <Badge 
                    bg={getCategoryColor(cert.category)} 
                    className="mb-3"
                    style={{ fontSize: '0.8rem' }}
                  >
                    {cert.category}
                  </Badge>
                  <div className="mt-3">
                    <FaCertificate className="text-success me-2" />
                    <small className="text-muted fw-bold">Certified</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={8} className="mx-auto">
            <Card className="border-0 shadow-sm bg-light">
              <Card.Body className="p-4 text-center">
                <FaAward size={40} className="text-warning mb-3" />
                <h4 className="fw-bold mb-3">Commitment to Learning</h4>
                <p className="text-muted mb-0">
                  These certifications represent my dedication to continuous learning and 
                  staying updated with the latest technologies and best practices in software development.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default Certifications;