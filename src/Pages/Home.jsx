import React from 'react';
import rightImg from '../assets/banner-img-1.png';
import { useLoaderData } from 'react-router';
import Cards from '../Components/DoctorsCard/Cards';
import doctor from '../assets/success-doctor.png'
import reviews from '../assets/success-review.png'
import patient from '../assets/success-patients.png'
import staff from '../assets/success-staffs.png'
const Home = () => {
    const data = useLoaderData();
    return (
        <>
        {/* // banner ; */}
        <section className='p-4'>
            <div className='bg-white m-2 mx-auto w-10/12  p-2 rounded-3xl'>
                <div className='  bg-gray-200  rounded-2xl p-10 shadow-2xl'>
                <div className=''>
                {/* text */}
                <div>
                    <h1 className='font-bold text-center text-3xl text-gray-600'>Dependable Care, Backed by Trusted <br /> <span className='text-amber-700'>Professionals</span>.</h1>
                    <p className='text-xs text-center w-8/12 mx-auto py-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                {/* button */}
                <div className='flex pb-5 justify-center'>
                    <input className='input' type="text" />
                    <button className='btn ml-2 bg-green-300 rounded-3xl shadow-xl' type="submit">Search</button>
                </div>
            </div>
            {/* banner img */}
            <div className='flex justify-center gap-10'>
                {/* left img */}
                <div>
                    <img src={rightImg} alt="" />
                </div>
                {/* right img */}
                <div>
                    <img src={rightImg} alt="" />
                </div>
            </div>
            </div>
            </div>
            <section>
            </section>
        </section>
        <section>
            <h2 className='text-center py-10 text-3xl font-bold'>Cards</h2>
            <Cards data={data}></Cards>
        </section>
        {/* medical services section */}
        <section>
            <div>
                <div className='py-20'>
                    {/* text  */}
                    <div className='text-center py-5'>
                        <h2 className='text-xl font-bold'>We Provide Best Medical Services</h2>
                        <p className='text-xs font-semibold py-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
                    </div>
                    {/* cards of numbers */}
                    <div className='flex justify-center items-center gap-20 font-black'>
                        {/* 01 card */}
                        <div className=' p-4 w-36 space-y-2 bg-white rounded-xl'>
                        <img className='h-8' src={doctor} alt="" />
                        <p>190+</p>
                        <p className='text-[#d4d2d2]'>Total Doctors</p>
                        </div>
                        {/* 02 card */}
                        <div className=' p-4 w-36 space-y-2 bg-white rounded-xl'>
                        <img className='h-8' src={reviews} alt="" />
                        <p>467+</p>
                        <p className='text-[#d4d2d2]' >Total review</p>
                        </div>
                        {/* 03 card */}
                        <div className='p-4 w-36 space-y-2 bg-white rounded-xl'>
                        <img className='h-8' src={patient} alt="" />
                        <p>1900+</p>
                        <p className='text-[#d4d2d2]' >Patient</p>
                        </div>
                        {/* 04 card */}
                        <div className=' p-4 w-36 space-y-2 bg-white rounded-xl'>
                        <img className='h-8' src={staff} alt="" />
                        <p>300+</p>
                        <p className='text-[#d4d2d2]' >Total staff</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        

        
    );
};

export default Home;