import React, { useContext } from "react";
import { KanbanContext } from "../../context/KanbanContext";
import { prioritydata, statusdata } from "../../data";
const DialogBox = () => {
  const { setGroupBy, setOrderBy, groupBy, orderBy } =
    useContext(KanbanContext);

  const handlegroup = (e) => {
    setGroupBy(e.target.value);
  };

  const handleOrder = (e) => {
    setOrderBy(e.target.value);
  };

  console.log(orderBy, groupBy);
  return (
    <div className="absolute z-10 mx-5 py-4 px-6 bg-white shadow-sm shadow-white rounded-md  flex flex-col gap-3 w-80 dark:bg-[#1a1d22] border dark:shadow-[0_0_4px_rgb(200,200,200,0.5)] dark:border-zinc-600">
      <div className="flex items-center justify-between">
        <span className="text-zinc-500">Grouping</span>
        <select
          onChange={handlegroup}
          id="selectedGroup"
          value={groupBy}
          name="grouping"
          className="py-1 px-2 md:w-32 border border-zinc-200 rounded-md text-zinc-700 outline-none dark:bg-inherit dark:text-zinc-100 dark:border-zinc-500"
        >
          <option value="status" className="dark:bg-[#1a1d22]">
            Status
          </option>
          <option value="priority" className="dark:bg-[#1a1d22]">
            Priority
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-zinc-500">Ordering</span>
        <select
          onChange={handleOrder}
          id="orderBy"
          value={orderBy}
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
