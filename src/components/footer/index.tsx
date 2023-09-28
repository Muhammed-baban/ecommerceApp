import React from "react";
import "./index.css";
import Icon from "../icon";
import FacebookSvg from "../../assest/icon/facebook.svg";
import TwitterSvg from "../../assest/icon/twitter.svg";
import LinkedinSvg from "../../assest/icon/linkedin.svg";
import YoutubeSvg from "../../assest/icon/youtube.svg";
import PinterestSvg from "../../assest/icon/pinterest.svg";
import Container from "../container";

const Footer = () => {
  return (
    <footer>
      <div className="styled-footer">
        <Container>
          <div className="styled-footer-elements">
            <div className="styled-footer-elemets-about">
              <h4>ABOUT US</h4>
              <div className="styled-footer-element-about-text">
                <p>Deneme Yazı </p>
                <ul className="icons">
                  <li className="icon">
                    <a href="https://facebook.com">
                      <Icon icon={FacebookSvg} size={18} />
                    </a>
                  </li>
                  <li className="icon">
                    <a href="https://twitter.com">
                      <Icon icon={TwitterSvg} size={18} />
                    </a>
                  </li>
                  <li className="icon">
                    <a href="https://linkedin.com">
                      <Icon icon={LinkedinSvg} size={18} />
                    </a>
                  </li>
                  <li className="icon">
                    <a href="https://youtube.com">
                      <Icon icon={YoutubeSvg} size={18} />
                    </a>
                  </li>
                  <li className="icon">
                    <a href="https://pinterest.com">
                      <Icon icon={PinterestSvg} size={18} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="styled-footer-elemets-information"></div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
