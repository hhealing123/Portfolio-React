import { Container, Row, Col } from "react-bootstrap";
import navIconHome from '../assets/img/nav-home-icon.svg';
import navIconAbout from '../assets/img/nav-about-icon.svg';
import navIconProjects from '../assets/img/nav-projects-icon.svg';
import navIconResume from '../assets/img/nav-resume-icon.svg';
import navIconLinks from '../assets/img/nav-links-icon.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} />
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIconHome} alt="Home Icon" /></a>
              <a href="#"><img src={navIconAbout} alt="About Icon" /></a>
              <a href="#"><img src={navIconProjects} alt="Projects Icon" /></a>
              <a href="#"><img src={navIconResume} alt="Resume Icon" /></a>
              <a href="#"><img src={navIconLinks} alt="Links Icon" /></a>
            </div>
            <p>Harvey Lee ◉ 956 566 6693 ◉ hhealing123@gmail.com ◉ Powered by React</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}