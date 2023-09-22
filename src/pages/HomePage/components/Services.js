import { Col, Container, Row } from "react-bootstrap"
import { AiFillThunderbolt, AiOutlineRead, AiOutlineGoogle, AiOutlineCloud, AiOutlineBarChart, AiOutlinePicture, AiFillShopping } from "react-icons/ai"
import { FaMap } from "react-icons/fa"

const sizeIcon = 90;
const iconMaps = {
    'AiOutlineBarChart': AiOutlineBarChart,
    'AiOutlinePicture': AiOutlinePicture,
    'AiFillShopping': AiFillShopping,
    'AiOutlineCloud': AiOutlineCloud,
    'AiOutlineGoogle': AiOutlineGoogle,
    'AiOutlineRead': AiOutlineRead,
    'AiFillThunderbolt': AiFillThunderbolt,
    'FaMap': FaMap
}


const Services = (dataJson) => {



    return (
        <section id="services">
            <Container>
                <Container className="header-section">
                    <h1>SERVICES</h1>
                    {/* <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p> */}
                </Container>

                <Container id="services-box">
                    <Row>
                        {
                            dataJson.data.services.map((data) => {
                                const IconComponent = iconMaps[data.icon];
                                return (
                                    <Col key={data.id} className={`col-lg-6 col-md-12 wow ${data.wowClass}`} data-wow-duration={`${data.wowClassDuration}`}>
                                        <Container className="services-box-detail" >
                                            <IconComponent size={sizeIcon} />
                                            <Container>
                                                <h2>{data.title}</h2>
                                                <p>{data.detail}</p>
                                            </Container>
                                        </Container>
                                    </Col>
                                )
                            })
                        }


                    </Row>
                </Container>
            </Container>
        </section>
    )
}
export default Services