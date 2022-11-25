import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blogs/Blog";
import Category from "../../Pages/Category/Category";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Allseller from "../../Pages/Dashboard/Allseller/Allseller";
import Alluser from "../../Pages/Dashboard/Alluser/Alluser";
import Myorders from "../../Pages/Dashboard/Myorders/Myorders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
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
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path: '/dashboard',
                element:<Myorders></Myorders>
            },
            {
                path: '/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element:<MyProduct></MyProduct>
            },
            {
                path:'/dashboard/allusers',
                element:<Alluser></Alluser>
            },
            {
                path:'/dashboard/allsellers',
                element:<Allseller></Allseller>
            }
        ]
    },
    {
        path: '*',element: <img className="w-1/2 lg:mx-auto" src="https://i.ibb.co/j51JkXN/404.jpg" alt="" />
    }
])
export default router;