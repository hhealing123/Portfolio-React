import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Work Day Scheduler",
      description: "Creates a simple calendar application that allows a user to save events for each hour of the day.",
      imgUrl: projImg1,
      gitHub: "https://github.com/hhealing123/Third-Party-APIs-Challenge-Work-Day-Scheduler-",
      deployedLink: "https://hhealing123.github.io/Third-Party-APIs-Challenge-Work-Day-Scheduler-/"
    },
    {
      title: "Server Side APIs: Weather-Dashboard",
      description: "Retrieves weather data for cities, and will log user's persistent data by using localstorage.",
      imgUrl: projImg2,
      gitHub: "https://github.com/hhealing123/Server-Side-APIs-Challenge-Weather-Dashboard",
      deployedLink: "https://hhealing123.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/"
    },
    {
      title: "Ask the Magic 8 Ball",
      description: "Provides the users with answers to the question that the user asks where the answers are pulled from the following answer categories: affirmative answers, negative answers, and neutral answers.",
      imgUrl: projImg3,
      gitHub: "https://github.com/hhealing123/Ask-the-8-Ball",
      deployedLink: "https://hhealing123.github.io/Ask-the-8-Ball/"
    },
    {
      title: "Workout Tracker",
      description: "Allows users to create own workout routines and save my workout history to keep track of workout performance.",
      imgUrl: projImg4,
      gitHub: "https://github.com/hhealing123/Workout-Tracker",
      deployedLink: ""
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check out the below projects that I've done!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project Phase 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project Phase 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project Phase 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first" alt = "First Phase">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" alt ="Second Phase">
                      <Row>
                      <p>Coming Soon...</p>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" alt ="Third Phase">
                      <p>Coming Soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Project Background"></img>
    </section>
  )
}