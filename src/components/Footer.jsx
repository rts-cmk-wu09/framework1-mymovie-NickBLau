import styled from "styled-components";
import { BsBookmark, BsTicket } from "react-icons/bs";
import { FcFilmReel } from "react-icons/Fc";

const StyledBsBookmark = styled(BsBookmark)`
  color: gray;
`;

const StyledBsTicket = styled(BsTicket)`
  color: gray;
  transform: rotate(90deg);
`;

const StyledFcFilmReel = styled(FcFilmReel)`
  color: gray;
`;

const StyledLi = styled.li`
  display: flex;
  list-style: none;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const Footer = () => {
  return (
    <footer>
      <StyledNav>
        <StyledLi>
          <StyledFcFilmReel />
        </StyledLi>

        <StyledLi>
          <StyledBsTicket />
        </StyledLi>
        <StyledLi>
          <StyledBsBookmark />
        </StyledLi>
      </StyledNav>
    </footer>
  );
};

export default Footer;
