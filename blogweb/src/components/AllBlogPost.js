import { Card } from "./Card";
import { useState, useEffect } from "react";
import Link from "next/link";

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
  return (
    <div className="w-[390px] m-auto xl:w-[1024px]">
      <div className="h-fit px-[16px] pt-[64px]">
        <div className="text-[24px] pb-[32px] font-bold">All Blog Post</div>
        <div className="flex justify-between pb-[32px]">
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
          <Link href={"/blogs"}>
            <div className="hidden xl:block">
              <button className="self-center text-xs hidden xl:block hover:scale-125 duration-500">
                View all
              </button>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-[20px] xl:grid xl:grid-cols-3">
          {blogs.map((item, index) => {
            return (
              <>
                <Card
                  key={item.title}
                  cover={item.cover_image ?? image}
                  tag={item.tag_list}
                  desc={item.title}
                  date={item.published_at}
                />
              </>
            );
          })}
        </div>
      </div>
      <button
        className="w-[200px] py-2 border text-[#696A75] rounded-md block m-auto mt-8 mb-20"
        onClick={handleLoadMore}
      >
        {loading ? <p>Loading...</p> : <p>Load More</p>}
      </button>
    </div>
  );
};
