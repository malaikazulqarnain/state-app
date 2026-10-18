import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  loading: false,
  error: null,

  fetchTasks: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=8");
      if (!res.ok) throw new Error("Failed to load");
      set({ tasks: await res.json(), loading: false });
    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  addTask: (title) =>
    set((s) => ({ tasks: [{ id: Date.now(), title, completed: false }, ...s.tasks] })),

  toggleTask: (id) =>
    set((s) => ({
      tasks: s.tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    })),

  removeTask: (id) =>
    set((s) => ({ tasks: s.tasks.filter((t) => t.id !== id) })),
}));