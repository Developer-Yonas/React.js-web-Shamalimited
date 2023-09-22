import { Container } from "react-bootstrap"

const Footer = () => {
    return (
        <section id="footer">
            <Container className="detail" fluid>
                <p className="mb-0 mt-3">© Copyright <b>Shamalimited</b>. All Rights Reserved</p>
                {/* <p>Designed by ReactJS</p> */}
            </Container>
        </section>
    )
}
export default Footer