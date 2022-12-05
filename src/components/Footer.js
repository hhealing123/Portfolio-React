import { Container, Row, Col } from "react-bootstrap";
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedIn.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} />
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/hhealing123"><img src={github} alt="Home Icon" /></a>
              <a href="https://linkedin.com/in/harvey-lee-9708"><img src={linkedin} alt="Projects Icon" /></a>
            </div>
            <p>Harvey Lee ◉ 956 566 6693 ◉ hhealing123@gmail.com ◉ Powered by React</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}