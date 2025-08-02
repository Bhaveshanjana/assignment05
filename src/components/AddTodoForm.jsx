import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useTodo } from "./context/todoContext";

const AddTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-0 focus:border-transparent placeholder:text-gray-300 text-gray-300"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-[#1b1818fb] border border-gray-600 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-0 transition-colors duration-300 flex items-center gap-2 cursor-pointer "
        >
          <Plus className="w-5 h-5" />
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
