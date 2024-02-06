
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import axios from "axios";
import API from "../../utils";
import { getDocument } from 'pdfjs-dist/webpack';
// import pdffile from "../../assets/pdf/kashbah.pdf"

import 'pdfjs-dist/web/pdf_viewer.css';

function Hero() {
  const [sliderData, setSliderData] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [pdfImages, setPdfImages] = useState([]);

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
        convertPdfPagesToImages(data.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const convertPdfPagesToImages = async (magazines) => {
    const images = [];
    for (const magazine of magazines) {
      console.log("dsiushgh",magazine.file_pdf[0]);
      const pdf = await getDocument(magazine.file_pdf[0]).promise;
      // console.log("pdf",pdf);

      const page = await pdf.getPage(1);
      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
  
      await page.render({ canvasContext: context, viewport }).promise;
      const imageDataUrl = canvas.toDataURL("image/png");
      images.push(imageDataUrl);
      console.log("imags" ,images);

    }
    setPdfImages(images);
  };
  

  return (
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
                {pdfImages.map((image, index) => (
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
  );
}

export default Hero;
