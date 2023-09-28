import "./index.css";
import Container from "../container";
interface CircleIconProps {
  img: string;
  label: string;
  href: string;
}

const CircleIcon: React.FC<CircleIconProps> = ({ img, label, href }) => {
  return (
    <Container>
      
      <div className="styled-circle-icon">
        <div className="styled-circle-icon-items">
          <a className="styled-circle-icon-image" href={href}>
            <div className="">
              <img src={img} alt="" />

              <h4 className="styled-circle-icon-label">{label}</h4>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default CircleIcon;
