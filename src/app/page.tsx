import Image from "next/image";
import home from "@/assets/home.png"

export default function Home() {
  return (
    <div className="bg-primary">
      <div className="container pt-[37px]">
        <div className="flex items-center pb-[204px]">
          <div className="">
            <p className="font-medium text-sm leading-4 text-[#0F0101]">Sweet fun, full of milk.Sweet fun, full of milk.</p>
            <h2 className="w-[620px] fredoca text-[58px] text-[#0F0101] leading-[70px] font-medium mt-[6px]">Feel inside cold with our delicious <span className="text-btnprimary">ice-cream.</span></h2>
            <p className="mt-[35px] text-lg text-[#0F0101] w-[540px]">
              Some food has looked so awful that it's looked like something that
              the dog's brought home, yet after one mouthful I've been left
              eating my thoughts, my words.
            </p>
            <button className='mt-[50px] bg-btnprimary py-[14px] px-[50px] text-[#FAFAFA] rounded-[5px] font-bold leading-[22px] hover:border-[2px] hover:border-btnprimary hover:bg-btnhover hover:text-btnprimary'>Buy Now</button>
          </div>
          <div>
            <Image alt="" src={home} className="min-w-[597px] h-[671px]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
