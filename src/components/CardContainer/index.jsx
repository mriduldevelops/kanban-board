import React, { useContext, useMemo, memo } from "react";
import Head from "../Head";
import Card from "../Card";
import { KanbanContext } from "../../context/KanbanContext";

const CardContainer = memo(({ containerData: { status, priority } }) => {
  const {
    tickets,
    group,
    orderBy,
    groupBy,
    setGroup,
    prioritydata,
    statusdata,
  } = useContext(KanbanContext);

  if (groupBy === "status") {
    setGroup(statusdata);
  } else if (groupBy === "priority") {
    setGroup(prioritydata);
  }

  const filteredTickets = useMemo(() => {
    if (group === prioritydata) {
      return (
        tickets?.filter((ticketData) => ticketData.priority === priority) || []
      );
    } else {
      return (
        tickets?.filter((ticketData) => ticketData.status === status) || []
      );
    }
  }, [tickets, priority, status, group]);

  const numberOfTasks = filteredTickets.length;

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    if (orderBy === "priority") {
      return b.priority - a.priority;
    } else if (orderBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <div>
      <Head priority={priority} status={status} noOfTasks={numberOfTasks} />
      {sortedTickets.map((ticketData) => (
        <Card key={ticketData.id} cardData={ticketData} />
      ))}
    </div>
  );
});

export default CardContainer;