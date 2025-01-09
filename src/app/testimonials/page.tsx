import React from "react";
import test from "../../assets/test.png";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-primary">
      <div className="container flex items-center">
        <div>
          <h2 className="text-[45px] leading-[49px] font-semibold w-[349px]">
            Brown Sugar Oatmea
          </h2>
          <p className="leading-6 text-[#666666] mt-[17px] w-[460px]">
            Together with McDonald’s, Burger King has grown to become synonymous
            with burgers in the US.Together with McDonald’s, Burger King has
            grown to become synonymous.
          </p>
          <button className="mt-[35px] bg-btnprimary border-[2px] border-btnprimary py-[14px] px-[50px] text-[#FAFAFA] rounded-[5px] font-bold leading-[22px] hover:border-[2px] hover:border-btnprimary hover:bg-btnhover hover:text-btnprimary duration-300">
            See Details
          </button>
        </div>
        <div>
          <Image alt="" src={test} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
