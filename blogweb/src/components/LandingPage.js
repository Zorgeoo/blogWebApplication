import { Logo } from "@/assets/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./Button";
import { Left } from "@/assets/Left";
import { Right } from "@/assets/Right";
import { Mag } from "@/assets/Mag";
import { CarouselCard } from "./CarouselCard";
import { useState } from "react";
import Link from "next/link";

export const LandingPage = ({ articles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((next) => (next === 3 ? 0 : next + 1));

  const preSlide = () => setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));

  return (
    <div className="w-[390px] m-auto xl:w-[1024px]">
      <div className="m-auto h-fit">
        <header className="flex justify-between items-center p-[20px] pb-[100px]">
          <Link href={"/404"}>
            <button>
              <Logo />
            </button>
          </Link>

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
          <RxHamburgerMenu className="xl:hidden" />
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
                  <CarouselCard
                    title={item.title}
                    src={item.cover_image}
                    date={item.published_at}
                  />
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
