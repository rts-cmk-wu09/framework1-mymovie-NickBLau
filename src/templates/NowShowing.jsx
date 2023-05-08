import styled from "styled-components";
import Image from "../components/Image";
import MovieRating from "../components/MovieRating";
import Heading from "../components/Heading";
import { useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NowShowing = () => {
  const MovieCardData = useLoaderData();
  return (
    <StyledArticle>
      <figure>
        <Image />
      </figure>
      <Heading title="Movie Title" size="14" as="h3" />
      <MovieRating />
    </StyledArticle>
  );
};

export async function loader() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing/?api_key="
  );
  const data = await res.json();
  return data;
}

export default NowShowing;
