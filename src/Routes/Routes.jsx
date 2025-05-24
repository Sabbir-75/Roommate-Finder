import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddRoommate from "../Pages/AddRoommate/AddRoommate";
import Details from "../Pages/Details/Details";
import Browsing from "../Pages/Browsing/Browsing";
import MyListing from "../Pages/MyListing/MyListing";
import Update from "../Pages/Update/Update";
import PrivateRoute from "../PrivetRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch("/slider.json"),
                Component: Home
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/signup",
                Component: Signup
            },
            {
                path: "/findoommate",
                element: <PrivateRoute><AddRoommate></AddRoommate></PrivateRoute>
            },
            {
                path: "/browsing",
                Component: Browsing
            },
            {
                path: "/mylisting",
                loader: () => fetch("http://localhost:5000/roommates"),
                element: <PrivateRoute><MyListing></MyListing></PrivateRoute>
            },
            {
                path: "/details/:id",
                loader: ({params}) => fetch(`http://localhost:5000/roommates/${params.id}`),
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path: "/update/:id",
                loader: ({params}) => fetch(`http://localhost:5000/roommates/${params.id}`),
                element: <PrivateRoute><Update></Update></PrivateRoute>
            },
        ]
    }
])