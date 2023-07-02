import React, { Component } from "react";
import Slider from "react-slick";
import r1 from "../../../assett/images/review/r1.jpg";
import r2 from "../../../assett/images/review/r2.jpg";
import r3 from "../../../assett/images/review/r3.jpg";
import r4 from "../../../assett/images/review/r4.jpg";
import r5 from "../../../assett/images/review/r5.jpg";
import r6 from "../../../assett/images/review/r6.jpg";
import r7 from "../../../assett/images/review/r7.jpg";
import r8 from "../../../assett/images/review/r8.jpg";
import r9 from "../../../assett/images/review/r9.jpg";
import r10 from "../../../assett/images/review/r10.jpg";
import r11 from "../../../assett/images/review/r11.jpg";
// import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import "./Review.css";
import { Link } from "react-router-dom";
export default class Review extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div
        className="slider_review"
      // data-aos="fade-up"
      // data-aos-anchor-placement="top-bottom"
      >
        <h2 className="title">Let customers speak for us</h2>
        <Slider {...settings}>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Absolutely Adorable</h5>
              <div className="review_text">
                <p>
                  4.5 out of 5 stars. I love how customizable this is. With so
                  many options to choose from it is easy to make this with a
                  personal touch. I would have like it to be a bit larger hello
                  book lover here but it still fits my kindle, wallet, keys,
                  etc. This would make wonderful gifts or just a daily accessory
                  to show off. Shipping is a bit slow but totally worth the
                  wait. Can't wait to order more items. C.D.
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r1}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Randee Strand</h5>
              <div className="review_text">
                <p>
                  Not only did the shirt end up looking like me and my family,
                  but it arrived quickly. I had it shipped directly to my dad.
                  He absolutely loves it, and the large fits him perfectly. He
                  sent me this funny pic, right after he opened it. LOL! I
                  definitely recommend ordering this one! I will order from this
                  company again!
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r2}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Nevan Tabbara</h5>
              <div className="review_text">
                <p>
                  My husband loves the shirt. Just wish the colors we chose were
                  more true to what we got. The brown is more of a light reddish
                  brown vs a dark brown for the hair. I should have chosen just
                  black hair if I knew. Other than that we all love it
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r3}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Michael Howell</h5>
              <div className="review_text">
                <p>
                  Very happy with our custom sign, would recommend being able to
                  put tattoos on skin 🤣🤣 other than that we love it as do our
                  family and friends!!
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r4}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Arvic Tortoza</h5>
              <div className="review_text">
                <p>
                  I really didn’t know what to expect when ordering online but
                  was happily surprised with the quality when it arrived last
                  week. My husband absolutely loved it and my kids think it’s
                  absolutely hilarious to see themselves on a T-shirt with their
                  dad. Sometimes ordering online you think you’re going to get
                  scammed, I can assure you this is not a scam. I can’t wait to
                  see him wear this at the cottage all summer.
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r5}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Shannon Esopenko</h5>
              <div className="review_text">
                <p>
                  I like that I could add all of my animals on this--I have 5
                  cats and 2 dogs and the mat came out awesome! Everyone who
                  comes to our door including the mailman has commented on it
                  and wants to know where we got it--and we tell them!
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r6}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Michael Strauss</h5>
              <div className="review_text">
                <p>
                  I was slightly disappointed that this didn’t come with a
                  frame. But we had a custom frame made from scrap lobster
                  cages! As you can see in the photo it blends in with our Key
                  West style furniture. So for slightly less than $300.00 for
                  poster and custom frame we are tickled pink! We have only been
                  married for 3 1/2 years, we we’re together at 17 and 16 years
                  old in 1972!
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r7}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Nigel Cunningham</h5>
              <div className="review_text">
                <p>
                  Great customer service as I asked to change the top part of
                  the sign to read garden bar instead of patio bar and nothing
                  was to much trouble. Great service.
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r8}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Angelia Rush</h5>
              <div className="review_text">
                <p>
                  I ordered this personalized T-shirt for my Dad's 80th
                  birthday. I ordered it about a week and a half to two weeks
                  before his party. I was really scared it wouldn't arrive on
                  time, but it arrived with a day to spare. I was impressed with
                  the timing of arrival and the shirt looked great. Dad seemed
                  to love it.
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r9}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Chris Leroi</h5>
              <div className="review_text">
                <p>
                  I love my customized basset hound shirt with my lovely girl,
                  Hope, on it. One of my new treasures. This is an awesome idea
                  and I can’t thank you enough.
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r10}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="btn_2">
              <Link to="/bestsellers"></Link>
            </div>
            <div className="review_container">
              <div className="review_icon">
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
                <AiFillStar size="1.3rem" />
              </div>
              <h5 className="review_title">Morgan Selvog</h5>
              <div className="review_text">
                <p>
                  I ordered 2 of the same shirt one for grandpa and 1 for dad.
                  Great quality, and timely delivery. Even made grandpa tear up!
                </p>
              </div>
              <img
                className="review_img"
                style={{ width: "260px" }}
                src={r11}
                alt="#"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
