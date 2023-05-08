import styled from "styled-components";
import coverimage from "../assets/Hero.png";

const StyledImg = styled.img`
  max-width: 100%;
`;

const Image = () => {
  return <StyledImg src={coverimage} alt="Movie poster" />;
};
export default Image;
