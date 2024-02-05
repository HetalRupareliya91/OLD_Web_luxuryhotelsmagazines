import React, { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
// import VideoBackgrounds from '../../assets/videos/hotelvideo_km2KqTxn.mp4';
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Logo from "../../assets/img/logo.svg"
import API from '../../utils';
import axios from 'axios';
const VideoBackground = () => {
  const [aboutData, setAboutData] = useState("");

  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = async () => {
   
    try {
      const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.homeInfo}`,
      {
        type: "4", 
      },
      
      {
        headers: {
          Authorization: "hXuRUGsEGuhGf6KM",
        }
      });
      const data = response.data;
     
     
      if (data.status === true) {
       setAboutData(data.data); 


      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
<section className="video-background p-0">
<div className="video-iframe">
          <iframe
            loading="lazy"
            style={{ width: "100%" }}
            id="ytplayer"
            type="text/html"
            width="100%"
            height="600px"
            src={aboutData?.details?.you_tybe_link} 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      <div className="text-overlay">
      <Row >
                  <Col lg={6}>
                     <div className="about-text">
                        <div className="section-title  ">
                        <p className=''> <b style={{color:"#b5191fff"}}> Luxury Hotels</b>, a renowned global brand founded in England <b style={{color:"#b5191fff"}}> 17 years ago, </b>is currently present in 89 countries. We provide <b style={{color:"#b5191fff"}}>Luxury Hotels </b>for affluent travellers through our online platform and in print and digital formats. Each Edition is accessible for free download on 5 different platforms and attracts 4-5 million online readers annually.</p>
                <p className=''>Through our Printed Edition Rotation Program, your hotel will be featured as one of the top <b style={{color:"#b5191fff"}}>Luxury Hotels </b> and will ensure a continuous influx of bookings and a consistent occupancy rate of <b style={{color:"#b5191fff"}}> 800,000 to 1 million tourists </b> throughout the year, all without any commission fees.</p>
                        </div>
                     </div>
                  </Col>
                  <Col lg={6} >
                    
                       
                           <div className='videos-content-present text-center'>
                          <Image src={Logo}/>
                          <div className='mt-4'>
                          <h4 >PRESENTS</h4>
                          </div>
                           </div>
                         
              
                  </Col>
                  </Row>
               </div>
       
          
    </section>

    </>
  );
};

export default VideoBackground;
