import { Logo } from "@/assets/Logo";
import { OnlyLogo } from "@/assets/OnlyLogo";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="bg-[#f6f6f7]">
      <div className="px-[16px] py-[64px] w-[390px] m-auto xl:w-[1024px]">
        <div className="flex flex-col gap-[150px] py-[32px] xl:flex-row xl:justify-start">
          <div className="xl:w-1/4 flex flex-col gap-5">
            <div className="pb-[20px] ">About</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div>
              <div>Email : info@jstemplate.net</div>
              <div>Phone : 880 123 456 789</div>
            </div>
          </div>
          <div>
            <div className="flex gap-[24px]">
              <div>Home</div>
              <div>Blog</div>
              <div>Contact</div>
            </div>
          </div>
          <div className="flex gap-[26.67px] text-[16px]">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="py-[32px] border-t xl:flex xl:justify-between">
          <div className="flex gap-[10px]">
            <OnlyLogo />
            <div>
              <div className="flex">
                <div>Meta</div>
                <div className="font-extrabold">Blog</div>
              </div>
              <div>© All Rights Reserved.</div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] pt-[64px] xl:pt-0 xl:flex-row">
            <div>Terms of use </div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
