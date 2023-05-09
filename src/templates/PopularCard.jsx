import styled from "styled-components";
import Image from "../components/Image";
import MovieRating from "../components/MovieRating";
import Heading from "../components/Heading";
import MovieGenreButton from "../components/MovieGenreButton";
import RunTime from "../components/RunTime";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 1rem;
  margin-top: 0.8rem;
`;

const PopularCard = () => {
  const MovieCardData = useLoaderData();
  return (
    <>
      {MovieCardData.results.map((data) => (
        <Link to={`details/${data.id}`} key={data.id}>
          <StyledArticle>
            <figure className="Popular-Image">
              <Image
                width="143"
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                alt="Cover Image"
              />
            </figure>
            <div className=" flexContainer PopularCardContainer">
              <Heading
                title={
                  data.title.length > 30
                    ? data.title.split(" ").slice(0, 3).join(" ") + "..."
                    : data.title
                }
                size="14"
                as="h3"
              />
              <MovieRating voteAverage={data.vote_average} />
              <div className="flexContainer">
                <MovieGenreButton />
                <MovieGenreButton />
                <MovieGenreButton />
              </div>
              <RunTime />
            </div>
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};

export async function loader() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular/?api_key=bc0c5dcad170ade974a8b9ae1a2ba651"
  );
  const data = await res.json();
  return data;
}

export default PopularCard;
