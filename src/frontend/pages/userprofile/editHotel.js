import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { Col, Container, Form, Image, Nav, ProgressBar, Row } from 'react-bootstrap';
import API from "../../../utils";
import { EditorState,ContentState  } from 'draft-js';
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
import htmlToDraft from 'html-to-draftjs';
import EditImageModal from "./EditImageModal";
import DeleteModalImage from "./deleteImageModal";
import AddImageHotel from "./AddImageModal";
function EditHotel({ hotel_id, onClose }) {
    console.log("Hotel ID:", hotel_id);
    
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
    const [aminitesData, setAminitesData]=useState("")
    const [facilitiesData, setFacilitiesData]=useState("") 
    const [hotelImages,setHotelImages]=useState([])
    // const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());
    const [currentStep, setCurrentStep] = useState(1);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showAddImageModal, setShowAddImageModal] = useState(false);

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);



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
        addHotelToHomePageLatestNews: "",
        addHotelToHomePageHotelLatestNews: "",
        addSpecialOfferToHomepage: "",
        addHotelToHomePageSpotlight: "",

    });

    const handleimageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target || {};

        if (type === "checkbox") {
            // Check if the checkbox is related to an amenity
            const isAmenityCheckbox = formData.amenitiesList.some(amenity => amenity.title === name);

            if (isAmenityCheckbox) {
                // If it's an amenity checkbox, update the state accordingly
                setFormData((prevData) => ({
                    ...prevData,
                    amenitiesList: prevData.amenitiesList.map(amenity => ({
                        ...amenity,
                        checked: amenity.title === name ? checked : amenity.checked || false,
                    })),
                }));
            } else {
                // If it's not an amenity checkbox, update the state as before
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: checked,
                }));
            }
        } else {
            // For non-checkbox inputs, update the state as before
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
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


    const handleUpdateHotel = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        const formDataObject = new FormData();
        
        formDataObject.append('hotel_id', hotel_id);
        formDataObject.append('user_id', user_id);
        formDataObject.append('hotel_title', formData.hotelName);
        formDataObject.append('website', formData.hotelWebsite);
        formDataObject.append('youtube_link', formData.youtubeLink);
        formDataObject.append('country', value ? value.value : '');
        formDataObject.append('address', formData.location);
        formDataObject.append('contact_no', 956449494);
        formDataObject.append('hotel_images', image);
        formDataObject.append('about_hotel', formData.aboutHotel);
        formDataObject.append('rooms_and_suites', formData.roomsAndSuites);
        formDataObject.append('restaurent_bars', formData.restaurantsAndBars);
        formDataObject.append('spa_wellness', formData.spaAndWellness);
        formDataObject.append('other_facilities', formData.otherFacilities);
        // formDataObject.append('numberOfRooms', formData.numberOfRooms);
        // formDataObject.append('numberOfRestaurants', formData.numberOfRestaurants);
        // formDataObject.append('outdoorSwimmingPool', formData.outdoorSwimmingPool);
        // formDataObject.append('bars', formData.bars);
        formDataObject.append('email', "rohit@gmail.com");
        formDataObject.append('otherInformation1', formData.otherInformation1);
        formDataObject.append('otherInformation2', formData.otherInformation2);
        formDataObject.append('otherInformation3', formData.otherInformation3);
        formDataObject.append('otherInformation4', formData.otherInformation4);

        formDataObject.append('type', 2);
        // Adding contact objects
        for (let i = 1; i <= 3; i++) {
            formDataObject.append(`name[${i}]`, formData[`contact${i}`].name);
            formDataObject.append(`email[${i}]`, formData[`contact${i}`].email);
            formDataObject.append(`contact[${i}]`, formData[`contact${i}`].contactInformation);
        }
        formDataObject.append('home_page_latest_news', formData.addHotelToHomePageLatestNews);
        formDataObject.append('hotel_latest_news', formData.addHotelToHomePageHotelLatestNews);
        formDataObject.append('special_offer_to_homepage', formData.addSpecialOfferToHomepage);
        formDataObject.append('home_page_spotlight', formData.addHotelToHomePageSpotlight);

       

        const amenitiesArray = formData.amenitiesList.map((amenity) => ({
            [amenity.id]: amenity.checked || false
        }));
        formDataObject.append('amities', JSON.stringify(amenitiesArray));


        const facilitiesArray = formData.facilitiesList.map((facility) => ({
            [facility.id]: facility.checked || false
        }));
        formDataObject.append('facilities', JSON.stringify(facilitiesArray));

       
        try {
            const response = await axios.post(

                `${API.BASE_URL}${API.ENDPOINTS.updateHotel}`,
                formDataObject,
                {
                    headers: {
                        "Authorization": "Bearer " + token,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            if (response.data.status === true) {
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }



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


    const renderAmenitiesInputs = () => {
        const numberInputs = [];
        const checkboxInputs = [];
    
        formData.amenitiesList.forEach((amenity, index) => {
            if (amenity.type === '2') {
                numberInputs.push(
                    <Col lg={3} md={4} key={index} className="mb-3">
                        <input
                            className="sidebar-input order-1"
                            type="number"
                            id={`amenityNumber_${index}`}
                            name={amenity.title}
                            placeholder={amenity.title}
                            value={formData[amenity.title] || ''}
                            onChange={handleInputChange}
                            style={{ borderColor: validationErrors[amenity.title] ? 'red' : '' }}
                        />
                        {validationErrors[amenity.title] && (
                            <div style={{ color: 'red', textAlign: 'left' }}>
                                {validationErrors[amenity.title]}
                            </div>
                        )}
                    </Col>
                );
            } else {
                checkboxInputs.push(
                    <Col lg={3} md={4} key={index} className="mb-3">
                        <Form.Group className='d-flex order-2'>
                            <Form.Check
                                type="checkbox"
                                id={`amenityCheckbox_${index}`}
                                label={amenity.title}
                                className='me-3'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        {validationErrors[amenity.title] && (
                            <div style={{ color: 'red', textAlign: 'left' }}>
                                {validationErrors[amenity.title]}
                            </div>
                        )}
                    </Col>
                );
            }
        });
    
        return [...numberInputs, ...checkboxInputs];
    };
    
    const renderFacilitiesInput = () => {
        const checkboxInputs = [];
    
        formData.facilitiesList.forEach((facility, index) => {
                checkboxInputs.push(
                    <Col lg={3} md={4} key={index} className="mb-3">
                        <Form.Group className='d-flex order-2'>
                            <Form.Check
                                type="checkbox"
                                id={`facilityCheckbox_${index}`}
                                label={facility.title}
                                className='me-3'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                       
                    </Col>
                );
            
        });
    
        return [...checkboxInputs];
    };
    

      const handeFetchData = async (hotel_id) => {
        // const token = localStorage.getItem("token");
        try {
          const response = await axios.post(
            `${API.BASE_URL}${API.ENDPOINTS.editHotel}`,
            {
            
            hotel_id,
            },
            {
              headers: {
                Authorization: "hXuRUGsEGuhGf6KM",
              },
            }
          );
      
          if (response.data.status === true) {
            setHotelImages(response.data.data.hotel_images)
            const apiData = response.data.data;
    
            setFormData(prevFormData => ({
                ...prevFormData,
                hotelName: apiData.hotel_title || "",
                hotelWebsite: apiData.website || "",
                youtubeLink: apiData.youtube_link || "",
                contry:apiData.country || "",
              }));

            const contentBlock = htmlToDraft(apiData.address);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                const newLocationEditorState = EditorState.createWithContent(contentState);
                setlocationEditorState(newLocationEditorState);
            }
            const contentBlock1 = htmlToDraft(apiData.about_hotel);
            if (contentBlock) {
                const contentState1 = ContentState.createFromBlockArray(contentBlock1.contentBlocks);
                const newLocationEditorState1 = EditorState.createWithContent(contentState1);
                setHotelEditorState(newLocationEditorState1);
            }
            const contentBlock2 = htmlToDraft(apiData.rooms_and_suites);
            if (contentBlock) {
                const contentState2 = ContentState.createFromBlockArray(contentBlock2.contentBlocks);
                const newLocationEditorState2 = EditorState.createWithContent(contentState2);
                setroomsAndSuitesEditorState(newLocationEditorState2);
            }
            const contentBlock3 = htmlToDraft(apiData.restaurent_bars);
            if (contentBlock) {
                const contentState3 = ContentState.createFromBlockArray(contentBlock3.contentBlocks);
                const newLocationEditorState3 = EditorState.createWithContent(contentState3);
                setrestaurentsEditorState(newLocationEditorState3);
            }
            const contentBlock4 = htmlToDraft(apiData.spa_wellness);
            if (contentBlock) {
                const contentState4 = ContentState.createFromBlockArray(contentBlock4.contentBlocks);
                const newLocationEditorState4 = EditorState.createWithContent(contentState4);
                setSpaAndWellnessEditorState(newLocationEditorState4);
            }

            const contentBlock5 = htmlToDraft(apiData.other_facilities);
            if (contentBlock) {
                const contentState5 = ContentState.createFromBlockArray(contentBlock5.contentBlocks);
                const newLocationEditorState5 = EditorState.createWithContent(contentState5);
                setOtherFacilitiesEditorState(newLocationEditorState5);
            }
           
            const contentBlock6 = htmlToDraft(apiData.aditional_information);
            if (contentBlock) {
                const contentState6 = ContentState.createFromBlockArray(contentBlock6.contentBlocks);
                const newLocationEditorState6 = EditorState.createWithContent(contentState6);
                setOtherFacilitiesEditorState(newLocationEditorState6);
            }

          } else {
            console.error("Error:", response.data.message);
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
      
      useEffect(() => {
        handeFetchData(hotel_id);
      }, []);
      
   
    const handleCloseModal = () => {
        // Close the modal
        setShowEditModal(false);
        setShowDeleteModal(false);
        setShowAddImageModal(false);
      };
    
     
    
      const handleSingleUpdateHotelImage = (index) => {
        setSelectedImageIndex(index);
        setShowEditModal(true);
      };
      const deleteHotelImage= (index) => {
        setSelectedImageIndex(index);
        setShowDeleteModal(true);
      };
       const AddImags= (index) => {
        setSelectedImageIndex(index);
        setShowAddImageModal(true);
      };

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
                {currentStep === 3 && <h4 className="stepform-heading">Home Page Addon</h4>}
                {/* {currentStep === 4 && <h4 className="stepform-heading"></h4>} */}

            </div>
            <ProgressBar now={progress} label={`${progress}%`} className="ProgressBar h-25 mb-3" />
            <Form>
      
            <div className="mb-3">
                            <h1>Image</h1>
                        </div>

                        <div className="text-end mb-5">
    <button onClick={() =>AddImags()} >
        Add New Image
    </button>
</div>
<Row>
        {hotelImages.map((image, index) => (
          <Col key={index} lg={3} className="mb-3">
            {image ? (
              <>
                <Image src={image} alt={`Hotel Image ${index + 1}`} />
                <div className="mt-3 d-flex justify-content-between">
                  <button onClick={() => handleSingleUpdateHotelImage(index)}>Edit</button>
                  <button onClick={() => deleteHotelImage(index)}>Delete</button>
                </div>
              </>
            ) : (
              <p>No image available</p>
            )}
          </Col>
        ))}
      </Row>

                {currentStep === 1 && <div>
                    <Row className=" mb-3">

                        <Col lg={6}>
                            <Form.Label>  Hotel Name </Form.Label>
                            <Form.Control className="sidebar-input"
                                type="text"
                                id="hotelName"
                                name="hotelName"
                                placeholder="Hotel Name"
                                required
                                value={formData.hotelName}
                                onChange={handleInputChange}
                                style={{ borderColor: validationErrors.hotelName ? "red" : "" }}


                            />
                            {validationErrors.hotelName && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.hotelName}
                                </div>
                            )}
                        </Col>


                        <Col lg={6}>
                            <Form.Label>  Hotel Website </Form.Label>
                            <Form.Control className="sidebar-input" type="text" id="hotelWebsite" name="hotelWebsite" placeholder="Hotel Website" required value={formData.hotelWebsite}
                                onChange={handleInputChange} style={{ borderColor: validationErrors.hotelWebsite ? "red" : "" }}

                            />
                            {validationErrors.hotelWebsite && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.hotelWebsite}
                                </div>
                            )}
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Youtube Link </Form.Label>
                            <Form.Control className="sidebar-input" type="text" id="youtubeLink" name="youtubeLink" placeholder="Youtube Link" value={formData.youtubeLink}
                                onChange={handleInputChange} style={{ borderColor: validationErrors.youtubeLink ? "red" : "" }}
                            />
                            {validationErrors.youtubeLink && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.youtubeLink}
                                </div>
                            )}
                        </Col>

                        <Col lg={6}>
                            <Form.Label>Name Of Country</Form.Label>
                         
                                <Select 
                                   
                                    options={options} value={value} onChange={changeHandler}
                                    style={{ borderColor: validationErrors.country ? "red" : "" }} className="drop">
                                    
                                </Select>
                                {validationErrors.country && (
                                    <div style={{ color: "red", textAlign: "left" }}>
                                        {validationErrors.country}
                                    </div>
                                )}
                            
                        </Col>
                    </Row>

                    <Row className=" mb-3">

                        <Col lg={12} className="textarea1">
                            {/* <input className="sidebar-input" type="text" id="location" name="location" placeholder="Location" value={formData.location}
                            onChange={handleInputChange} /> */}
                            <label>Location</label>
                            <Editor
                                editorState={locationEditorState}
                                onEditorStateChange={handlelocationEditorChange}
                                name="location"
                                value={formData.location}
                                //onChange={handleInputChange}
                                style={{ borderColor: validationErrors.location ? "red" : "" }}

                            />
                            {validationErrors.location && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.location}
                                </div>
                            )}
                        </Col>
                        {/* <Col lg={6}>
                        <input className="sidebar-input" type="text" id="contactInformation" name="contactInformation" placeholder="Contact Information" value={formData.contactInformation}
                            onChange={handleInputChange} />
                    </Col> */}

                    </Row>

                    <Row className=" mb-3">
                        <Col lg={12}>
                            <label>Hotel Image</label>
                            <Form.Control className="sidebar-input" type="file" id="hotelImage" name="hotelImage" placeholder="Hotel Image" value={formData.hotelImage}
                                onChange={handleimageChange} style={{ borderColor: validationErrors.hotelImage ? "red" : "" }}
                            />
                            {validationErrors.hotelImage && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.hotelImage}
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            
                            {/* <input className="sidebar-input" type="text" id="aboutHotel" name="aboutHotel" placeholder="About Hotel" value={formData.aboutHotel}
                            onChange={handleInputChange} /> */}
                            <h5>About Hotel</h5>


                            <Editor
                                editorState={hotelEditorState}
                                onEditorStateChange={handleHotelEditorChange}
                                name="aboutHotel"
                                value={formData.aboutHotel}
                                style={{ borderColor: validationErrors.aboutHotel ? "red" : "" }}
                            />
                            {validationErrors.aboutHotel && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.aboutHotel}
                                </div>
                            )}
                        </Col>
                    </Row>

                    <Row className=" mb-3">
                        <Col lg={12}>
                            {/* <input className="sidebar-input" type="text" id="roomsAndSuites" name="roomsAndSuites" placeholder="Rooms And Suites" value={formData.roomsAndSuites}
                            onChange={handleInputChange} /> */}

                            <h5>Rooms And Suites</h5>


                            <Editor
                                editorState={roomsAndSuitesEditorState}
                                onEditorStateChange={handleroomsAndSuitesEditorState}
                                value={formData.roomsAndSuites}
                                style={{ borderColor: validationErrors.roomsAndSuites ? "red" : "" }}
                            />
                            {validationErrors.roomsAndSuites && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.roomsAndSuites}
                                </div>
                            )}
                        </Col>
                    </Row>

                    <Row className=" mb-3">
                        <Col lg={12}>
                            {/* <input className="sidebar-input" type="text" id="restaurantsAndBars " name="restaurantsAndBars" placeholder="Restaurents And Bars (Optional)" value={formData.restaurantsAndBars}
                            onChange={handleInputChange} /> */}
                            <h5>Restaurents And Bars (Optional)</h5>
                            <Editor
                                editorState={restaurentsEditorState}
                                onEditorStateChange={handlerestaurentsEditorState}
                                value={formData.restaurantsAndBars}
                                onChange={handleInputChange}
                                style={{ borderColor: validationErrors.restaurantsAndBars ? "red" : "" }}
                            />
                            {validationErrors.restaurantsAndBars && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.restaurantsAndBars}
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            {/* <input className="sidebar-input" type="text" id="spaAndWellness " name="spaAndWellness" placeholder="Spa And Wellness (Optional)" value={formData.spaAndWellness}
                            onChange={handleInputChange} /> */}
                            <h5>Spa And Wellness (Optional)</h5>
                            <Editor
                                editorState={spaAndWellnessEditorState}
                                onEditorStateChange={handlespaAndWellnessEditorState}
                                value={formData.spaAndWellness}
                                onChange={handleInputChange}
                                style={{ borderColor: validationErrors.spaAndWellness ? "red" : "" }}
                            />
                            {validationErrors.spaAndWellness && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.spaAndWellness}
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            {/* <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)" value={formData.otherFacilities}
                            onChange={handleInputChange} /> */}
                            <h5>Other Facilities (Optional)</h5>
                            <Editor
                                editorState={otherFacilitiesEditorState}
                                onEditorStateChange={handleOtherFacilitiesEditorChange}
                                value={formData.roomsAndSuites}
                                onChange={handleInputChange}
                                style={{ borderColor: validationErrors.roomsAndSuites ? "red" : "" }}
                            />
                            {validationErrors.roomsAndSuites && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.roomsAndSuites}
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            {/* <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)" value={formData.additionalInformation}
                            onChange={handleInputChange} /> */}
                            
                            <h5>Additional information (Optional)</h5>
                            <h6>If left empty it wont show on hotel page</h6>
                            <Editor
                                editorState={additionalInformationEditorState}
                                onEditorStateChange={handleAdditionalInformationEditorChange}
                                value={formData.additionalInformation}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                    <h5>Hotel Amenities</h5>
                   
                    <Row className="mb-3">
                {renderAmenitiesInputs()}
            </Row>
                    <Row>

                    <h5>Hotel Facilities</h5>
                   {renderFacilitiesInput()}
                        </Row>    
                    
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
                            <input className="sidebar-input" type="text" id="otherInformation3" name="otherInformation3" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation3}
                                onChange={handleInputChange} />
                        </Col>
                        <Col lg={3}>
                            <input className="sidebar-input" type="text" id="otherInformation4" name="otherInformation4" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation4}
                                onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <div className="text-end">
                        <button onClick={nextStep} >
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
                                required
                            />
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
                    <div className="text-end ">
                        <button onClick={prevStep} className="me-3">
                            Previous
                        </button>
                        <button onClick={nextStep} >
                            next
                        </button>
                    </div>
                </div>}
                {currentStep === 3 &&
                //  <div>
                //     <Row className='mb-3'>
                //         <Col lg={6}>
                //             <input className="sidebar-input" type="text" id="offerTitle" name="offerTitle" placeholder="Offer Title" value={formData.offerTitle}
                //                 onChange={handleInputChange} required />
                //         </Col>
                //         <Col lg={6}>
                //             <input className="sidebar-input" type="text" id="phone_number" name="phone_number" placeholder="Contact Phone Nunmber" value={formData.phone_number}
                //                 onChange={handleInputChange} required />
                //         </Col>
                //     </Row>

                //     <Row className='mb-3'>
                //         <Col lg={6}>
                //             <input className="sidebar-input" type="date" id="offerValidFrom" name="offerValidFrom" value={formData.offerValidFrom}
                //                 onChange={handleInputChange} required />
                //         </Col>
                //         <Col lg={6}>
                //             <input className="sidebar-input" type="date" id="offerValidTo" name="offerValidTo" value={formData.offerValidTo}
                //                 onChange={handleInputChange} required />
                //         </Col>
                //     </Row>
                //     <Row className='mb-3'>
                //         <Col lg={12}>
                           
                //             <label>Description</label>
                //             <Editor
                //                 editorState={descriptionEditorState}
                //                 onEditorStateChange={handleDescriptionEditorState}
                //                 value={formData.description}
                //                 onChange={handleInputChange}
                //             />

                //         </Col>
                //     </Row>
                //     <Row className='mb-3'>
                //         <Col lg={12}>
                //             <input type="text" id='redeemLink' name='redeemLink' className="sidebar-input" placeholder='Redeem Link' value={formData.redeemLink}
                //                 onChange={handleInputChange}
                //             />
                //         </Col>
                //     </Row>
                //     <div className="text-end">
                //         <button onClick={prevStep} >
                //             Previous
                //         </button>
                //         <button onClick={nextStep} >
                //             next
                //         </button>
                //     </div>
                // </div>}
                <div>
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
                                Add hotel to The Home Page Recently Added Hotels?
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
                        <button onClick={handleUpdateHotel}>
                            Submit
                        </button>
                    </div>
                </div>}
                {/* {currentStep === 4 && <div>
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
                        <button onClick={handleUpdateHotel}>
                            Submit
                        </button>
                    </div>
                </div>} */}

            </Form>





                </Container>
            </section>

            <EditImageModal
        show={showEditModal}
        handleClose={handleCloseModal}
        selectedImageIndex={selectedImageIndex}
        editFunction={handeFetchData}
        hotel_id={hotel_id}
      />
      
      <DeleteModalImage
        show={showDeleteModal}
        handleClose={handleCloseModal}
        selectedImageIndex={selectedImageIndex}
        editFunction={handeFetchData}
        hotel_id={hotel_id}

      />
        <AddImageHotel
        show={showAddImageModal}
        handleClose={handleCloseModal}
        selectedImageIndex={selectedImageIndex}
        editFunction={handeFetchData}
        hotel_id={hotel_id}
      />
        </>
    )
}
export default EditHotel