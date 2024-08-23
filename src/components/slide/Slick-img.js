import React from "react";
import Slider from "react-slick";

function Fade() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay:true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    {/* <img src={baseUrl + "/abstract01.jpg"} /> */}1
                </div>
                <div>
                    {/* <img src={baseUrl + "/abstract02.jpg"} /> */}2
                </div>
                <div>
                    {/* <img src={baseUrl + "/abstract03.jpg"} /> */}3
                </div>
                <div>
                    {/* <img src={baseUrl + "/abstract04.jpg"} /> */}4
                </div>
            </Slider>
        </div>
    );
}

export default Fade;
