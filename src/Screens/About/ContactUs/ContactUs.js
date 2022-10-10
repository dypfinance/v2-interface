import React, { useRef, useState } from "react";
import Title from "../../../components/Title/Title";
import "./_contactus.scss";
import contactHeader from "../assets/contactHeader.png";
import paperclip from "../assets/paperclip.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import  TextFieldProps  from '@mui/material/TextField'
import styled from "styled-components";

const ContactUs = () => {
  const name = useRef();

  const [active, setActive] = useState("");

  if (document.activeElement === name.current) {
    setActive("name");
  }

  const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
    },
    "& .MuiInputLabel-root": {
      color: "#A0A3BD",
      fontWeight: 400,
      // fontSize: 14,
    },
  }));

  return (
    <div className="container-fluid contact-wrapper">
      <div className="container-lg contact-container pt-5">
        <div className="row flex-column">
          <Title top="Contact us" />
          <p className="text-secondary">
            Interested in collaborating with us? Please complete this short
            form.
          </p>
          <div className="outer-form p-4">
            <div className="row align-items-center">
              <img src={contactHeader} alt="" />
              <div className="d-flex m-0 justify-content-between gap-2">
                <div>
                  <h2 className="fw-bold">Business</h2>
                  <p className="text-secondary">
                    We appreciate your interest in Dypius
                  </p>
                </div>
                <div class="circulating-wrapper">
                  <div class="d-flex flex-column gap-3">
                    <span class="circulating-title">
                      No additional tokens can be minted
                    </span>
                  </div>
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
                <div>
                  <div className="d-flex m-0 justify-content-between gap-2">
                    <StyledTextField
                      required
                      id="outlined-name"
                      label="First name"
                      defaultValue=""
                    />
                    <StyledTextField
                      required
                      id="outlined-lastname"
                      label="Last name"
                      defaultValue=""
                    />
                  </div>
                  <div className="d-flex m-0 justify-content-between gap-2">
                    <StyledTextField
                      required
                      id="outlined-orgName"
                      label="Organization"
                      defaultValue=""
                    />
                    <StyledTextField
                      required
                      id="outlined-jobtitle"
                      label="Job title"
                      defaultValue=""
                    />
                  </div>
                  <div className="d-flex m-0 justify-content-between gap-2">
                    <StyledTextField
                      required
                      id="outlined-email"
                      label="Work email address"
                      defaultValue=""
                      type={"email"}
                    />
                    <StyledTextField
                      required
                      id="outlined-subject"
                      label="Subject"
                      defaultValue=""
                    />
                  </div>
                  <StyledTextField
                    id="outlined-phone"
                    label="Phone number"
                    defaultValue=""
                    type={"tel"}
                  />
                  <StyledTextField
                    required
                    id="outlined-message"
                    label="Write your message for our business team here"
                    multiline
                    rows={7}
                    defaultValue=""
                  />
                </div>
              </Box>
              <div className="row m-0 gap-3 justify-content-between w-100">
                <button className="outline-btn" style={{ width: "28%" }}>
                  Attach file <img src={paperclip} alt="" />
                </button>
                <button className="filled-btn w-50">Submit </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
