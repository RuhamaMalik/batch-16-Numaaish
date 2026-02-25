import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../store/todo/todoSlice";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo);
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState(null);



  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="bg-neutral-secondary-soft border-b border-default">
          <tr>
            <th scope="col" className="px-6  text-blue-700 font-bold py-3 ">
              Task.id
            </th>
            <th scope="col" className="px-6 text-blue-700 font-bold py-3 ">
              Task
            </th>

            <th scope="col" className="px-6 py-3 font-medium">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo, index) => (
            <tr
              key={index}
              className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                {todo.id || "id"}
              </th>

              <td className="px-6 py-4">{

                isEdit && task.id === todo.id ?

                  <input
                    type="text"
                    value={task.data}
                    onChange={(e) => setTask({ ...task, data: e.target.value })}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateTask(task));
                        setIsEdit(false);
                      }
                    }}
                  />

                  : <p>{todo.data || "no-task"}</p>

              }</td>

              <td className="px-6 py-4">
                <button
                  onClick={() => { setIsEdit(true); setTask(todo) }}
                  className="font-medium text-fg-brand hover:underline"
                >
                  Edit
                </button>

                <button

                  className="ml-4 font-medium text-fg-brand hover:underline"
                  onClick={() => dispatch(deleteTask(todo.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo