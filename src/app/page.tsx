"use client";

import { useState } from "react";

type Todo = {
  Task: string;
  id: number;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { Task: "React", id: 1 },
    { Task: "Next Js", id: 2 },
  ]);

  const [inputVal, setInput] = useState<string>("");
  const [id, setId] = useState<number>(0);

  const addItem = () => {
    const obj = todos.find((item) => item.id === id);

    if (obj) {
      const newArray = todos.filter((item) => item.id !== obj.id);
      setTodos([...newArray, { Task: inputVal, id: id }]);
      setInput("");
      setId(0);
      return;
    }

    setTodos([...todos, { Task: inputVal, id: id }]);
    setInput("");
    setId(0);
  };

  const editItem = (id: number) => {
    const obj = todos.find((item) => item.id === id);
    if (obj) {
      setInput(obj.Task);
      setId(obj.id);
    }
  };

  const delItem = (id: number) => {
    const newArray = todos.filter((item) => item.id !== id);
    setTodos([...newArray]);
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-[40px] underline italic text-blue-600">
        Todo App By Adil Raza
      </h1>

      {/* Input Section */}
      <div className="flex justify-between gap-4 mt-5">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInput(e.target.value)}
          className="w-[60%] p-2 ml-3 text-lg border-b focus:outline-none"
          placeholder="Add in your list"
        />
        <input
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          className="w-[20%] p-2 ml-3 text-lg border-b focus:outline-none"
          placeholder="Write id"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 w-[20%] text-white p-2 rounded-md hover:bg-blue-200"
        >
          Add Item
        </button>
      </div>

      {/* Task List Section */}
      <h1 className="text-center text-[40px] underline mt-6 italic text-blue-600">
        Task List
      </h1>

      <div className="grid grid-cols-2 gap-5 mt-5">
        {todos.map((item, i) => (
          <div className="shadow p-4" key={item.id}>
            <div className="flex justify-between text-lg">
              <span className="shadow rounded-full h-8 w-8 text-center my-auto">
                {i + 1}
              </span>
              <span
                onClick={() => delItem(item.id)}
                className="shadow rounded-full h-8 w-8 text-center my-auto cursor-pointer text-red-600"
              >
                X
              </span>
            </div>

            <div className="mt-5 text-[30px] text-gray-600">{item.Task}</div>
            <div>
              <h2
                onClick={() => editItem(item.id)}
                className="text-right cursor-pointer"
              >
                Edit
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
