import React from "react";
import Title from "../../../components/Title/Title";
import "./_helpcenter.scss";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import filebg1 from "../../About/assets/filebg.svg";
import filebg2 from "../../About/assets/fileuploaded.svg";
import { useState } from "react";
import styled from "styled-components";
import FormContainer from "../../../components/FormContainer/FormContainer";
import validate from "./validateHelpInfo";
import axios from "axios";
import useWindowSize from "../../../hooks/useWindowSize";
import ReCaptchaV2 from "react-google-recaptcha";
import { useRef } from "react";
import useFileChange from "../../../hooks/useFileChange";



const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  "& .MuiInputLabel-root": {
    color: "#A0A3BD",
    fontWeight: 400,
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  "& .MuiInputLabel-root": {
    color: "#A0A3BD",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
  },
}));


const HelpCenter = () => {




  const selectoptions = [
    {
      title: "Support",
      value: "support",
    },
    {
      title: "Media Inquiry",
      value: "mediaInquiry",
    },
    {
      title: "Feedback",
      value: "feedback",
    },
    {
      title: "Other",
      value: "other",
    },
  ];

  const helpState = {
    first_name: "",
    last_name: "",
    email: "",
    topic: "",
    message: "",
  };

  const [values, setValues] = useState(helpState);
  const [errors, setErrors] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [help, setHelp] = useState(false);
  const [business, setBusiness] = useState(false);
  const [success, setSuccess] = useState(false);
  const recaptchaRef = useRef(null);

  
  
  const handleChange = async (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };
  const onFileChange = (event) => {
    const fileTypes = [
      "image/jpg",
      "image/png",
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.doc",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];

    if (fileTypes.includes(event.target.files[0].type)) {
      if (event.target.files && event.target.files[0]) {
        if (event.target.files[0].size < 5000000) {
          setSelectedFile(event.target.files[0]);
        } else alert("File size too big");
      }
    } else {
      alert("Image type not supported");
    }
  };

 


  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors(validate(values));

    if (Object.keys(errors).length === 0) {
      const captchaToken = await recaptchaRef.current.executeAsync();
      const data = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        topic: values.topic,
        message: values.message,
        recaptcha: captchaToken
      };

      if (
        values.first_name !== "" &&
        values.last_name !== "" &&
        values.email !== "" &&
        values.topic !== "" &&
        values.message !== "" 
      ) {
        const send = await axios
          .post("https://api-mail.dyp.finance/api/help", data)
          .then(function (result) {
            console.log(result.data);
            return result.data;
            
          })
          .catch(function (error) {
            console.error(error);
          });

        if (send.status === 1) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      }
      recaptchaRef.current.reset();
      
      setValues({ ...helpState });
    }
  };


  const handleChangeBg = (event) => {
    if(selectedFile) {
      setSelectedFile(null)
      event.preventDefault();
    }
  }

  const openHelp = () => {
    setHelp(!help);
  };

  const openBusiness = () => {
    setBusiness(!business);
  };

  return (
    <div className="container-lg help-wrapper">
      <div className="row flex-column align-items-center">
        <Title top="Stay" bottom="connected" align="d-flex flex-row gap-2" />
        <p className="text-secondary">
          Reach out to us anytime and we will happily answer all of your
          inquiries.
        </p>
      </div>
      <div className="row contact-container" style={{ marginTop: "7rem" }}>
        <FormContainer
          title="Help Center"
          desc="Get immediate help and support for Dypius products and solutions. "
          onClick={openHelp}
          accordionState={help}
          collapse="collapseOne"
        >
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <h4>Send feedback</h4>
            <div className="help-form p-4">
              <div className="row gap-4 justify-content-center">
                <StyledTextField
                  error={errors.first_name ? true : false}
                  size="small"
                  label="First name"
                  id="first_name"
                  name="first_name"
                  value={values.first_name}
                  helperText={errors.first_name}
                  required
                  onChange={handleChange}
                  sx={{ width: "250px" }}
                />
                <StyledTextField
                   error={errors.last_name ? true : false}
                   size="small"
                   label="Last name"
                   id="last_name"
                   name="last_name"
                   value={values.last_name}
                   helperText={errors.last_name}
                   required
                   onChange={handleChange}
                   sx={{ width: "250px" }}
                />
              </div>
              <StyledTextField
                error={errors.email ? true : false}
                size="small"
                label="Email"
                id="email"
                name="email"
                value={values.email}
                helperText={errors.email}
                required
                onChange={handleChange}
                className="w-100 mt-3"
              />
              <FormControl fullWidth className="mt-3" size="small">
                <InputLabel id="demo-simple-select-error-label">
                  Please select topic 
                </InputLabel>
                <StyledSelect
                  sx={{ borderRadius: "8px", fontFamily: "Poppins" }}
                  labelId="demo-simple-select-error-label"
                  id="topic"
                  name="topic"
                  value={values.topic}
                  error={errors.topic ? true : false}
                  onChange={handleChange}
                  renderValue={(value) => value}
                  label="Please select topic"
                >
                  {selectoptions.map((selectItem, index) => (
                    <MenuItem key={index} value={selectItem.title}>
                      {selectItem.title}
                    </MenuItem>
                  ))}
                </StyledSelect>
                <FormHelperText>{errors.topic}</FormHelperText>
              </FormControl>
              <StyledTextField
                error={errors.message ? true : false}
                size="small"
                label="Your issue or suggestion"
                id="message"
                name="message"
                value={values.message}
                helperText={errors.message}
                required
                onChange={handleChange}
                className="w-100 mt-3"
                multiline
                minRows={3}
                maxRows={5}
              />
              <div className="row p-4 flex-column gap-2">
                <input
                  type="file"
                  onChange={(e) => {
                    onFileChange(e)
                  }}
                  onClick={(e) => {
                    handleChangeBg(e);
                  }}
                  className="custom-file-input outline-btn"
                  style={{
                    backgroundImage: selectedFile
                      ? `url(${filebg2})`
                      : `url(${filebg1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
                <span className="helpertext">Max file size 5MB</span>
                <ReCaptchaV2
                  sitekey="6LflZgEgAAAAAO-psvqdoreRgcDdtkQUmYXoHuy2"
                  style={{ display: "inline-block" }}
                  theme="dark"
                  size="invisible"
                  ref={recaptchaRef}
                />
              </div>
              <div className="row px-4">
                <button className="btn filled-btn w-100" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </FormContainer>
        <FormContainer
          title="Business"
          desc="We appreciate your interest in Dypius "
          onClick={openBusiness}
          accordionState={business}
          collapse="collapseTwo"
        >
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="help-form p-4">
              <h4>Business Form</h4>

              <div className="row gap-4 justify-content-center">
                <StyledTextField
                  size="small"
                  label="First name*"
                  sx={{ width: "250px" }}
                />
                <StyledTextField
                  size="small"
                  label="Last Name*"
                  sx={{ width: "250px" }}
                />
              </div>
              <div className="row gap-4 justify-content-center mt-3">
                <StyledTextField
                  size="small"
                  label="organisation*"
                  sx={{ width: "250px" }}
                />
                <StyledTextField
                  size="small"
                  label="Job Title*"
                  sx={{ width: "250px" }}
                />
              </div>
              <div className="row gap-4 justify-content-center mt-3">
                <StyledTextField
                  size="small"
                  label="work email address*"
                  sx={{ width: "250px" }}
                />
                <StyledTextField
                  size="small"
                  label="Phone number*"
                  sx={{ width: "250px" }}
                />
              </div>
              <StyledTextField
                size="small"
                label="Subject*"
                className="w-100 mt-3"
              />
              <StyledTextField
                size="small"
                label="Describe your inquiry*"
                className="w-100 mt-3"
                multiline
                minRows={3}
                maxRows={5}
              />
              <div className="row p-4 flex-column gap-2">
                <input
                  type="file"
                  className="custom-file-input outline-btn"
                  style={{
                    backgroundImage: selectedFile
                      ? `url(${filebg2})`
                      : `url(${filebg1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
                <span className="helpertext">Max file size 5MB</span>
              </div>
              <div className="row px-4">
                <button className="btn filled-btn w-100">Submit</button>
              </div>
            </div>
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default HelpCenter;
