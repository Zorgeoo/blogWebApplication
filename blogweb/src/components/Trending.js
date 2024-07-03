import { Card } from "./Card";
import { TrendingCard } from "./TrendingCard";
export const Trending = ({ articles }) => {
  return (
    <div>
      <div className="h-fit border py-[64px] px-[16px]">
        <div className="text-[24px] pb-[30px]">Trending</div>
        <div className="flex overflow-x-scroll gap-[20px]">
          <div className="w-fit flex gap-[20px]">
            {articles.slice(0, 8).map((item, index) => {
              return (
                <>
                  <TrendingCard
                    img={item.cover_image}
                    desc={item.title}
                    title={item.tag_list}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
