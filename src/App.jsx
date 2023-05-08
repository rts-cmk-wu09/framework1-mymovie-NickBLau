import "./App.css";
import { Outlet } from "react-router-dom";
// import DetailsView from "./Pages/DetailsView";
// import ListView from "./Pages/ListView";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
export default App;
