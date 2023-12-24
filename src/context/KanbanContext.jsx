import { createContext, useState, useEffect, useMemo } from "react";
import { prioritydata, priorityIcon, statusdata, statusIcon } from "../data";

export const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState({ tickets: [], users: [] });
  const [group, setGroup] = useState(statusdata);
  const [orderBy, setOrderBy] = useState("priority");
  const [groupBy, setGroupBy] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error (e.g., set default data or display error message)
      }
    };

    fetchData();
  }, []);

  const contextValue = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light")),
    tickets: data.tickets,
    users: data.users,
    group,
    setGroup,
    statusIcon,
    priorityIcon,
    prioritydata,
    statusdata,
    orderBy,
    setOrderBy,
    groupBy,
    setGroupBy,
  }), [theme, data, group, orderBy, groupBy]);

  return (
    <KanbanContext.Provider value={contextValue}>
      {children}
    </KanbanContext.Provider>
  );
};

// Remove the unused function
