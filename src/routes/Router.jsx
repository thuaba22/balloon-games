import { createBrowserRouter } from "react-router-dom";
import Game from "../pages/Game";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Game></Game>,
      },
    ],
  },
]);

export default router;
