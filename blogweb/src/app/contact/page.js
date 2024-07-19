"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/assets/Logo";
import Link from "next/link";
import { Mag } from "@/assets/Mag";
import { RxHamburgerMenu } from "react-icons/rx";
import { Footer } from "@/components/Footer";
import { format } from "date-fns";
import styles from "@/components/Landingpage.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Page = () => {
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
    console.log("HI");
  };
  return (
    <div>
      <header className="flex justify-between items-center p-[20px] pb-[100px] overflow-hidden w-[390px] m-auto xl:w-[1024px]">
        <button>
          <Logo />
        </button>
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
              placeholder="Search"
              className="bg-[#f4f4f5] xl:w-40 px-2 py-2"
            ></input>
            <div className="bg-[#f4f4f5] py-3 px-2 ">
              <Mag />
            </div>
          </div>
        </div>
        <div onClick={handleDrawer} className="xl:hidden">
          <RxHamburgerMenu className="xl:hidden z-30" />
          <div
            className={`hidden h-screen absolute w-[250px] left-[100%] ease-in-out duration-500 transition top-0 z-20 bg-[#f6f6f6] ${
              drawer ? styles.open : ""
            }`}
          >
            <div className="flex">
              <div className="flex py-5 items-center justify-between w-full px-4 relative">
                <Logo />
                <button
                  onClick={handleDrawer}
                  className="p-4 mr-3 absolute right-1 top-1"
                >
                  X
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-10 pl-5">
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
            <div>
              <div className="flex gap-[26.67px] text-[16px] w-fit pt-8 m-auto">
                <Link href="https://facebook.com">
                  <FaFacebook />
                </Link>
                <Link href="https://twitter.com">
                  <FaTwitter />
                </Link>
                <Link href="https://instagram.com">
                  <FaInstagram />
                </Link>
                <Link href="https://linkedin.com">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
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
