import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DetailsView from "./Pages/DetailsView";
import ListView from "./Pages/ListView";
import ErrorView from "./pages/ErrorView";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ListViewData } from "./Pages/ListView";
import { DetailsViewData } from "./Pages/DetailsView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index loader={ListViewData} element={<ListView />} />
      <Route
        path="/details/:id"
        loader={DetailsViewData}
        element={<DetailsView />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
