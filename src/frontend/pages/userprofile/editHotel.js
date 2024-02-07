import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { Col, Container, Form, Image, Nav, ProgressBar, Row } from 'react-bootstrap';
import API from "../../../utils";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from "../../components/header";
import Footer from "../../components/footer";
import hotelImage1 from "../../../assets/img/hero/hero-1.jpg"
import { Link } from "react-router-dom";
import UserSidebar from "../../components/sidebar";
import { stateToHTML } from 'draft-js-export-html';
import CountryList from 'react-select-country-list'
import Select from 'react-select'

function EditHotel(hotelid) {
    const user_id = localStorage.getItem("userId");
    const [value, setValue] = useState('')
    const options = useMemo(() => CountryList().getData(), [])

    const changeHandler = selectedOption => {
        setValue(selectedOption);
    }

    const [hotelEditorState, setHotelEditorState] = useState(EditorState.createEmpty());
    const [locationEditorState, setlocationEditorState] = useState(EditorState.createEmpty());
    const [roomsAndSuitesEditorState, setroomsAndSuitesEditorState] = useState(EditorState.createEmpty());
    const [restaurentsEditorState, setrestaurentsEditorState] = useState(EditorState.createEmpty());
    const [spaAndWellnessEditorState, setSpaAndWellnessEditorState] = useState(EditorState.createEmpty());
    const [otherFacilitiesEditorState, setOtherFacilitiesEditorState] = useState(EditorState.createEmpty());
    const [additionalInformationEditorState, setAdditionalInformationEditorState] = useState(EditorState.createEmpty());
    const [descriptionEditorState, setDescriptionEditorState] = useState(EditorState.createEmpty());
    const [aminitesData, setAminitesData] = useState("")
    const [facilitiesData, setFacilitiesData] = useState("")

    // const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());
    const [currentStep, setCurrentStep] = useState(1);




    const handleHotelEditorChange = (editorState) => {
        setHotelEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            aboutHotel: htmlContent,
            //   aboutHotel: JSON.stringify(contentRaw),
        });
    };
    const handlelocationEditorChange = (editorState) => {
        setlocationEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            location: htmlContent,
        });
    };

    const handleroomsAndSuitesEditorState = (editorState) => {
        setroomsAndSuitesEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            roomsAndSuites: htmlContent,
        });
    };

    const handlerestaurentsEditorState = (editorState) => {
        setrestaurentsEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            restaurantsAndBars: htmlContent,
        });
    };
    const handlespaAndWellnessEditorState = (editorState) => {
        setSpaAndWellnessEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            spaAndWellness: htmlContent,
        });
    };
    const handleOtherFacilitiesEditorChange = (editorState) => {
        setOtherFacilitiesEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            otherFacilities: htmlContent,
        });
    };
    const handleAdditionalInformationEditorChange = (editorState) => {
        setAdditionalInformationEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            additionalInformation: htmlContent,
        });
    };


    const handleDescriptionEditorState = (editorState) => {
        setDescriptionEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            description: htmlContent,
        });
    };
    const [image, setImage] = useState(null)

    const [formData, setFormData] = useState({
        hotelName: "",
        hotelWebsite: "",
        youtubeLink: "",
        country: "",
        location: "",
        contactInformation: "",
        aboutHotel: "",
        roomsAndSuites: "",
        restaurantsAndBars: "",
        additionalInformation: "",
        spaAndWellness: "",
        otherFacilities: "",
        numberOfRooms: "",
        numberOfRestaurants: "",
        outdoorSwimmingPool: "",
        bars: "",
        amenitiesList: [],
        facilitiesList: [],
        otherInformation1: "",
        otherInformation2: "",
        otherInformation3: "",
        otherInformation4: "",
        contact1: { name: "", email: "", contactInformation: "" },
        contact2: { name: "", email: "", contactInformation: "" },
        contact3: { name: "", email: "", contactInformation: "" },
        offerTitle: "",
        phone_number: "",
        offerValidFrom: "",
        offerValidTo: "",
        description: "",
        redeemLink: "",
        addHotelToHomePageLatestNews: "",
        addHotelToHomePageHotelLatestNews: "",
        addSpecialOfferToHomepage: "",
        addHotelToHomePageSpotlight: "",

    });

    // const handleimageChange = (e) => {
    //     const file = e.target.files[0];
    //     setImage(file);
    // }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target || {}
            
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        
    };

    const handleChange = (contactNumber, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [contactNumber]: {
                ...prevData[contactNumber],
                [field]: value,
            },
        }));
    };

    const [validationErrors, setValidationErrors] = useState({
        hotelName: "",
        hotelWebsite: "",
        youtubeLink: "",
        country: "",
        location: "",
        contactInformation: "",
        aboutHotel: "",
        roomsAndSuites: "",
        restaurantsAndBars: "",
        additionalInformation: "",
        spaAndWellness: "",
        otherFacilities: "",
        numberOfRooms: "",
        numberOfRestaurants: "",
        outdoorSwimmingPool: "",
        bars: "",
        amenitiesList: [],
        otherInformation1: "",
        otherInformation2: "",
        otherInformation3: "",
        otherInformation4: "",
    });

    const fetchAmenities = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotelAmenities}`, {
                headers: {
                    "Authorization": "Bearer " + token,
                },
            });
            const data = response.data;
            // console.log('Amenities data:', data);
            if (data.status === true && Array.isArray(data.data)) {
                setAminitesData(data)
                setFormData((prevData) => ({
                    ...prevData,
                    amenitiesList: data.data,
                }));

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
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allhotelfacilities}`, {
                headers: {
                    "Authorization": "Bearer " + token,
                },
            });
            const data = response.data;
            // console.log('facilites data:', data);
            if (data.status === true && Array.isArray(data.data)) {
                setFacilitiesData(data)
                setFormData((prevData) => ({
                    ...prevData,
                    facilitiesList: data.data,
                }));

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



    const [progress, setProgress] = useState(0);

    const nextStep = async (e) => {

        // let isValid = true;
        // const newErrors = { ...validationErrors };

        // if (!formData.hotelName) {
        //     newErrors.hotelName = "Hotel Name is required";
        //     isValid = false;
        // } else {
        //     newErrors.hotelName = "";
        // }

        // if (!formData.hotelWebsite) {
        //     newErrors.hotelWebsite = "Hotel Website is required";
        //     isValid = false;
        // } else {
        //     newErrors.hotelWebsite = "";
        // }

        // if (!formData.youtubeLink) {
        //     newErrors.youtubeLink = "Youtube Link is required";
        //     isValid = false;
        // } else {
        //     newErrors.youtubeLink = "";
        // }

        // if (!formData.country) {
        //     newErrors.country = "Youtube Link is required";
        //     isValid = false;
        // } else {
        //     newErrors.country = "";
        // }

        // if (!formData.location) {
        //     newErrors.location = "Youtube Link is required";
        //     isValid = false;
        // } else {
        //     newErrors.location = "";
        // }

        // if (!formData.contactInformation) {
        //     newErrors.contactInformationcontactInformation = "Contact Information is required";
        //     isValid = false;
        // } else {
        //     newErrors.contactInformation = "";
        // }

        // if (!formData.aboutHotel) {
        //     newErrors.aboutHotel = "aboutHotel is required";
        //     isValid = false;
        // } else {
        //     newErrors.aboutHotel = "";
        // }

        // if (!formData.roomsAndSuites) {
        //     newErrors.roomsAndSuites = "Rooms And Suites is required";
        //     isValid = false;
        // } else {
        //     newErrors.roomsAndSuites = "";
        // }

        // if (!formData.restaurantsAndBars) {
        //     newErrors.restaurantsAndBars = "Restaurants And Bars is required";
        //     isValid = false;
        // } else {
        //     newErrors.restaurantsAndBars = "";
        // }

        // if (!formData.additionalInformation) {
        //     newErrors.additionalInformation = "Additional Information is required";
        //     isValid = false;
        // } else {
        //     newErrors.additionalInformation = "";
        // }

        // if (!formData.spaAndWellness) {
        //     newErrors.spaAndWellness = "Spa And Wellness is required";
        //     isValid = false;
        // } else {
        //     newErrors.spaAndWellness = "";
        // }
        // if (!formData.otherFacilities) {
        //     newErrors.otherFacilities = "Other Facilities is required";
        //     isValid = false;
        // } else {
        //     newErrors.otherFacilities = "";
        // }

        // if (!formData.numberOfRooms) {
        //     newErrors.numberOfRooms = "Number Of Rooms is required";
        //     isValid = false;
        // } else {
        //     newErrors.numberOfRooms = "";
        // }

        // if (!formData.numberOfRestaurants) {
        //     newErrors.numberOfRestaurants = "Number Of Restaurants is required";
        //     isValid = false;
        // } else {
        //     newErrors.numberOfRestaurants = "";
        // }

        // if (!formData.outdoorSwimmingPool) {
        //     newErrors.outdoorSwimmingPool = "outdoor SwimmingPool is required";
        //     isValid = false;
        // } else {
        //     newErrors.outdoorSwimmingPool = "";
        // }

        // if (!formData.bars) {
        //     newErrors.bars = "bars is required";
        //     isValid = false;
        // } else {
        //     newErrors.bars = "";
        // }

        // if (!formData.amenitiesList) {
        //     newErrors.amenitiesList = "amenitiesList is required";
        //     isValid = false;
        // } else {
        //     newErrors.amenitiesList = "";
        // }

        // if (!formData.otherInformation1) {
        //     newErrors.otherInformation1 = "Other Information is required";
        //     isValid = false;
        // } else {
        //     newErrors.otherInformation1 = "";
        // }

        // if (!formData.otherInformation2) {
        //     newErrors.otherInformation2 = "Other Information is required";
        //     isValid = false;
        // } else {
        //     newErrors.otherInformation2 = "";
        // }

        // if (!formData.otherInformation3) {
        //     newErrors.otherInformation3 = "Other Information is required";
        //     isValid = false;
        // } else {
        //     newErrors.otherInformation3 = "";
        // }

        // if (!formData.otherInformation4) {
        //     newErrors.otherInformation4 = "Other Information is required";
        //     isValid = false;
        // } else {
        //     newErrors.otherInformation4 = "";
        // }
        // setValidationErrors(newErrors);
        // return isValid;


        // if(validationErrors){
        //     handleValidation()
        // }
        // else if (currentStep < 4) {
        setCurrentStep((prevStep) => prevStep + 1);
        const newProgress = ((currentStep + 1) / 4) * 100;
        setProgress(newProgress);
        //   }

    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prevStep) => prevStep - 1);
            const newProgress = ((currentStep - 1) / 4) * 100;
            setProgress(newProgress);
        }
    };

    useEffect(() => {
        // Set initial progress when the component mounts
        setProgress((currentStep / 4) * 100);
    }, []);


    // const renderAmenitiesInputs = () => {
    //     const numberInputs = [];
    //     const checkboxInputs = [];

    //     formData.amenitiesList.forEach((amenity, index) => {
    //         if (amenity.type === '2') {
    //             numberInputs.push(
    //                 <Col lg={3} md={4} key={index} className="mb-3">
    //                     <input
    //                         className="sidebar-input order-1"
    //                         type="number"
    //                         id={`amenityNumber_${index}`}
    //                         name={amenity.title}
    //                         placeholder={amenity.title}
    //                         value={formData[amenity.title] || ''}
    //                         onChange={handleInputChange}
    //                         style={{ borderColor: validationErrors[amenity.title] ? 'red' : '' }}
    //                     />
    //                     {validationErrors[amenity.title] && (
    //                         <div style={{ color: 'red', textAlign: 'left' }}>
    //                             {validationErrors[amenity.title]}
    //                         </div>
    //                     )}
    //                 </Col>
    //             );
    //         } else {
    //             checkboxInputs.push(
    //                 <Col lg={3} md={4} key={index} className="mb-3">
    //                     <Form.Group className='d-flex order-2'>
    //                         <Form.Check
    //                             type="checkbox"
    //                             id={`amenityCheckbox_${index}`}
    //                             label={amenity.title}
    //                             className='me-3'
    //                             onChange={handleInputChange}
    //                         />
    //                     </Form.Group>
    //                     {validationErrors[amenity.title] && (
    //                         <div style={{ color: 'red', textAlign: 'left' }}>
    //                             {validationErrors[amenity.title]}
    //                         </div>
    //                     )}
    //                 </Col>
    //             );
    //         }
    //     });

    //     return [...numberInputs, ...checkboxInputs];
    // };

    // const renderFacilitiesInput = () => {
    //     const checkboxInputs = [];

    //     formData.facilitiesList.forEach((facility, index) => {
    //         checkboxInputs.push(
    //             <Col lg={3} md={4} key={index} className="mb-3">
    //                 <Form.Group className='d-flex order-2'>
    //                     <Form.Check
    //                         type="checkbox"
    //                         id={`facilityCheckbox_${index}`}
    //                         label={facility.title}
    //                         className='me-3'
    //                         onChange={handleInputChange}
    //                     />
    //                 </Form.Group>

    //             </Col>
    //         );

    //     });

    //     return [...checkboxInputs];
    // };


const stripHtmlTags = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  return doc.body.textContent || "";
};

const handeFetchData = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `${API.BASE_URL}${API.ENDPOINTS.editHotel}`,
      {
        hotel_id: 1,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (response.data.status === true) {
      const apiData = response.data.data;
      setFormData({
        hotelName: apiData.hotel_title,
        hotelWebsite: apiData.website,
        youtubeLink: apiData.youtube_link,
        country: apiData.country,
        location: stripHtmlTags(apiData.address),
        contactInformation: apiData.hotel_contacts,
        aboutHotel: stripHtmlTags(apiData.about_hotel),
        roomsAndSuites: stripHtmlTags(apiData.rooms_and_suites),
        restaurantsAndBars: stripHtmlTags(apiData.restaurent_bars),
        additionalInformation: stripHtmlTags(apiData.other_facilities),
        // spaAndWellness: apiData.spa_wellness || "",
        otherFacilities: stripHtmlTags(apiData.other_facilities),
        numberOfRooms: stripHtmlTags(apiData.rooms_and_suites),
        numberOfRestaurants: stripHtmlTags(apiData.restaurent_bars),
     

        otherInformation1: apiData.otherInformation1 || "",
        otherInformation2: apiData.otherInformation2 || "",
        otherInformation3: apiData.otherInformation3 || "",
        otherInformation4: apiData.otherInformation4 || "",
       
      });
    } else {
      console.error("Error:", response.data.message);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

useEffect(() => {
  handeFetchData();
}, []);

    

    return (
        <>
            <section className="spad">
                <Container>


                    <div className="text-center">
                        <h1>
                            Update Hotel profile
                        </h1>
                    </div>

                    <div className="mb-3">
                        {currentStep === 1 && <h4 className="stepform-heading">Hotel Details</h4>}
                        {currentStep === 2 && <h4 className="stepform-heading">Hotel Contacts</h4>}
                        {currentStep === 3 && <h4 className="stepform-heading">Special Offer</h4>}
                        {currentStep === 4 && <h4 className="stepform-heading">Home Page Addon</h4>}
                        <ProgressBar now={progress} label={`${progress}%`} className="ProgressBar h-25 mb-3" />

                    </div>
                    <Form>

                        <div className="mb-3">
                            <h1>Image</h1>
                        </div>
                        <Row className="mb-3">
                            <Col lg={3}>

                                <Image src={hotelImage1} />
                                <div className="mt-3 d-flex justify-content-between ">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </Col>
                        </Row>
                        {currentStep === 1 && <div>
                            <Row className=" mb-3">

                                <Col lg={6}>
                                    <Form.Control className="sidebar-input"
                                        type="text"
                                        id="hotelName"
                                        name="hotelName"
                                        placeholder="Hotel Name"
                                        required
                                        value={formData.hotelName}
                                        onChange={handleInputChange} />
                                </Col>

                                <Col lg={6}>
                                    <Form.Control className="sidebar-input" type="text" id="hotelWebsite" name="hotelWebsite" placeholder="Hotel Website" required value={formData.hotelWebsite}
                                        onChange={handleInputChange} />
                                </Col>
                                <Col lg={6}>
                                    <Form.Control className="sidebar-input" type="text" id="youtubeLink" name="youtubeLink" placeholder="Youtube Link" value={formData.youtubeLink}
                                        onChange={handleInputChange} />
                                </Col>

                                <Col lg={6}>
                                    {/* <Form.Label>Name Of Country</Form.Label> */}

                                    <Select

                                        options={options} value={value} onChange={changeHandler}
                                        style={{ borderColor: validationErrors.country ? "red" : "" }}>

                                    </Select>
                                    {validationErrors.country && (
                                        <div style={{ color: "red", textAlign: "left" }}>
                                            {validationErrors.country}
                                        </div>
                                    )}

                                </Col>
                            </Row>

                            <Row className=" mb-3">

                                <Col lg={12}>
                                    {/* <input className="sidebar-input" type="text" id="location" name="location" placeholder="Location" value={formData.location}
                            onChange={handleInputChange} /> */}
                                    <label>Location</label>


                                    <Editor
                                        editorState={locationEditorState}
                                        onEditorStateChange={handlelocationEditorChange}
                                        name="location"
                                        value={formData.location}
                                    //   onChange={handleInputChange}
                                    />
                                </Col>
                                {/* <Col lg={6}>
                        <input className="sidebar-input" type="text" id="contactInformation" name="contactInformation" placeholder="Contact Information" value={formData.contactInformation}
                            onChange={handleInputChange} />
                    </Col> */}

                            </Row>

                            {/* <Row className=" mb-3">
                    <Col lg={12}>
                        <label>Hotel Image</label>
                        <Form.Control className="sidebar-input" type="file" id="hotelImage" name="hotelImage" placeholder="Hotel Image" value={formData.hotelImage}
                            onChange={handleimageChange} />

                    </Col>
                </Row> */}
                            <Row className=" mb-3">
                                <Col lg={12}>
                                    {/* <input className="sidebar-input" type="text" id="aboutHotel" name="aboutHotel" placeholder="About Hotel" value={formData.aboutHotel}
                            onChange={handleInputChange} /> */}
                                    <label>About Hotel</label>


                                    <Editor
                                        editorState={hotelEditorState}
                                        onEditorStateChange={handleHotelEditorChange}
                                        name="aboutHotel"
                                        value={formData.aboutHotel}
                                    //   onChange={handleInputChange}
                                    />
                                </Col>
                            </Row>

                            <Row className=" mb-3">
                                <Col lg={12}>
                                    {/* <input className="sidebar-input" type="text" id="roomsAndSuites" name="roomsAndSuites" placeholder="Rooms And Suites" value={formData.roomsAndSuites}
                            onChange={handleInputChange} /> */}

                                    <label>Rooms And Suites</label>


                                    <Editor
                                        editorState={roomsAndSuitesEditorState}
                                        onEditorStateChange={handleroomsAndSuitesEditorState}
                                        value={formData.roomsAndSuites}
                                    //   onChange={handleInputChange}
                                    />
                                </Col>
                            </Row>

                            <Row className=" mb-3">
                                <Col lg={12}>
                                    {/* <input className="sidebar-input" type="text" id="restaurantsAndBars " name="restaurantsAndBars" placeholder="Restaurents And Bars (Optional)" value={formData.restaurantsAndBars}
                            onChange={handleInputChange} /> */}
                                    <label>Restaurents And Bars (Optional)</label>
                                    <Editor
                                        editorState={restaurentsEditorState}
                                        onEditorStateChange={handlerestaurentsEditorState}
                                        value={formData.restaurantsAndBars}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className=" mb-3">
                                <Col lg={12}>
                                    {/* <input className="sidebar-input" type="text" id="spaAndWellness " name="spaAndWellness" placeholder="Spa And Wellness (Optional)" value={formData.spaAndWellness}
                            onChange={handleInputChange} /> */}
                                    <label>Spa And Wellness (Optional)</label>
                                    <Editor
                                        editorState={spaAndWellnessEditorState}
                                        onEditorStateChange={handlespaAndWellnessEditorState}
                                        value={formData.spaAndWellness}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className=" mb-3">
                                <Col lg={12}>
                                    {/* <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)" value={formData.otherFacilities}
                            onChange={handleInputChange} /> */}
                                    <label>Other Facilities (Optional)</label>
                                    <Editor
                                        editorState={otherFacilitiesEditorState}
                                        onEditorStateChange={handleOtherFacilitiesEditorChange}
                                        value={formData.roomsAndSuites}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </Row>


                            <Row className=" mb-3">
                                <Col lg={12}>
                                    {/* <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)" value={formData.additionalInformation}
                            onChange={handleInputChange} /> */}
                                    <label>Additional information (Optional)</label>
                                    <Editor
                                        editorState={additionalInformationEditorState}
                                        onEditorStateChange={handleAdditionalInformationEditorChange}
                                        value={formData.additionalInformation}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </Row>
                            {/* <h5>Hotel Amenities</h5>

                            <Row className="mb-3">
                                {renderAmenitiesInputs()}
                            </Row>
                            <Row>

                                <h5>Hotel Facilities</h5>
                                {renderFacilitiesInput()}
                            </Row> */}

                            <Row className="mb-3">
                                <Col lg={3}>
                                    <input className="sidebar-input" type="text" id="otherInformation1" name="otherInformation1" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation1}
                                        onChange={handleInputChange} />
                                </Col>
                                <Col lg={3}>
                                    <input className="sidebar-input" type="text" id="otherInformation2" name="otherInformation2" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation2}
                                        onChange={handleInputChange} />
                                </Col>
                                <Col lg={3}>
                                    <input className="sidebar-input" type="text" id="otherInformation2" name="otherInformation2" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation2}
                                        onChange={handleInputChange} />
                                </Col>
                                <Col lg={3}>
                                    <input className="sidebar-input" type="text" id="otherInformation2" name="otherInformation2" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation2}
                                        onChange={handleInputChange} />
                                </Col>
                            </Row>
                            <div className="text-end">                <button onClick={nextStep} >
                                next
                            </button>
                            </div>


                        </div>}
                        {currentStep === 2 && <div>
                            <Row className="mb-3">
                                <h5>Contact 1 </h5>
                                <Col lg={4}>
                                    <Form.Control
                                        className="sidebar-input"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder=" Name"
                                        value={formData.contact1.name}
                                        onChange={(e) => handleChange("contact1", "name", e.target.value)}
                                        required />
                                </Col>
                                <Col lg={4}>
                                    <Form.Control className="sidebar-input"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder=" Email"
                                        value={formData.contact1.email}
                                        onChange={(e) => handleChange("contact1", "email", e.target.value)}
                                        required />
                                </Col>
                                <Col lg={4}>
                                    <Form.Control className="sidebar-input"
                                        type="text"
                                        id="contactInformation"
                                        name="contactInformation"
                                        placeholder="Contact Information"
                                        value={formData.contact1.contactInformation}
                                        onChange={(e) => handleChange("contact1", "contactInformation", e.target.value)}
                                        required />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <h5>Contact 2 </h5>
                                <Col lg={4}>
                                    <Form.Control className="sidebar-input"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder=" Name"
                                        value={formData.contact2.name}
                                        onChange={(e) => handleChange("contact2", "name", e.target.value)} />
                                </Col>
                                <Col lg={4}>
                                    <Form.Control type="email"
                                        id="email"
                                        name="email"
                                        placeholder=" Email"
                                        value={formData.contact2.email}
                                        onChange={(e) => handleChange("contact2", "email", e.target.value)} />
                                </Col>
                                <Col lg={4}>
                                    <Form.Control type="text"
                                        id="contactInformation"
                                        name="contactInformation"
                                        placeholder="Contact Information"
                                        value={formData.contact2.contactInformation}
                                        onChange={(e) => handleChange("contact2", "contactInformation", e.target.value)}
                                    />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <h5 className="third-child">Contact 3 </h5>
                                <Col lg={4}>
                                    <Form.Control className="sidebar-input"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder=" Name"
                                        value={formData.contact3.name}
                                        onChange={(e) => handleChange("contact3", "name", e.target.value)} />
                                </Col>
                                <Col lg={4}>
                                    <Form.Control type="email"
                                        id="email"
                                        name="email"
                                        placeholder=" Email"
                                        value={formData.contact3.email}
                                        onChange={(e) => handleChange("contact3", "email", e.target.value)} />
                                </Col>
                                <Col lg={4}>
                                    <Form.Control type="text"
                                        id="contactInformation"
                                        name="contactInformation"
                                        placeholder="Contact Information"
                                        value={formData.contact3.contactInformation}
                                        onChange={(e) => handleChange("contact3", "contactInformation", e.target.value)} />
                                </Col>
                            </Row>
                            <div className="text-end">
                                <button onClick={prevStep} >
                                    Previous
                                </button>
                                <button onClick={nextStep} >
                                    next
                                </button>
                            </div>
                        </div>}
                        {currentStep === 3 && <div>
                            <Row className='mb-3'>
                                <Col lg={6}>
                                    <input className="sidebar-input" type="text" id="offerTitle" name="offerTitle" placeholder="Offer Title" value={formData.offerTitle}
                                        onChange={handleInputChange} required />
                                </Col>
                                <Col lg={6}>
                                    <input className="sidebar-input" type="text" id="phoneNumber" name="phoneNumber" placeholder="Contact Phone Nunmber" value={formData.phoneNumber}
                                        onChange={handleInputChange} required />
                                </Col>
                            </Row>

                            <Row className='mb-3'>
                                <Col lg={6}>
                                    <input className="sidebar-input" type="date" id="offerValidFrom" name="offerValidFrom" value={formData.offerValidFrom}
                                        onChange={handleInputChange} required />
                                </Col>
                                <Col lg={6}>
                                    <input className="sidebar-input" type="date" id="offerValidTo" name="offerValidTo" value={formData.offerValidTo}
                                        onChange={handleInputChange} required />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col lg={12}>
                                    {/* <textarea className="sidebar-input" rows={4} placeholder="Description" name="description" value={formData.description}
                            onChange={handleInputChange} required /> */}
                                    <label>Description</label>
                                    <Editor
                                        editorState={descriptionEditorState}
                                        onEditorStateChange={handleDescriptionEditorState}
                                        value={formData.description}
                                        onChange={handleInputChange}
                                    />

                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col lg={12}>
                                    <input type="text" id='redeemLink' name='redeemLink' className="sidebar-input" placeholder='Redeem Link' value={formData.redeemLink}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <div className="text-end">
                                <button onClick={prevStep} >
                                    Previous
                                </button>
                                <button onClick={nextStep} >
                                    next
                                </button>
                            </div>
                        </div>}
                        {currentStep === 4 && <div>
                            <Row className='mb-3'>
                                <Col>
                                    <h6>
                                        Add Hotel to The Home Page Latest News?
                                    </h6>
                                    <div className="select-option">
                                        <select id="addHotelToHomePageLatestNews" className="sidebar-input" name="addHotelToHomePageLatestNews" value={formData.addHotelToHomePageLatestNews}
                                            onChange={handleInputChange}>
                                            <option value="Kyrgyzstan">No</option>
                                            <option value="Display For 1 Week (+10 Euro)">Display For 1 Week (+10 Euro)</option>
                                            <option value="">Display For 1 Month (+25 Euro)</option>

                                        </select>
                                    </div>
                                </Col>
                            </Row>

                            <Row className='mb-3'>
                                <Col>
                                    <h6>
                                        Add Hotel to The Home Page Hotel Latest News?
                                    </h6>
                                    <div className="select-option">
                                        <select id="addHotelToHomePageHotelLatestNews" className="sidebar-input" name="addHotelToHomePageHotelLatestNews" value={formData.addHotelToHomePageHotelLatestNews}
                                            onChange={handleInputChange}
                                        >
                                            <option value="No">No</option>
                                            <option value="DisplayFor1Week(+10 Euro)">Display For 1 Week (+10 Euro)</option>
                                            <option value="DisplayFor1Month(+25 Euro)">Display For 1 Month (+25 Euro)</option>

                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col>
                                    <h6 className="third-child">
                                        Add Special Offer to The Homepage?
                                    </h6>
                                    <div className="select-option">
                                        <select id="addSpecialOfferToHomepage" className="sidebar-input" name="addSpecialOfferToHomepage" value={formData.addSpecialOfferToHomepage}
                                            onChange={handleInputChange}>
                                            <option value="No">No</option>
                                            <option value="DisplayFor1Week(+10 Euro)">Display For 1 Week (+10 Euro)</option>
                                            <option value="DisplayFor1Month(+25 Euro)">Display For 1 Month (+25 Euro)</option>

                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col>
                                    <h6>
                                        Add hotel to The Home Page Spotlight?
                                    </h6>
                                    <div className="select-option">
                                        <select id="addHotelToHomePageSpotlight" className="sidebar-input" name="addHotelToHomePageSpotlight" value={formData.addHotelToHomePageSpotlight}
                                            onChange={handleInputChange}
                                        >
                                            <option value="No">No</option>
                                            <option value="DisplayFor1Week(+10 Euro)">Display For 1 Week (+10 Euro)</option>
                                            <option value="DisplayFor1Month(+25 Euro)">Display For 1 Month (+25 Euro)</option>

                                        </select>
                                    </div>
                                </Col>
                            </Row>

                            <div className="text-end">
                                <button onClick={prevStep} >
                                    Previous
                                </button>
                                <button>
                                    Submit
                                </button>
                            </div>
                        </div>}

                    </Form>






                </Container>
            </section>

        </>
    )
}
export default EditHotel