import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/world.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [state, setState] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Full Stack Developer", "Web Designer", "Data Engineer"];
    const period = 1000;

    useEffect(() => {
        let trigger = setInterval(() => {
            trig();
        }, state)
        return () => { clearInterval(trigger) };
    }, [text]) 

    const trig = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setState(prevState => prevState / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setState(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setState(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
       <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Ab imo pectore</span>
                                <h1>{`Hi There, I'm Harvey Lee`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Web Designer", "Data Engineer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Greetings, Young open-minded with passion and critical mind. Gathering information and analyzing data bring me joy and enthusiasm as it leads to an efficient and informed decisions. Communicating and learning new materials give vitality to my quality. Working as Define Contribution Compliance & Documentation Associate at Charles Schwab; my primary job functions are: perform earnings calculation, prepare client letters for both internal and external errors, and prepare corrections for various retirement plans. Proficient in using Microsoft Excel/Acess, SQL, JavaScript, SQL, Node.js, React.js, JSON, and more!</p>
                                    <button onClick={() => console.log('connect')}><a href="https://linkedin.com/in/harvey-lee-9708">Let's Connect!</a><ArrowRightCircle size={20} /></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="Header Img"/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}