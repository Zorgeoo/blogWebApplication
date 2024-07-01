import { AllBlogPost } from "@/components/AllBlogPost";
import { Footer } from "@/components/Footer";
import { LandingPage } from "@/components/LandingPage";
import { Trending } from "@/components/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-[390px] m-auto">
        <LandingPage />
        <Trending />
        <AllBlogPost />
        <Footer />
      </div>
    </div>
  );
}
