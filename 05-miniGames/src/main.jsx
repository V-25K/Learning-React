import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";

import GameOf2024 from "./components/games/GameOf2024";
import GuessTheNumber from "./components/games/GuessTheNumber";
import MemoryCards from "./components/games/MemoryCards"

import MainGamelist from "./components/MainGamelist";


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainGamelist/>
      },
      {
        path: "GameOf2024",
        element: <GameOf2024 />,
      },
      {
        path: "MemoryCards",
        element: <MemoryCards />,
      },
      {
        path: "GuessTheNumber",
        element: <GuessTheNumber />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
