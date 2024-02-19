import React, { useEffect, useState } from "react";
import Logo from '../../assets/img/logo.svg';
import Hero3 from "../../assets/img/hero/hero-3.jpg";
import { Parallax } from "react-parallax";
import { Image } from "react-bootstrap";
import axios from "axios";
import API from "../../utils";

function Tabs() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = async () => {
   
    try {
      const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.homeInfo}`,
      {
        type: "5", 
      },
      
      {
        headers: {
          Authorization: "hXuRUGsEGuhGf6KM",
        }
      });
      const data = response.data;
     
     
      if (data.status === true) {
       setData(data.data); 


      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const [activeTab, setActiveTab] = useState("Zoom1");

  const openLink = (animName) => {
    setActiveTab(animName);
  }


  const renderCountryButtons = () => {
    return data?.details?.sections.map((section, index) => (
      <button
        key={index}
        className={`w3-bar-item w3-button tablink ${
          activeTab === `Zoom${index + 1}` ? "w3-red" : ""
        }`}
        onClick={() => openLink(`Zoom${index + 1}`)}
      >
        <i className="fa fa-globe" aria-hidden="true"></i> {section.country}
      </button>
    ));
  };

  const renderZoomContent = () => {
    return data?.details?.sections.map((section, index) => (
      <div
        key={index}
        id={`Zoom${index + 1}`}
        className={`w3-container city w3-animate-zoom p-3 ${
          activeTab === `Zoom${index + 1}` ? '' : 'hidden'
        }`}
      >
        <Image src={Logo} alt="" className="w-50 mb-3" />
      
        <iframe
          width="100%"
          height="315"
          src={section.you_tube_link }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    ));
  };
  return (
    <Parallax blur={0} bgImage={Hero3} bgImageAlt="the cat" strength={300}>
    <section className="special spad tabs-section" data-scrollax-parent="true">
    
   
      <div className="content tabcontainer">
      <div className="text-start mb-4">

      <h1 className="mb-3 text-white ">{data?.details?.background_title}</h1>
<h4 className="text-white">Unveil New Luxe Getaways Every Week</h4>   </div>
{/* {data?.details?.background_sub_title} */}
<div className="w3-sidebar w3-bar-block  w3-card">
            {renderCountryButtons()}
          </div>

          <div className="zoom-content">
          {renderZoomContent()}
        </div>
       
      </div>
     
    </section>
    </Parallax>
  );
}

export default Tabs;
