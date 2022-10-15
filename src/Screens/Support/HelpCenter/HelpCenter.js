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
import validateBusiness from "../../About/ContactUs/validateinfo";
import axios from "axios";
import useWindowSize from "../../../hooks/useWindowSize";
import ReCaptchaV2 from "react-google-recaptcha";
import { useRef } from "react";
import useFileChange from "../../../hooks/useFileChange";
import removebtn from "../../About/assets/remove-btn.svg";

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
      title: "Stake",
      value: "stake",
    },
    {
      title: "Farm",
      value: "farm",
    },
    {
      title: "Vault",
      value: "vault",
    },
    {
      title: "Buyback",
      value: "buyback",
    },
    {
      title: "CAWS NFT",
      value: "CAWS NFT",
    },
    {
      title: "Bridge",
      value: "bridge",
    },
    {
      title: "DYP Tools",
      value: "DYP Tools",
    },
    {
      title: "Governance",
      value: "governance ",
    },
    {
      title: "Other",
      value: "other",
    },
  ];

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
    {
      title: "Other",
      value: "Other",
    },
  ];

  const helpState = {
    name: "",
    social: "",
    email: "",
    topic: "",
    message: "",
  };

  const businessState = {
    name: "",
    job_title: "",
    organisation: "",
    email: "",
    subject: "",
    message: "",
  };

  const [values, setValues] = useState(helpState);
  const [businessValues, setBusinessValues] = useState(businessState);
  const [errors, setErrors] = useState({});
  const [businessErrors, setBusinessErrors] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [businessFile, setBusinessFile] = useState()
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
  };

  const handleBusinessChange = async (e) => {
    const { name, value } = e.target;

    setBusinessValues({
      ...businessValues,
      [name]: value,
    });
    console.log(businessValues);
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
        recaptcha: captchaToken,
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

  const handleBusinessSubmit = async (e) => {
    e.preventDefault();

    setErrors(validateBusiness(businessValues));

    if (Object.keys(businessErrors).length === 0) {
      const captchaToken = await recaptchaRef.current.executeAsync();
      const data = {
        name: businessValues.name,
        job_title: businessValues.job_title,
        organisation: businessValues.organisation,
        email: businessValues.email,
        subject: businessValues.subject,
        message: businessValues.message,
        recaptcha: captchaToken,
      };

      if (
        businessValues.name !== "" &&
        businessValues.job_title !== "" &&
        businessValues.organisation !== "" &&
        businessValues.email !== "" &&
        businessValues.subject !== "" &&
        businessValues.message !== ""
      ) {
        const send = await axios
          .post("https://api-mail.dyp.finance/api/business", data)
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

      setBusinessValues({ ...businessState });
    }
  }

  const onFileChange = (event, type) => {
    
    console.log(type);
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
          if(type === 'help'){
            setSelectedFile(event.target.files[0]);
          }else{
            setBusinessFile(event.target.files[0])
          }
        } else alert("File size too big");
      }
    } else {
      alert("Image type not supported");
    }

    console.log(event.target.files);
  };

  const handleChangeBg = (event) => {
    if (selectedFile) {
      setSelectedFile(null);
      event.preventDefault();
    }

    if (businessFile) {
      setBusinessFile(null);
      event.preventDefault();
    }
  };

  const openHelp = () => {
    setHelp(!help);
  };

  const openBusiness = () => {
    setBusiness(!business);
  };

  return (
    <div className="container-lg help-wrapper" id="helpcenter">
      <div className="row flex-column align-items-center">
        <Title top="Contact" bottom="us" align="d-flex flex-row gap-2" />
        <p className="text-secondary">
          Reach out to us anytime and we will happily answer all of your
          inquiries.
        </p>
      </div>
      <div className="row contact-container" style={{ marginTop: "7rem" }}>
        <FormContainer
          title="General Inquiry"
          desc="Get immediate help and support for Dypius products and solutions. "
          onClick={openHelp}
          accordionState={help}
          collapse="collapseHelp"
        >
          <div
            id="collapseHelp"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="help-form p-4">
              <h5 className="text-secondary">Fill out form</h5>
              <div className="row gap-4 justify-content-center">
                <StyledTextField
                  error={errors.name ? true : false}
                  size="small"
                  label="Name"
                  id="name"
                  name="name"
                  value={values.name}
                  helperText={errors.name}
                  required
                  onChange={handleChange}
                  sx={{ width: "250px" }}
                />
                <StyledTextField
                  error={errors.email ? true : false}
                  size="small"
                  label="Email address"
                  id="email"
                  name="email"
                  value={values.email}
                  helperText={errors.email}
                  required
                  onChange={handleChange}
                  sx={{ width: "250px" }}
                />
              </div>
              <div className="row gap-4 justify-content-center">
                <FormControl
                  fullWidth
                  className="mt-3"
                  size="small"
                  sx={{ width: "250px" }}
                >
                  <InputLabel id="demo-simple-select-error-label">
                    Select topic
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
                    label="Select Topic"
                  >
                    {selectoptions.map((selectItem, index) => (
                      <MenuItem key={index} value={selectItem.title}>
                        {selectItem.title}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                  <FormHelperText>{errors.topic}</FormHelperText>
                </FormControl>
                <FormControl
                  fullWidth
                  className="mt-3"
                  size="small"
                  sx={{ width: "250px" }}
                >
                  <InputLabel id="demo-simple-select-error-label">
                    Social account
                  </InputLabel>
                  <StyledSelect
                    sx={{ borderRadius: "8px", fontFamily: "Poppins" }}
                    labelId="demo-simple-select-error-label"
                    id="social"
                    name="social"
                    value={values.social}
                    error={errors.social ? true : false}
                    onChange={handleChange}
                    renderValue={(value) => value}
                    label="Social accound"
                  >
                    <MenuItem value="Telegram">Telegram</MenuItem>
                    <MenuItem value="Discord">Discord</MenuItem>
                  </StyledSelect>
                  <FormHelperText>{errors.social}</FormHelperText>
                </FormControl>
              </div>
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

              <div className="row px-0 flex-row mt-4">
                <div className="d-flex col-6 flex-column gap-2">
                  <span className="d-flex gap-2">
                    <input
                      type="file"
                      onChange={(e) => {
                        onFileChange(e, "help");
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
                        width: "55%",
                        border: "2px solid #D6D8E7",
                      }}
                    />
                    <img
                      src={removebtn}
                      alt=""
                      style={{
                        display: selectedFile ? "block" : "none",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        handleChangeBg(e, 'help');
                      }}
                    />
                  </span>
                  <span className="helpertext">Max file size 5MB</span>
                  <ReCaptchaV2
                    sitekey="6LflZgEgAAAAAO-psvqdoreRgcDdtkQUmYXoHuy2"
                    style={{ display: "inline-block" }}
                    theme="dark"
                    size="invisible"
                    ref={recaptchaRef}
                  />
                </div>
                <div className="col-6">
                  <button
                    className="btn filled-btn w-100"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FormContainer>
        <FormContainer
          title="Business"
          desc="Interested in collaborating with us? 
                Please complete this short form."
          onClick={openBusiness}
          accordionState={business}
          collapse="collapseBusiness"
        >
          <div
            id="collapseBusiness"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="help-form p-4">
              <h5 className="text-secondary">Fill out form</h5>

              <div className="row gap-4 justify-content-center">
                <StyledTextField
                  size="small"
                  label="Name"
                  sx={{ width: "250px" }}
                />
                 <FormControl fullWidth sx={{width: '250px'}} size="small">
                <InputLabel id="demo-simple-select-error-label">
                  Job Title
                </InputLabel>
                <StyledSelect
                  sx={{ borderRadius: "8px", fontFamily: "Poppins" }}
                  labelId="demo-simple-select-error-label"
                  id="job_title"
                  name="job_title"
                  value={businessValues.job_title}
                  error={businessErrors.job_title ? true : false}
                  onChange={handleBusinessChange}
                  renderValue={(value) => value}
                  label="Select job title"
                >
                 {jobTitles.map((job, index) => (
                  <MenuItem key={index} value={job.value}>{job.title}</MenuItem>
                 ))}
                </StyledSelect>
                <FormHelperText>{businessErrors.job_title}</FormHelperText>
              </FormControl>
              </div>
              <div className="row gap-4 justify-content-center mt-3">
                <StyledTextField
                  size="small"
                  label="Organisation"
                  sx={{ width: "250px" }}
                />
                <StyledTextField
                  size="small"
                  label="Work email address "
                  sx={{ width: "250px" }}
                />
              </div>
              <FormControl fullWidth className="mt-4" size="small">
                <InputLabel id="demo-simple-select-error-label">
                  Subject
                </InputLabel>
                <StyledSelect
                  sx={{ borderRadius: "8px", fontFamily: "Poppins" }}
                  labelId="demo-simple-select-error-label"
                  id="subject"
                  name="subject"
                  value={businessValues.subject}
                  error={businessErrors.subject ? true : false}
                  onChange={handleBusinessChange}
                  renderValue={(value) => value}
                  label="Select subject"
                >
                  <MenuItem value="Partnership">Partnership</MenuItem>
                  <MenuItem value="Media inquiry">Media inquiry</MenuItem>
                  <MenuItem value="Launchpad">Launchpad</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </StyledSelect>
                <FormHelperText>{businessErrors.subject}</FormHelperText>
              </FormControl>

              <StyledTextField
                size="small"
                label="Describe your inquiry*"
                className="w-100 mt-3"
                multiline
                minRows={3}
                maxRows={5}
              />
              <div className="row px-0 flex-row mt-4">
                <div className="d-flex col-6 flex-column gap-2">
                  <span className="d-flex gap-2">
                    <input
                      type="file"
                      onChange={(e) => {
                        onFileChange(e, 'business');
                      }}
                      className="custom-file-input outline-btn"
                      style={{
                        backgroundImage: businessFile
                          ? `url(${filebg2})`
                          : `url(${filebg1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "55%",
                        border: "2px solid #D6D8E7",
                      }}
                    />
                    <img
                      src={removebtn}
                      alt=""
                      style={{
                        display: businessFile ? "block" : "none",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        handleChangeBg(e);
                      }}
                    />
                  </span>

                  <span className="helpertext">Max file size 5MB</span>
                  <ReCaptchaV2
                    sitekey="6LflZgEgAAAAAO-psvqdoreRgcDdtkQUmYXoHuy2"
                    style={{ display: "inline-block" }}
                    theme="dark"
                    size="invisible"
                    ref={recaptchaRef}
                  />
                </div>
                <div className="col-6">
                  <button
                    className="btn filled-btn w-100"
                    onClick={handleBusinessSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default HelpCenter;
