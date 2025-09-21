import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaLock, FaSearch } from 'react-icons/fa';
import { SiPython, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Auto Screen Lock Using Bluetooth Proximity',
      description: 'An innovative security application that automatically locks your computer screen when you move away from it, using Bluetooth proximity detection. The application monitors the distance of your paired Bluetooth device and locks the screen when you\'re away for enhanced security.',
      skills: ['Python', 'Tkinter'],
      skillIcons: [
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'Tkinter', icon: <FaLock />, color: '#FFD43B' }
      ],
      githubLink: 'https://github.com/NageshMange/Auto-Lock-Using-Bluetooth-Proximity',
      icon: <FaLock size={40} />,
      color: 'primary',
      features: [
        'Bluetooth proximity detection',
        'Automatic screen locking',
        'Customizable proximity settings',
        'User-friendly GUI interface'
      ]
    },
    {
      id: 2,
      title: 'Lost And Found Web Application',
      description: 'A comprehensive web application designed to help people report and find lost items. The platform allows users to post details about lost or found items, browse listings, and connect with other users to reunite with their belongings.',
      skills: ['Web Development'],
      skillIcons: [
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' }
      ],
      githubLink: 'https://github.com/NageshMange/Lost-And-Found-Web-Application',
      icon: <FaSearch size={40} />,
      color: 'success',
      features: [
        'Item posting and browsing',
        'User authentication system',
        'Search and filter functionality',
        'Responsive web design'
      ]
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">My Projects</h2>
            <p className="lead text-muted">
              Here are some of the projects I've worked on that demonstrate my skills and passion for development
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project) => (
            <Col lg={6} md={12} className="mb-5" key={project.id}>
              <Card className="h-100 border-0 shadow-lg project-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className={`text-${project.color} me-3`}>
                      {project.icon}
                    </div>
                    <h4 className="fw-bold mb-0">{project.title}</h4>
                  </div>

                  <p className="text-muted mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Key Features:</h6>
                    <ul className="list-unstyled">
                      {project.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <span className={`text-${project.color} me-2`}>•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Technologies Used:</h6>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.skills.map((skill, index) => (
                        <Badge key={index} bg={project.color} className="px-3 py-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="d-flex flex-wrap gap-3">
                      {project.skillIcons.map((skillIcon, index) => (
                        <div key={index} className="d-flex align-items-center">
                          <span style={{ color: skillIcon.color, fontSize: '1.5rem' }} className="me-2">
                            {skillIcon.icon}
                          </span>
                          <small className="fw-bold">{skillIcon.name}</small>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <Button
                      variant={project.color}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-fill"
                    >
                      <FaGithub className="me-2" />
                      View on GitHub
                    </Button>
                    <Button
                      variant={`outline-${project.color}`}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </Button>
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
                <FaGithub size={40} className="text-dark mb-3" />
                <h4 className="fw-bold mb-3">More Projects Coming Soon</h4>
                <p className="text-muted mb-3">
                  I'm constantly working on new projects and exploring different technologies. 
                  Check out my GitHub profile for the latest updates and contributions.
                </p>
                <Button
                  variant="dark"
                  href="https://github.com/NageshMange"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  <FaGithub className="me-2" />
                  Visit My GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default Projects;