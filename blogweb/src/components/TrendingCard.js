import { Button } from "./Button";

export const TrendingCard = ({ img, desc, title }) => {
  return (
    <div className="h-[240px] w-[326px] relative rounded-[12px] overflow-hidden self-center">
      <img className="h-[240px] w-full absolute" src={img} />
      <div>
        <div className="w-fit absolute left-0 bottom-20">
          <Button value={title} bg="bg-[#f7f8ff]" color="text-[#4B6BFB]" />
        </div>
        <div className="text-[18px] w-[90%] m-auto absolute bottom-0 left-0 text-white">
          {desc}
        </div>
      </div>
    </div>
  );
};
