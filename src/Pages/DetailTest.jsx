import styled, { css } from "styled-components";
import Switch from "../components/Switch";
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 2;
  height: 232px;
`;
const StyledFaArrowLeft = styled(FaArrowLeft)`
  position: relative; /* fix z position on safari mobile */
  color: #fff;
  grid-column-start: 1;
  grid-row-start: 1;
  margin-top: 2rem;
  margin-left: 2rem;
`;
const StyledIframe = styled.iframe`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
`;
const StyledSwitch = styled(Switch)`
  grid-column-start: 2;
  margin-top: 2rem;
  margin-right: 2rem;
`;
const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 2rem;
  margin-top: -10px;
`;

const DetailsView = () => {
  const DetailData = useLoaderData();
  console.log("DetailsData: ", DetailData);
  return (
    <>
      <StyledHeader>
        <StyledIframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${DetailData.details.videos.results[0].key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></StyledIframe>
        <StyledBsArrowLeft />
        <StyledSwitch justify="end" align="top" />
      </StyledHeader>
      <div>
        <div className="flexContainer space-between">
          <Link to="/">
            <BsArrowLeft />
          </Link>

          <Switch></Switch>
        </div>
        <Hero></Hero>
        <div className="trailer">
          <FaPlayCircle />
          <p>Play Trailer</p>
        </div>

        <div className="flexContainer space-between margin-top border-radius">
          <Heading title="Spiderman: No Way Home" size="16" as="h1" />
          <FaRegBookmark />
        </div>

        <div className="margin-top ">
          <MovieRating />
        </div>

        <div className="margin-top ">
          <MovieGenreButton />
          <MovieGenreButton />
          <MovieGenreButton />
        </div>

        {/* movie info */}
        <section>
          <div className="flexContainer space-between margin-top ">
            <Heading
              title="Length"
              family="mulish"
              weight="700"
              size="16"
              as="h5"
            />
            <Heading title="Language" weight="700" size="16" as="h5" />
            <Heading title="Rating" weight="700" size="16" as="h5" />
          </div>
          <div className="flexContainer space-between">
            <p>2h 28min </p>
            <p>English</p>
            <p>PG 13</p>
          </div>
        </section>
        <div className="margin-top ">
          <Heading title="Description" weight="700" size="16" as="h2" />
          <p className="margin-top ">
            With Spider-Man's identity now revealed, Peter asks Doctor Strange
            for help. When a spell goes wrong, dangerous foes from other worlds
            start to appear, forcing Peter to discover what it truly means to be
            Spider-Man.
          </p>
        </div>

        <div className="flexContainer space-between margin-top ">
          <Heading title="Cast" weight="700" size="16" as="h4" />
          <SeeMoreButton />
        </div>
        <div className="margin-top ">
          <Cast />
        </div>
      </div>
    </>
  );
  {
    /* figure/video   
<div>arrow.icon switch.button</div>
<main>
<article>
h1=Movietitle bookmark.icon
moviRating.jsx
</article>
<section>
MovieGenreButton.jsx
<p>length, language, Rating</p>
<section>h2=description p=details</section>
<section>h3=cast seemorebutton
figure=actor image
<p> actor name</p>
</section>
</main> 
*/
  }
};

export const DetailsViewData = async ({ params }) => {
  return Promise.allSettled([
    axios(
      `http://api.themoviedb.org/3/movie/${params.id}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&append_to_response=videos`
    ),
    axios(
      `http://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    ),
  ]).then((data) => {
    return {
      details: data[0].value.data,
      cast: data[1].value.data,
    };
  });
};

export default DetailsView;
