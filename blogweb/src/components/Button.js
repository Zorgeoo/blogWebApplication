export const Button = (props) => {
  return (
    <div className="flex flex-wrap gap-[10px]">
      {props.tags &&
        props.tags.map((item) => (
          <div
            className={`py-[4px] px-[10px] ${props.bg} ${props.color} w-fit rounded-[6px]`}
          >
            {item}
          </div>
        ))}
    </div>
  );
};
