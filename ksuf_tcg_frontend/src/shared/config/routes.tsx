import { createBrowserRouter } from "react-router-dom";

import App from "@app/App";
import { ErrorPage, GamePage, CollectionPage, Page404, ShopPage } from "@pages";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "game",
        errorElement: <ErrorPage />,
        element: <GamePage />,
      },
      {
        path: "shop",
        errorElement: <ErrorPage />,
        element: <ShopPage />,
      },
      {
        path: "collection",
        errorElement: <ErrorPage />,
        element: <CollectionPage />,
      },
      {
        path: "*",
        errorElement: <ErrorPage />,
        element: <Page404 />,
      },
    ],
  }
])