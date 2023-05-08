import "./App.css";
import MovieCard from "./templates/MovieCard";
import PopularCard from "./templates/PopularCard";
import SeeMoreButton from "./components/SeeMoreButton";
import MovieGenreButton from "./components/MovieGenreButton";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <Heading title="MyMovies" size="16" as="h1" />
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Now Showing" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Popular" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </section>
      </main>
      <Footer />
    </div>
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
