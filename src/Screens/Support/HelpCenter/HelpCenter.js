import React from "react";
import Title from "../../../components/Title/Title";
import "./_helpcenter.scss";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import filebg1 from "../../About/assets/filebg.svg";
import filebg2 from "../../About/assets/fileuploaded.svg";
import { useState } from "react";
import styled from "styled-components";
import FormContainer from "../../../components/FormContainer/FormContainer";

const HelpCenter = () => {
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
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    description: "",
  };

  const [selectedFile, setSelectedFile] = useState();
  const [help, setHelp] = useState(false)
  const [business, setBusiness] = useState(false)


  const openHelp = () => {
    setHelp(!help)
  }

  const openBusiness = () => {
    setBusiness(!business)
  }

  return (
    <div className="container-lg help-wrapper">
      <div className="row flex-column align-items-center">
        <Title top="Stay" bottom="connected" align="d-flex flex-row gap-2" />
        <p className="text-secondary">
          Reach out to us anytime and we will happily answer all of your
          inquiries.
        </p>
      </div>
      <div className="row" style={{marginTop: '7rem'}}>
      
        <FormContainer title="Help Center" desc="Get immediate help and support for Dypius products and solutions. " onClick={openHelp} accordionState={help} collapse="collapseOne" >
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
                <StyledTextField
                  size="small"
                  label="Email address*"
                  className="w-100 mt-3"
                />
                <FormControl fullWidth className="mt-3" size="small">
                  <InputLabel id="demo-simple-select-label">
                    Please select topic *
                  </InputLabel>
                  <StyledSelect
                    sx={{ borderRadius: "8px", fontFamily: "Poppins" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Please select topic *"
                  >
                    {selectoptions.map((selectItem, index) => (
                      <MenuItem key={index} value={selectItem.value}>
                        {selectItem.title}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </FormControl>
                <StyledTextField
                  size="small"
                  label="Your issue or suggestion*"
                  className="w-100 mt-3"
                  multiline
                  rows={3}
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
        <FormContainer title="Business" desc="We appreciate your interest in Dypius " onClick={openBusiness} accordionState={business}
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
                  rows={3}
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
