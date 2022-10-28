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
import ReCaptchaV2 from "react-google-recaptcha";
import { useRef } from "react";
import removebtn from "../../About/assets/remove-btn.svg";
import selectBtn from "../assets/selectBtn.svg";
import Modal from "../../../components/Modal/Modal";
import ring from "../../../assets/tokenCircle.png";
import useWindowSize from "../../../hooks/useWindowSize";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  "& .MuiInputLabel-root": {
    color: "#A0A3BD",
    fontWeight: 400,
    fontFamily: "Poppins",
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  "& .MuiInputLabel-root": {
    color: "#A0A3BD",
    fontFamily: "Poppins",
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
    // {
    //   title: "Other",
    //   value: "other",
    // },
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
  ];

  const helpState = {
    name: "",
    social_account: "",
    username: "",
    email: "",
    topic: "",
    message: "",
  };

  const businessState = {
    name: "",
    job: "",
    organization: "",
    email: "",
    subject: "",
    message: "",
  };

  const [values, setValues] = useState(helpState);
  const [businessValues, setBusinessValues] = useState(businessState);
  const [errors, setErrors] = useState({});
  const [businessErrors, setBusinessErrors] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [businessFile, setBusinessFile] = useState();
  const [help, setHelp] = useState(false);
  const [business, setBusiness] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formState, setFormState] = useState({
    topic: false,
    job_title: false,
    subject: false,
  });

  const recaptchaRef = useRef(null);
  const windowSize = useWindowSize();

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors(validate(values));

    if (Object.keys(errors).length === 0) {
     

      if (
        values.name !== "" &&
        values.email !== "" &&
        values.social_account !== "" &&
        values.username !== "" &&
        values.topic !== "" &&
        values.message !== ""
      ) {

        const captchaToken = await recaptchaRef.current.executeAsync();
        const data = {
          name: values.name,
          email: values.email,
          social_account: values.social_account,
          username: values.username,
          topic: values.topic,
          message: values.message,
          recaptcha: captchaToken,
        };

        const send = await axios
          .post("https://api-mail.dyp.finance/api/help_form", data)
          .then(function (result) {
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
      setSelectedFile(null);
    }
  };

  const handleBusinessSubmit = async (e) => {
    e.preventDefault();
    setBusinessErrors(validateBusiness(businessValues));

    if (Object.keys(businessErrors).length === 0) {
      

      if (
        businessValues.name !== "" &&
        businessValues.job !== "" &&
        businessValues.organization !== "" &&
        businessValues.email !== "" &&
        businessValues.subject !== "" &&
        businessValues.message !== ""
      ) {

        const captchaToken = await recaptchaRef.current.executeAsync();
      const data = {
        name: businessValues.name,
        job: businessValues.job,
        organization: businessValues.organization,
        email: businessValues.email,
        subject: businessValues.subject,
        message: businessValues.message,
        recaptcha: captchaToken,
      };

        const send = await axios
          .post("https://api-mail.dyp.finance/api/business_form", data)
          .then(function (result) {
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
      setSelectedFile(null);
    }
  };

  const onFileChange = (event, type) => {
    const fileTypes = [
      "image/jpg",
      "image/png",
      "image/jpeg",
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.doc",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];

    if (fileTypes.includes(event.target.files[0].type)) {
      if (event.target.files && event.target.files[0]) {
        if (event.target.files[0].size < 5000000) {
          if (type === "help") {
            setSelectedFile(event.target.files[0]);
          } else {
            setBusinessFile(event.target.files[0]);
          }
        } else alert("File size too big");
      }
    } else {
      alert("Image type not supported");
    }
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
      <div
        className="row contact-container position-relative"
       
      >
        {/* <img src={ring} alt="" className="help-ring d-none d-lg-block"  /> */}
        <FormContainer
          title="General Inquiry"
          desc="Get immediate help and support for Dypius products and solutions."
          onClick={openHelp}
          accordionState={help}
          collapse="collapseHelp"
          emailLink="mailto:helpcenter@dypius.com"
          email="helpcenter@dypius.com"
        >
          <div
            id="collapseHelp"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="help-form p-4 d-flex flex-column gap-4 gap-lg-3 mb-4">
              <h5 className="text-secondary mb-3">Fill out form</h5>
              <div className="d-flex flex-lg-row flex-xl-row flex-column m-0 justify-content-between gap-4">
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
                  sx={{width: '100%'}}
                  
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
                  sx={{width: '100%'}}

                  
                />
              </div>
              <div className="d-flex flex-lg-row flex-xl-row flex-column m-0 justify-content-between gap-4">
                {formState.topic === true ? (
                  <div className="selected-field d-flex gap-2 px-0">
                    <StyledTextField
                      error={errors.topic ? true : false}
                      size="small"
                      label="Topic"
                      id="topic"
                      name="topic"
                      value={values.topic}
                      helperText={errors.topic}
                      required
                      onChange={handleChange}
                      
                    />
                    <img
                      src={selectBtn}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setFormState({ ...formState, topic: false })
                      }
                    />
                  </div>
                ) : (
                  <FormControl
                    fullWidth
                    size="small"
                    
                  >
                    <InputLabel id="demo-simple-select-error-label">
                      Select topic*
                    </InputLabel>
                    <StyledSelect
                    MenuProps={{
                      disableScrollLock: false
                    }}
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
                      <MenuItem
                        onClick={() =>
                          setFormState({ ...formState, topic: true })
                        }
                        value=""
                      >
                        Other
                      </MenuItem>
                    </StyledSelect>
                    <FormHelperText>{errors.topic}</FormHelperText>
                  </FormControl>
                )}
                {values.social_account === "" ? (
                  <FormControl
                    fullWidth
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-error-label">
                      Social account
                    </InputLabel>
                    <StyledSelect
                      sx={{ borderRadius: "8px", fontFamily: "Poppins" }}
                      labelId="demo-simple-select-error-label"
                      id="social_account"
                      name="social_account"
                      value={values.social_account}
                      error={errors.social_account ? true : false}
                      onChange={handleChange}
                      renderValue={(value) => value}
                      label="Social account"
                    >
                      <MenuItem value="Telegram">Telegram</MenuItem>
                      <MenuItem value="Discord">Discord</MenuItem>
                      <MenuItem value="Twitter">Twitter</MenuItem>
                    </StyledSelect>
                    <FormHelperText>{errors.social_account}</FormHelperText>
                  </FormControl>
                ) : (
                  <div className="selected-field d-flex gap-2 px-0">
                    <StyledTextField
                      error={errors.username ? true : false}
                      size="small"
                      label={values.social_account}
                      id="username"
                      name="username"
                      value={values.username}
                      helperText={errors.username}
                      required
                      onChange={handleChange}
                    />
                    <img
                      src={selectBtn}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setValues({ ...values, social_account: "" })
                      }
                    />
                  </div>
                )}
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
                className="w-100"
                multiline
                minRows={6}
                maxRows={6}
              />

              <div className="row px-0 flex-row">
                <div className="d-flex col-12 col-lg-6  flex-column gap-2">
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
                        width: windowSize.width < 999 ? '100%' : '75%',
                        border: "2px solid #D6D8E7",
                        fontSize: 0
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
                        handleChangeBg(e, "help");
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
                <div className="col-12 col-lg-6 ">
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
          emailLink="mailto:business@dypius.com"
          email="business@dypius.com"
        >
          <div
            id="collapseBusiness"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="help-form p-4 p-4 d-flex flex-column gap-4 gap-lg-3 mb-4">
              <h5 className="text-secondary mb-3">Fill out form</h5>

              <div className="d-flex flex-lg-row flex-xl-row flex-column m-0 justify-content-between gap-4">
                <StyledTextField
                  error={businessErrors.name ? true : false}
                  size="small"
                  label="Name"
                  id="name"
                  name="name"
                  value={businessValues.name}
                  helperText={businessErrors.name}
                  onChange={handleBusinessChange}
                  required
                  sx={{ width: "100%" }}
                  
                />
                {formState.job_title === false ? (
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-error-label">
                      Job Title*
                    </InputLabel>
                    <StyledSelect
                      sx={{ borderRadius: "8px", fontFamily: "Poppins" }}
                      labelId="demo-simple-select-error-label"
                      id="job"
                      name="job"
                      value={businessValues.job}
                      error={businessErrors.job ? true : false}
                      onChange={handleBusinessChange}
                      renderValue={(value) => value}
                      label="Select job title"
                    >
                      {jobTitles.map((job, index) => (
                        <MenuItem key={index} value={job.value}>
                          {job.title}
                        </MenuItem>
                      ))}
                      <MenuItem
                        onClick={() =>
                          setFormState({ ...formState, job_title: true })
                        }
                        value=""
                      >
                        Other
                      </MenuItem>
                    </StyledSelect>
                    <FormHelperText>{businessErrors.job}</FormHelperText>
                  </FormControl>
                ) : (
                  <div className="selected-field d-flex gap-2 px-0">
                    <StyledTextField
                      error={businessErrors.job ? true : false}
                      size="small"
                      label="Job title"
                      id="job"
                      name="job"
                      value={businessValues.job}
                      helperText={businessErrors.job}
                      required
                      onChange={handleBusinessChange}
                    />
                    <img
                      src={selectBtn}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setFormState({ ...formState, job_title: false })
                      }
                    />
                  </div>
                )}
              </div>
              <div className="d-flex flex-lg-row flex-xl-row flex-column m-0 justify-content-between gap-4">
                <StyledTextField
                  error={businessErrors.organization ? true : false}
                  size="small"
                  label="Organization"
                  id="organization"
                  name="organization"
                  value={businessValues.organization}
                  helperText={businessErrors.organization}
                  onChange={handleBusinessChange}
                  required
                  sx={{width: '100%'}}

                  
                />
                <StyledTextField
                  error={businessErrors.email ? true : false}
                  size="small"
                  label="Work Email address"
                  id="email"
                  name="email"
                  value={businessValues.email}
                  helperText={businessErrors.email}
                  onChange={handleBusinessChange}
                  required
                  sx={{width: '100%'}}

                  
                />
              </div>
              {formState.subject === false ? (
                <FormControl fullWidth className="selected-field d-flex gap-2 px-0" size="small">
                  <InputLabel id="demo-simple-select-error-label">
                    Subject*
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
                    <MenuItem
                      onClick={() =>
                        setFormState({ ...formState, subject: true })
                      }
                      value=""
                    >
                      Other
                    </MenuItem>
                  </StyledSelect>
                  <FormHelperText>{businessErrors.subject}</FormHelperText>
                </FormControl>
              ) : (
                <div className="selected-field d-flex gap-2 px-0">
                  <StyledTextField
                  fullWidth
                    error={businessErrors.subject ? true : false}
                    size="small"
                    label="Subject"
                    id="subject"
                    name="subject"
                    value={businessValues.subject}
                    helperText={businessErrors.subject}
                    required
                    onChange={handleBusinessChange}
                    
                  />
                  <img
                    src={selectBtn}
                    alt=""
                    style={{ width: "40px", height: "40px", cursor: "pointer" }}
                    onClick={() =>
                      setFormState({ ...formState, subject: false })
                    }
                  />
                </div>
              )}

              <StyledTextField
                error={businessErrors.message ? true : false}
                size="small"
                label="Describe your inquiry"
                id="message"
                name="message"
                value={businessValues.message}
                helperText={businessErrors.message}
                onChange={handleBusinessChange}
                required
                className="w-100 "
                multiline
                minRows={3}
                maxRows={5}
              />
              <div className="row px-0 flex-row ">
                <div className="d-flex col-12 col-lg-6  flex-column gap-2">
                  <span className="d-flex gap-2">
                    <input
                      type="file"
                      onChange={(e) => {
                        onFileChange(e, "business");
                      }}
                      className="custom-file-input outline-btn"
                      style={{
                        backgroundImage: businessFile
                          ? `url(${filebg2})`
                          : `url(${filebg1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: windowSize.width < 999 ? '100%' : '75%',
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
                <div className="col-12 col-lg-6 ">
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
  );
};

export default HelpCenter;
