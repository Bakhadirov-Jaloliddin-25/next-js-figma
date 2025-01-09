import React from 'react'
import footerLogo from "@/assets/footerlogo.svg"
import social from "@/assets/socialgroup.svg"
import p from "@/assets/p.svg"
import master from "@/assets/master.svg"
import visa from "@/assets/visa.svg";
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-[#0A0808]">
      <div className="container pt-[70px] pb-[104px] flex gap-[159px] items-center">
        <div className="flex gap-[37px] items-center">
          <div>
            <Image alt="" src={footerLogo} />
            <p className="text-xs text-[#FFFFFF] w-[200px] mt-[9px]">
              Some food has looked so awful that it's looked like something that
              the dog's brought home.
            </p>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[25px] mb-[8px]">
              Fllow Us
            </p>
            <Image alt="" src={social} />
          </div>
          <div>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Home
            </p>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Product
            </p>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Blog
            </p>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Pricing
            </p>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Testimonials
            </p>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Contact Us
            </p>
          </div>
        </div>
        <div className="flex items-end gap-[151px]">
          <div className="mt-[50px]">
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Delivery Information
            </p>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Privacy Policy
            </p>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Terms & Condition
            </p>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Search Terms
            </p>
            <p className="text-xs text-[#FFFFFF] leading-[14px] mt-[10px]">
              Order & Return
            </p>
          </div>
          <div>
            <p className="font-medium leading-[18px] text-[#FFFFFF] ">
              Newsletter
            </p>
            <div className="border-[#D64374] rounded-[5px] border-[2px] mt-[13px]">
              <input
                className="bg-[#0A0808] text-[#FFFFFF] text-[14px] leading-[16px] py-[16px] px-[32px] outline-none"
                type="text"
                name=""
                id=""
                placeholder="Your Email"
              />
              <button className="text-[20px] leading-[23px] text-[#FFFFFF] bg-btnprimary rounded-[5px] px-[17px] py-[16px]">
                Subscribe
              </button>
            </div>
            <div className='mt-[17px] flex gap-[15px]'>
              <Image alt="" src={p} />
              <Image alt="" src={master} />
              <Image alt="" src={visa} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer