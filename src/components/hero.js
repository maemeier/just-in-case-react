import React from "react";
import styled from "styled-components";
import mainBcg from "../images/defaultBcg.svg";

const Hero = ({ img, title, text, max, children }) => {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title"> {title}</h1>
        <p className="text"> {text}</p>
        {children}
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.max ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.img}) center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
  }
  .text {
    font-size: 1.5rem;
  }
`;

Hero.defaultProps = {
  img: mainBcg
};
export default Hero;
