
const API = {
  
    // development
    //  BASE_API_URL: "http://localhost:8000/api",
     BASE_URL:"https://luxuryhotelsmagazines.fableadtechnolabs.com/backend/api/",

     
      ENDPOINTS: {
       login: "user-login",
       signup:"user-register",
       hotelSearch:"search-hotel",
      allHotelAmenities:"all-hotel-ameties",
      createHotel:"hotel-register",
      createNews:"create-news",
      allNews:"all-news",
      updateNews:"update-news",
      allHotels:"all-hotels",
      deleteHotel:"delete-hotels",
      deleteNews:"delete-news",
      allMagazines:"all-hotel-magazines",
      viewNews:"views-news",
      editHotel:"edit-hotels",
      upateHotels:"update-hotels",
      forgetPassword:"reset_password",
      varifyOtp:"verify_otp",
      resendPassword:"resend_password",
      loginUserupdateProfile:"login-user-update-profile",
      loginUserProfile:"login-user-profile",
      logout:"user-logout",
      homeInfo:"edit_home_info",

      //distribution
      distributionDetails:"all-distibutor-detail",

    // single_page_details
    singlePageDetails:"single_page_details"
      },
    }; 

export default API;
    

export const isUserLoggedIn = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  if (isLoggedIn === 'true') {
    return true;
  }
  else {
    return false;
  }
};