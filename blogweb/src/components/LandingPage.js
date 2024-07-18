import { Logo } from "@/assets/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./Button";
import { Left } from "@/assets/Left";
import { Right } from "@/assets/Right";
import { Mag } from "@/assets/Mag";
import { CarouselCard } from "./CarouselCard";
import { useState } from "react";
import Link from "next/link";
import styles from "./Landingpage.module.css";
import { OnlyLogo } from "@/assets/OnlyLogo";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const LandingPage = ({ articles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((next) => (next === 3 ? 0 : next + 1));

  const preSlide = () => setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));

  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
    console.log("HI");
  };

  return (
    <div className="w-[390px] m-auto xl:w-[1024px] overflow-hidden">
      <div className="m-auto h-fit">
        <header className="flex justify-between items-center p-[20px] pb-[100px] overflow-hidden">
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
              className={`xl:hidden  h-screen absolute w-[250px] left-[100%] ease-in-out duration-500 transition top-0 z-20 bg-[#f6f6f6] ${
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
        <div className="">
          <div className="w-full overflow-hidden rounded-xl">
            <div
              className={`flex w-fit m-auto 
              }`}
              style={{ transform: `translateX(${-currentSlide * 25}%)` }}
            >
              {articles.slice(0, 4).map((item, index) => {
                return (
                  <Link key={item.id} href={`/blogs/${item.id}`}>
                    <CarouselCard
                      title={item.title}
                      src={item.cover_image}
                      date={item.published_at}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[9px] xl:justify-end pt-3">
          <button onClick={preSlide}>
            <Left />
          </button>
          <button onClick={nextSlide}>
            <Right />
          </button>
        </div>
      </div>
    </div>
  );
};
