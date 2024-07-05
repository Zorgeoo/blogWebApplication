import { Card } from "./Card";

export const AllBlogPost = ({ articles }) => {
  return (
    <div>
      <div className="h-fit border border-orange-400 px-[16px] pt-[64px]">
        <div className="text-[24px] pb-[32px]">All Blog Post</div>
        <div className="flex justify-between pb-[32px]">
          <div className="flex text-[12px] gap-[20px]">
            <button>All</button>
            <button>Design</button>
            <button>Travel</button>
            <button>Fashion</button>
            <button>Technology</button>
            <button>Branding</button>
          </div>
          <button className="self-center text-[12px] hidden xl:block">
            View all
          </button>
        </div>
        <div className="flex flex-col gap-[20px] xl:grid xl:grid-cols-3">
          {articles.map((item, index) => {
            return (
              <>
                <Card
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
      <button className=" block border py-3 px-5 rounded-md m-auto w-fit mt-24">
        Load More
      </button>
    </div>
  );
};
