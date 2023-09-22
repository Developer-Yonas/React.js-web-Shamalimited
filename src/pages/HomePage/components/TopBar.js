import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGooglePlus, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const iconMap = {
    faTwitter: faTwitter,
    faFacebook: faFacebook,
    faInstagram: faInstagram,
    faGooglePlus: faGooglePlus,
    faLinkedin: faLinkedin,
};

const TopBar = (dataJson) => {
    return (
        <section id='top-bar' className='d-lg-flex d-md-none '>
            <Container fluid>
                <Container fluid='lg'>
                    <Row >
                        <Col className='contact-info'>
                            <span><FontAwesomeIcon icon={faEnvelope} /><a href='https://google.com'>Info@Shamalimited.com</a></span>
                            <span><FontAwesomeIcon icon={faAddressBook} />+251 9 11 06 94 28</span>
                        </Col>
                        <Col className='social-media'>
                            {
                                dataJson.data.icons.map((data) => {
                                    return <a key={data.id} href={data.href} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={iconMap[data.name]} /></a>
                                })

                            }
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}
export default TopBar