import { useEffect, useRef, useState } from "react"
import { Col, Container, Row, Modal } from "react-bootstrap"
import Slider from "react-slick"

const Portfolio = (dataJson) => {
    const [showModal, setShowModal] = useState(false);
    const [sliderIndex, setSliderIndex] = useState(0);
    const onceLoad = useRef(false)

    useEffect(() => {
        if (!onceLoad.current) {
            const containersPortfolio = document.querySelectorAll('#portfolio-images .col');
            containersPortfolio.forEach(container => {
                container.addEventListener('mouseover', (event) => {
                    container.querySelector('img').classList.add('hovered-portfolio-images');
                })
                container.addEventListener('mouseout', (event) => {
                    container.querySelector('img').classList.remove('hovered-portfolio-images');
                })

            });
        }
        return () => {
            onceLoad.current = true
        }
    }, [])
    function handleModalOpen(index) {
        setSliderIndex(index)
        setShowModal(true)
    }

    function handleModalClose() {
        setShowModal(false)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section id="portfolio" className="wow fadeInUpBig">
            <Container >
                <Container className="header-section">
                    <h1>OUR Clients</h1>
                    <p>Here are some of the clients we work with .</p>
                </Container>
            </Container >
            <Container fluid id="portfolio-images">
                <Row className="">
                    {
                        dataJson.data.images.map((data, index) => {
                            return (
                                <Col key={data.id} className="col-lg-3 col-md-4 wow fadeInUpBig" >
                                    <img className="w-100" src={require(`${data.url}`)} alt={data.alt} />
                                    <div className="cover-portfolio-images" onClick={() => handleModalOpen(index)} >
                                        <div className="caption-portfolio-images">
                                            <h2>{data.caption}</h2>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Modal show={showModal}
                    onHide={handleModalClose}
                    className='modal-image-portfolio'
                    dialogClassName='modal-image-portfolio-dialog'
                    size="lg"
                >
                    <Modal.Body>
                        <div >
                            <Slider initialSlide={sliderIndex} {...settings}>
                                {
                                    dataJson.data.images.map((data) => {
                                        return (
                                            <div key={data.id}>
                                                <img className="w-100" src={require(`${data.url}`)} alt={data.alt} />
                                            </div>
                                        )
                                    })
                                }

                            </Slider>
                        </div>

                    </Modal.Body>

                </Modal>
            </Container>
        </section>
    )
}
export default Portfolio