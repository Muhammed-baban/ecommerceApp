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
import './home.css'
import TextArea from "../../components/textarea";
import Tabs from "../../components/tabs";
import Badge from "../../components/badge";
const Home = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tabData = [
    { label: 'New Arrival' },
    { label: 'Featured' },
    { label: 'On Sale' },
    { label: 'Trending' },
  ];
  const [activeTab, setActiveTab] = useState('new arrival'); // Varsayılan aktif sekme

  return (
    <Container>
      <h1>Home Page</h1>
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
      <div className="styled-home-circle-icon">
        <CircleIcon img={img} label="Bedroom" href="/"></CircleIcon>
        <CircleIcon img={Living} label="Living" href="/"></CircleIcon>
        <CircleIcon img={Dining} label="Dining" href="/"></CircleIcon>
        <CircleIcon img={Lounge} label="Lounge" href="/"></CircleIcon>
        <CircleIcon img={Officechair} label="Office Chair" href="/"></CircleIcon>
      </div>
      <br></br>
      <Button
        label="Shop Now"
        onClick={() => {}}
        width={150}
        variant="primary"
        icon={SubscribeSvg}
        iconSize={15}
      ></Button>
      <br></br>
      <Rating initialValue={2} max={5} onChange={() => {}}></Rating>
      <br></br>
      <TextArea label="Message" value="" onChange={()=>{}}></TextArea>
      <div><Tabs data={tabData} active={activeTab} setActive={setActiveTab} />
      
    </div>
    <br></br>
    <Badge oldPrice={78} price={70} stock={0} />
    </Container>
  );
};

export default Home;
