import React from "react";
import { Trash2, Check } from "lucide-react";
import { useTodo } from "./context/todoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <div
      className={`flex items-center gap-3 p-4 bg-[#1d1c1c00] rounded-lg shadow-sm border border-gray-700 transition-all duration-200 ${
        todo.completed ? "opacity-60 bg-gray-600" : "hover:shadow-md"
      }`}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
          todo.completed
            ? "bg-green-500 border-green-500 text-white"
            : "border-gray-300"
        }`}
      >
        {todo.completed && <Check className="w-4 h-4" />}
      </button>

      <div className="flex-1 min-w-0">
        <p
          className={`text-gray-300 transition-all ${
            todo.completed ? "line-through text-white" : ""
          }`}
        >
          {todo.text}
        </p>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="flex-shrink-0 p-2 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
      >
        <Trash2 className="w-4 h-4 cursor-pointer" />
      </button>
    </div>
  );
};

export default TodoItem;
