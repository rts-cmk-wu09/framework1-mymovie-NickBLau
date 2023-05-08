import React from "react";
import ReactDOM from "react-dom/client";
import DetailView from "./Pages/DetailsView";
import ListView from "./Pages/ListView";
import ErrorView from "./Pages/ErrorView";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index element={<ListView />} />
      <Route path="/details/:id" element={<DetailView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
