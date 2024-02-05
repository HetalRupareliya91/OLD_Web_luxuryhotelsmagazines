import React ,{ useEffect, useState }from "react";
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import axios from 'axios';
import API from '../../utils';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
function SearchWithBackground(){
  
  const navigate = useNavigate();  
   const [searchResults, setSearchResults] = useState([]);
   const [hotelName, setHotelName] = useState('');
   const [country, setCountry] = useState('');
   const [showSearchResults, setShowSearchResults] = useState(true);
       const handleSearch = async () => {

         try {
           const response = await axios.post(
             `${API.BASE_URL}${API.ENDPOINTS.hotelSearch}`,
             {
               hotel_keyword: hotelName,
               country: country,
             },
             {
               headers: {
                 Authorization: "hXuRUGsEGuhGf6KM",
               },
             }
           );
     
           if (response.status === 200) {
             setSearchResults(response.data.hotel_data);
             
           } else {
             console.error("Search failed:", response.status);
           }
         } catch (error) {
           console.error("Error:", error.message);
         }
       };
     
       const handleHotelNameChange = async (e) => {
         setHotelName(e.target.value);
              await handleSearch();
         setShowSearchResults(true);
       };

       
  const handleSearchResultClick = (selectedHotelName) => {
    setHotelName(selectedHotelName);
    setShowSearchResults(false);


  };

  
  const handleSearchButtonClick = async () => {
    await handleSearch();
    setShowSearchResults(true);

    navigate("/hotel-details/9/kuwait/symphony-style-hotel");
  };
     
    return(
<div className='serch-div'>
 <div className="booking-form-rooms">
              <Form action="#" className='booking-form-rooms-form'>
                 <Row >
                    <Col lg={5} >
                       <div className="check-date">
                          <input type="text" placeholder="Enter Hotel Name" value={hotelName}
                   onChange={handleHotelNameChange}/>
                          <i className="fa fa-building" aria-hidden="true"></i>
                       </div>


                       {searchResults.length > 0 && searchResults !== 'undefined' && (
                   <div className="search-results autocom-box ">
                     {/* <h2>Search Results:</h2> */}
                     <ul>
                       {searchResults.map((result) => (
                        
                         <li  key={result.id}
                         onClick={() => handleSearchResultClick(result.hotel_title)}><a href="hotel-details/9/kuwait/symphony-style-hotel">{result.hotel_title}</a></li>
                         // Add other properties as needed
                       ))}
                     </ul>
                   </div>
                 )}
                    </Col>
                    <Col lg={5} >
                       <div className="select-option">
                          <select className='select-id'>
                             <option value="Afghanistan">Country</option>
                             <option value="Afghanistan">Afghanistan</option>
                             <option value="Åland Islands">Åland Islands</option>
                             <option value="Albania">Albania</option>
                             <option value="Algeria">Algeria</option>
                             <option value="American Samoa">American Samoa</option>
                             <option value="Andorra">Andorra</option>
                             <option value="Angola">Angola</option>
                             <option value="Anguilla">Anguilla</option>
                             <option value="Antarctica">Antarctica</option>
                             <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                             <option value="Argentina">Argentina</option>
                             <option value="Armenia">Armenia</option>
                             
                          </select>
                       </div>
                    </Col>
                    <Col lg={2} >
                       <button type="submit" className='serch-btn' onClick={handleSearchButtonClick}><i><FaSearch/></i></button>
                    </Col>
                 </Row>
              </Form>
           </div>
           </div>

    );
}
export default SearchWithBackground;