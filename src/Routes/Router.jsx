import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Main from "../Outlates/Main";
import AddProject from "../Component/AddProject/AddProject";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addProject",
          element: <AddProject></AddProject>,
        },
      ],
    },
  ]);

export default router;