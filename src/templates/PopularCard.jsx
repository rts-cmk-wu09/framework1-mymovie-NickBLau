import styled from "styled-components";
import Image from "../components/Image";
import MovieRating from "../components/MovieRating";
import Heading from "../components/Heading";
import MovieGenreButton from "../components/MovieGenreButton";
import RunTime from "../components/RunTime";

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 1rem;
  margin-top: 0.8rem;
`;

const PopularCard = () => {
  return (
    <StyledArticle>
      <figure className="Popular-Image">
        <Image />
      </figure>
      <div className=" flexContainer PopularCardContainer">
        <Heading title="Movie Title" size="14" as="h3" />
        <MovieRating />
        <div className="flexContainer">
          <MovieGenreButton />
          <MovieGenreButton />
          <MovieGenreButton />
        </div>
        <RunTime />
      </div>
    </StyledArticle>
  );
};

export default PopularCard;
