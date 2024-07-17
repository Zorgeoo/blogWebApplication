import { format } from "date-fns";
export const CarouselCard = (props) => {
  const formattedDate = format(props.date, "MMMM dd,yyyy");
  return (
    <div className="relative w-[390px] xl:w-[1024px] h-[600px] overflow-hidden m-auto rounded-xl">
      <img className="absolute object-cover h-full w-full" src={props.src} />
      <div className="absolute flex flex-col bg-white rounded-[12px] bottom-[2.5%] left-[2.5%] p-[40px] w-[95%] gap-[24px] xl:w-1/2 ">
        <div>
          <button className="bg-[#4B6BFB] text-white py-[4px] px-[10px] w-fit rounded-[6px] mb-[16px]">
            Technology
          </button>
          <div className="text-[36px] font-semibold">{props.title}</div>
        </div>
        <div>{formattedDate}</div>
      </div>
    </div>
  );
};
