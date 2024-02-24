import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Hero3 from "../../assets/img/hero/hero-3.jpg";
import { Parallax } from "react-parallax";
import PayPalButton from "../components/paypal";

function NominateForm() {
    return (
        <>
            <Parallax blur={0} bgImage={Hero3} bgImageAlt="the cat" strength={300}>
                <section className="what-are-you-intersted-in spad">
                    <Container>
                        <div>
                            <div className="title-subtitle mt-0 text-center">
                                Submit Your Hotel As the LUXURY HOTEL of the Year
                            </div>
                            <div className="woodmart-title-container text-center">
                                You can submit your hotel as the Luxury hotel of the Year
                            </div>
                            <Form>

                                <Form.Label>
                                    Your Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="mb-3"
                                    placeholder="Your Name"
                                >

                                </Form.Control>
                                <Form.Label>
                                    Your Email
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="mb-3"
                                    placeholder="Your Email"
                                >

                                </Form.Control>
                                <Form.Label>
                                    What Hotel Are You Representing?
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3} // You can adjust the number of rows as needed
                                    className="mb-3"
                                    placeholder="Hotel Name"
                                />

                                <Form.Label>
                                    Attach Photos
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    className="mb-3"
                                >
                                </Form.Control>

                                <Form.Label>
                                    YouTube Link
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="mb-3"
                                    placeholder="YouTube Link Here"
                                >
                                </Form.Control>
                                <div className=" w-25">
                                    <PayPalButton />
                                </div>
                                <button className="mt-4 w-25">SUBMIT</button>
                            </Form>

                        </div>

                    </Container>

                </section>
            </Parallax>
        </>
    );
}

export default NominateForm;
