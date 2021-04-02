import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplay:true,
      adaptiveHeight:true
    };
    return (
      <div>
        <div className="container" >
        <Slider {...settings}>
          <div>
            <img style={{ width: 425,height: 700 }} src={"/images/1.jpg"} />
          </div>
          <div>
            <img style={{ width: 425,height: 200 }} src={"/images/2.jpg"} />
            <p>See ....</p>
            <p>Height is adaptive</p>
          </div>
          <div>
            <img style={{ width: 425,height: 275 }} src={"/images/3.jpg"} />
          </div>
          <div>
            <img style={{ width: 425,height: 300 }} src={"/images/4.jpg"} />
          </div>
          <div>
            <img style={{ width: 425,height: 275 }} src={"/images/5.jpg"} />
          </div>
        </Slider>
      </div>


      </div>
    );
  }
}
