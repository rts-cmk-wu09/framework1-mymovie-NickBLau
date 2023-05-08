import styled from "styled-components";

const StyledParagraph = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  grid-column-start: 2;
  justify-self: center;
`;

const Paragraph = (props) => {
  return <StyledParagraph {...props}>{props.title} </StyledParagraph>;
};

export default Paragraph;
