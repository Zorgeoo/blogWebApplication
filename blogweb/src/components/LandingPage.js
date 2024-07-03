import { Logo } from "@/assets/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./Button";
import { Left } from "@/assets/Left";
import { Right } from "@/assets/Right";
import { Mag } from "@/assets/Mag";
import { CarouselCard } from "./CarouselCard";

export const LandingPage = ({ articles }) => {
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
        <container className="py-[24px] px-[40px]">
          <div className="">
            <div className="border border-red-600">
              {articles.map((item, index) => {
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
        </container>
        <div className="flex justify-center gap-[9px] xl:justify-end xl:px-12">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
};
