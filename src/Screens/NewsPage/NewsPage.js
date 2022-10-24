import React, { useEffect } from "react";
import "./_newspage.scss";
import { useLocation } from "react-router-dom";
import DypNews from "../Home/DypNews/DypNews";
import LatestUpdates from "./LatestUpdates/LatestUpdates";
import PressRelease from "../../components/PressRelease/PressRelease";

const NewsPage = () => {
  const data = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="container-fluid px-0 d-flex flex-column overflow-hidden"
      style={{ paddingTop: "130px", gap: "30px" }}
    >
      <DypNews
        topTitle="Dypius"
        bottomTitle="in the media"
        titleAlign="d-flex flex-row gap-2"
        page="news"
      />
      <LatestUpdates
        type={data.state?.newsType ? data.state.newsType : "announcements"}
      />
      <PressRelease />
    </div>
  );
};

export default NewsPage;
