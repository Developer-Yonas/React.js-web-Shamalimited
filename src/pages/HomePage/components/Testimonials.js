import { Container } from "react-bootstrap"
import Slider from "react-slick"



const Testimonials = (dataJson) => {
    const settings = {
        dots: true,
        dotsClass: 'custom-dots-logo',
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section id="testimonials" className="wow fadeInUpBig">
            <Container >
                <Container className="header-section">
                    <h1>Our Office</h1>
                    {/* <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p> */}
                </Container>
                <Container id="testimonials-card">
                    <Slider {...settings}>
                        {
                            dataJson.data.testimonials.map((data) => {
                                return (

                                    <div key={data.id}>
                                        <div className="testimonials-card-item">
                                            {/* <p>{data.quote}</p> */}
                                            <img alt={data.alt} className="circle-image" src={require(`${data.imageURL}`)} />
                                            {/* <h2>{data.name}</h2>
                                            <h3>{data.position}</h3> */}
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </Slider>
                </Container>
            </Container >
        </section>
    )
}
export default Testimonials