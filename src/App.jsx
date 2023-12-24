import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import { KanbanProvider } from "./context/KanbanContext";
function App() {
  return (
    <KanbanProvider>
      <KanbanBoard />
    </KanbanProvider>
  );
}

export default App;
