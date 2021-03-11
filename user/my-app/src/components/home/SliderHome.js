import React, {Component,Fragment} from 'react';
import Slider from "react-slick";


class SliderHome extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed:3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return(
            <div>

                <Slider {...settings}>
                    <div>
                        <img className="slick-img"  src="images/slider3.jpg"/>
                    </div>
                    <div>
                        <img className="slick-img" src="images/slider1.jpg"/>
                    </div>
                    <div>
                        <img className="slick-img"  src="images/slider2.jpg"/>
                    </div>

                </Slider>


            </div>
        );
    }
}
export default SliderHome;