import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import bg2 from "../../assets/img/magazines/bg4.jpg"
import { Parallax } from "react-parallax";
import Header from "../components/header";
import Footer from "../components/footer";
import ReCAPTCHA from "react-google-recaptcha";
import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import ConnectWithUS from "../components/connectwithus";


function ContactUs() {

    return (
<>
        <Header/>
        <Parallax blur={0} bgImage={bg2} bgImageAlt="the cat" strength={300}>
            <section className="Contact-us-section spad">

            <div className="page-headings ">
<div className="heading-section">
<h1>Contact Us</h1></div>
</div>
                <Container>

                
                    <Row>
                       
                       <Col lg={7}>
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
                           <div >
                            <button className="mt-4 w-25">SUBMIT</button>

                            </div>
                            <hr></hr>
                       
                        </Form>
                       
                        </Col>

                        <Col lg={5}>
                               <ConnectWithUS/>
                            </Col>
                    </Row>

                    

                </Container>

            </section>
        </Parallax>

        <Footer/>
        </>

    );


}
export default ContactUs;
