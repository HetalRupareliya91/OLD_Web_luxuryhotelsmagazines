import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import pdf from '../../assets/pdf/lodge.pdf'
import pdf2 from '../../assets/pdf/kashbah.pdf'
import { Link, useParams } from "react-router-dom";
// import { FaEnvelope, FaFacebook, FaFacebookMessenger, FaLinkedin, FaShareAlt, FaSnapchat, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ShareThisButtons from "../components/shareButtons";
import axios from "axios";
import API from "../../utils";
function MagazineDetails (){
    const { hotel_magazine_id } = useParams();
    const [postData, setPostData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          // const token = localStorage.getItem("token");
          try {
            // Make a POST request with the id
            const response = await axios.post(
              `${API.BASE_URL}${API.ENDPOINTS.editHotelMagazine}`,
              { hotel_magazine_id: hotel_magazine_id },
              {
                headers: {
                  Authorization: "hXuRUGsEGuhGf6KM",
                },
              }
            );
    
            const data = response.data;
    
            if (data.status === true) {
              
              setPostData ( data.message);

              
            } else {
              console.error('Failed to fetch post data');
            }
          } catch (error) {
            console.error('Error:', error.message);
          }
        };
    
        if (hotel_magazine_id) {
          fetchData();
        }
      }, [hotel_magazine_id]);
    
     

    return(

        <>
        
        <Header/>
<section className="spad">
    <Container>
<div className="text-center">

    <h1 className="pb-5">
    LUXURY MAGAZINES - DETAIL
    </h1>

    <div className="mb-3 text-end">
        <button>
        <Link to="/hotels-editions">
            Back To Magazine
        </Link>
        </button>
    </div>

</div>
{/* <iframe src={pdf} frameborder="0" width="100%" height="1200px"></iframe> */}
 <Row>

 <Col md={12}>
                            <center>
                            <iframe src={postData.file_pdf} frameborder="0" width="100%" height="1200px"></iframe>
                            </center>
                        </Col>

                        <Col md={12}>
                            <center>
                            <iframe src={pdf2} frameborder="0" width="100%" height="1200px"></iframe>
                            </center>
                        </Col>
 </Row>

{/* <div class="sharethis-inline-share-buttons"></div> */}
<ShareThisButtons/>
 
    </Container>
</section>

<Footer/>
</>


    );
}

export default MagazineDetails;