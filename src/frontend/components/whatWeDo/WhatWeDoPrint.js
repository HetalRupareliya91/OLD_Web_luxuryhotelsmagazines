import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
import bg1 from "../../../assets/img/magazines/BG7.jpg"
import Magazines1 from "../../../assets/img/magazines/magazines.webp"
import { FaBook, FaBookOpen, FaHandshake, FaLaptopMedical, FaLeaf, FaQuestionCircle, FaTrophy } from "react-icons/fa";
import icons from "../../../assets/img/magazines/RETAILERS-LOGOS-4.png";
import { Link } from "react-router-dom";

function WhatWeDoPrint() {
    return (
        <Parallax blur={0} bgImage={bg1} bgImageAlt="the cat" strength={300}>
            <section className="what-we-do-print-section " id="print">

                <Container>

                    <div className="main-div text-center ">
                        <div className="title-subtitle">PRINT</div>

                        <div className="liner-continer">
                            <span className="left-line"></span>
                            <span className="woodmart-title-container title ">Take a look at some of our print options below</span>
                            <span className="right-line"></span>
                        </div>

                        <div>
                            <Row>

                                <Col lg={6} md={6}>
                                    <div className="print-image-div mt-5 mb-5">
                                        <Image src={Magazines1} className="what-we-do-print-section-image"></Image>
                                    </div>
                                </Col>

                                <Col lg={6} md={6}>
                                    <div className="vc_column-inner text-left">
                                        <div className="mb-4">
                                            <h3>LUXURY HOTEL MAGAZINE</h3>
                                        </div>
                                        <div className="mb-4">
                                            <p>With a new redesign, a readership of 100,000 and a bigger, higher-quality magazine than ever before, LUXURY HOTEL’s six collectable double issues a year take its engaged readers on a journey all across the world. Covering everywhere from the far-flung, undiscovered corners of the world to hidden sides of well-known destinations, our award-winning magazine inspires our audience of super travellers through powerful photography and expert-written copy and gives them a real insight into diversity of cultures, histories, people and nature from across the globe.</p>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col lg={12} className="avail my-3">
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

                        <Row>
                            <Col lg={6} >
                                <div>
                                    <h2>Request your FREE digital sample to see why people love us.</h2>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <Link to="/subscribe-digital-copy" >
                                    <button className="w-75">
                                        <FaBookOpen /> REQUEST FREE DIGITAL COPY
                                    </button>
                                </Link>
                            </Col>
                        </Row>

                        <div className="available-in">
                            <span className="right-line"></span>
                        </div>
                    </div>

                </Container>
            </section>
        </Parallax>

    );
}
export default WhatWeDoPrint;