import React, { useContext } from "react";
import { KanbanContext } from "../../context/KanbanContext";

const DialogBox = () => {
  const { setGroup, prioritydata, statusdata } = useContext(KanbanContext);
  const handlegroup = (e) => {
    const selected = e.target.value;

    if (selected === "status") {
      setGroup(statusdata);
    } else if (selected === "priority") {
      setGroup(prioritydata);
    }
  };

  return (
    <div className="absolute z-10 mx-5 py-4 px-6 bg-white shadow-sm shadow-white rounded-md  flex flex-col gap-3 w-80 dark:bg-[#1a1d22] border dark:shadow-[0_0_4px_rgb(200,200,200,0.5)] dark:border-zinc-600">
      <div className="flex items-center justify-between">
        <span className="text-zinc-500">Grouping</span>
        <select
          onChange={handlegroup}
          name="grouping"
          className="py-1 px-2 md:w-32 border border-zinc-200 rounded-md text-zinc-700 outline-none dark:bg-inherit dark:text-zinc-100 dark:border-zinc-500"
        >
          <option value="status" className="dark:bg-[#1a1d22]">
            Status
          </option>
          <option value="priority" className="dark:bg-[#1a1d22]">
            Priority
          </option>
          <option value="user" className="dark:bg-[#1a1d22]">
            User
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-zinc-500">Ordering</span>
        <select
          name="ordering"
          className="py-1 px-2 md:w-32 border border-zinc-200 rounded-md text-zinc-700 outline-none dark:bg-inherit dark:text-zinc-100 dark:border-zinc-500"
        >
          <option value="priority" className="dark:bg-[#1a1d22]">
            Priority
          </option>
          <option value="title" className="dark:bg-[#1a1d22]">
            Title
          </option>
        </select>
      </div>
    </div>
  );
};

export default DialogBox;
