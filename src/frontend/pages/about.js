import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
import AboutImage from "../../assets/img/magazines/magazines.webp";
import API from "../../utils";
import axios from "axios";
function AboutUsPage() {
    const [apiData,setApiData]=useState([])

    const fetchDetails = async (e) => {
        // const token = localStorage.getItem("token");
        if (e) e.preventDefault();

        try {
            const response = await axios.get(
                `${API.BASE_URL}${API.ENDPOINTS.aboutUs}`,
                {
                    headers: {
                        Authorization: "hXuRUGsEGuhGf6KM",
                    },
                }
            );

            const data = response.data;
            // console.log("myData", data);
            if (data.status === true) {
                setApiData(data.message);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    useEffect(() => {
        fetchDetails()
    }, []);


    return (
        <>
            <Header />
            <section className="about-content my-5">
                <Container>
                    {apiData && (
                        <>
                            <h1 className="text-center">{apiData.title}</h1>
                            <Row>
                                <Col className="my-4" md={4}>
                                    <Image src={apiData.about_image} alt={apiData.title} />
                                </Col>
                                <Col className="my-4" md={8}>
                                    <p className="my-2">{apiData.about_content}</p>
                                </Col>
                            </Row>
                        </>
                    )}
                </Container>
            </section>
            <CallToAction />
            <Footer />

        </>
    );
}
export default AboutUsPage;