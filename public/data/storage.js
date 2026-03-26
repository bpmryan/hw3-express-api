// In memory storage (resets when server restarts)
export const tasks = [
  { id: 1, title: "Learn Node.js", completed: false, categoryId: 1 },
  { id: 2, title: "Build HTTP Server", completed: true, categoryId: 1 },
  { id: 3, title: "Learn Express", completed: false, categoryId: 1 },
];

export const categories = [
  { id: 1, name: "Learning" },
  { id: 2, name: "Work" },
  { id: 3, name: "Personal" },
];

// Helper to generate IDs
export const getNextId = (array) => {
  if (array.length === 0) return 1;
  return Math.max(...array.map((item) => item.id)) + 1;
};
