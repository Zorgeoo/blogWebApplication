import { Logo } from "@/assets/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./Button";

export const LandingPage = () => {
  return (
    <div>
      <div className="border border-red-400 m-auto h-[651px]">
        <header className="flex justify-between items-center p-[20px]">
          <Logo />
          <RxHamburgerMenu />
        </header>
        <container>
          <div className="relative border border-blue-600">
            <img className="absolute object-cover h-[600px]" />
            <div className="absolute flex flex-col">
              <Button value="Technology" />
              <div>Grid system for better Design User Interface</div>
              <div>August 20, 2022</div>
            </div>
          </div>
        </container>
      </div>
    </div>
  );
};
