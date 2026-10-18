import { useTaskStore } from "../store/useTaskStore";

export default function Navbar() {
  const pending = useTaskStore((s) => s.tasks.filter((t) => !t.completed).length);
  return <nav className="navbar">My Tasks | Pending: {pending}</nav>;
}