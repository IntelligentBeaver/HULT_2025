import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Footer=()=> {
  return (
    <div className="bg-[#231f20] text-white h-full w-full flex flex-col md:flex-row flex-wrap justify-between items-center tracking-wider poppins-extralight text-lg px-6 md:px-28 py-7 md:py-0">
      <div>
        <Image
          src={'/hult_image/hultprize_logo_light.png'}
          width={316}
          height={47}
          alt="hultprize"
        />
      </div>
      <div className="flex justify-between  items-start gap-16">
        <div  className='poppins-thin text-sm tracking-wider leading-[30px]'>
          <h1 className='poppins-semibold text-[27px]'>Quick Links</h1>
          <Link href='/'>Home</Link>
          <p >About</p>
          <p >Events</p>
          <Link href='/Contact' >Contact</Link>
        </div>
        <div className='poppins-thin text-sm tracking-wider leading-[30px]'>
          <h1 className='poppins-semibold text-[27px]'>Contact Us</h1>
          <p>Balkumari, Lalitpur</p>
          <p>+977-9862695444</p>
          <p>hultprize@ncit.edu.np</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;


