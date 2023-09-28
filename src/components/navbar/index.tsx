import "./index.css";
import linkes from "../../json/navbar.json";
import { useNavigate } from "react-router-dom";
import Container from "../container";
import DropdownIcon from "../../assest/icon/dropdownIcon.svg";
import SearchIcon from "../../assest/icon/search.svg";
import CartIcon from "../../assest/icon/cartIcon.svg";
import PeopleIcon from "../../assest/icon/peopleIcon.svg";
import Logo from "../../assest/img/logo.png";
import Icon from "../icon";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const handleRedirect = (link: string) => {
    navigate(link);
  };
  const toggleDropdown = (itemId: number) => {
    if (activeDropdown === itemId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(itemId);
    }
  };
  return (
    <div className="styled-navbar">
      <div className="styled-navbar-logo">
        <Container>
          <a href="./"><img src={Logo} alt="Logo" /></a>
          <div className="styled-navbar-icon">
            <div className="styled-navbar-icon-search">
              <Icon icon={SearchIcon} size={30} />
            </div>
            <div className="styled-navbar-icon-people">
              <Icon icon={PeopleIcon} size={30} />
            </div>
            <div className="styled-navbar-icon-cart">
              <Icon icon={CartIcon} size={30} />
            </div>
          </div>
        </Container>
      </div>
      <Container>
      <div className="styled-navbar-list">
          {linkes.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => toggleDropdown(item.id)}
              onMouseLeave={() => toggleDropdown(item.id)}
            >
              <div
                className={`styled-navbar-list-item ${
                  activeDropdown === item.id ? "active-dropdown" : ""
                }`}
                onClick={() => handleRedirect(item.link)}
              >
                {item.name}
                {item.dropdown && (
                  <Icon icon={DropdownIcon} size={20} variant="white" />
                )}
              </div>
              {item.dropdown && activeDropdown === item.id && (
                <ul className="dropdown-menu">
                  {item.dropdown.map((subItem) => (
                    <li
                      key={subItem.name}
                      onClick={() => handleRedirect(subItem.link)}
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
