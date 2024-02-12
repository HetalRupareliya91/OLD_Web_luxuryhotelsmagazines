import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram, FaLinkedin, FaSnapchat, FaEye, FaHeart, FaMapMarker, FaBuilding, FaSpaceShuttle, FaHome, FaList, FaPencilAlt, FaWifi, FaSwimmingPool, FaBars, FaWineBottle, FaCloudMeatball, FaTableTennis, FaRedRiver, FaRestroom, FaFootballBall, FaConciergeBell, FaFileSignature, FaGlasses, FaRProject } from 'react-icons/fa';



import News5 from '../../assets/img/news5.jpg'
import News6 from '../../assets/img/news6.jpg'
import Logo from "../../assets/img/logo.svg"
// import video from "../../assets/videos/hotelVideo.mp4"
import API from "../../utils";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { FileEarmarkCheckFill, GeoAltFill } from "react-bootstrap-icons";
import Review from "../components/hotelReview";
import HotelSlider from "../components/youMayLikeHotel";
import VotingForm from "../components/votingForm";
import ShareThisButtons from "../components/shareButtons";
function RoomDetails() {
    const [aminitesData, setAminitesData]=useState([])
    const [facilitiesData, setFacilitiesData]=useState([])

    const { hotelId } = useParams();
    console.log(hotelId);

    const [postData, setPostData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
        //   const token = localStorage.getItem("token");
          try {
            // Make a POST request with the id
            const response = await axios.post(
              `${API.BASE_URL}${API.ENDPOINTS.editHotel}`,
              { hotel_id: hotelId },
              {
                headers: {
                    Authorization: "hXuRUGsEGuhGf6KM",
                },
              }
            );
    
            const data = response.data;
    
            if (data.status === true) {
              
              setPostData ( data.data);

              
            } else {
              console.error('Failed to fetch post data');
            }
          } catch (error) {
            console.error('Error:', error.message);
          }
        };
    
        if (hotelId) {
          fetchData();
        }
      }, [hotelId]);
    
     
      const fetchAmenities = async () => {
        // const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotelAmenities}`, {
                headers: {
                    Authorization: "hXuRUGsEGuhGf6KM",
                },
            });
            const data = response.data;
            console.log('Amenities data:', data);
            if (data.status === true && Array.isArray(data.data)) {
                setAminitesData(data)
            
            } else {
                console.error('Invalid format: Amenities data is not an array.');
            }
        } catch (error) {
            console.error('Error fetching amenities:', error);
        }
    };

    useEffect(() => {
        fetchAmenities();
    }, []);


    const fetchfacilities = async () => {
        // const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allhotelfacilities}`, {
                headers: {
                    Authorization: "hXuRUGsEGuhGf6KM",
                },
            });
            const data = response.data;
            console.log('facilites data:', data);
            if (data.status === true && Array.isArray(data.data)) {
                setFacilitiesData(data)
                
            } else {
                console.error('Invalid format: Facilities data is not an array.');
            }
        } catch (error) {
            console.error('Error fetching Facilities:', error);
        }
    };

    useEffect(() => {
        fetchfacilities();
    }, []);

    return (
        <><Header />
            <section className="room-details-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">

                            <div className="row ">
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-lg-12 col-6"><img src={News5} alt="" className="mb-2" /></div>
                                        <div className="col-lg-12 col-6"><img src={News5} alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <img src={News5} alt="" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 text-end ">
                                    <h4 className="mt-4">{postData.hotel_title} </h4>
                                    <div className="d-flex justify-content-end"><GeoAltFill className="m-0 locaton-icon" />
                                        <p>{postData.country}</p></div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <iframe width="100%" height="450" src={postData.youtube_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-8">
                            <div className="rd-text">

                              
                              <p dangerouslySetInnerHTML={{ __html: postData.about_hotel }} />
                            </div>

                            <div className="rd-text">
                                <div className="rd-title">
                                    <GeoAltFill className="m-0 locaton-icon" /> Location
                                </div>


                                <p dangerouslySetInnerHTML={{ __html: postData.address }} />

                            </div>
                            <div className="rd-text">
                                <div className="rd-title">
                                    <i aria-hidden="true"><FaBuilding /></i> Rooms & Suites
                                </div>
                                

                                <p dangerouslySetInnerHTML={{ __html: postData.rooms_and_suites }} />

                            </div>
                            <div className="rd-text">
                                <div className="rd-title">
                                    <i className="fa fa-cutlery" aria-hidden="true"><FaSpaceShuttle /></i>  Restaurants & Bars
                                </div>


                              <p dangerouslySetInnerHTML={{ __html: postData.restaurent_bars }} />
                            </div>
                            <div className="rd-text">
                                <div className="rd-title">
                                    <i aria-hidden="true"><FaHome /></i> Spa & Wellness
                                </div>


                                <p dangerouslySetInnerHTML={{ __html: postData.spa_wellness }} />

                            </div>
                            <div className="rd-text">
                                <div className="rd-title">
                                    <i aria-hidden="true"><FaList /></i> Other Facilities
                                </div>

                           <p dangerouslySetInnerHTML={{ __html: postData.other_facilities }} />

                            </div>
                            <div className="rd-text">
                                <div className="rd-title">
                                    <i aria-hidden="true"><FaPencilAlt /></i>  Additional information
                                </div>
                                

                                <p dangerouslySetInnerHTML={{ __html: postData.aditional_information }} />

                            </div>

                            <div className="rd-text">
                                <div className="rd-title">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i> Share This
                                </div>

                                <ShareThisButtons/>

                                {/* <div className="row">
                                    <div className="col-lg-8"><p className="f-para sharethis mt-2">
                                        <i aria-hidden="true"><FaFacebook /></i>
                                        <i aria-hidden="true"><FaInstagram /></i>
                                        <i aria-hidden="true"><FaTwitter /></i>
                                        <i aria-hidden="true"><FaWhatsapp /></i>
                                        <i aria-hidden="true"><FaTelegram /></i>
                                        <i aria-hidden="true"><FaLinkedin /></i>
                                        <i aria-hidden="true"><FaSnapchat /></i>
                                        <i aria-hidden="true"><FaTiktok /></i>
                                        <i aria-hidden="true"><FaViber /></i>
                                        <i aria-hidden="true"><FaFacebookMessenger /></i>
                                        <i aria-hidden="true"><FaEnvelope /></i>
                                        
                                    </p></div>
                    
                                </div> */}


                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hotel-logo">
                                <img src={Logo} alt="" className="w-50" />
                            </div>
                            <div className=" ">
                              
                                <VotingForm  hotelId={hotelId}/>
                               

                                <div className="locationmap mt-3">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29759.049789885605!2d72.75953112132576!3d21.196876856223426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c351ceae251%3A0x1d35b30f855a2c36!2sAdajan%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703916461865!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                                </div>
                                <div className="row  ">
                                    <div className="col-lg-6 mt-3 text-center"><button className=" btn-default w-100"><NavLink to={postData.website}>Book Online </NavLink></button></div>
                                    <div className="col-lg-6 mt-3 text-center"><button className=" btn-default w-100"><NavLink to={postData.website}>Visit Website </NavLink></button>

                                    </div>
                                    <div className="col-lg-12 mt-3 text-center"><a href="/pricing-plan"><button className=" btn-default w-100">Claim Listing</button></a>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h2>Hotel Website Visits</h2>

                              <div className="d-flex justify-content-around">
                                
                              </div>

                                    <p className="f-para likeview mt-2 d-flex justify-content-around">
                                        <i aria-hidden="true"><FaEye />&nbsp;10 Views</i>
                                        <i aria-hidden="true"><FaHeart />&nbsp;5 Likes</i>
                                    </p>
                                    <p className="f-para likeview mt-2 d-flex justify-content-around">
                                        <i aria-hidden="true"><FaRProject />&nbsp;8 Reviews </i>
                                        <i aria-hidden="true"><FileEarmarkCheckFill />&nbsp;2 votes </i>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="room-details-aminites">
                            <div className="text-center m-4">
                                <h1>Hotel Amenities</h1>

                            </div>
                            <div>


                                <Row className="room-details-aminites-row">
                                    <Col lg={3} className="col-section">
                                        <div className="aminites d-flex">
                                            <FaWifi className="aminites-icon m-0" />
                                            <p>Numbers Of Rooms</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="aminites d-flex">
                                            <FaSwimmingPool className="aminites-icon m-0" />
                                            <p> swimming pool:1</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="aminites d-flex">
                                            <FaWineBottle className="aminites-icon m-0" />
                                            <p> Bars :1</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="aminites d-flex">
                                            <FaCloudMeatball className="aminites-icon m-0" />
                                            <p>Kids club</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="aminites d-flex">
                                            <FaTableTennis className="aminites-icon m-0" />
                                            <p> Teens Club</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="aminites d-flex">
                                            <FaRedRiver className="aminites-icon m-0" />
                                            <p> Private driver</p>
                                        </div>
                                    </Col>

                                    <Col lg={3} className="col-section">
                                        <div className="aminites d-flex">
                                            <FaRestroom className="aminites-icon m-0" />
                                            <p> Room service</p>
                                        </div>
                                    </Col>

                                    <Col lg={3} className="col-section">
                                        <div className="aminites-icon aminites d-flex">
                                            <FaFootballBall className="aminites-icon m-0" />
                                            <p> Sport classes</p>
                                        </div>
                                    </Col>

                                    <Col lg={3} className="col-section">
                                        <div className="aminites d-flex">
                                            <FaConciergeBell className="aminites-icon m-0" />
                                            <p> Concierge service
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="aminites d-flex">
                                            <FaFileSignature className="aminites-icon m-0" />
                                            <p> Fitness center</p>
                                        </div>
                                    </Col>
                                </Row>


                            </div>
                        </div>


                        <div className="most-popular-facilites">
                            <div className="text-center m-4">
                                <h1>Most Popular Facilites</h1>

                            </div>
                            <div>


                                <Row className="most-popular-facilites-row">
                                    <Col lg={3} className="col-section">
                                        <div className="facilites d-flex">
                                            <FaWifi className="aminites-icon m-0" />
                                            <p>Outdoor swimming pool</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="facilites d-flex">
                                            <FaSwimmingPool className="aminites-icon m-0" />
                                            <p>Fitness center</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="facilites d-flex">
                                            <FaWineBottle className="aminites-icon m-0" />
                                            <p>Non-smiking rooms</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="facilites d-flex">
                                            <FaCloudMeatball className="aminites-icon m-0" />
                                            <p>Spa & Wellness</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="facilites d-flex">
                                            <FaTableTennis className="aminites-icon m-0" />
                                            <p>Restaurants</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="facilites d-flex">
                                            <FaRedRiver className="aminites-icon m-0" />
                                            <p>Tea/coffee maker in all rooms</p>
                                        </div>
                                    </Col>

                                    <Col lg={3} className="col-section">
                                        <div className="facilites d-flex">
                                            <FaRestroom className="aminites-icon m-0" />
                                            <p>Bar</p>
                                        </div>
                                    </Col>

                                    <Col lg={3} className="col-section">
                                        <div className="facilites d-flex">
                                            <FaFootballBall className="aminites-icon m-0" />
                                            <p>Good breakfasty</p>
                                        </div>
                                    </Col>

                                    <Col lg={3} className="col-section">
                                        <div className="facilites d-flex">
                                            <FaConciergeBell className="aminites-icon m-0" />
                                            <p> 
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-section">
                                        <div className="facilites d-flex">
                                            <FaFileSignature className="aminites-icon m-0" />
                                            <p>Childern's Cots</p>
                                        </div>
                                    </Col>
                                </Row>


                            </div>
                        </div>


                        <Review />

                    </div>

                    <HotelSlider/>
                </div>
            </section>
            <Footer />
        </>

    );
}
export default RoomDetails;