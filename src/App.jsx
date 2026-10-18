import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import { useTaskStore } from "./store/useTaskStore";

export default function App() {
  const [text, setText] = useState("");
  const addTask = useTaskStore((s) => s.addTask);

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="add-row">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New task..." />
          <button onClick={handleAdd}>Add</button>
        </div>
        <TaskList />
      </main>
    </>
  );
}