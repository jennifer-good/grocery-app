import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import ErrorPage from "./components/error-page";
import About from "./components/about";
import AddPlayers from "./components/add-players";
import Game from "./components/game";
import theme from './theme';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//set the routes for the site
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "add-players",
    element: <AddPlayers />,
  },
  {
    path: "game",
    element: <Game />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);