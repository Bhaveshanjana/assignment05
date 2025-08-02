import React from 'react';
import TodoItem from './TodoItem';
import { useTodo } from './context/todoContext';

const TodoList = () => {
  const { todos } = useTodo();
  
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📝</div>
        <p className="text-gray-500 text-lg">No todos yet!</p>
        <p className="text-gray-400">Add a todo above to get started.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-3">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;