import React, { useEffect, useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import axios from "axios";
import API from "../../utils";

function Hero() {
  const [sliderData, setSliderData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFileImages, setActiveFileImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMagazines();
  }, []);

  const fetchMagazines = async () => {
    try {
      const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allMagazines}`, {
        headers: {
          Authorization: "hXuRUGsEGuhGf6KM",
        },
      });
      const data = response.data;
      if (data.status === true) {
        setSliderData(data.data);
        setActiveFileImages(data.data[0]?.file_image || []); // Initialize activeFileImages with the first item's images
        setLoading(false);
      } else {
        setError("Failed to fetch data");
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    setActiveFileImages(sliderData[selectedIndex]?.file_image || []);
    console.log(activeFileImages);
  };

  return (
    <section className="hero-section">
      <Container>
        <div className="hero-slider">
          <Row>
            <Col lg={4} md={4} className="mt-3">             
                <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                  {sliderData.map((magazine, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={magazine.thumbnail}
                        alt={`Slide ${index + 1}`}
                        className="slider-img"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
            </Col>
            <Col lg={8} md={8} className="mt-3">
              {/* Render child carousel only when activeFileImages is available */}
              {activeFileImages.length > 0 && (
                <Carousel>
                  {activeFileImages.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="pdf-img"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
