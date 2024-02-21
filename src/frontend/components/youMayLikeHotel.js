import React from 'react';
import Slider from 'react-slick';
import { Row, Col, Image } from 'react-bootstrap';  // Assuming you are using react-bootstrap for Row, Col, and Image

import News3 from '../../assets/img/news3.jpg'
import News4 from '../../assets/img/news4.jpg'
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News5 from '../../assets/img/news5.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

const HotelSlider = () => {
  const hotels = [
    {
      image: News5,
      title: 'Londa Residences Cyprus',
      date:"2023-07-19"
    },
    {
      image: News1,
      title: 'Hotel Taj',
      date:"2023-08-19"
     
    },
    {
      image: News2,
      title: 'Hotel Taj',
      date:"2023-09-19"
      
    },

    {
        image: News5,
        title: 'Londa Residences Cyprus',
        date:"2023-10-19"


      },
  ];

  const settings = {
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
    <div className="alternate-hotels mt-3">
      <div className="text-center m-4">
        <h1>Best Luxury Hotels Of The Year</h1>
      </div>
      <Slider {...settings}>
        {hotels.map((hotel, index) => (
          <NavLink to ="/hotel-details/18/India/THE%20LODHI">
          <div key={index} className="card">
            <Image className="card-img-top" src={hotel.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{hotel.title}</h5>
              <h6 className="card-title">{hotel.date}</h6>
             
            </div>
          </div>
          </NavLink>
        ))}
      </Slider>
    </div>
  );
};

export default HotelSlider;
