import NowShowing from "../templates/NowShowing";
import PopularCard from "../templates/PopularCard";
import SeeMoreButton from "../components/SeeMoreButton";
import MovieGenreButton from "../components/MovieGenreButton";
import MovieRating from "../components/MovieRating";
import Image from "../components/Image";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import Switch from "../components/Switch";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

import Castpic from "../components/CastImage";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegBookmark, FaPlayCircle } from "react-icons/fa";
import Cast from "../components/Cast";
import Paragraph from "../components/Paragraph";
function App() {
  return (
    <>
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
}
export default App;
