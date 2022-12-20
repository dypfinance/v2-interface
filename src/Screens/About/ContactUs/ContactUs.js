import React, { useRef, useState } from "react";
import axios from "axios";
import ReCaptchaV2 from "react-google-recaptcha";
import Title from "../../../components/Title/Title";
import $alert from "../../../hooks/$alert";
import "./_contactus.scss";
import contactHeader from "../assets/contactHeader.png";
import Box from "@mui/material/Box";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import envelope from "../assets/envelope.svg";
import styled from "styled-components";
import validate from "./validateinfo";
import filebg1 from "../assets/filebg.svg";
import filebg2 from "../assets/fileuploaded.svg";
import useWindowSize from "../../../hooks/useWindowSize";
import Modal from "../../../components/Modal/Modal";
import { useEffect } from "react";
import removebtn from '../assets/remove-btn.svg'
import selectBtn from '../../Support/assets/selectBtn.svg'
import { createTheme, ThemeProvider } from "@mui/material/styles";



const theme = createTheme({
  palette: {
    primary: {
      main: '#7770e0'
    }
  }
})

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  "& .MuiInputLabel-root": {
    color: "#A0A3BD",
    fontWeight: 400,
    fontFamily: 'Poppins',

  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    fontFamily: 'Poppins',
  },
  "& .MuiInputLabel-root": {
    color: "#A0A3BD",
    fontFamily: 'Poppins',
    fontWeight: 400,
  },
}));

const ContactUs = () => {
  const initialState = {
    email: "",
    name: "",
    organization: "",
    job: "",
    subject: "",
    message: "",
  };

  const jobTitles = [
    {
      title: "Business Developer",
      value: "Business Developer",
    },
    {
      title: "Blockchain Developer",
      value: "Blockchain Developer",
    },
    {
      title: "Co-Founder/CEO",
      value: "Co-Founder/CEO",
    },
    {
      title: "Co-Founder/CTO",
      value: "Co-Founder/CTO",
    },
    {
      title: "Project Manager",
      value: "Project Manager",
    },
    {
      title: "Sales Representative",
      value: "Sales Representative",
    },
    {
      title: "Marketing Manager",
      value: "Marketing Manager",
    },
    {
      title: "Engineer",
      value: "Engineer",
    },
  ];


  const [values, setValues] = useState(initialState);
  const [selectedFile, setSelectedFile] = useState("");
  const [success, setSuccess] = useState(false);
  const [formState, setFormState] = useState({
    job: false,
    subject: false
  })
  const [errors, setErrors] = useState({});
  const recaptchaRef = useRef(null);
  const windowSize = useWindowSize();

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const modal = document.querySelector("#tymodal");
  const body = document.querySelector("body");

  const showModal = function (e) {
    if (modal.class.includes("show")) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    if (success === true) {
      showModal();
    }
  }, [modal, success]);

  const onFileChange = (event) => {
    const fileTypes = [
      "image/jpg",
      "image/jpeg",
      "image/png",
      "application/pdf",
    ];

    const file = event.target.files[0]
    const reader = new FileReader();
    const testImage = new Image();

     reader.onload = function () {
      if (reader !== null && typeof reader.result == "string") {
        testImage.src = reader.result;
      }
    };
    reader.readAsDataURL(file);


    testImage.onload = async function () {
      if (fileTypes.includes(event.target.files[0].type)) {
      if (event.target.files && event.target.files[0]) {
        if (event.target.files[0].size < 5000000) {
          setSelectedFile(reader.result);
          console.log(reader.result);
        } else alert("File size too big");
      }
    } else {
      alert("Image type not supported");
    }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors(validate(values));

    if (Object.keys(errors).length === 0) {
      const captchaToken = await recaptchaRef.current.executeAsync();
      const data = {
        email: values.email,
        subject: values.subject,
        name: values.first_name,
        organization: values.organization,
        job: values.job,
        message: values.message,
        image: selectedFile,
        recaptcha: captchaToken,
      };

      if (
        values.name !== "" &&
        values.job !== "" &&
        values.organization !== "" &&
        values.message !== "" &&
        values.subject !== "" &&
        values.email !== ""
        // selectedFile !== ""
      ) {
        const send = await axios
          .post("https://api-mail.dyp.finance/api/business", data)
          .then(function (result) {
            
            return result.data;
          })
          .catch(function (error) {
            console.error(error);
          });

        if (send.status === 1) {
          setSuccess(true);
          console.log(values, selectedFile);
        } else {
          setSuccess(false);
        }
      }
      recaptchaRef.current.reset();

      // setValues({ ...initialState });
      setSelectedFile(null);

    }
  };

  const handleChangeBg = (event) => {
    if (selectedFile) {
      setSelectedFile(null);
      event.preventDefault();
    }
  };

  return (
    <ThemeProvider theme={theme}>
        <div className="container-fluid contact-wrapper" id="contactus">
      <div className="container-lg contact-container pt-5 px-2 px-lg-4">
        <div className="row flex-column">
          <Title top="Contact us" />
          <p className="text-secondary business-content">
            Interested in collaborating with us? <br />
            Please complete this short form.
          </p>
          <div className="outer-form p-lg-4 p-xl-4 p-md-4 p-1 position-relative mx-2">
            <div className="d-lg-flex d-xl-flex align-items-center mx-2 mt-4 titlewrapper">
              <img
                src={contactHeader}
                alt=""
                 
                className="col-lg-3 col-xl-3 px-0 px-lg-2 contactimg"
              />
              <div className="d-flex flex-lg-row flex-xl-row flex-md-row flex-column  m-0 justify-content-between gap-2 w-100 align-items-center">
                <div className="ms-0 ms-lg-3">
                  <h2 className="fw-bold">Business</h2>
                  <p className="text-secondary">
                    We appreciate your interest in Dypius
                  </p>
                </div>
                <div
                  className="circulating-wrapper"
                >
                  <a
                    href="mailto:business@dypius.com"
                    rel="noreferrer"
                    target={"_blank"}
                  >
                    <div className="d-flex flex-column gap-3">
                      <span
                        className="circulating-title d-flex align-items-center gap-1 align-items-center"
                        style={{ fontWeight: 500, color: "#7670E0" }}
                      >
                        <img src={envelope} alt=""  /> <p className="mb-0 email">business@dypius.com</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row form-container mt-5 mx-2 p-lg-4 p-xl-4 p-md-4 p-1 pt-3">
              <div className="row justify-content-between pl-4">
                <h4 className="pl-0">Business form</h4>
              </div>

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: "8px 0", width: "100%" },
                }}
                noValidate
                autoComplete="off"
                width={"100%"}
              >
                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex flex-lg-row flex-xl-row flex-column m-0 justify-content-between gap-4">
                    <StyledTextField
                      error={errors.name ? true : false}
                      required
                      label="Name"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      helperText={errors.name}
                    />
                     {formState.job === false ? 
                        <FormControl fullWidth className="mt-2">
                        <InputLabel id="demo-simple-select-error-label">
                          Job Title
                        </InputLabel>
                        <StyledSelect
                          sx={{ borderRadius: "8px", fontFamily: "Poppins" }}
                          labelId="demo-simple-select-error-label"
                          id="job"
                          name="job"
                          value={values.job}
                          error={errors.job ? true : false}
                          onChange={handleChange}
                          renderValue={(value) => value}
                          label="Job title"
                        >
                          {jobTitles.map((job, index) => (
                            <MenuItem key={index} value={job.value}>{job.title}</MenuItem> 
                          ))}
                          <MenuItem
                            onClick={() =>
                              setFormState({ ...formState, job: true })
                            }
                            value=""
                          >
                            Other
                          </MenuItem>
                        </StyledSelect>
                        <FormHelperText>{errors.job}</FormHelperText>
                      </FormControl>
                      :
                      <div className="selected-field d-flex justify-content-center align-items-center gap-2 px-0 w-100">
                    <StyledTextField
                      error={errors.job ? true : false}
                      label="Job title"
                      fullWidth
                      id="job"
                      name="job"
                      value={values.job}
                      helperText={errors.job}
                      required
                      onChange={handleChange}
                    />
                    <img
                      src={selectBtn}
                      alt=""
                       
                      style={{
                        width: '58px',
                        height: '58px',
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setFormState({ ...formState, job: false })
                      }
                    />
                  </div> 
                    }
                  </div>
                  <div className="d-flex flex-lg-row flex-xl-row flex-column m-0 justify-content-between gap-4">
                    <StyledTextField
                      error={errors.organization ? true : false}
                      required
                      label="Organization"
                      name="organization"
                      id="organization"
                      value={values.organization}
                      onChange={handleChange}
                      helperText={errors.organization}
                    />
                     <StyledTextField
                      error={errors.email ? true : false}
                      required
                      label="Work email address"
                      name="email"
                      id="email"
                      value={values.email}
                      type={"email"}
                      onChange={handleChange}
                      helperText={errors.email}
                    />
                   
                  </div>
                  <div className="d-flex flex-lg-row flex-xl-row flex-column m-0 justify-content-between gap-4">
                   {formState.subject === false ? 
                    <FormControl fullWidth className="mt-2">
                    <InputLabel id="demo-simple-select-error-label">
                      Subject
                    </InputLabel>
                    <StyledSelect
                      sx={{ borderRadius: "8px", fontFamily: "Poppins" }}
                      labelId="demo-simple-select-error-label"
                      id="subject"
                      name="subject"
                      value={values.subject}
                      error={errors.subject ? true : false}
                      onChange={handleChange}
                      renderValue={(value) => value}
                      label="Subject"
                    >
                      <MenuItem value="Partnership">Partnership</MenuItem>
                      <MenuItem value="Media Inquiry">Media Inquiry</MenuItem>
                      <MenuItem value="Launchpad">Launchpad</MenuItem>
                      <MenuItem
                        onClick={() =>
                          setFormState({ ...formState, subject: true })
                        }
                        value=""
                      >
                        Other
                      </MenuItem>
                    </StyledSelect>
                    <FormHelperText>{errors.subject}</FormHelperText>
                  </FormControl>
                   :
                   <div className="selected-field d-flex justify-content-center align-items-center gap-2 px-0 w-100">
                   <StyledTextField
                     error={errors.subject ? true : false}
                     required
                     label="Subject"
                     name="subject"
                     id="subject"
                     value={values.subject}
                     onChange={handleChange}
                     helperText={errors.subject}
                   />
                   <img
                     src={selectBtn}
                     alt=""
                      
                     style={{
                       width: '58px',
                       height: '58px',
                       cursor: "pointer",
                     }}
                     onClick={() =>
                       setFormState({ ...formState, subject: false })
                     }
                   />
                 </div> 
                  }
                  </div>
                  <StyledTextField
                    error={errors.message ? true : false}
                    required
                    label="Write your message for our business team here"
                    multiline
                    name="message"
                    id="message"
                    value={values.message}
                    rows={7}
                    onChange={handleChange}
                    helperText={errors.message}
                  />
                </div>
              </Box>
              <div className="row m-0 gap-3 justify-content-between w-100 mb-3">
                <div
                  className="d-grid gap-1 p-0"
                  style={{ width: windowSize.width < 999 ? "100%" : "20%" }}
                >
                  <span className="d-flex gap-2">
                  <input
                    type="file"
                    className="custom-file-input outline-btn"
                    onChange={(e) => {
                      onFileChange(e);
                    }}
                   
                    style={{
                      backgroundImage: selectedFile
                        ? `url(${filebg2})`
                        : `url(${filebg1})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      border: '2px solid #D6D8E7',
                      width:  "100%",
                      fontSize: 0
                    }}
                  />
                  <img src={removebtn} alt=''    style={{display: selectedFile ? 'block' : 'none', cursor: 'pointer'}} onClick={(e) => {
                      handleChangeBg(e);
                    }}/>
                  </span>
                  <span className="helpertext">Max file size 5MB</span>
                </div>
                <ReCaptchaV2
                  sitekey="6LflZgEgAAAAAO-psvqdoreRgcDdtkQUmYXoHuy2"
                  style={{ display: "inline-block" }}
                  theme="dark"
                  size="invisible"
                  ref={recaptchaRef}
                />
                <button
                  className="filled-btn submitbtn border-0"
                  data-bs-toggle="modal"
                  data-bs-target={success === true ? "#tymodal" : "#tymodal1"}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {success === true && (
        <Modal
          visible={success}
          modalId="tymodal"
          setIsVisible={() => {
            setSuccess(false);
          }}
        />
      )}
     
    </div>
    </ThemeProvider>
  );
};

export default ContactUs;
