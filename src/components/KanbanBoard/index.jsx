import React from "react";
import Header from "../Header";
import Board from "../Board/Index";
import { useContext } from "react";
import { KanbanContext } from "../../context/KanbanContext";
const KanbanBoard = () => {
  const {data} = useContext(KanbanContext);
  return (
    <div>
      <Header />
      <Board />
    </div>
  );
};

export default KanbanBoard;
