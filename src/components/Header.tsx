"use client";

import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const activeClassName = (currentPath: string) => {
    if (currentPath === pathname) return "text-btnprimary";
    return "";
  };
  return (
    <header className="bg-primary">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image alt="" src={logo} />
          <ul className="flex items-center gap-10">
            <Link
              className={`text-sm font-semibold leading-4 text-[#150101] hover:text-btnprimary ${activeClassName(
                "/"
              )}`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={`text-sm font-semibold leading-4 text-[#150101] hover:text-btnprimary ${activeClassName(
                "/product"
              )}`}
              href={"/product"}
            >
              Product
            </Link>
            <Link
              className={`text-sm font-semibold leading-4 text-[#150101] hover:text-btnprimary ${activeClassName(
                "/pricing"
              )}`}
              href={"/pricing"}
            >
              Pricing
            </Link>
            <Link
              className={`text-sm font-semibold leading-4 text-[#150101] hover:text-btnprimary ${activeClassName(
                "/testimonials"
              )}`}
              href={"/testimonials"}
            >
              Testimonials
            </Link>
            <Link
              className={`text-sm font-semibold leading-4 text-[#150101] hover:text-btnprimary ${activeClassName(
                "/contact"
              )}`}
              href={"/contact"}
            >
              Contact Us
            </Link>
          </ul>
          <button className="bg-btnprimary border-[2px] border-btnprimary py-[14px] px-[50px] text-[#FAFAFA] rounded-[5px] font-bold leading-[22px] hover:border-[2px] hover:border-btnprimary hover:bg-btnhover hover:text-btnprimary duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
