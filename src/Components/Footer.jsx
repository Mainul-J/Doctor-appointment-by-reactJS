import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer>
          <div className='text-xl font-bold text-center py-10'>
            {/* img + title */}
            <div>
              <img src="" alt="" />
              <h3>Find Doctor's</h3>
            </div>
            {/* navlink  */}
            <div className='py-4 flex gap-4 justify-center text-[#414d48]'>
              <Link to={'/'}>Home</Link>
              <Link to={'/mybooking'}>My-Booking</Link>
              <Link to={'blogs'}>Blogs</Link>
              <Link to={'contact'}>Contact</Link>
            </div>
            <hr className='text-[#cfaeae] mt-10' />
            {/* links */}
            <div className='flex justify-center gap-10 py-10'>
              <img className='h-10 ' src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="" />
              <img className='h-10 ' src="https://img.icons8.com/?size=100&id=RKyEJ3DPnVXk&format=png&color=000000" alt="" />
              <img className='h-10 ' src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="" />
              <img className='h-10 ' src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="" />
            </div>
          </div>
        </footer>
    );
};

export default Footer;