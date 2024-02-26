import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Main from "../OutLates/Main";
import Register from "../Component/Register/Register";
import AddProduct from "../Component/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import Details from "../Component/Details/Details";
import MyProduct from "../Component/MyProduct/MyProduct";
import AllProduct from "../Component/AllProduct/AllProduct";
import Error404 from "../OutLates/Error404";

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
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/addProduct",
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        },
        {
          path: "/details/:_id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params}) => fetch(`https://mac-cosmetics-server.vercel.app/getProducts/${params._id}`)
        },
        {
          path: "/myProduct",
          element: <MyProduct></MyProduct>,
        },
        {
          path: "/allProduct",
          element:<AllProduct></AllProduct>,
          loader: () => fetch('https://mac-cosmetics-server.vercel.app/getProducts')
        },
      ],
      errorElement: <Error404></Error404>
    },
  ]);

export default router;