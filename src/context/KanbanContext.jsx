import { createContext, useContext, useState, useEffect } from "react";
import { prioritydata, priorityIcon, statusdata, statusIcon } from "../data";
export const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState([]);
  const [group, setGroup] = useState(statusdata);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const {tickets, users} = data;
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <KanbanContext.Provider value={{ theme, toggleTheme,tickets, users, statusIcon, group, priorityIcon, setGroup, prioritydata, statusdata}}>
      {children}
    </KanbanContext.Provider>
  );
};

export default function useTheme() {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
