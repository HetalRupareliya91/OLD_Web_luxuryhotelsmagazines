import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import bg2 from "../../assets/img/magazines/bg4.jpg"
import { Parallax } from "react-parallax";
import Header from "../components/header";
import Footer from "../components/footer";
import ReCAPTCHA from "react-google-recaptcha";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";
import ConnectWithUS from "../components/connectwithus";
import video from "../../assets/video/video.webm"

function ContactUs() {

    return (
        <>
            <Header />
           
        

                
                <div class="bg-video-wrap">
    <video src={video} loop muted autoPlay >
    </video>
    
    <div class="bg_Video">
    <div className="page-headings">
                        <div className="heading-section">
                            <h1>Contact Us</h1></div>
                    </div>
                    <Container>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <Form >

                                    <Form.Label>
                                        Full Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="mb-3"
                                        placeholder="Enter Your Full Name"
                                    >

                                    </Form.Control>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="mb-3"
                                        placeholder="Enter Your Email"
                                    >

                                    </Form.Control>

                                    <Form.Label>
                                        Message
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        className="mb-3"
                                        placeholder="Type your Message here..."
                                    >

                                    </Form.Control>
                                    <div className="text-center">
                                        <ReCAPTCHA
                                            sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                                        //   onChange={handleVerification}
                                        />
                                    </div>
                                    <div className="text-center" >
                                        <button className="mt-4 w-25">SUBMIT</button>

                                    </div>
                                    <hr></hr>
                                    <div><h3>Connect With Us </h3></div>
                <div className="fa-social">

                <div className="d-flex text-center">
                        <a href="mailto:info@luxuryhotelsmagazines.com" target="_blank" className="fa-link">
                            <FaEnvelope /></a>
                        <a href="mailto:info@luxuryhotelsmagazines.com" target="_blank"> info@luxuryhotelsmagazines.com</a>
                    </div>
                    <div className="d-flex text-center">
                        <a href="https://www.facebook.com/LuxuryHotelsMagazines" target="_blank" className="fa-link">
                            <FaFacebook />
                        </a>
                        <a href="https://www.facebook.com/LuxuryHotelsMagazines" target="_blank">@LuxuryHotelsMagazines </a>
                    </div>
                 
                    <div className="d-flex">
                        <a href="https://www.instagram.com/luxuryhotelsbrand/" target="_blank" className="fa-link">
                            <FaInstagram />
                        </a>
                        <a href="https://www.instagram.com/luxuryhotelsbrand/" target="_blank">@LuxuryHotelsBrand</a>
                    </div>
                    {/* <div>
                        <a href='https://www.youtube.com/channel/UCxV4ClKpFA95eU-4c8sN3Tg' target="_blank" className="fa-link">
                            <FaYoutube />
                        </a>
                        <a href='https://www.youtube.com/channel/UCxV4ClKpFA95eU-4c8sN3Tg' target="_blank">Youtube</a>
                    </div> */}
                    <div className="d-flex">
                        <a href="https://www.facebook.com/LuxuryHotelsMagazines" target="_blank" className="fa-link">
                        <FaPhone />
                        </a>
                        <a href="tel:1234567890" target="_blank">(12)34567890</a>
                    </div>
                </div>
                <hr></hr>

                                </Form>

                            </Col>
                            <Col lg={2}></Col>
                        </Row>



                    </Container>
                    </div>
  </div>


            <Footer />
        </>

    );


}
export default ContactUs;
