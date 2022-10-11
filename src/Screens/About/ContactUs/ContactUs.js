import React, { useRef, useState } from "react";
import Title from "../../../components/Title/Title";
import "./_contactus.scss";
import contactHeader from "../assets/contactHeader.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import envelope from "../assets/envelope.svg";
import styled from "styled-components";
import validate from "./validateinfo";


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
    name: "",
    lastname: "",
    organisation: "",
    jobtitle: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors(validate(values));

    if (Object.keys(errors).length === 0) {
      const data = {
        name: values.name,
        lastname: values.lastname,
        phone: values.phone,
        jobtitle: values.jobtitle,
        organisation: values.organisation,
        email: values.email,
        subject: values.subject,
        message: values.message,
      };

      if (
        values.name !== "" &&
        values.lastname !== "" &&
        values.jobtitle !== "" &&
        values.organsation !== "" &&
        values.message !== "" &&
        values.subject !== "" &&
        values.email !== ""
      ) {
        const bios = {
          alert: {
            title: "Message sent",
            content: "Your message has been sent successfully.",
          },
        };

        alert(bios["alert"]);
      } else {
        const bios = {
          alert: {
            title: "Error",
            content: "Something went wrong.",
          },
        };

        alert(bios["alert"].content);
      }
      setValues({ ...initialState });
    }
  };

  // console.log(errors)
  return (
    <div className="container-fluid contact-wrapper">
      <div className="container-lg contact-container pt-5">
        <div className="row flex-column">
          <Title top="Contact us" />
          <p className="text-secondary" style={{ marginBottom: "7rem" }}>
            Interested in collaborating with us? <br />
            Please complete this short form.
          </p>
          <div className="outer-form p-4 position-relative">
            <div
              className="d-lg-flex d-xl-flex align-items-center mx-2 mt-4"
              style={{ height: 40 }}
            >
              <img
                src={contactHeader}
                alt=""
                className="col-3 pl-0 contactimg"
              />
              <div className="d-flex m-0 justify-content-between gap-2 w-100 align-items-center">
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
            <div className="row form-container mt-5 mx-2 p-4">
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
                  <div className="d-flex m-0 justify-content-between gap-4">
                    <StyledTextField
                      error={errors.name ? true : false}
                      required
                      label="First name"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      helperText={errors.name}
                    />
                    <StyledTextField
                      required
                      error={errors.lastname ? true : false}
                      label="Last name"
                      name="lastname"
                      id="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      helperText={errors.lastname}
                    />
                  </div>
                  <div className="d-flex m-0 justify-content-between gap-4">
                    <StyledTextField
                      error={errors.organisation ? true : false}
                      required
                      label="Organization"
                      name="organisation"
                      id="organisation"
                      value={values.organisation}
                      onChange={handleChange}
                      helperText={errors.organisation}
                    />
                    <StyledTextField
                      error={errors.jobtitle ? true : false}
                      required
                      label="Job title"
                      name="jobtitle"
                      id="jobtitle"
                      value={values.jobtitle}
                      onChange={handleChange}
                      helperText={errors.jobtitle}
                    />
                  </div>
                  <div className="d-flex m-0 justify-content-between gap-4">
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
              <div className="row m-0 gap-3 justify-content-between w-100">
                <input type="file" className="custom-file-input outline-btn" />
                <button className="filled-btn w-50" onClick={handleSubmit}>
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
