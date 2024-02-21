import React, { useState } from "react";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Col, Form, Row } from "react-bootstrap";
import { stateToHTML } from 'draft-js-export-html';
import axios from "axios";  
import API from "../../../utils";
import PayPalButton from "../../components/paypal";
function AddBlogs() {
  const uid = localStorage.getItem("userId")
  const [hotelEditorState, setHotelEditorState] = useState(EditorState.createEmpty());
  const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());

  const [image, setImage] = useState([])
  const handleInputChange = (e) => {
    const { name, value } = e.target || {};;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleimageChange = (e) => {
    const files = e.target.files;
    setImage((prevImages) => [...prevImages, ...files]);
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target || {};
  //   setFormData({
  //     ...formData,
  //     [name]: files[0],
  //   });
  // };


  // const handleHotelEditorChange = (editorState) => {
  //   setHotelEditorState(editorState);
  //   const contentState = editorState.getCurrentContent();
  //   const contentRaw = convertToRaw(contentState);
  //   setFormData({
  //     ...formData,
  //     hotelDescription: JSON.stringify(contentRaw),
  //   });
  // };

  // const handleOfferEditorChange = (editorState) => {
  //   setBlogEditorState(editorState);
  //   const contentState = editorState.getCurrentContent();
  //   const contentRaw = convertToRaw(contentState);
  //   setFormData({
  //     ...formData,
  //     blogContent: JSON.stringify(contentRaw),
  //   });
  // };
  // const handleBlogEditorChange = (editorState) => {
  //   setBlogEditorState(editorState);
  // };

  const [formData, setFormData] = useState({
    newsType:'',
    businessName: '',
   fullName: '',
    email: '',
    blogTitle: '',
    youtubeLink: '',
    image: [],
    hotelDescription: '',
       user_id: uid,
    // status:"1",
    catagory:"",
    editor_choice:"ffggruygre",
    news_views:"",
    news_likes:"",
    hotelDescriptionHTML: '', 
  });

  const [validationErrors, setValidationErrors] = useState({
    newsType:'',
    businessName: "",
    country: "",
    fullName: "",
    email: "",
    blogTitle: "",
    youtubeLink: "",
   
    offerTitle: "",
    phoneNumber: "",
    contactPhoneNumber: "",
    link: "",
    offerValidFrom: "",
    offerValidTo: "",
    editor_choice:""
    
  });


  const handleHotelEditorChange = (editorState) => {
    setHotelEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const htmlContent = stateToHTML(contentState);
    setFormData({
      ...formData,
      hotelDescriptionHTML: htmlContent,
    });
  };

  const handleOfferEditorChange = (editorState) => {
    setBlogEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const htmlContent = stateToHTML(contentState);
    setFormData({
      ...formData,
      blogContentHTML: htmlContent,
    });
  };

  const handleAddBlogs = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const formDatas = new FormData();
    formDatas.append('news_type', formData.newsType);
    formDatas.append('bussiness_name', formData.businessName);
    formDatas.append('full_name', formData.fullName);
    formDatas.append('email_address', formData.email);
    formDatas.append('news_title', formData.blogTitle);
    formDatas.append('youtube_link', formData.youtubeLink);
    image.forEach((image, index) => {
      formDatas.append(`news_images[${index}]`, image);
    });    formDatas.append('news_desc', formData.hotelDescriptionHTML);
     formDatas.append('user_id', formData.user_id);
    // formDatas.append('status', formData.status);
    formDatas.append('catagory', formData.catagory);
    formDatas.append('editor_choice', formData.editor_choice);
    formDatas.append('news_likes', formData.news_likes);
    formDatas.append('news_views', formData.news_views);
    try {
      const response = await axios.post(
        `${API.BASE_URL}${API.ENDPOINTS.createNews}`,
        formDatas,
        {
          headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.status === true) {
        // console.log("news  added successfully");
      } else {
        console.error("Failed to add news");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }

    let isValid = true;
    const newErrors = { ...validationErrors };

    // Validate businessName
    if (!formData.businessName ) {
      newErrors.businessName = "Business Name is required";
      isValid = false;
    } else {
      newErrors.businessName = "";
    }


    // Validate country
    if (!formData.country) {
      newErrors.country = "country is required";
      isValid = false;
    } else {
      newErrors.country = "";
    }

    // Validate fullName
    if (!formData.fullName) {
      newErrors.fullName = "fullName is required";
      isValid = false;
    } else {
      newErrors.fullName = "";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "email is required";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate blogTitle
    if (!formData.blogTitle) {
      newErrors.blogTitle = "News Title is required";
      isValid = false;
    } else {
      newErrors.blogTitle = "";
    }

    // Validate youtubeLink
    if (!formData.youtubeLink) {
      newErrors.youtubeLink = "youtubeLink is required";
      isValid = false;
    } else {
      newErrors.youtubeLink = "";
    }


    if (!image) {
      newErrors.image = "Image is required";
      isValid = false;
    } else {
      newErrors.image = "";
    }

    // Validate email
    if (!formData.offerTitle) {
      newErrors.offerTitle = "offerTitle is required";
      isValid = false;
    } else {
      newErrors.offerTitle = "";
    }
    // Validate email
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "phoneNumber is required";
      isValid = false;
    } else {
      newErrors.phoneNumber = "";
    }

    if (!formData.offercountry) {
      newErrors.offercountry = "Offer Country is required";
      isValid = false;
    } else {
      newErrors.offercountry = "";
    }

    // Validate email
    if (!formData.link) {
      newErrors.link = "link is required";
      isValid = false;
    } else {
      newErrors.link = "";
    }
    // Validate email
    if (!formData.offerValidFrom) {
      newErrors.offerValidFrom = "offer ValidFrom is required";
      isValid = false;
    } else {
      newErrors.offerValidFrom = "";
    }

    // Validate email
    if (!formData.offerValidTo) {
      newErrors.offerValidTo = "Offer ValidTo is required";
      isValid = false;
    } else {
      newErrors.offerValidTo = "";
    }

    setValidationErrors(newErrors);
    return isValid;
  };

  return (
    <>
      {/* <h3 className="mb-4">Add A New Blog</h3> */}
      <Form id="addBlogForm" onSubmit={handleAddBlogs}>
        <Row className="mb-3">

          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="businessName"
              name="businessName"
              placeholder='Name Of Business'
              value={formData.businessName}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.businessName ? "red" : "" }}
            />
            {validationErrors.businessName && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.businessName}
              </div>
            )}
          </Col>
        

        
          <Col lg={6}>
            <div className="select-option">
              <select id="newsType" name="newsType" value={formData.newsType}
                onChange={handleInputChange} className="sidebar-input" >
                <option value="select">Select News Type</option>
                <option value="hotelNews">Hotel News</option>
                <option value="generalnews">General News</option>
                
              </select>

            </div>
          </Col>
          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="fullName"
              name="fullName"
              placeholder='Your Full Name'
              value={formData.fullName}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.fullName ? "red" : "" }}
            />
            {validationErrors.fullName && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.fullName}
              </div>
            )}
          </Col>
       
          <Col lg={6} md={6} className="mb-3">
              <select
               className="sidebar-input"
               id="catagory"
                name="catagory"
                placeholder='News Catagory '
                value={formData.catagory}
                onChange={handleInputChange}
              >
                <option value="0">Select Category</option>
                <option value="1">Airlines/Flights</option>
                <option value="2">Cars</option>
                <option value="3">Fashion/Jewellery</option>
                <option value="4">Health/Beauty</option>
                <option value="5">Hotels/Resorts</option>
                <option value="6">Leadership</option>
                <option value="7">Luxury life Style</option>
                <option value="8">Properties</option>
                <option value="9">Restaurants/Bars</option>
                <option value="10">Travel</option>
                <option value="11">Yachts/Boats</option>
              </select>
             
          </Col>

          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="blogTitle"
              name="blogTitle"
              placeholder='News Title'
              value={formData.blogTitle}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.blogTitle ? "red" : "" }}
            />
            {validationErrors.blogTitle && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.blogTitle}
              </div>
            )}
          </Col>

          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              type="email"
              id="email"
              name="email"
              placeholder='Your Email Address'
              value={formData.email}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.email ? "red" : "" }}
            />

            {validationErrors.email && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.email}
              </div>
            )}

          </Col>
          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="youtubeLink"
              name="youtubeLink"
              placeholder='Youtube Link (optional)'
              value={formData.youtubeLink}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.youtubeLink ? "red" : "" }}
            />

            {validationErrors.youtubeLink && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.youtubeLink}
              </div>
            )}

          </Col>

          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              id="image"
              name="image"
              type="file"
              placeholder="News Image"
              multiple
              onChange={handleimageChange}
              style={{ borderColor: validationErrors.image ? "red" : "" }}
            />
            {validationErrors.image && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.image}
              </div>
            )}
          </Col>
        </Row>
       
       

    
        <Row className=" mb-3">

          <Col lg={12}>
            <Editor
              editorState={hotelEditorState}
              onEditorStateChange={handleHotelEditorChange}
              value={formData.hotelDescriptionHTML}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row className=" mb-3">
        
          <Col lg={6}>
            <button type="submit" >Add News</button>
          </Col>
        </Row>
        <div className="text-center">
          <p>Your article/views will stay on our Platform for unlimited period of time</p>
        </div>

        <div className="paypal_buttons">
                                        <PayPalButton />                                        
                                    </div>
      </Form>

     
    </>
  );
}
export default AddBlogs;