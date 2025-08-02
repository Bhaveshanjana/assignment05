import "./App.css";
import AddTodoForm from './components/AddTodoForm';
import { TodoProvider } from "./components/context/todoContext";
import TodoList from './components/TodoList';
import TodoStats from './components/TodoState';

function App() {

  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-r from-[#343434] to-[#000000e2] py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-300 mb-2 ">
              Todo List
            </h1>
            <p className="text-gray-300">Stay organized and get things done!</p>
            <div className="mt-4 text-sm text-gray-400 bg-[#2f2828e3] border border-gray-600 rounded-lg p-3">
              ⚠️ Note: All data will be lost when you refresh the page
            </div>
          </div>

          <div className="bg-[#211b1bf7] rounded-xl shadow-black/30 shadow-xl p-6">
            <AddTodoForm />
            <TodoList />
            <TodoStats />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
