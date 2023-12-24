import React, { useContext } from "react";
import tagIcon from "../../assets/asset 7.svg";
import { KanbanContext } from "../../context/KanbanContext";
const Card = ({ cardData: { id, title, tag, status, userId, priority } }) => {
  const { group, prioritydata, statusdata, statusIcon, users, priorityIcon } =
    useContext(KanbanContext);
 
  const foundUser = users.find((user) => user.id === userId);

  // getting first letter of user names
  let initials = "";
  if (foundUser && foundUser.name) {
    const nameWords = foundUser.name.split(" ");
    initials = nameWords.map((word) => word.charAt(0)).join("");
  }
  // generating random background colors
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return (
    <div className="my-3 py-4 px-5 w-full bg-white shadow-[0_0_5px_rgb(0,0,0,0.2)] rounded-md dark:bg-[#1a1d22ad] dark:shadow-[0_0_4px_rgb(200,200,200,0.5)] border dark:border-zinc-600">
      <div className="flex justify-between items-center">
        <span className="text-zinc-400">{id}</span>
        <div className="relative w-[15px] h-[15px] flex justify-center rounded-full items-baseline text-center" style={{backgroundColor: bgColor}}>
          <span className="m-[1px] text-white text-[9px] ">{initials}</span>
          <div className={`absolute top-[10px] left-[10px] w-[6px] h-[6px] rounded-full border border-white ${foundUser.available? 'bg-green-700':'bg-yellow-400'}`}></div>
        </div>
      </div>
      <div className="mt-2 mb-3 flex gap-1">
        {!(group === statusdata) && (
          <img className="mt-[1px] w-4 h-4" src={statusIcon[status]} alt="" />
        )}

        <p className="text-[16px] font-semibold text-zinc-700 leading-4 dark:text-zinc-100">
          {title}
        </p>
      </div>
      <div className="w-full flex items-center gap-2">
        {!(group === prioritydata) && (
          <div className="h-6 p-1 border border-zinc-200 flex items-center gap-1 rounded dark:border-zinc-500">
            <img src={priorityIcon[priority]} alt="" />
          </div>
        )}
        {tag.map((item, i) => (
          <div
            key={i}
            className="h-6 px-1 border border-zinc-200 flex items-center gap-1 rounded w-32 dark:border-zinc-500"
          >
            <div>
              <img className="w-[14px] h-[14px]" src={tagIcon} alt="" />
            </div>
            <span className="my-1 text-zinc-500 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
