import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './testimonial.scss'

// const constructor = (props) => {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
// } 
// const next = () => {
//     this.slider.slickNext();
// }
// const previous = () => {
//     this.slider.slickPrev();
// }

// const propsCarousel = {
//     constructor,
//     next,
//     previous
// }


const Testimonial = ({testimoniData}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1780,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return(
        <div className="testimonial" id="3">
            <div className='container'>
                <h5>Testimonial</h5>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <Slider {...settings}>
                {
                    testimoniData.map((item) => {
                        return(
                            <div className="testimonialWrap">
                                <div className="testimonialCard">
                                    <div className="profpic">
                                        <img src={item.profpic} />
                                    </div>
                                    <div className="desc">
                                        <div className="star">{item.star}</div>
                                        <p className="comment">{item.comment}</p>
                                        <div className="credential"><b>{item.name}</b> {item.age}, {item.location}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </Slider>
        </div>
    )
}
export default Testimonial