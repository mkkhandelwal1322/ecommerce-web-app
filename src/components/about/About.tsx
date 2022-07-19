import styled from "styled-components";
import "./About.css";
import { Button, Heading, Description } from "../../styles/Style";

const AboutHeading = styled(Heading)`
  margin-left: 0;
`;
const AboutImage = styled.img`
  width: 700px;
  margin: 0 35px;
`;
const AboutButton = styled(Button)`
  padding: 10px 45px;
  margin-left: 0;
`;

const About = () => {
  return (
    <>
      <div className="about-container">
        <AboutImage
          data-testid="aboutImage"
          src="https://html.design/demo/edgecut/images/slider-img.png"
          alt=""
        />
        <div>
          <AboutHeading data-testid="aboutHeading">About Us</AboutHeading>
          <Description data-testid="aboutDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dolorem eum consequuntur ipsam repellat dolor soluta aliquid
            laborum, eius odit consectetur vel quasi in quidem, eveniet ab est
            corporis tempore.
          </Description>
          <AboutButton data-testid="aboutButton" className="read-more-btn">
            Read More
          </AboutButton>
        </div>
      </div>
    </>
  );
};

export default About;
