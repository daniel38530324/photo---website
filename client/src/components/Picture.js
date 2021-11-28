import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>

      <a target="_blank" href={data.src.large}>
        Download Image
      </a>
    </div>
  );
};

export default Picture;
