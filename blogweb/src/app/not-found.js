import React from "react";
import { Logo } from "@/assets/Logo";
import Link from "next/link";
import { Mag } from "@/assets/Mag";
import { RxHamburgerMenu } from "react-icons/rx";
import { Footer } from "@/components/Footer";

const notFound = () => {
  return (
    <div>
      <header className="flex justify-between items-center py-8 w-[390px] m-auto xl:w-[1024px]">
        <Logo />
        <div className="hidden xl:block">
          <div className="flex gap-10">
            <Link href={"/"}>
              <button>Home</button>
            </Link>
            <Link href={"/blogs"}>
              <button>Blog</button>
            </Link>
            <Link href={"/contact"}>
              <button>Contact</button>
            </Link>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="flex items-center rounded-[5px] overflow-hidden">
            <input
              type="text"
              placeholder="search"
              className="bg-[#f4f4f5] xl:w-40"
            ></input>
            <div className="bg-[#f4f4f5] p-1 ">
              <Mag />
            </div>
          </div>
        </div>
        <RxHamburgerMenu className="xl:hidden" />
      </header>
      <div className="w-fit m-auto flex justify-center gap-[100px] my-[100px]">
        <div className="text-7xl border-r pr-10 self-center py-20">404</div>
        <div className="flex flex-col gap-[20px] w-[35%]">
          <div className="text-2xl font-semibold">Page Not Found</div>
          <div className="text-[18px] text-[#696A75]">
            We are sorry, This page is unknown or does not exist the page you
            are looking for.
          </div>
          <Link href={"/"}>
            <button className="self-start bg-[#4B6BFB] text-white py-[10px] px-[16px] rounded-md">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default notFound;
