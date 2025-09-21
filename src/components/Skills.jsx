import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { 
  SiCplusplus, 
  SiJava, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiPython,
  SiMysql,
  SiGit
} from 'react-icons/si';
import { FaChartBar, FaCode } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      name: 'C++',
      level: 85,
      icon: <SiCplusplus size={40} />,
      color: 'primary'
    },
    {
      name: 'Java',
      level: 80,
      icon: <SiJava size={40} />,
      color: 'danger'
    },
    {
      name: 'Web Development',
      level: 75,
      icon: <SiReact size={40} />,
      color: 'info',
      subSkills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      name: 'Data Science',
      level: 70,
      icon: <FaChartBar size={40} />,
      color: 'success',
      subSkills: ['Python', 'Data Analysis', 'Machine Learning']
    }
  ];

  const technicalSkills = [
    { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Git', icon: <SiGit />, color: '#F05032' }
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Skills & Expertise</h2>
            <p className="lead text-muted">
              Technologies and programming languages I work with
            </p>
          </Col>
        </Row>

        {/* Main Skills */}
        <Row className="mb-5">
          {skills.map((skill, index) => (
            <Col lg={6} md={12} className="mb-4" key={index}>
              <Card className="h-100 border-0 shadow-sm skill-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className={`text-${skill.color} me-3`}>
                      {skill.icon}
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-1">{skill.name}</h5>
                      <div className="mb-2">
                        <ProgressBar 
                          now={skill.level} 
                          variant={skill.color}
                          style={{ height: '8px' }}
                          className="rounded-pill"
                        />
                      </div>
                      <small className="text-muted">{skill.level}% Proficiency</small>
                    </div>
                  </div>
                  {skill.subSkills && (
                    <div>
                      <small className="text-muted fw-bold">Includes: </small>
                      <small className="text-muted">
                        {skill.subSkills.join(', ')}
                      </small>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Technical Skills Icons */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <h4 className="text-center mb-4 fw-bold">Technical Stack</h4>
            <Row className="justify-content-center g-3">
              {technicalSkills.map((tech, index) => (
                <Col xs={6} sm={4} md={3} lg={2} className="text-center" key={index}>
                  <Card className="border-0 shadow-sm tech-card h-100">
                    <Card.Body className="p-3 d-flex flex-column align-items-center justify-content-center">
                      <div 
                        className="mb-2" 
                        style={{ color: tech.color, fontSize: '2rem' }}
                      >
                        {tech.icon}
                      </div>
                      <small className="fw-bold text-center">{tech.name}</small>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default Skills;