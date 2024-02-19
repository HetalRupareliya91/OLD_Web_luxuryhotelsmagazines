import React, { useEffect, useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import axios from "axios";
import API from "../../utils";

function Hero() {
  const [sliderData, setSliderData] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [activeFileImages, setActiveFileImages] = useState([]);
  const handleSelect = (selectedIndex) => {
    setSliderIndex(selectedIndex);
  };

  const handleSlide = (selectedIndex) => {
    setSliderIndex(selectedIndex);
    setActiveFileImages(sliderData[selectedIndex].file_image || []);
  };

  useEffect(() => {
    fetchMagazines();
  }, []);

  const fetchMagazines = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allMagazines}`, {
        headers: {
          Authorization: "hXuRUGsEGuhGf6KM",
        },
      });
      const data = response.data;
      if (data.status === true) {
        setSliderData(data.data);
        setActiveFileImages(data.data[0].file_image || []);
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
                <Carousel activeIndex={sliderIndex} onSelect={handleSelect} onSlide={handleSlide}  interval={null} >
                  {sliderData.map((magazine, index) => (
                    <Carousel.Item key={index}>
                      <img src={magazine.thumbnail} alt={`Slide ${index + 1}`} className="slider-img" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col lg={8} md={8} className="mt-3">
                <Carousel>
                  {activeFileImages.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img src={image} alt={`Image ${index + 1}`} className="pdf-img" />
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