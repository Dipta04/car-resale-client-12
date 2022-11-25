import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blogs/Blog";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SellerSignUp from "../../Pages/SellerSignUp/SellerSignUp";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
               path:'/',
               element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            },
           {
             path:'/carOptions/:id',
             element:<Category></Category>,
             loader:({params})=>fetch(`http://localhost:5000/carOptions/${params.id}`)
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/signup',
            element:<SignUp></SignUp>
           },
           {
            path:'/sellerSignup',
            element:<SellerSignUp></SellerSignUp>
           }
        ]
    },
    {
        path: '*',element: <img className="w-1/2 lg:mx-auto" src="https://i.ibb.co/j51JkXN/404.jpg" alt="" />
    }
])
export default router;