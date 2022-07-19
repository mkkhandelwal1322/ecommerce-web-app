import "./Home.css";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Description, Heading, Button } from "../../styles/Style";
import styled from "styled-components";

const HomeDescription = styled(Description)`
  margin-left: 35px;
`;
const AboutButton = styled(Button)`
  padding: 10px 45px;
  font-size: 20px;
  margin-left: 0;
  margin-right: 15px;
`;
const ContactButton = styled(Button)`
  padding: 10px 45px;
  font-size: 20px;
  margin-left: 0;
  border: 1px solid #f89646;
  background-color: #f89646;
  &:hover {
    background-color: transparent;
    color: #f89646;
  }
`;

const HomeImage = () => {
  const navigate = useNavigate();
  return (
    <div className="image-container">
      <div className="home-detail-box">
        <Heading>
          FOR ALL YOUR <br />
          FURNITURE NEEDS
        </Heading>
        <HomeDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem
          maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
        </HomeDescription>
        <div className="home-btn-box">
          <AboutButton onClick={() => navigate("/about")}>About Us</AboutButton>
          <ContactButton
            className="contact"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </ContactButton>
        </div>
      </div>
      <div className="home-img-box">
        <img
          src="https://html.design/demo/edgecut/images/slider-img.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeImage;
