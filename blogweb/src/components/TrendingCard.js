import { Button } from "./Button";

export const TrendingCard = ({ img, desc, title }) => {
  return (
    <div className="h-[240px] w-[326px] relative rounded-[12px] overflow-hidden self-center">
      <img className="h-[240px] w-full absolute object-cover" src={img} />
      <div className="absolute left-4 bottom-4 w-[90%] flex flex-col gap-[30px] h-1/2 justify-between">
        <div className="w-fit">
          <Button bg="bg-[#f7f8ff]" color="text-[#4B6BFB]" tags={title} />
        </div>
        <div className="text-[18px] m-auto  text-white">{desc}</div>
      </div>
    </div>
  );
};
