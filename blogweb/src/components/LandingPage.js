import { Logo } from "@/assets/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./Button";

export const LandingPage = () => {
  return (
    <div>
      <div className="m-auto h-fit border">
        <header className="flex justify-between items-center p-[20px]">
          <Logo />
          <RxHamburgerMenu />
        </header>
        <container className="py-[24px] px-[40px]">
          <div className="relative border w-[90%] border-blue-600 rounded-[12px] h-[600px] overflow-hidden  m-auto">
            <img
              className="absolute object-cover h-full w-full"
              src="LandingPageLady.png"
            />
            <div className="absolute flex flex-col bg-white rounded-[12px] bottom-[2.5%] left-[2.5%] p-[40px] w-[95%] gap-[24px] ">
              <div>
                <Button
                  value="Technology"
                  bg="bg-[#f7f8ff]"
                  color="text-[#4B6BFB]"
                />
                <div className="text-[36px]">
                  Grid system for better Design User Interface
                </div>
              </div>
              <div>August 20, 2022</div>
            </div>
          </div>
        </container>
      </div>
    </div>
  );
};
