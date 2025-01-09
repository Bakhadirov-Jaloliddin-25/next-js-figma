import React from 'react'
import car from "@/assets/car.svg"
import group from "@/assets/group.svg";
import cash_back from "@/assets/cash-back.svg"
import fast_delivery from "@/assets/fast-delivery.svg";
import phone from "@/assets/phone.png"
import price1 from "@/assets/price1.svg"
import price2 from "@/assets/price1.svg"
import price3 from "@/assets/price3.svg";
import google from "@/assets/google.svg"
import apple from "@/assets/apple.svg";
import Image from 'next/image';


const state = [
  {
    id: 1,
    title: "Free Shipping",
    img: car,
  },
  {
    id: 2,
    title: "Quick Packaging",
    img: group,
  },
  {
    id: 3,
    title: "100% Money Back",
    img: cash_back,
  },
  {
    id: 4,
    title: "Fast Delivery",
    img: fast_delivery,
  },
];

const Pricing = () => {
  return (
    <>
      <div className="">
        <div className="container flex items-center gap-[39px] mt-[100px]">
          {state?.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center justify-center text-center px-[26px] pt-[33px] pb-[27px] hover:shadow-xl"
            >
              <Image src={data.img} alt="" />
              <h2 className="font-semibold text-[20px] leading-[28px] mt-[25px]">
                {data.title}
              </h2>
              <p className="mt-[9px] text-sm text-[#666666]">
                Last Chance! Free shipping on all orders ends today.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary py-[40px] mt-[50px]">
        <div className="container flex items-center">
          <div>
            <Image alt="" src={phone} />
          </div>
          <div className="pl-[135px]">
            <h2 className="text-[45px] leading-[52px] font-medium">
              Simple Way To Order Your Food
            </h2>
            <p className="text-lg leading-[22px] text-[#0F0101] mt-[20px] w-[600px]">
              Some food has looked so awful that it's looked like something that
              the dog's brought home, yet after one mouthful I've been left
              eating my thoughts.
            </p>
            <div className="flex items-center gap-[10px] mt-[30px]">
              <Image alt="" src={price1} />
              <p>Select Your Food</p>
            </div>
            <div className="flex items-center gap-[10px] mt-[20px]">
              <Image alt="" src={price2} />
              <p>Add To Cart</p>
            </div>
            <div className="flex items-center gap-[10px] mt-[20px]">
              <Image alt="" src={price3} />
              <p>Order Your Food</p>
            </div>
            <div className='flex items-center gap-[7px] mt-[41px]'>
              <Image alt="" src={google} />
              <Image alt="" src={apple} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing