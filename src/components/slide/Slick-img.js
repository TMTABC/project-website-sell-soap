import React from "react";
import Slider from "react-slick";
import Image from 'react-bootstrap/Image';
function Fade() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <Image src="/abstract02.jpg" fluid></Image>
                    {/* {<img src={"./abstract02.jpg"} />}1 */}
                </div>
                <div>
                    <img src={"logo512.png"} alt="product1" />
                </div>
                <div>
                    {<img src={"/abstract02.jpg"} className="img-fluid" alt="product2" />}
                </div>
                <div>
                    <Image src="/736462.png" fluid></Image>
                </div>
            </Slider>
        </div>
    );
}

export default Fade;
