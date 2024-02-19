import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";
import Hero3 from "../../../assets/img/hero/hero-3.jpg";

import { FaPhoneSquare, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Magazines1 from "../../../assets/img/magazines/magazines.webp"
import Magazines2 from "../../../assets/img/magazines/magazines2.webp"
import Magazines3 from "../../../assets/img/magazines/magazines3.webp"
import textureimage from "../../../assets/img/redtexure.jpg"
import { NavLink } from "react-router-dom";


function Advertise() {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
          ],

    };
    return (
        <>
            <Parallax blur={8} bgImage={Hero3} bgImageAlt="the cat" strength={100} className="advertise-first-section">
                <section className="spad">
                    <h1 className="text-center text-white mb-4">Our Packages</h1>
                    <Container className="adv-container">
                        <Slider {...sliderSettings}>
                      
                                <div className="card-inner-section" >

                                    <div className="card-inner-section-background ">
                                        <div className="text-center ">
                                            <p className="heading1">Video Banner (Home Page)</p>
                                            <p className="heading">(Minimum Term 3 months)</p>
                                            
                                        </div>
                                        <div className="text-end">
                                    <p className="heading">€80/month </p>
                                    </div>
                                    </div>
                                   

                                    <div className="scrollable-content">
                                    <div className="card-inner-section-textarea ">
                                        <div className="text-center" >
                                            <h3>What included</h3>
                                        </div>
                                        <ul>
                                            <li >Video Banner exposure to approximately 1 million subscribers</li>
                                            <li >Reach 1.5 million monthly website visitors</li>

                                            <li>Extensive sharing of your banner on 13 Social Networks & 550 Groups</li>
                                            <li>A direct hyperlink from Video Banner to your website</li>
                                            <li>A hyperlink from the Video to your YouTube channel</li>
                                            <li>Seamless direct bookings on your website</li>
                                            <li>Detailed Google Analytics reports</li>
                                            <li>A remarkable increase in sales by 225%</li>
                                            {/* <li>A remarkable increase in sales by 225%</li> */}
                                            <li>Seamless direct bookings on your website</li>
                                        </ul>
                                        <div className="text-center Original-price">
                                        <p >
                                               <b> *Original price 450 </b></p>
                                            <p >
                                               <b> *Offer valid till 31-12-2023</b>
                                            </p>
                                            <button className="w-50"> <NavLink className="subscribe_text" to="/publish-video-banner">Subscribe Now</NavLink></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                                <div className="card-inner-section" >

                                    <div className="card-inner-section-background ">
                                        <div className="text-center ">
                                            <p className="heading1">Animated Banner</p>
                                            <p className="heading">(Minimum Term of 3 months)</p>
                                           
                                         
                                        </div>
                                        <div className="text-end">
                                    <p className="heading">€80/month </p>
                                    </div>
                                    </div>
                                    <div className="scrollable-content">
                                    <div className="card-inner-section-textarea ">
                                        <div className="text-center" >
                                            <h3>What included</h3>
                                        </div>
                                        <ul>
                                            <li >Video Banner exposure to approximately 1 million subscribers</li>
                                            <li >Reach 1.5 million monthly website visitors</li>

                                            <li>Extensive sharing of your banner on 13 Social Networks & 550 Groups</li>
                                            <li>A direct hyperlink from Video Banner to your website</li>
                                            <li>A hyperlink from the Video to your YouTube channel</li>
                                            <li>Seamless direct bookings on your website</li>
                                            <li>Detailed Google Analytics reports</li>
                                            <li>A remarkable increase in sales by 225%</li>
                                            <li>Seamless direct bookings on your website</li>
                                        </ul>
                                        <div className="text-center">
                                        <p >
                                               <b> *Original price 450 </b></p>
                                            <p >
                                               <b> *Offer valid till 31-12-2023</b>
                                            </p>
                                            <button className="w-50"> <a className="subscribe_text" href="/publish-animated-banner">Subscribe Now</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="card-inner-section" >

                                    <div className="card-inner-section-background ">
                                        <div className="text-center ">
                                            <p className="heading1">Hotel Profile</p>
                                            <p className="heading">(Minimum Term of 6 months)</p>
                                        
                                        </div>
                                        <div className="text-end">
                                        <p className="heading">€99 for 6 months !
                                            </p>
                                            </div>
                                    </div>
                                    <div className="scrollable-content">
                                    <div className="card-inner-section-textarea ">
                                        <div className="text-center" >
                                            <h3>What included</h3>
                                        </div>
                                        <ul>
                                            <li >
                                                Sharing Hotel Profile with 1 million subscribers
                                                Adjust Hotel profile at any time within
                                            </li>
                                            <li >
                                                Sharing Hotel Profile with 1 million subscribers
                                            </li>
                                            <li >
                                                Adjust Hotel profile at any time
                                            </li>

                                            <li>Share your profile on the 5 Partners Program</li>
                                            <li>Share your profile on our 13 Social Networks & 550 Groups</li>
                                            <li>The profile contains: pictures, content, a list of amenities, and a video </li>
                                            <li>Ability to add Exclusive Offers to the profile at any time</li>
                                            {/* <li>Links to the Hotel website for convenient bookings</li>  */}
                                        </ul>
                                        <div className="text-center">
                                        <p >
                                            <b>*Original price 399 </b></p>
                                            <p >
                                                <b>*Offer valid till 31-12-2023</b>
                                            </p>
                                            <button className="w-50"> <NavLink className="subscribe_text" to="/signup">Subscribe Now</NavLink></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                                <div className="card-inner-section" >

                                    <div className="card-inner-section-background ">
                                        <div className="text-center ">
                                            <p className="heading1">Hotel Profile</p>
                                            <p className="heading">(Annual Plan)</p>
                                           
                                        </div>
                                        <div className="text-end">
                                        <p className="heading">€199 per Year </p>                         
                                             </div>
                                    </div>
                                    <div className="scrollable-content">
                                    <div className="card-inner-section-textarea ">
                                        <div className="text-center" >
                                            <h3>What included</h3>
                                        </div>
                                        <ul>
                                            <li >Sharing Hotel Profile with 1 million subscribers</li>
                                            <li >Adjust Hotel profile at any time within a 12-months term</li>
                                            <li >Share profile on the 5 Partners Program</li>
                                            <li >Share profile on 13 Social Networks & 550 Groups</li>
                                            <li >The profile contains: pictures, content, a list of amenities, and a video</li>
                                            <li >Ability to add special offers to the profile at any time</li>
                                            <li >Links to the Hotel website for convenient bookings</li>
                                            <li >No commission is charged</li>
                                            <li >Nomination for voting in "The Best Luxury Hotel of the Year" award</li>

                                        </ul>
                                        <div className="text-center">
                                        <p >
                                            <b>*Original price 499</b></p>
                                            <p >
                                             <b>   *Offer valid till 31-12-2023</b>
                                            </p>
                                            <button className="w-50"> <NavLink className="subscribe_text" to="/signup">Subscribe Now</NavLink></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                                <div className="card-inner-section" >

                                    <div className="card-inner-section-background ">
                                        <div>
                                            <p className="heading1 text-center">Post Your Business PR/News</p>
                                            <p className="heading text-center ">(Unlimited Period of Time)</p>
                                        
                                        </div >
                                        <div className="text-end">
                                        <p className="heading">€15 per News or PR!
                                            </p>
                                            </div>
                                    </div>
                                    <div className="scrollable-content">
                                    <div className="card-inner-section-textarea ">
                                        <div className="text-center" >
                                            <h3>What included</h3>
                                        </div>
                                        <ul>
                                            <li >Video Banner exposure to approximately 1 million subscribers</li>
                                            <li >Reach 1.5 million monthly website visitors</li>

                                            <li>Extensive sharing of your banner on 13 Social Networks & 550 Groups</li>
                                            <li>A direct hyperlink from Video Banner to your website</li>
                                            <li>A hyperlink from the Video to your YouTube channel</li>
                                            <li>Seamless direct bookings on your website</li>
                                            <li>Detailed Google Analytics reports</li>
                                            <li>A remarkable increase in sales by 225%</li>
                                            <li>Seamless direct bookings on your website</li>
                                        </ul>
                                        <div className="text-center">
                                        <p >
                                               <b> *Original price 450</b></p>
                                            <p >
                                               <b> *Offer valid till 31-12-2023</b>
                                            </p>
                                            <button className="w-50"> <NavLink className="subscribe_text" to="/publish-news-pr">Subscribe Now</NavLink></button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                     
                        </Slider>

                       
                    </Container>
                </section>

            </Parallax>

        </>
    );
}
export default Advertise;