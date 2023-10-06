import React from "react";
import "./index.css";
import Icon from "../icon";
import Rating from "../rating";

interface ProfileCommentProps {
  image: string;
  name: string;
  rating: number;
}

const ProfileComment: React.FC<ProfileCommentProps> = ({
  image,
  name,
  rating,
}) => {
  return (
    <div className="styled-profile-comment">
      <div className="styled-profile-comment-image">
        <Icon icon={image}></Icon>
      </div>
      <div className="styled-profile-comment-conten">
        <h4 className="styled-profile-comment-conten-title">{name}</h4>
        <Rating initialValue={rating} max={5} onChange={() => ({})}></Rating>
        <p>
          Vestibulum ante ipsum primis aucibus orci luctustrices ullarper
          euismod vehicula. Phasellus congue nulla.
        </p>
      </div>
    </div>
  );
};

export default ProfileComment;
