import styled from "styled-components";
import { BsBookmark, BsTicket } from "react-icons/bs";
import { FcFilmReel } from "react-icons/Fc";

const StyledBsTicket = styled(BsTicket)`
  transform: rotate(90deg);
`;

const StyledLi = styled.li`
  display: flex;
  list-style: none;
  color: gray;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  background-color: white;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 35px;
  border-top: 1px solid gray;
  align-items: center;
`;

const Footer = () => {
  return (
    <footer>
      <StyledNav>
        <StyledLi>
          <FcFilmReel />
        </StyledLi>

        <StyledLi>
          <StyledBsTicket />
        </StyledLi>
        <StyledLi>
          <BsBookmark />
        </StyledLi>
      </StyledNav>
    </footer>
  );
};

export default Footer;
