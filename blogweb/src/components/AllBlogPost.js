import { Card } from "./Card";
import { useState, useEffect } from "react";

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
  return (
    <div className="w-[390px] m-auto xl:w-[1024px]">
      <div className="h-fit border border-orange-400 px-[16px] pt-[64px]">
        <div className="text-[24px] pb-[32px]">All Blog Post</div>
        <div className="flex justify-between pb-[32px]">
          <div className="flex gap-5">
            {categories.map((item) => (
              <button
                key={item}
                className="px-2 py-1 bg-gray-200 dark:bg-slate-800 rounded-md"
                style={{
                  color: category === item ? "#4B6BFB" : "",
                }}
                onClick={() => handleCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="self-center text-[12px] hidden xl:block">
            View all
          </button>
        </div>
        <div className="flex flex-col gap-[20px] xl:grid xl:grid-cols-3">
          {blogs.map((item, index) => {
            return (
              <>
                <Card
                  key={item.title}
                  cover={item.cover_image}
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
        className="w-[200px] py-2 bg-[#4B6BFB] text-white rounded-md block m-auto"
        onClick={handleLoadMore}
      >
        {loading ? <p>Loading...</p> : <p>Load More</p>}
      </button>
    </div>
  );
};
