import React, { Component } from "react";
import Slider from "react-slick";
import banner from "../../assett/images/banner.jpg";
import banner2 from "../../assett/images/banner2.jpg";
import banner3 from "../../assett/images/banner3.jpg";
import "./Slider.css";
import { Link } from "react-router-dom";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers">
                <button>SHOP NOW</button>
              </Link>
            </div>
            <img src={banner} />
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers">
                <button>SHOP NOW</button>
              </Link>
            </div>
            <img src={banner2} />
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers">
                <button>SHOP NOW</button>
              </Link>
            </div>
            <img src={banner3} />
          </div>
        </Slider>
      </div>
    );
  }
}
