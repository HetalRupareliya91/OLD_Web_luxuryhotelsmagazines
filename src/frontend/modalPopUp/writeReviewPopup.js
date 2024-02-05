    import React, { useState } from "react";
    import Logo from "../../assets/img/logo.svg";
    import { Col, Container, Modal,Row, Image, Form } from "react-bootstrap";
    
    import { FaArrowUp,FaComment,FaHeart,FaList, FaPlus, FaTimes} from "react-icons/fa";
    import { NavLink } from "react-router-dom";
    function WriteReviewPopup (){
      const [showModal, setShowModal] = useState(true);
      const [isDragging, setIsDragging] = useState(false);
      const [progressValue, setProgressValue] = useState(80);
    
      const handleCloseModal = () => setShowModal(false);
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        setShowModal(false);
      };
    
      const handleMouseDown = () => {
        setIsDragging(true);
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };
    
      const handleMouseMove = (event) => {
        if (isDragging) {
          const progressBar = event.target;
          const rect = progressBar.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const width = rect.width;
    
          const calculatedValue = Math.round((x / width) * 100);
          setProgressValue(Math.min(100, Math.max(0, calculatedValue)));
        }
      };
    
      const renderProgressBar = (width) => {
        return (
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${width}%` }}
            aria-valuenow={width}
            aria-valuemin="0"
            aria-valuemax="100"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          ></div>
        );
      };
    
        return(
            <Modal show={showModal} onHide={handleCloseModal} className="modalpopup">
            <Modal.Header closeButton>
            {/* <Modal.Title>Newsletter Popup</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
            <div className="text-center">
                <Image src={Logo} />
            </div>


            <div >
          <div>

            <Row>

              <Col lg={6}>
                <div className="d-flex justify-content-between " ><div>   Staff <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>

                <div className="progress mb-4"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}>

                <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progressValue}%` }}
            aria-valuenow={progressValue}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
                </div>
              </Col>
              <Col lg={6}>

                <div className="d-flex justify-content-between " ><div>   Facilities <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress mb-4">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>

              <Col lg={6}>

                <div className="d-flex justify-content-between " ><div>   Cleanliness <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress mb-4">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={6} >

                <div className="d-flex justify-content-between " ><div>   Comfort <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress mb-4">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={6}>

                <div className="d-flex justify-content-between " ><div>   Value for money <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress mb-4">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={6}>

                <div className="d-flex justify-content-between " ><div>   Another Category <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress mb-4">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
    
            <div className="">
                                <Form action="#" className="contact-form">
                                    <Row >
                                        <Col lg={12} >
                                            <input type="text" placeholder="Your Name" />
                                        </Col>
                                        <Col lg={12}>
                                            <input type="text" placeholder="Your Email" />
                                        </Col>
                                        <Col lg={12}>
                                            <textarea placeholder="Describe Your Experience"></textarea>
                                            <button type="submit" className=" btn-default-submit ">Submit Now</button>
                                        </Col>
                                    </Row>
                                </Form>

                            </div>
            </Modal.Body>
        </Modal>

        )
    }
    export default WriteReviewPopup