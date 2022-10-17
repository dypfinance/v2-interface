import React, { useRef, useState } from "react";
import axios from "axios";
import ReCaptchaV2 from "react-google-recaptcha";
import Title from "../../../components/Title/Title";
import $alert from "../../../hooks/$alert";
import "./_contactus.scss";
import contactHeader from "../assets/contactHeader.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import envelope from "../assets/envelope.svg";
import styled from "styled-components";
import validate from "./validateinfo";
import filebg1 from "../assets/filebg.svg";
import filebg2 from "../assets/fileuploaded.svg";
import useWindowSize from "../../../hooks/useWindowSize";
import Modal from "../../../components/Modal/Modal";
import { useEffect } from "react";
import removebtn from '../assets/remove-btn.svg'

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  "& .MuiInputLabel-root": {
    color: "#A0A3BD",
    fontWeight: 400,
  },
}));

const ContactUs = () => {
  const initialState = {
    email: "",
    subject: "",
    first_name: "",
    last_name: "",
    organization: "",
    job: "",
    message: "",
    recaptcha: "",
    phone: "",
  };

  const [values, setValues] = useState(initialState);
  const [selectedFile, setSelectedFile] = useState();
  const [success, setSuccess] = useState(false);

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
    if (modal.className.includes("show")) {
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
        email: values.email,
        subject: values.subject,
        first_name: values.first_name,
        last_name: values.last_name,
        organization: values.organization,
        job: values.job,
        message: values.message,
        recaptcha: captchaToken,
        phone: values.phone,
      };

      if (
        values.first_name !== "" &&
        values.last_name !== "" &&
        values.job !== "" &&
        values.organization !== "" &&
        values.message !== "" &&
        values.subject !== "" &&
        values.email !== ""
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
        } else {
          setSuccess(false);
        }
      }
      recaptchaRef.current.reset();

      setValues({ ...initialState });
    }
  };

  const handleChangeBg = (event) => {
    if (selectedFile) {
      setSelectedFile(null);
      event.preventDefault();
    }
  };

  return (
    <div className="container-fluid contact-wrapper">
      <div className="container-lg contact-container pt-5">
        <div className="row flex-column">
          <Title top="Contact us" />
          <p className="text-secondary" style={{ marginBottom: "7rem" }}>
            Interested in collaborating with us? <br />
            Please complete this short form.
          </p>
          <div className="outer-form p-lg-4 p-xl-4 p-md-4 p-1 position-relative">
            <div className="d-lg-flex d-xl-flex align-items-center mx-2 mt-4 titlewrapper">
              <img
                src={contactHeader}
                alt=""
                className="col-lg-3 col-xl-3 pl-0 contactimg"
              />
              <div className="d-flex flex-lg-row flex-xl-row flex-md-row flex-column  m-0 justify-content-between gap-2 w-100 align-items-center">
                <div>
                  <h2 className="fw-bold">Business</h2>
                  <p className="text-secondary">
                    We appreciate your interest in Dypius
                  </p>
                </div>
                <div
                  className="circulating-wrapper"
                  style={{ height: "fit-content" }}
                >
                  <a
                    href="mailto:business@dypius.com"
                    rel="noreferrer"
                    target={"_blank"}
                  >
                    <div className="d-flex flex-column gap-3">
                      <span
                        className="circulating-title d-flex gap-1 align-items-center"
                        style={{ fontWeight: 500, color: "#7670E0" }}
                      >
                        <img src={envelope} alt="" /> business@dypius.com
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
                      error={errors.first_name ? true : false}
                      required
                      label="First name"
                      name="first_name"
                      id="first_name"
                      value={values.first_name}
                      onChange={handleChange}
                      helperText={errors.first_name}
                    />
                    <StyledTextField
                      required
                      error={errors.last_name ? true : false}
                      label="Last name"
                      name="last_name"
                      id="last_name"
                      value={values.last_name}
                      onChange={handleChange}
                      helperText={errors.last_name}
                    />
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
                      error={errors.job ? true : false}
                      required
                      label="Job title"
                      name="job"
                      id="job"
                      value={values.job}
                      onChange={handleChange}
                      helperText={errors.job}
                    />
                  </div>
                  <div className="d-flex flex-lg-row flex-xl-row flex-column m-0 justify-content-between gap-4">
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
                  </div>
                  <StyledTextField
                    label="Phone number"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    type={"tel"}
                    onChange={handleChange}
                  />
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
              <div className="row m-0 gap-3 justify-content-center w-100 mb-3">
                <div
                  className="d-grid gap-1 p-0"
                  style={{ width: windowSize.width < 999 ? "100%" : "" }}
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
                      width:  "40%",
                    }}
                  />
                  <img src={removebtn} alt='' style={{display: selectedFile ? 'block' : 'none', cursor: 'pointer'}} onClick={(e) => {
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
                  className="filled-btn submitbtn"
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

      <Modal
        visible={success}
        modalId="tymodal"
        setIsVisible={() => {
          setSuccess(false);
        }}
      />
    </div>
  );
};

export default ContactUs;
