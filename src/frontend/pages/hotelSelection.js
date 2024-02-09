import React,{useState,useEffect}  from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import Rooms4 from "../../assets/img/room/room-4.jpg"
import Rooms5 from "../../assets/img/room/room-5.jpg"
import Rooms6 from "../../assets/img/room/room-6.jpg"
import Search from "../components/search";
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { GeoAltFill } from 'react-bootstrap-icons';
import SearchWithBackground from "../components/searchWithBackground";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";

import axios from "axios";
import API from "../../utils";
function HotelSelection(){
  const [apiData,setApiData]=useState("")
  const [hotelData,setHotelData]=useState([])
  const  type="hotelselection"
       
  useEffect(() => {
      const fetchDetails = async (e) => {
          if (e) e.preventDefault();
  
          try {
              const response = await axios.post(
                  `${API.BASE_URL}${API.ENDPOINTS.singlePageDetails}`,
                  {
                      type: type,  
                  },
                  {
                      headers: {
                          Authorization: "hXuRUGsEGuhGf6KM",
                      },
                  }
              );
  
              const data = response.data;
              // console.log("myData", data);
              if (data.status === true) {
                  setApiData(data.data.details);
              } else {
                  console.error("signup failed:");
              }
          } catch (error) {
              console.error("Error:", error.message);
          }
      };
  
      fetchDetails();
      fetchAllHotels()
  }, []);


  
  const fetchAllHotels = async () => {
    const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotels}`, {
          headers: {
             "Authorization": "Bearer " + token,
          }
        });
        const data = response.data;
        // console.log(data)
        if (data.status === true) {
          setHotelData(data.data);
          // console.log(data)
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
  


    return(
        <>
<Header/>
<section className="spad hotel-selection-section">
      <Container>
        {apiData && (
          <>
            <h1 className="text-center">{apiData.title}</h1>
            <div className="hotel-selection spad">
              {apiData.sections.map((section, index) => (
                <div key={index}>
                  <p>
                    <a>{section.sub_title}:</a> {section.content}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
<SearchWithBackground />
<section className="spad">
  <Container>
    
<Row >

{hotelData.map((hotel, index) => (
              <Col lg={4} md={6} key={index}>
                <a href="">
                  <div className="room-item selection-img-div">
                    <Image
                    src={hotel.hotel_images[0]} 
                      className="hotel-selection-image"
                      alt="image"
                    />
                    <div className="px-3">
                      <h5 className="mt-3">{hotel.hotel_title}</h5>
                      <div className="d-flex">
                        <GeoAltFill className="m-0 locaton-icon" />
                        <p>{hotel.country}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Col>
   ))}
{/*           
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms4} className="hotel-selection-image " alt="image"/>
                    <div className="px-3">
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
            
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms5} alt="image"  className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">The Setai Tel Aviv</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms6} alt="image" className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">Symphony Style Hotel, Quorvus Collection</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>

              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms4} alt="image" className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>


              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms5} alt="image" className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms6} alt="image" className="hotel-selection-image"/>
                    <div  className="px-3" >
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms4} alt="image" className="hotel-selection-image"/>
                    <div className="px-3" >
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon m-0" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms5} alt="image"className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms6} alt="image"className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col> */}
          </Row>


          </Container>
          <div class="col-lg-12">
                    <div class="room-pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">Next <i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
</section>


<CallToAction/>
<Footer/>

</>
    );
}
export default HotelSelection;