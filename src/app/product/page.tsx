"use client";
import React, { useState } from "react";
import product1 from "@/assets/product1.png";
import product2 from "@/assets/product2.png";
import product3 from "@/assets/product3.png";
import product4 from "@/assets/product4.png";
import bigwoman from "@/assets/bghuman.svg";
import smallwoman from "@/assets/smallwoman.svg";
import smallman from "@/assets/smallman.svg";
import larrow from "@/assets/arrow.svg"
import rarrow from "@/assets/rarrow.svg";
import Image from "next/image";

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    "ICE CREAM",
    "CAYENNE CHOCOLATE",
    "CAKE BATTER",
    "CANDY CANE",
    "PLATTERS",
    "DESSERT",
  ];

  return (
    <>
      <div className="container mt-[98px] text-center">
        <h2 className="font-semibold text-[44px] leading-[61px] text-[#150101]">
          Our Product
        </h2>
        <ul className="flex gap-[39px] items-center justify-center mt-[64px]">
          {products.map((product, index) => (
            <li
              key={index}
              className={`text-lg leading-[21px] font-medium relative cursor-pointer ${
                activeIndex === index
                  ? 'text-black before:absolute before:content-[""] before:w-full before:h-[2px] before:bg-pink-500 before:bottom-[-4px] before:left-0'
                  : "text-[#666666] hover:text-black"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {product}
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <div className="mt-[50px] flex items-center">
          <div>
            <Image alt="" src={product1} />
          </div>
          <div className="pl-[85px]">
            <h2 className="font-bold text-black text-[26px] leading-[36px]">
              Cayenne chocolate
            </h2>
            <p className="text-[#666666] mt-[11px] w-[454px]">
              Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
              Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a
              pioneer in the healthy fast food scene.
            </p>
            <p className="font-medium text-[26px] leading-[36px] mt-[28px]">
              $19.55{" "}
              <span className="text-[20px] leading-[28px] text-[#4D4D4D] line-through">
                $22.55
              </span>
            </p>
            <button className="mt-[10px] bg-btnprimary py-[14px] px-[50px] text-[#FAFAFA] rounded-[5px] font-medium leading-[22px] hover:border-[2px] hover:border-btnprimary hover:bg-btnhover hover:text-btnprimary">
              Buy Now
            </button>
          </div>
        </div>
        <div className="mt-[30px] flex items-center">
          <div className="pl-[85px] ">
            <h2 className="font-bold text-black text-[26px] leading-[36px]">
              Brown bread
            </h2>
            <p className="text-[#666666] mt-[11px] w-[454px]">
              Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
              Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a
              pioneer in the healthy fast food scene.
            </p>
            <p className="font-medium text-[26px] leading-[36px] mt-[28px]">
              $19.55{" "}
              <span className="text-[20px] leading-[28px] text-[#4D4D4D] line-through">
                $22.55
              </span>
            </p>
            <button className="mt-[10px] bg-btnprimary py-[14px] px-[50px] text-[#FAFAFA] rounded-[5px] font-medium leading-[22px] hover:border-[2px] hover:border-btnprimary hover:bg-btnhover hover:text-btnprimary">
              Buy Now
            </button>
          </div>
          <div>
            <Image alt="" src={product2} />
          </div>
        </div>
        <div className="mt-[30px] flex items-center">
          <div>
            <Image alt="" src={product3} />
          </div>
          <div className="pl-[85px]">
            <h2 className="font-bold text-black text-[26px] leading-[36px]">
              Sweet corn
            </h2>
            <p className="text-[#666666] mt-[11px] w-[454px]">
              Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
              Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a
              pioneer in the healthy fast food scene.
            </p>
            <p className="font-medium text-[26px] leading-[36px] mt-[28px]">
              $19.55{" "}
              <span className="text-[20px] leading-[28px] text-[#4D4D4D] line-through">
                $22.55
              </span>
            </p>
            <button className="mt-[10px] bg-btnprimary py-[14px] px-[50px] text-[#FAFAFA] rounded-[5px] font-medium leading-[22px] hover:border-[2px] hover:border-btnprimary hover:bg-btnhover hover:text-btnprimary">
              Buy Now
            </button>
          </div>
        </div>
        <div className="mt-[117px] flex items-center">
          <div className="pr-[224px]">
            <div className="flex items-center gap-[21px]">
              <Image src={bigwoman} alt="" />
              <div className="">
                <h2 className="font-medium text-[24px] leading-[29px]">
                  Adele A. McNeill
                </h2>
                <p className="font-medium text-xs leading-[14px] text-[#666666] mt-[5px]">
                  AMIRICAN
                </p>
              </div>
            </div>
            <p className="text-[#666666] mt-[50px] w-[322px]">
              Thanks a lot for the prompt service. Really appreciate. Excellence
              taste in Every Bite.Add a joy of best Taste. Foodie Moments.
            </p>
            <div className="flex items-center mt-[56px] gap-[11px]">
              <Image alt="" src={rarrow} />
              <Image alt="" src={smallman} />
              <Image alt="" src={bigwoman} />
              <Image alt="" src={smallwoman} />
              <Image alt="" src={larrow} />
            </div>
          </div>
          <div>
            <Image alt="" src={product4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
