import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlates/Main";
import Home from "../Component/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router;