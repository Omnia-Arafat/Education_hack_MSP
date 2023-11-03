import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import HomePage from "../pages/HomePage";
import Notification from "../components/Notification/Notification.jsx";
import LoginPage from '../pages/Auth/LoginPage'
import RegisterPage from "../pages/Auth/RegisterPage";
import Courses from "../components/Courses/Courses";



const router = createBrowserRouter(
  [


    {
      path: "/", element: <RootLayout />
      , children: [

        {
          index: true, element: <HomePage />
        },
       
        
        {
          path: 'Courses', element: <Courses />
        }
        ,
        {
          path:'login', element:<LoginPage/>
        }
        , 
        {
          path:'register', element:<RegisterPage/>
        }
        ,
        {
          path: 'Notification', element: <Notification />
        },


      ],




    },


   






  ]

)
export default router