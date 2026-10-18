import { useTaskStore } from "../store/useTaskStore";

export default function TaskItem({ task }) {
  const toggleTask = useTaskStore((s) => s.toggleTask);
  const removeTask = useTaskStore((s) => s.removeTask);

  return (
    <li className="task-item">
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
}