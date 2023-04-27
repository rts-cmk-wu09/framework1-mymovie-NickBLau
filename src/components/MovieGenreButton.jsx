import styled from "styled-components";

const Button = styled.button`
  width: 61px;
  height: 21px;
  background-color: #dbe3ff;
  color: #88a4e8;
  border: solid 1px;
  border-color: #aaa9b1;
  border-radius: 25px;
  font-size: 8px;
  margin-right: 0.5rem;
`;

const MovieGenreButton = () => {
  return <Button>MovieGenre</Button>;
};

export default MovieGenreButton;
