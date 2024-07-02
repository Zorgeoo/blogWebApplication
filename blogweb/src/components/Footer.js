import { Logo } from "@/assets/Logo";
import { OnlyLogo } from "@/assets/OnlyLogo";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="px-[16px] py-[64px] border border-green-300">
      <div className="flex flex-col gap-[20px] py-[32px]">
        <div>
          <div className="pb-[20px]">About</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
        <div>
          <div>Email : info@jstemplate.net</div>
          <div>Phone : 880 123 456 789</div>
        </div>
        <div className="flex gap-[24px]">
          <div>Home</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className="flex gap-[26.67px] text-[16px]">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="py-[32px] border-t">
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
        <div className="flex flex-col gap-[16px] pt-[64px]">
          <div>Terms of use </div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};
