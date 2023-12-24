import CardContainer from "../CardContainer";
import { useContext } from "react";
import { KanbanContext } from "../../context/KanbanContext";
const Board = () => {
  const {group} = useContext(KanbanContext)
  return (
    <div className="py-3 px-5 w-full h-screen bg-[#f4f5f8] dark:bg-[#010409] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {group.map((containerData) => (
        <CardContainer key={containerData.id} containerData={containerData} />
      ))}
    </div>
  );
};

export default Board;
