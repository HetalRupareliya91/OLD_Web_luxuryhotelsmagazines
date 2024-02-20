import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Logo from "../../assets/img/logo.svg";
import { FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaToggleOn, FaToggleOff, FaBars } from 'react-icons/fa';
import API, { isUserLoggedIn } from '../../utils';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Header() {




  const navigate = useNavigate()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Set the initial login state
    setLoggedIn(isUserLoggedIn());
  }, []);


  const handleLoginClick = () => {
    
    navigate("/login")
  };



  const handleLogout = async (e) => {

    const token = localStorage.getItem("token");
    

    e.preventDefault();

    try {
       const response = await axios.post(
          `${API.BASE_URL}${API.ENDPOINTS.logout}`,
          null,
          {
            headers: {
              "Authorization": "Bearer " + token,
            }
          }
       );

       if (response.data.status === true) {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    localStorage.removeItem("newsLogin");
        navigate("/login")
          
          // console.log(response.data.message);
       } else {
          console.error("Logout failed:");
          const errorMessage = response.data.message || "Logout failed. Please try again.";
       document.getElementById("loginErrorMessage").innerText = errorMessage;
       }
    } catch (error) {
       console.error("Error:", error.message);
    }
 };
  return (
    <>

      <div className={`offcanvas-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} ></div>
      <div className="canvas-open" onClick={toggleMobileMenu} >
        {isMobileMenuOpen ? <FaBars /> : <FaBars />}

      </div>
      {isMobileMenuOpen && (
        <div className="offcanvas-menu-wrapper show-offcanvas-menu-wrapper">
          <div className="canvas-close" onClick={closeMobileMenu}>
            <i className="icon_close">X</i>
          </div>
          <div className="search-icon  search-switch">
            <i className="icon_search"></i>
          </div>
          <div className="header-configure-area">
            <a href="/hotel-search" className="bk-btn">Find Hotels</a>
          </div>
          <nav className="mainmenu mobile-menu">
            <ul>
              <li className="active"><a href="/">Home</a></li>
              <li>
                <a href="/hotel-search">Luxury Hotels/Resorts</a>
              </li>
              <li><a href="/userprofile">List Your Hotels</a></li>
              <li><a href="/news-search">Publish Hotel News</a></li>
              <li><a href="/contact-us">Contact</a></li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
          <div className="top-social">
            {/* <a href="https://www.facebook.com/LuxuryHotelsMagazines"><FaFacebook /></a> */}
            {/* <a href="https://www.instagram.com/luxuryhotelsbrand/"><FaInstagram /></a> */}
            {/* <a href='https://www.youtube.com/channel/UCxV4ClKpFA95eU-4c8sN3Tg'><FaYoutube /></a> */}
            <a href="/userprofile" className='menu-content'>List Your Hotels</a>
          </div>
          <ul className="top-widget">
            <li><a href="mailto:Info@LuxuryHotelsMagazines.Com"><i className="fa fa-envelope"></i> info@luxuryhotelsmagazines.com</a></li>
          </ul>
        </div>
      )}
      <header className="header-section">
        <div className="top-nav">
          <Container>
            <Row>
              <Col lg={6}>
                {/* <div className="tn-left">
                  <a href="mailto:Info@LuxuryHotelsMagazines.Com"><i ><FaEnvelope /></i> info@luxuryhotelsmagazines.com</a>
                </div> */}
              </Col>
              <Col lg={6}>
                <div className="tn-right">
                  <div className="top-social">
                    {/* <a href="https://www.facebook.com/LuxuryHotelsMagazines"><FaFacebook /></a> */}
                    {/* <a href="https://www.instagram.com/luxuryhotelsbrand/"><FaInstagram /></a> */}
                    {/* <a href='https://www.youtube.com/channel/UCxV4ClKpFA95eU-4c8sN3Tg'><FaYoutube /></a> */}
                    <a href="/userprofile" className='menu-content'>List Your Hotels</a>
                     <a href="/news-search" className='menu-content' >Publish News</a>
                      {isLoggedIn ? (
                         
                            <a className='menu-content' onClick={handleLogout}>
                              Logout
                            </a>
                       
                       
                        ) :(
                         
                            <a href="login" className='menu-content' onClick={handleLoginClick}>
                              Login
                            </a>
                          
                        ) }
                     
                  </div>
                  <a href="/hotel-search" className="bk-btn">Find Hotels</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="menu-item">
          <Container>
            <Row>
              <Col lg={3}>
                <div className="logo">
                  <a href="/">
                    <Image src={Logo} alt="" />
                  </a>
                </div>
              </Col>
              <Col lg={9}>
                <div className="nav-menu">
                  <nav className="mainmenu">
                    <ul>
                      <li className="active"><NavLink to="/" className='menu-content'>Home</NavLink></li>

                      <li>
                        <NavLink to="/hotels-selection" className='menu-content'>Luxury Hotels And Resorts</NavLink>

                      </li>
                      {/* <li><a href="/userprofile" className='menu-content'>List Your Hotels</a></li> */}

                      <li className="dropdown">
              <NavLink to="/news-search" className='menu-content' > News</NavLink>
              <ul className="dropdown-menu">
                <li><a href="#" >General News</a></li>
                <li><a href="#" >Hotel News</a></li>
              </ul>
            </li>
                      {/* <li><a href="/">Login</a></li> */}

                      {/* {isLoggedIn ? (
                          <li>
                            <a className='menu-content' onClick={handleLogout}>
                              Logout
                            </a>
                          </li>
                        ) :(
                          <li>
                            <a href="login" className='menu-content' onClick={handleLoginClick}>
                              Login
                            </a>
                          </li>
                        ) } */}
                     
                    </ul>
                  </nav>
                  <div className="nav-right search-switch">
                    <i className="icon_search"></i>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}
export default Header;