import { useState } from "react";
import Container from "../../components/container";
import CounterButton from "../../components/counter-button";
import Input from "../../components/input";
import CircleIcon from "../../components/circle-icon";
import img from "../../assest/img/75.png";
import Living from "../../assest/img/Living.png";
import Dining from "../../assest/img/Dining.png";
import Lounge from "../../assest/img/Lounge.png";
import Officechair from "../../assest/img/Officechair.png";
import Button from "../../components/button";
import SubscribeSvg from "../../assest/icon/subscribe.svg";
import Rating from "../../components/rating";
import "./home.css";
import TextArea from "../../components/textarea";
import Tabs from "../../components/tabs";
import TitleSubtitle from "../../components/title-subtitle";
import IconButton from "../../components/icon-button";
import Favorites from "../../assest/icon/favotites.svg";
import IconLabel from "../../components/icon-label";
import Hyperlink from "../../components/hyperlink";
import ProductCard from "../../components/product-card";
import ProductJson from "../../json/product.json"
import Select from "../../components/select";
import SelectSvg from "../../assest/icon/Select.svg";
import TabCollapse from "../../components/tab-collapse";
import ReadCard from "../../components/read-card";
import ProfileComment from "../../components/profile-comment";
import CommentSVG from "../../assest/icon/Comment.svg"
import CartSidebar from "../../components/cart-sidebar";
import TableCartItem from "../../components/table-cart-item";
const Home = () => {
  const jsonData =ProductJson;
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tabData = [
    { label: "New Arrival" },
    { label: "Featured" },
    { label: "On Sale" },
    { label: "Trending" },
  ];

  const cardData = {
    image: "https://furns-react.netlify.app/nextimg/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Farticles%2F1.jpg%3Fv%3D1631612421/1080/75?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Farticles%2F1.jpg%3Fv%3D1631612421&w=1080&q=75",
    title: "Örnek Başlık",
    hyperlink: "Raju",
    date: "15 september, 2023",
    description: "Bu bir örnek açıklama metni."
  };
  
  const [activeTab, setActiveTab] = useState("new arrival"); 
  const [activeTabCollapse, setActiveTabCollapse] = useState<number | null>(0);
  const options = ["Option 1", "Option 2", "Option 3"];
  const handleSelect = (selectedValue:string) => {
    console.log(`Seçilen Değer: ${selectedValue}`);
  };
  return (
    <Container>
      <div className="styled-home-circle-icon">
        <CircleIcon img={img} label="Bedroom" href="/"></CircleIcon>
        <CircleIcon img={Living} label="Living" href="/"></CircleIcon>
        <CircleIcon img={Dining} label="Dining" href="/"></CircleIcon>
        <CircleIcon img={Lounge} label="Lounge" href="/"></CircleIcon>
        <CircleIcon
          img={Officechair}
          label="Office Chair"
          href="/"
        ></CircleIcon>
      </div>

      <TitleSubtitle
        title="Our Products"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore"
      />
      <div>
        <Tabs data={tabData} active={activeTab} setActive={setActiveTab} />
      </div>
      <div>
        <IconButton icon={Favorites} variant="orange" size={30} />
      </div>
      <div>
        <CounterButton count={count} setCount={setCount} />
        <br></br>
        <CounterButton count={count} setCount={setCount} variant="grey" />
        <br></br>
      </div>
      <div className="App">
        <Input
          label="First Name:"
          value={input}
          setValue={setInput}
          placeholder=""
          variant="white"
          width={300}
        />
      </div>
      <br></br>
      <div className="App">
        <Input
          value={input}
          setValue={setInput}
          placeholder="Enter E-Mail Adress"
          variant="black"
          width={300}
        />
      </div>

      <br></br>
      <Button
        label="Shop Now"
        onClick={() => {}}
        width={15}
        variant="primary"
        icon={SubscribeSvg}
        iconSize={15}
      ></Button>
      <Button
        label="Shop Now"
        onClick={() => {}}
        width={15}
        variant="white"
      ></Button>
      <Button
        label="Shop Now"
        onClick={() => {}}
        width={15}
        variant="black"
      ></Button>
      <br></br>
      <Rating initialValue={2} max={5} onChange={() => {}}></Rating>
      <br></br>
      <TextArea label="Message" value="" onChange={() => {}}></TextArea>
      <br></br>
      <IconLabel label="Add to wishlist" icon={Favorites} onClick={()=>{}} size={10}/>
      <br></br>
      <Hyperlink to="/" children="deneme" variant="white"/>
      <Hyperlink to="/" children="deneme" variant="black"/>
      <br></br>
      <div className="product">
      {jsonData.products.map((product) => (
        <ProductCard key={product.id} product={product} />
        
      ))}
    </div>
    <Select data={options} onSelect={handleSelect} icon={SelectSvg}/>
    <TabCollapse data={tabData} active={activeTabCollapse} setActive={setActiveTabCollapse} />
        <ReadCard {...cardData}></ReadCard>
        <ProfileComment image={CommentSVG} name="muhammed" rating={4}></ProfileComment>
        {/* <CartSidebar></CartSidebar> */}
        {/* <TableCartItem></TableCartItem> */}
        </Container>
  );
};

export default Home;
