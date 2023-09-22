import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const imgProfile = require('./assets/img/about-img.jpeg')
const Profile = () => {
    return (
        <section id="profile" className="wow fadeInUpBig" data-wow-duration="1s">
            <Container>
                <Row>
                    <Col className="col-lg-6 col-md-12">
                        <Container>
                            <img src={imgProfile} alt="profile"></img>
                        </Container>
                    </Col>
                    <Col className="col-lg-6 col-md-12">
                        <Container id="profile-detail">
                            <h1>Shama Limited</h1>
                            {/* <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3> */}
                            <ListGroup className="custom-list-group">
                                <ListGroupItem><IoMdCheckmarkCircleOutline size={25} /> Shama is a marketing company focused on digitalization 
                                and developing innovative solutions for other businesses. <br/>Shama is currently working with around 2000 restaurants in Addis Ababa by giving services on payment integration in collaboration with banks Customized QR menu presented with pictures taken by professional camera crew of the company.
                                <br/>In addition to this creating digital solutions for the restaurants.<br/><br/><br/>
                                <IoMdCheckmarkCircleOutline size={25} /> Focusing on creative digital solutions
                                and platforms we are currently in
                                business with more than 1800
                                Restaurants and Hotels In Addis
                                Ababa.
                                </ListGroupItem>
                            </ListGroup>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Profile