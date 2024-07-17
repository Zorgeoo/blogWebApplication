"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/assets/Logo";
import Link from "next/link";
import { Mag } from "@/assets/Mag";
import { RxHamburgerMenu } from "react-icons/rx";
import { Footer } from "@/components/Footer";
import { format } from "date-fns";

const Page = () => {
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
      <div className="w-[390px] m-auto xl:w-[1024px] py-24">
        <div className="xl:w-[635px] w-[390px] m-auto">
          <div className="text-4xl pb-5 font-semibold">Contact us </div>
          <div className="text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </div>
        </div>
        <div className="flex justify-center gap-[50px] py-[30px]">
          <div className="border rounded-xl w-[294px] flex flex-col gap-[10px] p-4">
            <div className="font-semibold">Address</div>
            <div className="text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </div>
          </div>
          <div className="border rounded-xl w-[294px] flex flex-col gap-[10px] p-4">
            <div className="font-semibold">Contact</div>
            <div className="text-[#696A75]">
              <div>313-332-8662</div>
              <div>info@email.com</div>
            </div>
          </div>
        </div>
        <div className="p-[30px] xl:w-[635px] m-auto bg-[#F6F6F7] flex flex-col gap-5 rounded-[10px] w-[390px] ">
          <div className="font-semibold">Leave a message</div>
          <div className="xl:flex xl:flex-row flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="border rounded-[5px] flex-1 px-3 py-1"
            ></input>
            <input
              type="text"
              placeholder="Your Email"
              className="border rounded-[5px] flex-1 px-3 py-1"
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="border rounded-[5px] w-full px-3 py-1"
            ></input>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Write a message"
              className="border rounded-[5px] h-[143px] w-full px-3 py-1"
            ></textarea>
          </div>
          <button className="self-start bg-[#4B6BFB] rounded-md py-[10px] px-[16px] text-white">
            Send message
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Page;