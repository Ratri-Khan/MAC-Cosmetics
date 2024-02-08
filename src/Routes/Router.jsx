import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import AddProject from "../Component/AddProject/AddProject";
import Login from "../Component/Login/Login";
import Main from "../OutLates/Main";
import Register from "../Component/Register/Register";

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
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },
      ],
    },
  ]);

export default router;