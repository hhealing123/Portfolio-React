import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/headshot.jpg';
import navIconHome from '../assets/img/nav-home-icon.svg';
import navIconAbout from '../assets/img/nav-about-icon.svg';
import navIconProjects from '../assets/img/nav-projects-icon.svg';
import navIconResume from '../assets/img/nav-resume-icon.svg';
import navIconLinks from '../assets/img/nav-links-icon.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                        <Nav.Link href="#links" className={activeLink === 'links' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('links')}>Links</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIconHome} alt="Home Icon" /></a>
                            <a href="#"><img src={navIconAbout} alt="About Icon" /></a>
                            <a href="#"><img src={navIconProjects} alt="Projects Icon" /></a>
                            <a href="#"><img src={navIconResume} alt="Resume Icon" /></a>
                            <a href="#"><img src={navIconLinks} alt="Links Icon" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('Connect!')}><span>Let's Connect!</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}