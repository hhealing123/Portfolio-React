import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headshot from "../assets/img/headshot";
import { IoShareSocial } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
    return (
       <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Coding Is Fun!</span>
                        <h1>{`Hi I'm Harvey Lee`}<span className="wrap">Future Software Developer</span></h1>
                        <p>Greetings, Young open-minded with passion and critical mind. Gathering information and analyzing data bring me joy and enthusiasm as it leads to an efficient and informed decisions. Communicating and learning new materials give vitality to my quality. Working as Define Contribution Compliance & Documentation Associate at Charles Schwab; my primary job functions are: perform earnings calculation, prepare client letters for both internal and external errors, and prepare corrections for various retirement plans. Proficient in using Microsoft Excel/Acess, SQL, JavaScript, SQL, Node.js, React.js, JSON, and more!</p>
                        <button onClick={() => console.log('connect')}>Let's Connect! <IoShareSocial size={20} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headshot} alt="Headshot" />
                    </Col>
                </Row>
            </Container>
       </section>
    )
}