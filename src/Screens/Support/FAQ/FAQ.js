import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Title from "../../../components/Title/Title";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import "./_faq.scss";
import FAQAccordion from "../../../components/FaqAccordionItem/FAQAccordion";
import axios from "axios";

import useWindowSize from "../../../hooks/useWindowSize";
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
    paddingLeft: '0px'
  },
  "& .MuiInputLabel-root": {
    color: "#A0A3BD",
    fontWeight: 400,
    paddingLeft: '0px'

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

  const windowSize = useWindowSize()

  const [faqItems, setFaqItems] = useState([]);
  const [faqTitle, setFaqTitle] = useState("");
  const [searchItems, setSearchItems] = useState([])
  const [searchString, setSearchString] = useState("")
  const [searchBox, setSearchBox] = useState(false)
  const search = useRef()

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
    
      if(windowSize.width > 786){
        window.scrollTo(0, 1200)
      }else{
        window.scrollTo(0, 1700)
      }
  };


  const searchFaq = async() => { 
    if(searchString.length < 1){
      setSearchBox(false)
    }else{

      await axios.get(`https://news-manage.dyp.finance/api/faqs/search/${searchString}`).then((res) => {
        setSearchItems(res.data)
        setFaqTitle('')
        setSearchBox(true)
        
      }).catch((err) => console.error(err))
    }
   
  }

  const selectSearchFaq = async(id, collapse) => {
    await axios.get(`https://news-manage.dyp.finance/api/faqs/${id}`).then((res) => {
      setFaqItems(res.data)
      categories.map((category) => {
        if(id === category.id){
          setFaqTitle(category.title)
        }
      })
    }).catch((err) => console.error(err))
    setSearchBox(false)
    if(windowSize.width > 786){
      window.scrollTo(0, 1200)
    }else{
      window.scrollTo(0, 1900)
    }
  }

  useEffect(() => {
   
    searchFaq()

  }, [searchString])
  





  return (
    <ThemeProvider theme={theme}>
      <div className="container-fluid faq-wrapper" id="faq">
      <div className="container-lg d-flex px-0 justify-content-center align-items-center flex-column py-5">
        <div className="col-12 col-lg-6">
          <Title
            top="Got"
            bottom="a question?"
            align="d-flex flex-row gap-2 justify-content-center"
          />
          <p className="text-secondary text-center">
          We’re here to answer any questions you may have.
          </p>
        </div>
        <div className="categories-container  p-4 w-100 position-relative">
   
          <div className="row align-items-center justify-content-center flex-column position-relative">

            <div className=" search-container d-flex justify-content-center align-items-center px-4 w-50">
              <StyledTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                      <img src={"https://cdn.worldofdypians.com/dypius/searchIcon.svg"} alt="" />
                      </IconButton>
                    </InputAdornment>
                  )
                }}

                id="outlined-search"
                type="search"
                label="Search"
                ref={search}
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                size="small"
                sx={{ width: "100%" }}
              />
            </div>
            {searchBox &&
            <div className="search-items p-4 mt-4 w-50">
            {searchItems.length > 0 ?
              searchItems.slice(0, 3).map((searchItem, index) => (
                <div key={index} className="search-item p-3" onClick={() => selectSearchFaq(searchItem.category, searchItem.collapse)}>
                  <p className="mb-0">{searchItem.title.slice(0, 50) + '...'}</p>
                </div>
              ))

              : 
              <p className="mb-0 p-4">No results from your search</p>
            }
          </div>
            }
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
                  src={faqTitle === category.title ? `https://cdn.worldofdypians.com/dypius/${category.icon}IconSelected.png` : `https://cdn.worldofdypians.com/dypius/${category.icon}Icon.png`}
                  alt=""
                  width={64}
                  height={64}
                />
                <p className="mb-0">{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {faqItems.length !== 0 &&
      <div className="faq-container container-lg w-100 mt-4 p-4 p-lg-5" id="faq-container">
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
    </ThemeProvider>
  );
};

export default FAQ;
