export const Button = (props) => {
  console.log(props.tag);
  return (
    <div>
      {/* {props.tag.map((item) => (
        <div
          className={`py-[4px] px-[10px] ${props.bg} ${props.color} w-fit rounded-[6px]`}
        >
          {item}
        </div>
      ))} */}
      {/* {props.tag.map((item) => (
        <p>{item}</p>
      ))} */}
    </div>
  );
};
