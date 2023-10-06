import React from "react";
import "./index.css";
import Hyperlink from "../hyperlink";
import Button from "../button";

interface ReadCardProps {
  image: string;
  title: string;
  hyperlink: string;
  date: string;
  description: string;
}

const ReadCard: React.FC<ReadCardProps> = ({
  image,
  title,
  hyperlink,
  date,
  description,
}) => {
  return (
    <div className="styled-read-card">
      <a className="styled-read-card-element" href="/">
        <div className="styled-read-card-element-image">
          <img
            className="styled-read-card-element-image-img"
            src={image}
            alt=""
          ></img>
        </div>
      </a>
      <div className="styled-read-card-description">
        <h2 className="">
          <a className="styled-read-card-description-title" href="/">
            {title}{" "}
          </a>
        </h2>
        <div className="styled-read-card-description-text">
          By{" "}
          <Hyperlink to="/" variant="black">
            {hyperlink}
          </Hyperlink>
          <Hyperlink to="/" variant="black">
            {date}{" "}
          </Hyperlink>
        </div>
        <p>{description}</p>
        <div className="styled-read-card-button">
        <Button
          label="Read More"
          onClick={() => {}}
          variant="black"
          width={100}
        ></Button>{" "}</div>
      </div>
    </div>
  );
};

export default ReadCard;
