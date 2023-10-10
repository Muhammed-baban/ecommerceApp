import React, { useState } from "react";
import "./index.css";
import Icon from "../icon";
import FacebookSvg from "../../assest/icon/facebook.svg";
import TwitterSvg from "../../assest/icon/twitter.svg";
import LinkedinSvg from "../../assest/icon/linkedin.svg";
import YoutubeSvg from "../../assest/icon/youtube.svg";
import PinterestSvg from "../../assest/icon/pinterest.svg";
import Container from "../container";
import linkes from "../../json/footer.json";
import Input from "../input";
import Button from "../button";
import SubscribeSvg from "../../assest/icon/subscribe.svg";
import Hyperlink from "../hyperlink";

const Footer = () => {
  const [input, setInput] = useState("");

  return (
    <footer>
      <div className="styled-footer">
        <Container>
          <div className="styled-footer-elements">
            <div className="styled-footer-elemets-about">
              <h4 className="title">ABOUT US</h4>
              <div>
                <p className="styled-footer-element-about-text">
                  Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
                  tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud.
                </p>
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
            <div className="styled-footer-elements-links">
              {linkes.map((item) => (
                <div
                  className="styled-footer-elements-links-item"
                  key={item.name}
                >
                  <h4 className="title">{item.name}</h4>
                  <ul>
                    {item.subTitle.map((subitem) => (
                      <li
                        className="styled-footer-elements-links-li"
                        key={subitem.name}
                      >
                        <a
                          className="styled-footer-elements-links-a"
                          href={subitem.link}
                        >
                          {subitem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="styled-footer-elements-subscribe">
              <h4 className="title">NEWSLETTER</h4>
              <div className="styled-footer-elements-subscribe-input">
                <Input
                  value={input}
                  setValue={setInput}
                  placeholder="Enter E-Mail Adress"
                  variant="black"
                />
              </div>
              <Button
                label="Subscribe"
                onClick={() => {}}
                width={50}
                variant="primary"
                icon={SubscribeSvg}
                iconSize={15}
              ></Button>{" "}
            </div>
          </div>
        </Container>
      </div>
      <div className="styled-footer-down">
        <div className="styled-footer-down-contanier">
          <div className="styled-footer-down-element">
            <div className="styled-footer-down-element-left">
              <p className="styled-footer-down-element-left-p">
                © 2021, Furns. Made With &nbsp;
              </p>
              <svg
                stroke="currentColor"
                fill="rgb(220, 53, 69)"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z"></path>
              </svg>
              &nbsp; by
              <Hyperlink to="/"> HasThemes.</Hyperlink>
            </div>

            <div className="styled-footer-down-element-right">
              <div className="styled-footer-down-element-right-image">
              <img alt="" src="https://furns-react.netlify.app/nextimg/%2Fimages%2Ficons%2Fpayment.png/256/75?url=%2Fimages%2Ficons%2Fpayment.png&w=256&q=75"></img>
            </div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
