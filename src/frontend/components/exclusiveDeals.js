import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneSquare } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from "react-parallax";
import Hero3 from "../../assets/img/hero/hero-3.jpg";
import { NavLink } from "react-router-dom";

function KnoledgeTest() {
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

  // const handlePrev = () => {
  //   sliderRef.current.slickPrev();
  // };

  // const handleNext = () => {
  //   sliderRef.current.slickNext();
  // };

  const deals = [
    {
      title: "GRACIAN BAY HOTEL",
      phone: "35723 842000",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "RAFFLES UDAIPUR",
      phone: "7779020705",
      content: "RISE AND SHINE",
      description: "When you stay in one of our exquisite suites or villas, you will receive a free breakfast for two to start your day beautifully",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },


  ];

  return (
    <Parallax blur={8} bgImage={Hero3} bgImageAlt="the cat" strength={100} className="advertise-first-section">
      <section>
        <div className="page-headings mb-4">
          <div className="heading-section">
            <h1 className="">Exclusive Deals </h1>
          </div>
        </div>
        <Container>

          <Slider {...sliderSettings} ref={sliderRef}>
            {deals.map((deal, index) => (

              <div key={index} className="text-center exclusive-deals">
                <div className="mb-2 flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <div className="banner">
                        <a>
                          <h6 className="title">{deal.title}</h6>
                        </a>
                      </div>
                    </div>

                    <div class="flip-box-back">
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
                          <h6>{deal.description}</h6>
                        </a>
                      </div>
                      <div>
                        <span className="valid">{deal.valid}</span>
                      </div>
                      <hr className="m-0" />
                      <div>
                        <span>
                          Stay with us for three or five nights at The Oberoi Beach Resort,
                          Lombok. For the holiday of a lifetime.
                        </span>
                      </div>
                    </div>                  
                  </div>
                </div>
                <NavLink to='/hotel-details' className="my-3 btn_nav">CLAIM</NavLink>
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </Parallax>
  );
}

export default KnoledgeTest;
