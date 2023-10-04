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

const Footer = () => {
  const [input, setInput] = useState("");

  return (
    <footer>
      <div className="styled-footer">
        <Container>
          <div className="styled-footer-elements">
            <div className="styled-footer-elemets-about">
              <h4>ABOUT US</h4>
              <div className="styled-footer-element-about-text">
                <p>
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
                <div key={item.name}>
                  <h4>{item.name}</h4>
                  <ul>
                    {item.subTitle.map((subitem) => (
                      <li key={subitem.name}>
                        <a className="styled-footer-elements-links-a" href={subitem.link}>{subitem.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="styled-footer-elements-subscribe">
              <h4>NEWSLETTER</h4>
              <Input
                value={input}
                setValue={setInput}
                placeholder="Enter E-Mail Adress"
                variant="black"
                width={300}
              />
              <Button
                label="Subscribe"
                onClick={() => {}}
                width={150}
                variant="primary"
                icon={SubscribeSvg}
                iconSize={15}
              ></Button>{" "}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
