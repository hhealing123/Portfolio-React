import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Resume = () => {
  return (
    <section className="resume" id="resume">
        <Container>
            <Row>
                <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>

                            <h2>Resume</h2>

                            <br></br>

                            <h4>Education</h4>

                            <br></br>

                                <h6>The University of Texas at Austin</h6>
                                    <ul>
                                        <li>Bachelor of Science: Actuarial Science</li>
                                        <li>Minor: Business Administration</li>
                                        <li>Certification - Risk Management & Insurance</li>
                                    </ul>
                            <br></br>
                            
                            <h4>Leadership Experiences & Awards</h4>

                            <br></br>

                                <h6>AT&T Actuarial Case Competition - First Place (September 2019 - October 2019)</h6>
                                    <ul>
                                        <li>Calculated AT&T (virtual model) workers' medical cost and analyzed which chronical conditions have increased
                                        AT&T’s worker's health asset the most.</li>
                                        <li>Provided solutions to reduce workers' medical cost and decided which venture vendors (imagery health vendors)
                                        could benefit AT&T the most.
                                        </li>
                                    </ul>
                                <h6>Mercer Actuarial Case Competition - Second Place (February 2019 - March 2019)</h6>
                                    <ul>
                                        <li>Focused on how to enhance current Medicare system, as well as providing possible solutions to resolve issues
                                            arising from current Medicare system by analyzing statistical data given by Mercer to calculate: claim levels of different population buckets, cost of Medicare, trend projection of Medicare.
                                        </li>
                                    </ul>

                            <br></br>

                            <h4>Professional Experience</h4>

                                <br></br>

                                <h6>Teacher Retirement System of Texas - Healthcare Actuarial Student Intern (June 2021 - August 2021)</h6>
                                    <ul>
                                        <li>Analyzed population health metrics to assess the effectiveness of wellness and health management programs.

                                        </li>
                                    <li>Analyzed enrollment medical & Rx claims data to identify trends and anomalies, and identified premium rate factor,
                                    average claim amounts, and PMPM from different claim buckets.
                                    </li>
                                        <li>Used various software to observe trend projections on various product lines and plans.
                                        </li>
                                    </ul>
                                <h6>Charles Schwab - Define Contribution Compliance & Documentation Associate (January 2022 - Present)</h6>
                                    <ul>
                                        <li>Prepare the Form 5330 and make updates to any corrections prior to funding.</li>
                                        <li>Correct Missed Deferral or Late Deferral Contribution by adjusting deferral percentage, as well as determining whether it is a elective deferral or auto-enrollment error.</li>
                                        <li>Perform a corrective Qualified Non-Elective Contribution (QNEC) by revising an employer contribution of participants who were not permitted to make elective deferrals.</li>
                                    </ul>
                        </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
  );
}