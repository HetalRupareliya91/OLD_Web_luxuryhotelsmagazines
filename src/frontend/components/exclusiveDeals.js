import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneSquare } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from "react-parallax";
import Hero3 from "../../assets/img/hero/hero-3.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../../utils";
function KnoledgeTest() {
  const[hotels, sethotels]=useState([])
  const[apiData, setApiData]=useState([])
      useEffect(() => {
        allSpecialOffers();
      
        }, []);
        const allSpecialOffers = async () => {
      
          try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allSpecialOffers}`,
          
              {
                headers: {
                  Authorization: "hXuRUGsEGuhGf6KM",
                }
              });
            const data = response.data;
      
      
            if (data.status === true) {
              setApiData(data.data)
              sethotels(data.data.hotels);
            
  
            } else {
              console.error("Failed to fetch data");
            }
          } catch (error) {
            console.error("Error:", error.message);
          }
        };
      

  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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

  const handleClaimClick = (deal) => {
    navigate( `/hotel-details/${deal.hotel_id}/${deal.hotels.country}/${deal.hotels.hotel_title}`, { state: { showOfferSection: true,specialOffersId: deal.id } });
  };
  const deals = [
    {
      title: "GRACIAN BAY HOTEL",
      phone: "35723 842000",
      subtitle:" LONG STAY BONUS ",
      description: "Book 7 nights and more and save!",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental, Hongkong ",
      phone: "+85225220111",
      subtitle:"FANtastic 60 ",
      description: "Celebrate Mandarin Oriental, Hong Kong’s 60th Anniversary with an exclusive 2-night consecutive stay special offers in Club.",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "The Oberoi Beach Resort ",
      phone: "623706138444",
      subtitle:" Timeless luxury and legendary hospitality in exotic Lombok  ",
      description: "Stay with us for three or five nights at The Oberoi Beach Resort, Lombok. For the holiday of a lifetime.",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Porto Sani Hotel, Greece ",
      phone: "+3022374099200",
      subtitle:"10% Off Your Booking ",
      description: "Enjoy 10% off your booking when you book to stay with us on the specific dates above.",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "The Mount Athos Resort ",
      phone: "306957211137",
      subtitle:"Join our loyalty club",
      description: "Become a member of our loyalty club and gain exclusive offer benefits!",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    
    {
      title: "RAFFLES UDAIPUR",
      phone: "+9180017233537",
      subtitle:"RISE AND SHINE",
      description: "When you stay in one of our exquisite suites or villas, you will receive a free breakfast for two to start your day beautifully.Offer Includes:;  Accommodation, Buffet breakfast, Use of health fitness and pool facilities and Complimentary Wi-Fi                                ",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },


  ];

  return (
    <Parallax blur={10} bgImage={Hero3} bgImageAlt="the cat" strength={100} className="advertise-first-section">
      <section>
        <div className="page-headings mb-4">
          <div className="heading-section">
            <h1 className="">Exclusive Deals </h1>
          </div>
        </div>
        <Container>

          <Slider {...sliderSettings} ref={sliderRef}>
            {apiData.map((deal, index) => (

              <div key={index} className="text-center exclusive-deals">
                <div className="mb-2 flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <div className="banner">
                        <a>
                          <h6 className="title">{deal.hotels.hotel_title}</h6>
                        </a> 
                      </div>
                      <div className="mt-2"><button  onClick={() => handleClaimClick(deal)}  className="my-3 btn_nav">CLAIM</button></div>
                    </div>

                    <div className="flip-box-back">
                      <div>
                        <FaPhoneSquare className="phone-icon m-0" />
                      </div>
                      <div>
                        <a>
                          <span>{deal.phone}</span>
                        </a>
                      </div>
                      <div>
                        <a>
                          <h6 className="subtitle">{deal.offer_title}</h6>
                        </a>
                      </div>
                      <div>
                        <span className="valid">Valid from {deal.from_date} to {deal.to_date}</span>
                      </div>
                      <hr className="m-0" />
                      <div>
                        <a>
                          <h6>{deal.description}</h6>
                        </a>
                      </div>
                      <div className="mt-2"><button className="my-3 btn_nav" onClick={() => handleClaimClick(deal)} >CLAIM</button></div>
                    </div>                  
                  </div>
                </div>
              
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </Parallax>
  );
}

export default KnoledgeTest;