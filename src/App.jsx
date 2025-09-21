import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button, ProgressBar, Badge } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp, FaDownload, FaExternalLinkAlt, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './App.css';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App" style={{ width: '100%', margin: 0, padding: 0 }}>
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="modern-navbar shadow-lg">
        <Container>
          <Navbar.Brand className="fw-bold">Nagesh Mange</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollToSection('home')}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('certifications')}>Certifications</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('experience')}>Experience</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="min-vh-100 d-flex align-items-center text-center" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        paddingTop: '80px',
        width: '100%'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center order-2 order-lg-1">
              <div className="text-white">
                <h1 className="display-4 fw-bold mb-3">
                  Hi, I'm <span className="text-warning">Nagesh Mange</span>
                </h1>
                <h2 className="h3 mb-4">Computer Engineering Student & Aspiring Software Developer</h2>
                <p className="lead mb-4">
                  Passionate fullstack developer creating innovative solutions from frontend to backend. 
                  Specializing in modern web technologies, data science, and system programming.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Button 
                    variant="warning" 
                    size="lg" 
                    className="fw-bold"
                    href="/Nagesh-Mange-Resume.pdf"
                    target="_blank"
                    download="Nagesh-Mange-Resume.pdf"
                  >
                    <FaDownload className="me-2" />Download Resume
                  </Button>
                  <Button variant="outline-light" size="lg" href="https://github.com/NageshMange" target="_blank">
                    <FaGithub className="me-2" />View GitHub
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center mb-4 mb-lg-0 order-1 order-lg-2">
              <div className="position-relative">
                <div className="profile-image-container mx-auto">
                  <img 
                    src="/profile-image.jpg" 
                    alt="Nagesh Mange" 
                    className="hero-avatar profile-image rounded-circle shadow-lg border border-4 border-warning"
                    style={{ 
                      width: '300px', 
                      height: '300px', 
                      objectFit: 'cover'
                    }}
                  />
                  <div className="profile-ring"></div>
                  <div className="profile-pulse"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 mobile-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="display-5 fw-bold mb-3">About Me</h2>
              <p className="lead text-muted">Get to know more about who I am and what I do</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h4 className="text-primary mb-3">🚀 Who Am I?</h4>
                  <p>
                    Hello! I'm Nagesh, a third-year student at SPPU, majoring in BE Computer Engineering 
                    with honors in Data Science. My passion for the software industry drives me to constantly 
                    seek opportunities to learn and grow.
                  </p>
                  <p>
                    With a strong foundation in programming and recently completing a C++ Programming internship 
                    at CodSoft, I've developed comprehensive fullstack development skills. My expertise spans 
                    frontend technologies (React, HTML, CSS, JavaScript), backend development (Node.js, Express.js), 
                    and database management (MongoDB, SQL), along with programming languages like C++, Java, and Python.
                  </p>
                  <p>
                    I'm currently looking for internships or entry-level positions in fullstack development 
                    where I can contribute my MERN stack knowledge and continue growing as a developer.
                  </p>
                  <p>
                    My journey in programming began with a curiosity to solve problems through code, and 
                    this passion continues to fuel my dedication to creating innovative software solutions.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Row>
                <Col md={12} className="mb-3">
                  <Card className="border-0 shadow-sm text-center">
                    <Card.Body>
                      <div className="text-primary mb-2" style={{fontSize: '2rem'}}>💡</div>
                      <h5>Problem Solver</h5>
                      <p className="text-muted mb-0">Love tackling complex problems with clean code</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={12} className="mb-3">
                  <Card className="border-0 shadow-sm text-center">
                    <Card.Body>
                      <div className="text-success mb-2" style={{fontSize: '2rem'}}>🎓</div>
                      <h5>Academic Excellence</h5>
                      <p className="text-muted mb-0">BE Computer Engineering with Honors in Data Science at SPPU</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={12} className="mb-3">
                  <Card className="border-0 shadow-sm text-center">
                    <Card.Body>
                      <div className="text-warning mb-2" style={{fontSize: '2rem'}}>🚀</div>
                      <h5>Continuous Learner</h5>
                      <p className="text-muted mb-0">Always seeking opportunities to learn and grow</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light mobile-section">
        <Container>
          <Row className="justify-content-center mb-4 mb-lg-5">
            <Col lg={8} className="text-center">
              <h2 className="display-5 fw-bold mb-3">Skills & Expertise</h2>
              <p className="lead text-muted">Technologies and programming languages I work with</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5>🌐 Frontend Development</h5>
                  <ProgressBar now={85} variant="info" className="mb-2" style={{height: '8px'}} />
                  <small className="text-muted">85% Proficiency - React, HTML, CSS, JavaScript</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5>🛠️ Backend Development</h5>
                  <ProgressBar now={80} variant="success" className="mb-2" style={{height: '8px'}} />
                  <small className="text-muted">80% Proficiency - Node.js, Express.js</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5>💾 Database Management</h5>
                  <ProgressBar now={75} variant="warning" className="mb-2" style={{height: '8px'}} />
                  <small className="text-muted">75% Proficiency - MongoDB, SQL</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5>⚡ Programming Languages</h5>
                  <ProgressBar now={85} variant="primary" className="mb-2" style={{height: '8px'}} />
                  <small className="text-muted">85% Proficiency - C++, Java, Python</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5>📊 Data Science</h5>
                  <ProgressBar now={70} variant="danger" className="mb-2" style={{height: '8px'}} />
                  <small className="text-muted">70% Proficiency - Python, Data Analysis, ML</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5>🚀 Full Stack Development</h5>
                  <ProgressBar now={82} variant="dark" className="mb-2" style={{height: '8px'}} />
                  <small className="text-muted">82% Proficiency - Complete MERN Stack Development</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="display-5 fw-bold mb-3">Certifications</h2>
              <p className="lead text-muted">Professional certifications completed to enhance my skills</p>
            </Col>
          </Row>
          <Row>
            {[
              { title: 'C++ Course: Learn the Essentials', icon: '⚡', category: 'Programming' },
              { title: 'Java Course: Mastering the Fundamentals', icon: '☕', category: 'Programming' },
              { title: 'Data Science Course', icon: '📊', category: 'Data Science' },
              { title: 'Python Course', icon: '🐍', category: 'Programming' },
              { title: 'Git and GitHub', icon: '📂', category: 'Version Control' },
              { title: 'Introduction to Artificial Intelligence', icon: '🤖', category: 'AI/ML' }
            ].map((cert, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="border-0 shadow-sm h-100 cert-card">
                  <Card.Body className="text-center p-4">
                    <div style={{fontSize: '2.5rem'}} className="mb-3">{cert.icon}</div>
                    <h5 className="fw-bold mb-3">{cert.title}</h5>
                    <Badge bg="primary" className="mb-3">{cert.category}</Badge>
                    <div className="mt-3">
                      <small className="text-success fw-bold">✅ Certified</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-4 py-md-5 bg-light mobile-section">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col xs={12} className="text-center">
              <h2 className="display-5 fw-bold mb-3">Experience</h2>
              <p className="lead text-muted mb-0">My professional journey and work experience</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={11} md={10} lg={8}>
              <Card className="border-0 shadow experience-card mobile-experience-card">
                <Card.Body className="p-3 p-sm-4">
                  {/* Mobile-First Layout */}
                  <div className="text-center mb-4">
                    <div className="bg-primary rounded-circle p-3 mx-auto mb-3" 
                         style={{width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <span style={{color: 'white', fontSize: '2rem'}}>💼</span>
                    </div>
                    <h3 className="text-primary fw-bold mb-3">C++ Programming Intern</h3>
                    <Badge bg="primary" className="mb-3 px-4 py-2 fs-6 fw-bold">✅ Completed</Badge>
                    <h5 className="text-secondary mb-4 lh-base">🏢 CodSoft • 📅 February - March 2025</h5>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-muted mb-0 lh-base" style={{fontSize: '0.95rem'}}>
                      Successfully completed a C++ Programming internship at CodSoft, where I gained valuable 
                      hands-on experience in software development and collaborated with experienced developers.
                    </p>
                  </div>
                  
                  {/* Key Responsibilities */}
                  <div className="mb-4">
                    <h6 className="fw-bold mb-3 text-center">🔑 Key Responsibilities</h6>
                    <div className="row g-2">
                      <div className="col-12">
                        <div className="d-flex align-items-start p-2 rounded" style={{backgroundColor: 'rgba(13, 110, 253, 0.05)'}}>
                          <span className="me-3 fs-5" style={{minWidth: '25px'}}>💻</span>
                          <span className="small">Developing and maintaining C++ applications</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-start p-2 rounded" style={{backgroundColor: 'rgba(25, 135, 84, 0.05)'}}>
                          <span className="me-3 fs-5" style={{minWidth: '25px'}}>🤝</span>
                          <span className="small">Collaborating on software development projects</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-start p-2 rounded" style={{backgroundColor: 'rgba(13, 202, 240, 0.05)'}}>
                          <span className="me-3 fs-5" style={{minWidth: '25px'}}>📚</span>
                          <span className="small">Learning industry best practices and coding standards</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-start p-2 rounded" style={{backgroundColor: 'rgba(255, 193, 7, 0.05)'}}>
                          <span className="me-3 fs-5" style={{minWidth: '25px'}}>🔧</span>
                          <span className="small">Gaining experience in problem-solving and debugging</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills Developed */}
                  <div>
                    <h6 className="fw-bold mb-3 text-center">🚀 Skills Developed</h6>
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                      <Badge bg="primary" className="px-3 py-2" style={{fontSize: '0.8rem'}}>C++ Programming</Badge>
                      <Badge bg="secondary" className="px-3 py-2" style={{fontSize: '0.8rem'}}>OOP</Badge>
                      <Badge bg="info" className="px-3 py-2" style={{fontSize: '0.8rem'}}>Problem Solving</Badge>
                      <Badge bg="success" className="px-3 py-2" style={{fontSize: '0.8rem'}}>Team Collaboration</Badge>
                      <Badge bg="warning" className="px-3 py-2" style={{fontSize: '0.8rem'}}>Code Review</Badge>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="display-5 fw-bold mb-3">My Projects</h2>
              <p className="lead text-muted">Projects that demonstrate my skills and passion for development</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="border-0 shadow-lg project-card h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <span style={{fontSize: '2rem'}} className="me-3">🔒</span>
                    <h4 className="fw-bold mb-0">Auto Screen Lock Using Bluetooth Proximity</h4>
                  </div>
                  <p className="text-muted mb-4">
                    An innovative security application that automatically locks your computer screen 
                    when you move away from it, using Bluetooth proximity detection.
                  </p>
                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Key Features:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">• Bluetooth proximity detection</li>
                      <li className="mb-2">• Automatic screen locking</li>
                      <li className="mb-2">• Customizable proximity settings</li>
                      <li className="mb-2">• User-friendly GUI interface</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <Badge bg="primary" className="me-2">Python</Badge>
                    <Badge bg="secondary">Tkinter</Badge>
                  </div>
                  <Button variant="primary" href="https://github.com/NageshMange/Auto-Lock-Using-Bluetooth-Proximity" target="_blank" className="w-100">
                    <FaGithub className="me-2" />View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="border-0 shadow-lg project-card h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <span style={{fontSize: '2rem'}} className="me-3">🔍</span>
                    <h4 className="fw-bold mb-0">Lost And Found Web Application</h4>
                  </div>
                  <p className="text-muted mb-4">
                    A comprehensive fullstack web application designed to help people report and find lost items. 
                    Built with modern web technologies, featuring user authentication, database management, 
                    and responsive design for optimal user experience.
                  </p>
                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Key Features:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">• Item posting and browsing</li>
                      <li className="mb-2">• User authentication system</li>
                      <li className="mb-2">• Search and filter functionality</li>
                      <li className="mb-2">• Responsive web design</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <Badge bg="success" className="me-1">Fullstack</Badge>
                    <Badge bg="info" className="me-1">HTML</Badge>
                    <Badge bg="warning" className="me-1">CSS</Badge>
                    <Badge bg="primary" className="me-1">JavaScript</Badge>
                    <Badge bg="secondary" className="me-1">Express.js</Badge>
                    <Badge bg="dark">Database</Badge>
                  </div>
                  <Button variant="success" href="https://github.com/NageshMange/Lost-And-Found-Web-Application" target="_blank" className="w-100">
                    <FaGithub className="me-2" />View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
              <p className="lead text-muted">I'm always open to discussing new opportunities and projects!</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-5">
                  <Row>
                    <Col md={6} className="mb-4">
                      <h4 className="fw-bold mb-4">Contact Information</h4>
                      
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary rounded-circle p-3 me-3" style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <FaEnvelope style={{color: 'white'}} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Email</h6>
                          <a href="mailto:mangenagesh@gmail.com" className="text-decoration-none">
                            mangenagesh@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <div className="bg-success rounded-circle p-3 me-3" style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <FaWhatsapp style={{color: 'white'}} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">WhatsApp</h6>
                          <a href="https://wa.me/919730302261" target="_blank" className="text-decoration-none">
                            +91 9730302261
                          </a>
                        </div>
                      </div>

                      <div className="bg-light rounded p-3">
                        <h6 className="fw-bold mb-2">⚡ Quick Response</h6>
                        <small className="text-muted">
                          I typically respond to emails within 24 hours. For urgent matters, 
                          feel free to reach out via WhatsApp.
                        </small>
                      </div>
                    </Col>
                    
                    <Col md={6}>
                      <h4 className="fw-bold mb-4">Let's Connect</h4>
                      <p className="text-muted mb-4">
                        I'm always excited to connect with fellow developers and potential collaborators.
                      </p>
                      
                      <div className="d-flex flex-column flex-sm-row flex-wrap gap-3 mb-4">
                        <Button variant="outline-primary" href="https://www.linkedin.com/in/nageshmange/" target="_blank" className="social-button">
                          <FaLinkedin className="me-2" />LinkedIn
                        </Button>
                        <Button variant="outline-dark" href="https://github.com/NageshMange" target="_blank" className="social-button">
                          <FaGithub className="me-2" />GitHub
                        </Button>
                        <Button variant="outline-info" href="https://www.instagram.com/its_nageshmange/" target="_blank" className="social-button">
                          <FaInstagram className="me-2" />Instagram
                        </Button>
                        <Button variant="outline-success" href="https://wa.me/919730302261" target="_blank" className="social-button">
                          <FaWhatsapp className="me-2" />WhatsApp
                        </Button>
                      </div>
                      
                      <div className="bg-primary text-white rounded p-3">
                        <h6 className="fw-bold mb-2">🚀 Available for Opportunities</h6>
                        <small>
                          Open to internships and entry-level positions in fullstack development, 
                          MERN stack projects, and software engineering roles.
                        </small>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col lg={4} className="mb-4">
              <h5 className="fw-bold mb-3">Nagesh Mange</h5>
              <p className="text-light mb-3">
                Software Developer passionate about creating innovative solutions through code.
              </p>
              <small>Always learning, always growing! 🚀</small>
            </Col>
            <Col lg={4} className="text-center mb-4">
              <h6 className="fw-bold mb-3">Connect With Me</h6>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://www.linkedin.com/in/nageshmange/" target="_blank" className="text-white text-decoration-none" style={{fontSize: '1.5rem'}}>
                  <FaLinkedin className="social-link" />
                </a>
                <a href="https://www.instagram.com/its_nageshmange/" target="_blank" className="text-white text-decoration-none" style={{fontSize: '1.5rem'}}>
                  <FaInstagram className="social-link" />
                </a>
                <a href="https://github.com/NageshMange" target="_blank" className="text-white text-decoration-none" style={{fontSize: '1.5rem'}}>
                  <FaGithub className="social-link" />
                </a>
                <a href="https://wa.me/919730302261" target="_blank" className="text-white text-decoration-none" style={{fontSize: '1.5rem'}}>
                  <FaWhatsapp className="social-link" />
                </a>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <div>
                <small className="text-light">Available for opportunities</small>
              </div>
            </Col>
          </Row>
          <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          <Row>
            <Col md={12} className="text-center">
              <small>© 2025 Nagesh Mange. All rights reserved.</small>
            </Col>
          </Row>
        </Container>
      </footer>
      
      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="floating-back-to-top"
          aria-label="Back to top"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
