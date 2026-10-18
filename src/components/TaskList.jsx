import { useEffect } from "react";
import { useTaskStore } from "../store/useTaskStore";
import TaskItem from "./TaskItem";
import TaskSkeleton from "./TaskSkeleton";

export default function TaskList() {
  const tasks = useTaskStore((s) => s.tasks);
  const loading = useTaskStore((s) => s.loading);
  const error = useTaskStore((s) => s.error);
  const fetchTasks = useTaskStore((s) => s.fetchTasks);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (loading) return <TaskSkeleton />;

  if (error)
    return (
      <div className="state-box">
        <p>Something went wrong: {error}</p>
        <button onClick={fetchTasks}>Try again</button>
      </div>
    );

  if (tasks.length === 0)
    return (
      <div className="state-box">
        <div style={{ fontSize: 48 }}>📭</div>
        <h3>No tasks yet</h3>
        <p>Add your first task to get started.</p>
      </div>
    );

  return (
    <ul>
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </ul>
  );
}