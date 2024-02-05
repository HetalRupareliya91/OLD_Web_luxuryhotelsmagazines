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

const HotelSlider = () => {
  const hotels = [
    {
      image: News5,
      title: 'Londa Residences Cyprus',
      location: 'England',
      rating: '7.8/10 (Good)',
      description: 'This card has supporting text below as a natural lead-in to additional content.',
    },
    {
      image: News1,
      title: 'Hotel Taj',
      location: 'England',
      rating: '7.8/10 (Good)',
      description: 'This card has supporting text below as a natural lead-in to additional content.',
    },
    {
      image: News2,
      title: 'Hotel Taj',
      location: 'England',
      rating: '7.8/10 (Good)',
      description: 'This card has supporting text below as a natural lead-in to additional content.',
    },

    {
        image: News5,
        title: 'Londa Residences Cyprus',
        location: 'England',
        rating: '7.8/10 (Good)',
        description: 'This card has supporting text below as a natural lead-in to additional content.',
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="alternate-hotels mt-3">
      <div className="text-center m-4">
        <h1>You May Also Like</h1>
      </div>
      <Slider {...settings}>
        {hotels.map((hotel, index) => (
          <div key={index} className="card">
            <Image className="card-img-top" src={hotel.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{hotel.title}</h5>
              <h6 className="card-title">{hotel.location}</h6>
              <p className="card-text">{hotel.rating}</p>
              <p className="card-text">{hotel.description}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HotelSlider;
