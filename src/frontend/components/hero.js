
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import axios from "axios";
import API from "../../utils";
import { getDocument } from 'pdfjs-dist/webpack';
// import pdffile from "../../assets/pdf/kashbah.pdf"
import magazineImage1 from "../../assets/img/magazines/magazineImage1.webp"
import magazineImage2 from "../../assets/img/magazines/magazineImage2.webp"
import magazineImage3 from "../../assets/img/magazines/magazineImage3.webp"

import 'pdfjs-dist/web/pdf_viewer.css';

function Hero() {
  const [sliderData, setSliderData] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [pdfImages, setPdfImages] = useState([]);
  const imagesArray = [magazineImage1, magazineImage2, magazineImage3,magazineImage1, magazineImage2, magazineImage3,magazineImage3,magazineImage1,magazineImage1, magazineImage2, magazineImage3,magazineImage1, magazineImage2, magazineImage3,magazineImage3,magazineImage1 ];
  const handleSelect = (selectedIndex) => {
    setSliderIndex(selectedIndex);
  };

  useEffect(() => {
    fetchMagazines();
  }, []);

  const fetchMagazines = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allMagazines}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = response.data;
      // console.log("Magazines data:", data);
      if (data.status === true) {
        setSliderData(data.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

 

  return (
    <>
    <section className="hero-section">
      <Container>
        <div className="hero-slider">
          <Row>
            <Col lg={4} md={4} className="mt-3">
              <Carousel activeIndex={sliderIndex} onSelect={handleSelect}>
                {sliderData.map((magazine, index) => (
                  <Carousel.Item key={index}>
                    <img src={magazine.thumbnail} alt={`Slide ${index + 1}`} className="slider-img" />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col lg={8} md={8} className="mt-3">
              <Carousel activeIndex={sliderIndex} onSelect={handleSelect}>
                {imagesArray.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img src={image} alt={`PDF Slide ${index + 1}`} className="pdf-img" />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
   
    </>
  );
}

export default Hero;
