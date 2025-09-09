import { Todo } from "@/types/todo";

interface TodoStatsProps {
  todos: Todo[];
}

export const TodoStats = ({ todos }: TodoStatsProps) => {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const remaining = total - completed;

  return (
    <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
      <span>Total: {total}</span>
      <span>Completed: {completed}</span>
      <span>Remaining: {remaining}</span>
    </div>
  );
};