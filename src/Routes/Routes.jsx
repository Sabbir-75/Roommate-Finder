import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddRoommate from "../Pages/AddRoommate/AddRoommate";

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
                Component: AddRoommate
            },
        ]
    }
])