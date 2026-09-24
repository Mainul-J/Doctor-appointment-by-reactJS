import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import Bookings from "../Pages/Bookings";
import DoctorDetails from "../Pages/DoctorDtailes";

export const router = createBrowserRouter([
    {
        path:'/',
        
        Component: Root,
        children:[{
            index:true , Component:Home,
            loader:()=>fetch("/doctors.json"),
        }]
    },
    {
        path:'details/:id',
        loader: ({params})=>fetch(`/doctors.json${params}`),
        Component: Root,
        children: [{
             index: true,
                Component: DoctorDetails,
                loader: async ({ params }) => {
                    const res = await fetch("/doctors.json");
                    const doctors = await res.json();

                    const doctor = doctors.find(
                        doctor => doctor.id === Number(params.id)
                    );

                    return doctor;
                },

        }]
    }
])