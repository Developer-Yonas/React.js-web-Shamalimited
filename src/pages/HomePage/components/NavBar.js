import { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Modal } from 'react-bootstrap'
import { Link, animateScroll } from 'react-scroll';
import { PiCaretUpBold } from 'react-icons/pi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const imgProfile = require('./assets/img/logo.png')
const NavBar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleOnScrollTop = () => {
        const defaultActiveKey = document.querySelector(".defaultActiveKey")
        const floatingIconHome = document.querySelector(".floating-icon-home")
        const navBar = document.getElementById("navbar")

        const scrollPosition = window.scrollY;

        if (scrollPosition > navBar.offsetHeight) {
            floatingIconHome.classList.add("floating-icon-home-visible")
            defaultActiveKey.classList.remove("nav-link", "activated")
        } else {
            defaultActiveKey.classList.add("nav-link", "active")
            floatingIconHome.classList.remove("floating-icon-home-visible")
        }


    }

    useEffect(() => {
        handleOnScrollTop()
        window.addEventListener('scroll', handleOnScrollTop)
        return () => {
            window.removeEventListener('scroll', handleOnScrollTop)
        }
    }, []);

    const propLink = {
        activeClass: "nav-link active",
        spy: true,
        smooth: 'easeInOutQuint',
        offset: -100,
        duration: 100,
    }
    
    return (
        <>

            <section id='navbar' className='wow fadeInLeft'>
                {/* // <Navbar expand="lg" bg='light' id='NavBar'> */}
                <Navbar className='navbar-contents' expand="lg" expanded={false} >
                    <Container>
                    <Navbar.Brand href='#top-bar'>
  <img src={imgProfile} alt="logo" style={{ width: '75px', height: '60px' }} />
  
</Navbar.Brand>

                        
                <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={handleModalOpen}></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                            <Container className="navbar-detail">
                                {/*
                            me-auto for position content on the left 
                            mr-auto for position content on the right 
                        */}
                                <Nav defaultActiveKey="top-bar">
                                    <Link {...propLink} to='top-bar' className='defaultActiveKey nav-link active'>Home</Link>
                                    <Link {...propLink} to='profile' >About Us</Link>
                                    <Link {...propLink} to='services'>Services</Link>
                                    <Link {...propLink} to='portfolio'>Portfolio</Link>
                                    {/* <Link {...propLink} to='our-teams'>Team</Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 1</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 2</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 3</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 4</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 5</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 6</Link></NavDropdown.Item>
                                    </NavDropdown> */}
                                    <Link {...propLink} to='contact-us'>Contact</Link>
                                </Nav >
                            </Container >
                        </Navbar.Collapse >

                    </Container >
                </Navbar >
                <Modal
                    show={showModal}
                    onHide={handleModalClose}
                    className="modal-navbar-dialog"
                >
                    <Modal.Header closeButton >
                        <Modal.Title><span className='first-span-modal'>Shama </span><span className='last-span-modal'>Limited</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Link {...propLink} to='banner' onClick={handleModalClose}>Home</Link>
                        <Link {...propLink} to='profile' onClick={handleModalClose}>About Us</Link>
                        <Link {...propLink} to='services' onClick={handleModalClose}>Services</Link>
                        {/* <Link {...propLink} to='portfolio' onClick={handleModalClose}>Portfolio</Link> */}
                        {/* <Link {...propLink} to='our-teams' onClick={handleModalClose} >Team</Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link {...propLink} to='action/3.1' onClick={handleModalClose}>Drop Down 1</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link {...propLink} to='action/3.1' onClick={handleModalClose}>Drop Down 2</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link {...propLink} to='action/3.1' onClick={handleModalClose}>Drop Down 3</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link {...propLink} to='action/3.1' onClick={handleModalClose}>Drop Down 4</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link {...propLink} to='action/3.1' onClick={handleModalClose}>Drop Down 5</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link {...propLink} to='action/3.1' onClick={handleModalClose}>Drop Down 6</Link></NavDropdown.Item>
                        </NavDropdown> */}
                        <Link {...propLink} to='contact-us' onClick={handleModalClose}>Contact</Link>

                    </Modal.Body >
                    <Modal.Footer>
                    <div className="social-media">
      <a href="https://www.facebook.com">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.twitter.com">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
                    </Modal.Footer>
                </Modal >

            </section >

            <div className='floating-icon-home'>
                <Link to="#" onClick={() => animateScroll.scrollToTop({ duration: 100 })}><PiCaretUpBold ></PiCaretUpBold></Link>
            </div>
        </>
    )
}

export default NavBar