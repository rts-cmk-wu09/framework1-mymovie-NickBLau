import styled from "styled-components";
import CastTemp from "../assets/CastTemp.png";

const StyledImg = styled.img`
  width: 72px;
  height: 72px;
`;

const CastImage = () => {
  return <StyledImg src={CastTemp} alt="Movie poster" />;
};

export default CastImage;
