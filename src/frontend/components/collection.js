import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import News4 from '../../assets/img/news4.jpg';
import News5 from '../../assets/img/news5.jpg';
import News6 from '../../assets/img/news6.jpg';
import News7 from '../../assets/img/news7.jpg';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Collections() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
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

    const newsItems = [
        { id: 1, image: News4, country:"Dubai", title: 'Jumeirah Al Qasr Hotel, Dubai' },
        { id: 2, image: News5, country:"Germany", title: 'Jumeirah Al Qasr Hotel, Dubai' },
        { id: 3, image: News6, country:"Kuwait", title: 'Jumeirah Al Qasr Hotel, Dubai' },
        { id: 4, image: News7, country:"Dubai",  title: 'Jumeirah Al Qasr Hotel, Dubai' },
        { id: 5, image: News7, country:"Dubai",  title: 'Jumeirah Al Qasr Hotel, Dubai' },
    ];

    return (
        <section className="services-section spad">
              <div className="page-headings mb-4">
<div className="heading-section">
<h1 className="">Best Luxury Hotels Of The Year</h1>
</div>
</div>
            <Container>

                <Slider {...sliderSettings}>
                    {newsItems.map((item) => (
                        <div key={item.id}>
                            <figure>
                                                            {/* <div className="img-dec"><span className="img-dec-country">{hotel.country}</span><div className="coutryname">{hotel.hotel_title}</div></div> */}

                                <div className="img-dec"><span className="img-dec-country">{item.country}</span><div className="coutryname">{item.title}</div></div>
                                <div className="thumbnail">
                                    <div>
                                        <NavLink to="/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux" className="readmore">
                                            Read More
                                        </NavLink>
                                    </div>
                                    <Image src={item.image} />
                                </div>
                            </figure>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
}

export default Collections;
