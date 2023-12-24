import React, { useContext, useMemo } from "react";
import Head from "../Head";
import Card from "../Card";
import { KanbanContext } from "../../context/KanbanContext";
import { prioritydata } from "../../data";

const CardContainer = React.memo(({ containerData: { status, priority } }) => {
  const { tickets, group } = useContext(KanbanContext);

  const filteredTickets = useMemo(() => {
    if (group === prioritydata) {
      return tickets?.filter(ticketData => ticketData.priority === priority) || [];
    } else {
      return tickets?.filter(ticketData => ticketData.status === status) || [];
    }
  }, [tickets, priority, status, group]);

  const numberOfTasks = filteredTickets.length;

  return (
    <div>
      <Head priority={priority} status={status} noOfTasks={numberOfTasks} />
      {filteredTickets.map((ticketData) => (
        <Card key={ticketData.id} cardData={ticketData} />
      ))}
    </div>
  );
});

export default CardContainer;
