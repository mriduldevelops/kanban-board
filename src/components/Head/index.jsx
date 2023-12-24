import React, { useContext, useMemo } from "react";
import addIcon from "../../assets/asset 4.svg";
import threeDots from "../../assets/asset 5.svg";
import { KanbanContext } from "../../context/KanbanContext";
import { prioritydata } from "../../data";

const Head = ({ status, noOfTasks, priority }) => {
  const { statusIcon, priorityIcon, group } = useContext(KanbanContext);

  const iconForStatus = useMemo(() => {
    return group === prioritydata ? priorityIcon[priority] : statusIcon[status];
  }, [group, status, priority, priorityIcon, statusIcon]);

  return (
    <div className="px-2 py-3 flex justify-between">
      <div className="flex justify-center items-center gap-2 text-zinc-400">
        <div>
          <img src={iconForStatus} alt="" />
        </div>
        <span className="font-semibold text-[16px] text-zinc-800 dark:text-zinc-100">
          {status}
        </span>
        <span>{noOfTasks}</span>
      </div>
      <div className="flex gap-2">
        <img src={addIcon} alt="" />
        <img src={threeDots} alt="" />
      </div>
    </div>
  );
};

export default Head;
