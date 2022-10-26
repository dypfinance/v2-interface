import React from "react";

const ListCard = ({ content, image }) => {
  return (
    <div
      className="list-card d-flex flex-row align-items-center"
      //  data-aos="fade-up"
      //  data-aos-delay="500"
      //  data-aos-duration="1000"
    >
      <img
        src={require(`./assets/${image}`)}
        alt=""
        style={{ width: 45, height: 45 }}
      />
      <p className="m-0">{content}</p>
    </div>
  );
};

export default ListCard;
