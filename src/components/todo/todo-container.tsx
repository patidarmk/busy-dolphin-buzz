import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TodoForm } from "@/components/todo/todo-form";
import { TodoList } from "@/components/todo/todo-list";
import { TodoStats } from "@/components/todo/todo-stats";
import { useTodos } from "@/hooks/use-todos";

export const TodoContainer = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } = useTodos();

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Todo List</h1>
      
      <TodoForm onAdd={addTodo} />
      
      <TodoStats todos={todos} />
      
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
      
      {completedCount > 0 && (
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            size="sm"
            onClick={clearCompleted}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Completed ({completedCount})
          </Button>
        </div>
      )}
    </div>
  );
};