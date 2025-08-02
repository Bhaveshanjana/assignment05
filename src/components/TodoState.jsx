import React from "react";
import { X } from "lucide-react";
import { useTodo } from "./context/todoContext";

const TodoStats = () => {
  const { todos, clearCompleted } = useTodo();

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  if (totalTodos === 0) return null;

  return (
    <div className="mt-6 p-4 bg-[#1b1818fb] border border-gray-600 rounded-lg">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-6 text-sm">
          <span className="text-gray-600">
            Total:{" "}
            <span className="font-semibold text-gray-400">{totalTodos}</span>
          </span>
          <span className="text-gray-600">
            Pending:{" "}
            <span className="font-semibold text-blue-600">{pendingTodos}</span>
          </span>
          <span className="text-gray-600">
            Completed:{" "}
            <span className="font-semibold text-green-600">
              {completedTodos}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;
