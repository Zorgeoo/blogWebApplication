"use client";

import { Card } from "@/components/Card";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Logo } from "@/assets/Logo";
import { Mag } from "@/assets/Mag";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "@/components/Landingpage.module.css";
const categories = [
  "All",
  "React",
  "JavaScript",
  "Python",
  "Web Development",
  "Node.js",
];
export const AllBlogPost = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const [category, setCategory] = useState("All");
  const [perPage, setPerPage] = useState(9);

  const handleCategory = (category) => {
    setCategory(category);
    setPerPage(9);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dev.to/api/articles?page=1&per_page=${perPage}${
            category !== "All" ? `&tag=${category}` : ""
          }`
        );

        const data = await res.json();

        setBlogs(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category, perPage]);
  const image =
    "https://images.hindustantimes.com/img/2024/07/14/550x309/Former-US-President-Donald-Trump-being-assisted-by_1720930825487.jpg";
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
    console.log("HI");
  };
  return (
    <div>
      <header className="flex justify-between items-center p-[20px] pb-[100px] w-[390px] m-auto xl:w-[1024px]">
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
            className={`xl:hidden  h-screen absolute w-[250px] left-[100%] ease-in-out duration-500 transition top-0 z-20 bg-[#f6f6f6] ${
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
      <div className="w-[390px] m-auto xl:w-[1024px]">
        <div className="h-fit  px-[16px] pt-[64px]">
          <div className="text-[24px] pb-[32px] font-bold">All Blog Post</div>
          {/* <div className="flex justify-between pb-[32px]">
            <div className="flex gap-5">
              {categories.map((item) => (
                <button
                  key={item}
                  className=" dark:bg-slate-800 rounded-md text-xs"
                  style={{
                    color: category === item ? "#4B6BFB" : "",
                  }}
                  onClick={() => handleCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div> */}
          <div className="flex flex-col gap-[20px] xl:grid xl:grid-cols-3">
            {blogs.map((item, index) => {
              return (
                <>
                  <Link key={item.id} href={`/blogs/${item.id}`}>
                    <Card
                      cover={item.cover_image ?? image}
                      tag={item.tag_list}
                      desc={item.title}
                      date={item.published_at}
                      name={item.user.name}
                      profile={item.user.profile_image}
                    />
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        <button
          className="w-[200px] py-2 bg-[#4B6BFB] text-white rounded-md block m-auto mt-8 mb-20"
          onClick={handleLoadMore}
        >
          {loading ? <p>Loading...</p> : <p>Load More</p>}
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default AllBlogPost;
