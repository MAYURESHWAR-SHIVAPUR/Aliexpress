import React from 'react'
import Landing from "../pages/Landing/Landing"
import NotFound from "../pages/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

const Approuter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Approuter
