import styled from "styled-components";

const StyledP = styled.p`
  color: #9c9c9c;
  margin-left: 4px;
`;
const StyledDiv = styled.div`
  display: flex;
`;

const ReleaseDate = (props) => {
  return (
    <StyledDiv>
      <StyledP> Release date: {props.ReleaseDate}</StyledP>
    </StyledDiv>
  );
};

export default ReleaseDate;
