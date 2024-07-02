import { Button } from "./Button";
import { format } from "date-fns";

export const Card = ({ cover, tag, desc, date }) => {
  const now = date;
  const formattedDate = format(now, "MMMM dd,yyyy");
  return (
    <div className="p-[16px] border rounded-[12px] flex flex-col gap-[16px] w-full">
      <div className="self-center h-[240px] w-[326px] rounded-[12px] overflow-hidden">
        <img className="w-full h-full" src={cover} />
      </div>
      <div className="px-[15px] flex flex-col gap-[20px]">
        <Button tag={tag} bg="bg-[#f7f8ff]" color="text-[#4B6BFB]" />
        <div className="text-[24px] font-semibold">{desc}</div>
        <div className="text-[16px] text-[#97989F]">{formattedDate}</div>
      </div>
    </div>
  );
};
