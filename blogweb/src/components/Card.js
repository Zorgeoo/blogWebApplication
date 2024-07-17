import { Button } from "./Button";
import { format } from "date-fns";

export const Card = ({ cover, tag, desc, date, name, profile }) => {
  const now = date;
  const formattedDate = format(now, "MMMM dd,yyyy");
  return (
    <div className="p-[16px] border rounded-[12px] flex flex-col gap-[16px] w-full justify-start">
      <div className="self-center h-[240px] w-[326px] xl:w-[300px] rounded-[12px] overflow-hidden">
        <img className="w-full h-full object-cover" src={cover} />
      </div>
      <div className="px-[15px] flex flex-col gap-[20px] justify-between">
        <div className="h-[68px] overflow-hidden">
          <Button tags={tag} bg="bg-[#f7f8ff]" color="text-[#4B6BFB]" />
        </div>
        <div className="text-[24px] font-semibold h-20 overflow-hidden">
          {desc}
        </div>
        <div className="flex text-xs justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              className="h-7 w-7 rounded-[28px] overflow-hidden"
              src={profile}
            ></img>
            <div>{name}</div>
          </div>
          <div className=" text-[#97989F]">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
};
