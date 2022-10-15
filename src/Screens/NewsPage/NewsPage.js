import React, { useEffect } from "react";
import "./_newspage.scss";
import { useLocation } from "react-router-dom";
import DypNews from "../Home/DypNews/DypNews";
import LatestUpdates from "./LatestUpdates/LatestUpdates";


const NewsPage = () => {
  const data = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="container-fluid px-0 d-flex flex-column overflow-hidden"
      style={{ paddingTop: "150px", gap: "150px" }}
    >
      <DypNews
        topTitle="Main"
        bottomTitle="news"
        titleAlign="d-flex flex-row gap-2"
        page="news"
      />
      <LatestUpdates
        type={data.state?.newsType ? data.state.newsType : "announcements"}
      />
    </div>
  );
};

export default NewsPage;
