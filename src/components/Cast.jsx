import Castpic from "./CastImage";
const Cast = () => {
  return (
    <section>
      <div className="flexContainer space-between">
        <Castpic />
        <Castpic />
        <Castpic />
        <Castpic />
      </div>
      <div className="flexContainer space-between">
        <p>Tom Holland</p>
        <p>Tom Holland</p>
        <p>Tom Holland</p>
        <p>Tom Holland</p>
      </div>
    </section>
  );
};

export default Cast;
