import NowShowing from "../templates/NowShowing";
import PopularCard from "../templates/PopularCard";
import SeeMoreButton from "../components/SeeMoreButton";
import MovieGenreButton from "../components/MovieGenreButton";
import Heading from "../components/Heading";
import Switch from "../components/Switch";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
const ListView = () => {
  const ListViewData = useLoaderData();

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
            <NowShowing />
          </div>
        </section>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Popular" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <PopularCard />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export const listViewData = async () => {
  return await Promise.allSettled([
    await axios("https://api.themoviedb.org/3/movie/now_playing/?api_key="),
    await axios("https://api.themoviedb.org/3/movie/popular/?api_key="),
  ]).then((values) => {
    console.log("Value: ", values);
    return {
      nowShowing: values[0].value.data.results,
      popular: values[1].value.data.results,
    };
  });
};

export default ListView;
