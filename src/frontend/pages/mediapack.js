import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import SocialImage from "../../assets/img/mediapack/social.png";
import DigitalImage from "../../assets/img/mediapack/degitalpack.jpg";
import mediapackimage from "../../assets/img/mediapack/computer.webp"
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
import axios from "axios";
import API from "../../utils";
import { NavLink } from "react-router-dom";
function Mediapack() {
const [mediapack, setMediaPack]=useState([])
    const fetchMediaPack = async () => {
        // const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allMedia}`,
          {
            headers: {
              Authorization: "hXuRUGsEGuhGf6KM",
            }
          });
          const responseData = response.data;
         
         console.log("fdhfdihgihgfiu",responseData)
          if (responseData.status === true) {
            setMediaPack(responseData.data );
    
          } else {
            console.error("Failed to fetch data");
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
    
      useEffect(() => {
        fetchMediaPack();
       
      }, []);
    return (
        <>
            <Header />
            <section className="mt-5 mb-3">
                <Container>
                    <h1 className="text-center">Media Pack</h1>
                </Container>
            </section>

            <section className="my-3 media-pack-section">
                <Container>
                <Row>
            {mediapack.map((item) => (
              <Col lg={6} md={6} key={item.id} className="media-pack-cols p-0">
                <div>
                  <NavLink to={`/kit-detail/${item.id}/${item.title}`}>
                    <Image src={item.media_kit_image} alt={item.title} />
                    <div className="px-3">
                      <h5 className="mt-3">{item.title}</h5>
                    </div>
                  </NavLink>
                </div>
              </Col>
            ))}
          </Row>
                </Container>                
            </section>


            <CallToAction />
            <Footer />

        </>
    );
}
export default Mediapack;