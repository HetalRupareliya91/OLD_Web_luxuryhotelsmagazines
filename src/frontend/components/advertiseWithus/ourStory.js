import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg"
import icons from "../../../assets/img/magazines/RETAILERS-LOGOS-4.png";
import CountUp from "react-countup";
function OurStory() {
    return (
        <section className="our-story-section spad">
            <Container className="">
                <div className="our-story-section-container">
                    <Row>
                        <Col lg={6} className="vc_custom_16234106116-col">
                            <div className="vc_custom_16234106116">
                                <div>
                                    <h1 className="mb-3">OUR STORY</h1>
                                    <div className="my-3">
                                        <Image src={Logo} />
                                    </div>
                                    <div>
                                        <p className="mb-4">Unlock global exposure for your luxury hotel on our online platform. Targeted marketing, stunning visuals, and seamless booking ensure your property stands out.</p>
                                        <p className="mb-4">Elevate brand prestige, offer personalized service, and access valuable analytics for strategic decisions. Reach discerning travelers worldwide and maximize bookings effortlessly.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="numbers-div">
                                <div>
                                    <p className="numbersp"> <CountUp end={215} /></p>
                                    <p className="contentp">ISSUES</p>
                                </div>
                                <div>
                                    <p className="numbersp"><CountUp end={100000} /></p>
                                    <p className="contentp">READERS PER ISSUE</p>
                                </div>
                                <div>
                                    <p className="numbersp"><CountUp end={163000} /></p>
                                    <p className="contentp">SOCIAL FOLLOWERS</p>
                                </div>
                                <div>
                                    <p className="numbersp"><CountUp end={1500000} /></p>
                                    <p className="contentp">PAGE VIEWS PER MONTH</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="avail">
                            <div>
                                <h1 >AVAILABLE IN</h1>
                            </div>
                            <div>
                                <span className="sep_line">
                                </span>
                            </div>
                            <div className="box_text">
                            Luxury Hotels connecting high-end hotels with discerning luxury clientele globally. In the current competitive market, attracting and retaining esteemed clients poses a considerable challenge. 
                            </div>

                            {/* <div className="logos">
                                <Image src={icons}></Image>
                            </div> */}
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
export default OurStory;