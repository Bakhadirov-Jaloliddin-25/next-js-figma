import React from 'react'
import logo from "@/assets/logo.svg"
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-primary'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <Image alt='' src={logo}/>
                <ul className='flex items-center gap-10'>
                    <Link className='text-sm  leading-4 text-[#150101] hover:text-btnprimary' href={"/"}>Home</Link>
                    <Link className='text-sm  leading-4 text-[#150101] hover:text-btnprimary' href={"/product"}>Product</Link>
                    <Link className='text-sm  leading-4 text-[#150101] hover:text-btnprimary' href={"/pricing"}>Pricing</Link>
                    <Link className='text-sm  leading-4 text-[#150101] hover:text-btnprimary' href={"/testimonials"}>Testimonials</Link>
                    <Link className='text-sm  leading-4 text-[#150101] hover:text-btnprimary' href={"/contact"}>Contact Us</Link>
                </ul>
                <button className='bg-btnprimary py-[14px] px-[50px] text-[#FAFAFA] rounded-[5px] font-bold leading-[22px] hover:border-[2px] hover:border-btnprimary hover:bg-btnhover hover:text-btnprimary'>Buy Now</button>
            </div>
        </div>
    </header>
  )
}

export default Header