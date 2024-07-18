"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/assets/Logo";
import Link from "next/link";
import { Mag } from "@/assets/Mag";
import { RxHamburgerMenu } from "react-icons/rx";
import { Footer } from "@/components/Footer";
import { format } from "date-fns";
import styles from "@/components/Landingpage.module.css";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://dev.to/api/articles/${id}`);
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);

  const now = data?.published_at;
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
    console.log("HI");
  };
  return (
    <div>
      <div className="w-[390px] m-auto xl:w-[1024px]">
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
          <div onClick={handleDrawer} className="xl:hidden">
            <RxHamburgerMenu className="xl:hidden z-30" />
            <div
              className={`xl:hidden  h-screen absolute npw-[250px]  left-[100%] ease-in-out duration-500 transition top-0 z-20 bg-[#f6f6f6] ${
                drawer ? styles.open : ""
              }`}
            >
              <div className="flex justify-end">
                <button onClick={handleDrawer} className="p-4 mr-3">
                  X
                </button>
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
            </div>
          </div>
        </header>
        <div className="py-28 xl:w-[850px] m-auto">
          <h1 className="text-4xl font-semibold">{data?.title}</h1>
          <div className="flex pt-6 pb-8 gap-6">
            <div className="flex gap-2">
              <div className="h-7 w-7 rounded-[28px] overflow-hidden">
                <img src={data?.user.profile_image} />
              </div>
              <div>{data?.user.name}</div>
            </div>
            {now && <div>{format(now, "MMMM dd, yyyy")}</div>}
          </div>
          <img className="rounded-xl w-full pb-8" src={data?.cover_image} />
          <div>
            <p>
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you dont plan and prepare adequately.
              In this blog article, we will explore tips and tricks for a
              memorable journey and how to make the most of your travels. One of
              the most rewarding aspects of traveling is immersing yourself in
              the local culture and customs. This includes trying local cuisine,
              attending cultural events and festivals, and interacting with
              locals. Learning a few phrases in the local language can also go a
              long way in making connections and showing respect.
            </p>
            <br></br>
            <h2 className="text-2xl font-semibold">
              Research Your Destination
            </h2>
            <br></br>
            <p>
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
            <br></br>
            <h2 className="text-2xl font-semibold">Plan Your Itinerary</h2>
            <br></br>
            <p>
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
            <div
              className="mt-[32px] text-[#3B3C4A] text-[18px] flex flex-col items-start gap-6 [&>p]:text-[20px] [&>h3]:font-semibold [&>img]:self-center"
              dangerouslySetInnerHTML={{ __html: data?.body_html }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Page;
