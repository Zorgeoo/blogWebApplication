import { Logo } from "@/assets/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./Button";
import { Left } from "@/assets/Left";
import { Right } from "@/assets/Right";
import { Mag } from "@/assets/Mag";
import { CarouselCard } from "./CarouselCard";
import { useState } from "react";

export const LandingPage = ({ articles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === 3 ? 3 : prev + 1));

  const preSlide = () => setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));

  return (
    <div>
      <div className="m-auto h-fit border">
        <header className="flex justify-between items-center p-[20px]">
          <Logo />
          <div className="hidden xl:block">
            <div className="flex gap-10">
              <div>Home</div>
              <div>Blog</div>
              <div>Contact</div>
            </div>
          </div>
          <div className="hidden xl:block">
            <div className="flex items-center rounded-[5px] overflow-hidden">
              <input
                type="text"
                placeholder="search"
                className="bg-[#f4f4f5] w-21"
              ></input>
              <div className="bg-[#f4f4f5] p-1 ">
                <Mag />
              </div>
            </div>
          </div>
          <RxHamburgerMenu className="xl:hidden" />
        </header>
        <div className="border border-green-700">
          <div className="w-full overflow-hidden">
            <div
              className={`border border-red-600 flex w-fit gap-5 m-auto 
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
        <div className="flex justify-center gap-[9px] xl:justify-end xl:px-12">
          <button>
            <Left onClick={preSlide} />
          </button>
          <button onClick={nextSlide}>
            <Right />
          </button>
        </div>
      </div>
    </div>
  );
};
