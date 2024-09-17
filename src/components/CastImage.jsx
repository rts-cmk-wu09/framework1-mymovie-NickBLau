import styled from "styled-components";
import CastTemp from "../assets/CastTemp.png";

const StyledImg = styled.img`
  width: 140px;
  height: 140px;
`;

const CastImage = () => {
  return <StyledImg src={CastTemp} alt="Movie poster" />;
};

export default CastImage;
