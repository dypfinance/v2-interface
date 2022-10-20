import React, { useState } from "react";
import styled from "styled-components";
import Title from "../../../components/Title/Title";
import { TextField } from "@mui/material";
import "./_faq.scss";
import FAQAccordion from "../../../components/FaqAccordionItem/FAQAccordion";
import book from "../assets/book.svg";
import activeBook from "../assets/activeBook.svg";
import axios from "axios";
import sphere from '../../../assets/newsSphere.png'

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  "& .MuiInputLabel-root": {
    color: "#A0A3BD",
    fontWeight: 400,
  },
}));

const FAQ = () => {
  const categories = [
    
    {
      id: "63481594d7e11d6f1849f730",
      title: "Stake",
      icon: "stake"
      
    },
    {
      id: "6348811e062d4b709c4a24f9",
      title: "Farm",
      icon: "farm"
    },
    {
      id: "63488547062d4b709c4a250b",
      title: "Buyback",
      icon: "buyback"
    },
    {
      id: "634885c5062d4b709c4a250f",
      title: "Vault",
      icon: "vault"
    },
    {
      id: "63488646062d4b709c4a2513",
      title: "CAWS NFT",
      icon: "caws"
    },
    {
      id: "6348881e062d4b709c4a2523",
      title: "Governance",
      icon: "governance"
    },
    {
      id: "634888e0062d4b709c4a252a",
      title: "iDYP",
      icon: "idyp"
    },
    {
      id: "63488953062d4b709c4a252e",
      title: "Buy DYP",
      icon: "buydyp"
    },
    {
      id: "63488995062d4b709c4a2535",
      title: "Bridge",
      icon: "bridge"
    },
    {
      id: "634889f4062d4b709c4a2540",
      title: "DYP Tools",
      icon: "dyptools"
    },
    {
      id: "63488a9c062d4b709c4a2546",
      title: "Launchpad",
      icon: "launchpad"
    },
    {
      id: "63481581d7e11d6f1849f72f",
      title: "General",
      icon: "general"
    },
  ];

  const [faqItems, setFaqItems] = useState([]);
  const [faqTitle, setFaqTitle] = useState("");
  const [searchString, setSearchString] = useState("")

  const fetchFaq = async (categoryId, categoryTitle) => {
    if (faqTitle === categoryTitle) {
      setFaqItems([]);
      setFaqTitle("");
    } else {
      await axios
        .get(`https://news-manage.dyp.finance/api/faqs/${categoryId}`)
        .then((res) => {
          setFaqItems(res.data);
          setFaqTitle(categoryTitle);
        })
        .catch((err) => console.error(err));
    }
  };

  const handleChange = (e) => {
    setSearchString(e.target.value)
    console.log(searchString);
    searchFaq()
  }

  const searchFaq = async() => { 
    if(searchString.length >= 4){
      await axios.get(`https://news-manage.dyp.finance/api/faqs/search/${searchString}`).then((res) => {
        setFaqItems(res.data)
        setFaqTitle('')
        console.log(res.data);
      }).catch((err) => console.error(err))
    } 
  }



  return (
    <div className="container-fluid faq-wrapper" id="faq">
      <div className="container-lg d-flex justify-content-center align-items-center flex-column py-5">
        <div className="col-12 col-lg-6">
          <Title
            top="Got"
            bottom="a question?"
            align="d-flex flex-row gap-2 justify-content-center"
          />
          <p className="text-secondary text-center">
            We’re here to help and answer any question you might have.
          </p>
        </div>
        <div className="categories-container px-0 p-5 w-100 position-relative">
          <img src={sphere} alt="" className="faq-sphere d-none d-lg-flex" />
          <div className="row align-items-center justify-content-center ">
            <div className=" search-container d-flex justify-content-center align-items-center w-50">
              <StyledTextField
                id="outlined-search"
                type="search"
                label="Search"
                value={searchString}
                onChange={(e) => handleChange(e)}
                size="small"
                sx={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="row categories-grid mt-5 gap-4">
            {categories.map((category, index) => (
              <div
                onClick={() => fetchFaq(category.id, category.title)}
                key={index}
                className={`category-card d-flex justify-content-center ${
                  faqTitle === category.title ? "active-category" : null
                } align-items-center flex-column gap-2 mx-auto`}
              >
                <img
                  src={faqTitle === category.title ? require(`../assets/${category.icon}IconSelected.png`) : require(`../assets/${category.icon}Icon.png`)}
                  alt=""
                />
                <p className="mb-0">{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {faqItems.length !== 0 &&
      <div className="faq-container container-lg w-100 mt-4 p-5">
      <div className="row justify-content-between align-items-center">
        <h2 className="fw-bold mb-5">{`${faqTitle} FAQs`}</h2>
      </div>
      <div className="row flex-column">
        <div className="accordion" id="faqAccordion">
          {faqItems.length !== 0 &&
            faqItems.map((faq, index) => (
              <FAQAccordion
                key={index}
                title={faq.title}
                content={faq.content}
                id={faq.collapse}
                heading={faq.heading}
              />
            ))}
        </div>
      </div>
    </div>
      }
    </div>
  );
};

export default FAQ;
