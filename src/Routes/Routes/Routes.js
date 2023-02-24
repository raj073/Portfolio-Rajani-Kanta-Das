import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import CarCruiseBD from "../../Pages/Projects/CarCruiseBD/CarCruiseBD";
import DentalCare from "../../Pages/Projects/DentalCare/DentalCare";
import DistanceLearning from "../../Pages/Projects/DistanceLearning/DistanceLearning";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'/carcruisebd',
                element: <CarCruiseBD></CarCruiseBD>
            },
            {
                path:'/dentalcare',
                element: <DentalCare></DentalCare>
            },
            {
                path:'/distancelearning',
                element: <DistanceLearning></DistanceLearning>
            }
        ]
    }
])

export default router;