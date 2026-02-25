import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/todo/todoSlice";

function AddTask() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask("")
  };

  return (
    <div className="w-full mx-auto max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex mt-20 items-center shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="">

          <input
            id="username"
            type="text"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>


        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
        >
          ADD Task
        </button>


      </form>


    </div>
  );
}

export default AddTask