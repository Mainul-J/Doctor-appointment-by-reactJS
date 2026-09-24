import React from 'react';
import { useLoaderData } from 'react-router';

const DoctorDetails = () => {
    const details = useLoaderData()
    console.log(details);
    const {name,education,speciality,experience,registrationNumber,doctorImage,id} = details
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <div className='flex justify-center gap-20 items-center'>
                <div className='h-[400px] w-[600px] border bg-[#785c5c]'>
                    <img src="" alt="" />
                </div>
                <div className='space-y-5'>
                    <h2 className='text-xl font-bold'>{name}</h2>
                    <h3>{education}</h3>
                    <h3>{speciality}</h3>
                    <div>
                        <h2>Availability</h2>
                        <ul className='text-[#739de2] font-bold flex gap-5'>
                            <il>Sunday</il>
                            <il>Monday</il>
                            <il>Thursday</il>
                        </ul>
                    </div>
                    <p>Consultation Fee : Taka : <span className='font-semibold'>273 (incl. Vat)</span> Per consultation</p>
                </div>
            </div>
            <div className='flex justify-center items-center py-5 ml-58 '>
                <button className='btn btn-secondary'>book now</button>
            </div>
        </div>
    );
}

export default DoctorDetails;