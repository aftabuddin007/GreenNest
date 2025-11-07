import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayouts from "../Layouts/MainLayouts";
import HomePage from "../Pages/HomePage/HomePage";
import TopRatedCard from "../Pages/TopRatedCard/TopRatedCard";
import Plants from "../Pages/Plants/Plants";
import MyProfile from "../Pages/MyProfile/MyProfile";
import PlantDetails from "../Pages/PlantsDetails/PlantDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AuthLayout from "../Components/AuthLayout/AuthLayout";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import About from "../Components/AboutUs/About";
import ErrorPage from "../Components/ErrorPahe/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },{
            path:'/plants',
            element:<Plants></Plants>
        },{
          path:'/about',
            element:<About></About>
        }
        ,{
          path:'/my-profile',
          element:<PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        },{
          path:'/plantDetails/:id',
          element:<PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        }
    ]
  },{
    path:'/auth',
    element:
      <AuthLayout></AuthLayout>,
    
    children:[
      {
    path:'/auth/login',
    element:<Login></Login>
  },{
    path:'/auth/signup',
    element:<SignUp></SignUp>
  }
    ]
  },{
       path:'/*' ,
   element:<ErrorPage></ErrorPage>
  }

]);






export default router