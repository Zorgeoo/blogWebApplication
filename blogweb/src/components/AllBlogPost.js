import { Card } from "./Card";

export const AllBlogPost = ({ articles }) => {
  return (
    <div>
      <div className="h-fit border border-orange-400 px-[16px] pt-[64px]">
        <div className="text-[24px] pb-[32px]">All Blog Post</div>
        <div className="flex text-[12px] gap-[20px] pb-[32px]">
          <button>All</button>
          <button>Design</button>
          <button>Travel</button>
          <button>Fashion</button>
          <button>Technology</button>
          <button>Branding</button>
        </div>
        <div className="flex flex-col gap-[20px]">
          {articles.map((item, index) => {
            return (
              <>
                <Card
                  cover={item.cover_image}
                  tag={item.tags}
                  desc={item.title}
                  date={item.published_at}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
