import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Main from "../OutLates/Main";
import Register from "../Component/Register/Register";
import AddProduct from "../Component/AddProduct/AddProduct";

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
          element: <AddProduct></AddProduct>,
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